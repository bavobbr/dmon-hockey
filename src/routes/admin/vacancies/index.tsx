import { createFileRoute } from "@tanstack/react-router";
import Vacancies from "@/pages/admin/Vacancies";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { buildPrivateHead } from "@/lib/pageHead";

export const Route = createFileRoute("/admin/vacancies/")({
  head: () => buildPrivateHead("Beheer"),
  component: () => (
    <ProtectedRoute requireModerator>
      <Vacancies />
    </ProtectedRoute>
  ),
});
