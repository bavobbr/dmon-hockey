import { lazy, Suspense } from 'react';
import { ClientOnly } from '@tanstack/react-router';
import type { QuillEditorProps } from './QuillEditorImpl';

const QuillEditorImpl = lazy(() => import('./QuillEditorImpl'));

const EditorSkeleton = () => (
  <div className="h-[300px] w-full animate-pulse rounded-md border bg-muted/40" />
);

export const RichTextEditor = (props: QuillEditorProps) => (
  <ClientOnly fallback={<EditorSkeleton />}>
    <Suspense fallback={<EditorSkeleton />}>
      <QuillEditorImpl {...props} />
    </Suspense>
  </ClientOnly>
);

export default RichTextEditor;
