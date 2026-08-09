import { createFileRoute } from "@tanstack/react-router";
import VacancyForm from "@/pages/admin/VacancyForm";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { buildPrivateHead } from "@/lib/pageHead";

export const Route = createFileRoute("/admin/vacancies/edit/$id")({
  head: () => buildPrivateHead("Beheer"),
  component: () => (
    <ProtectedRoute requireModerator>
      <VacancyForm />
    </ProtectedRoute>
  ),
});
