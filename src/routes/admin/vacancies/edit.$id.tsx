import { createFileRoute } from "@tanstack/react-router";
import VacancyForm from "@/pages/admin/VacancyForm";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export const Route = createFileRoute("/admin/vacancies/edit/$id")({
  component: () => (
    <ProtectedRoute requireModerator>
      <VacancyForm />
    </ProtectedRoute>
  ),
});
