import { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

export interface QuillEditorProps {
  value: string;
  onChange: (value: string) => void;
  modules?: Record<string, unknown>;
  formats?: string[];
  placeholder?: string;
  className?: string;
  onEditorReady?: (quill: Quill) => void;
}

const QuillEditorImpl = ({
  value,
  onChange,
  modules,
  formats,
  placeholder,
  className,
  onEditorReady,
}: QuillEditorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const editorEl = document.createElement('div');
    container.appendChild(editorEl);

    const quill = new Quill(editorEl, {
      theme: 'snow',
      placeholder: placeholder ?? '',
      modules: (modules ?? {}) as Record<string, unknown>,
      ...(formats && formats.length ? { formats } : {}),
    });
    quillRef.current = quill;

    if (value) {
      quill.clipboard.dangerouslyPasteHTML(value, 'silent');
    }

    quill.on('text-change', () => {
      const html = quill.root.innerHTML;
      onChangeRef.current(quill.getText().trim() ? html : '');
    });

    onEditorReady?.(quill);

    return () => {
      quillRef.current = null;
      container.innerHTML = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync external value changes (e.g. loading an existing record).
  useEffect(() => {
    const quill = quillRef.current;
    if (!quill) return;
    const current = quill.root.innerHTML;
    if ((value ?? '') !== current && (value ?? '') !== '' ) {
      if (quill.hasFocus()) return;
      quill.clipboard.dangerouslyPasteHTML(value ?? '', 'silent');
    }
  }, [value]);

  return <div ref={containerRef} className={className ?? ''} />;
};

export default QuillEditorImpl;
