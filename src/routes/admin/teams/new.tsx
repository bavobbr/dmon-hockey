import { createFileRoute } from "@tanstack/react-router";
import TeamForm from "@/pages/admin/TeamForm";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { buildPrivateHead } from "@/lib/pageHead";

export const Route = createFileRoute("/admin/teams/new")({
  head: () => buildPrivateHead("Beheer"),
  component: () => (
    <ProtectedRoute requireModerator>
      <TeamForm />
    </ProtectedRoute>
  ),
});
