import { createFileRoute } from "@tanstack/react-router";
import FieldClosureForm from "@/pages/admin/FieldClosureForm";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export const Route = createFileRoute("/admin/field-closures/edit/$id")({
  component: () => (
    <ProtectedRoute requireModerator>
      <FieldClosureForm />
    </ProtectedRoute>
  ),
});
