import DOMPurify from 'dompurify';

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
