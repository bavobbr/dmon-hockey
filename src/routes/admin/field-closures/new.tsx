import { createFileRoute } from "@tanstack/react-router";
import FieldClosureForm from "@/pages/admin/FieldClosureForm";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { buildPrivateHead } from "@/lib/pageHead";

export const Route = createFileRoute("/admin/field-closures/new")({
  head: () => buildPrivateHead("Beheer"),
  component: () => (
    <ProtectedRoute requireModerator>
      <FieldClosureForm />
    </ProtectedRoute>
  ),
});
