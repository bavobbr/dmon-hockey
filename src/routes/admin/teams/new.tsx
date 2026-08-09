import { createFileRoute } from "@tanstack/react-router";
import TeamForm from "@/pages/admin/TeamForm";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export const Route = createFileRoute("/admin/teams/new")({
  component: () => (
    <ProtectedRoute requireModerator>
      <TeamForm />
    </ProtectedRoute>
  ),
});
