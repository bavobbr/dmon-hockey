export type NewsMedia =
  | { type: 'video'; thumbnail: string; videoId: string }
  | { type: 'image'; thumbnail: string };

const YT_ID_RE =
  /(?:youtube(?:-nocookie)?\.com\/(?:embed|shorts|watch)(?:\/|\?v=)|youtu\.be\/)([A-Za-z0-9_-]{6,})/i;

/**
 * Extract the primary media item from a rich-text HTML string.
 * Prefers embedded YouTube videos (returns thumbnail + id), then falls
 * back to the first <img> tag. Returns null when no media is present.
 */
export function extractMedia(html: string): NewsMedia | null {
  if (!html) return null;

  // Look for an iframe first (video embeds).
  const iframeSrc = html.match(/<iframe[^>]+src=["']([^"']+)["']/i)?.[1];
  if (iframeSrc) {
    const videoId = iframeSrc.match(YT_ID_RE)?.[1];
    if (videoId) {
      return {
        type: 'video',
        videoId,
        thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      };
    }
  }

  // Fallback: first inline image.
  const imgSrc = html.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1];
  if (imgSrc) {
    return { type: 'image', thumbnail: imgSrc };
  }

  return null;
}

/** Decode the handful of HTML entities that show up in stored rich text. */
function decodeEntities(input: string): string {
  return input
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_m, code) => String.fromCharCode(Number(code)));
}

/** Plain-text excerpt fallback with a friendly default for video-only posts. */
export function excerptFromContent(html: string, media: NewsMedia | null, max = 200): string {
  const text = decodeEntities((html || '').replace(/<[^>]*>/g, ''))
    .replace(/\s+/g, ' ')
    .trim();
  if (text) return text.length > max ? text.substring(0, max) + '…' : text;
  if (media?.type === 'video') return '🎬 Bekijk de video';
  return '';
}

