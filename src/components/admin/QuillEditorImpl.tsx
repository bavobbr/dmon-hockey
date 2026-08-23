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
    const editor = quillRef.current?.getEditor();
    if (editor && onEditorReady) onEditorReady(editor);
  }, [onEditorReady]);

  return (
    <ReactQuill
      ref={quillRef}
      value={value}
      onChange={onChange}
      modules={modules}
      formats={formats}
      placeholder={placeholder}
      theme="snow"
      className={className}
    />
  );
};

export default QuillEditorImpl;
