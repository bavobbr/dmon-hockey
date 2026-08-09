import { createFileRoute } from "@tanstack/react-router";
import FieldClosures from "@/pages/admin/FieldClosures";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { buildPrivateHead } from "@/lib/pageHead";

export const Route = createFileRoute("/admin/field-closures/")({
  head: () => buildPrivateHead("Beheer"),
  component: () => (
    <ProtectedRoute requireModerator>
      <FieldClosures />
    </ProtectedRoute>
  ),
});
