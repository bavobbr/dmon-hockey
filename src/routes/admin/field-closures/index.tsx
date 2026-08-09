import { createFileRoute } from "@tanstack/react-router";
import FieldClosures from "@/pages/admin/FieldClosures";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export const Route = createFileRoute("/admin/field-closures/")({
  component: () => (
    <ProtectedRoute requireModerator>
      <FieldClosures />
    </ProtectedRoute>
  ),
});
