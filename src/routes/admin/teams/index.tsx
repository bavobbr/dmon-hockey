import { createFileRoute } from "@tanstack/react-router";
import Teams from "@/pages/admin/Teams";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export const Route = createFileRoute("/admin/teams/")({
  component: () => (
    <ProtectedRoute requireModerator>
      <Teams />
    </ProtectedRoute>
  ),
});
