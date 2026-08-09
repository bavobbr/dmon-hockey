import { createFileRoute } from "@tanstack/react-router";
import Vacancies from "@/pages/admin/Vacancies";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export const Route = createFileRoute("/admin/vacancies/")({
  component: () => (
    <ProtectedRoute requireModerator>
      <Vacancies />
    </ProtectedRoute>
  ),
});
