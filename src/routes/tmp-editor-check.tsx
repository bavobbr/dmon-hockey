import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { RichTextEditor } from '@/components/admin/RichTextEditor';

export const Route = createFileRoute('/tmp-editor-check')({ component: () => {
  const [v, setV] = useState('<p>hallo</p>');
  return <div className="p-8"><RichTextEditor value={v} onChange={setV} modules={{ toolbar: [['bold','italic'],['link']] }} /></div>;
}});
