import DOMPurify from 'dompurify';

const toEmbedSrc = (src: string): string => {
  try {
    const url = new URL(src, window.location.origin);
    const host = url.hostname.replace(/^www\./, '');

    // youtu.be/<id>
    if (host === 'youtu.be') {
      const id = url.pathname.slice(1);
      if (id) return `https://www.youtube-nocookie.com/embed/${id}`;
    }

    // youtube.com/watch?v=<id>
    if (host.endsWith('youtube.com') && url.pathname === '/watch') {
      const id = url.searchParams.get('v');
      if (id) return `https://www.youtube-nocookie.com/embed/${id}`;
    }

    // youtube.com/embed/<id>  -> nocookie variant
    if (host.endsWith('youtube.com') && url.pathname.startsWith('/embed/')) {
      return `https://www.youtube-nocookie.com${url.pathname}${url.search}`;
    }
  } catch {
    // ignore, return original
  }
  return src;
};

// Rewrite iframe src to privacy-enhanced YouTube domain to avoid the
// consent.youtube.com redirect that is blocked in some browsers.
DOMPurify.addHook('uponSanitizeAttribute', (node, data) => {
  if (data.attrName === 'src' && node.nodeName === 'IFRAME') {
    data.attrValue = toEmbedSrc(data.attrValue);
  }
});

// Allow safe YouTube/Vimeo embeds inserted via the rich text editor.
export const sanitizeRichHtml = (html: string): string =>
  DOMPurify.sanitize(html, {
    ADD_TAGS: ['iframe'],
    ADD_ATTR: [
      'allow',
      'allowfullscreen',
      'frameborder',
      'scrolling',
      'src',
      'width',
      'height',
      'title',
      'referrerpolicy',
    ],
  });
