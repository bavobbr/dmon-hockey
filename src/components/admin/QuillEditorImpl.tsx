import { useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export interface QuillEditorProps {
  value: string;
  onChange: (value: string) => void;
  modules?: Record<string, unknown>;
  formats?: string[];
  placeholder?: string;
  className?: string;
  onEditorReady?: (quill: ReturnType<ReactQuill['getEditor']>) => void;
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
  const quillRef = useRef<ReactQuill>(null);

  useEffect(() => {
    if (!onEditorReady) return;
    let frame = 0;
    let attempts = 0;
    const tryAttach = () => {
      try {
        const editor = quillRef.current?.getEditor();
        if (editor) {
          onEditorReady(editor);
          return;
        }
      } catch {
        // editor not instantiated yet — retry on the next frame
      }
      if (attempts++ < 30) frame = requestAnimationFrame(tryAttach);
    };
    tryAttach();
    return () => cancelAnimationFrame(frame);
  }, [onEditorReady]);

  return (
    <ReactQuill
      ref={quillRef}
      value={value}
      onChange={onChange}
      modules={modules ?? {}}
      formats={formats ?? []}
      placeholder={placeholder ?? ''}
      theme="snow"
      className={className ?? ''}
    />
  );
};

export default QuillEditorImpl;
