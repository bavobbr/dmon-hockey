import { createFileRoute } from "@tanstack/react-router";
import Teams from "@/pages/admin/Teams";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { buildPrivateHead } from "@/lib/pageHead";

export const Route = createFileRoute("/admin/teams/")({
  head: () => buildPrivateHead("Beheer"),
  component: () => (
    <ProtectedRoute requireModerator>
      <Teams />
    </ProtectedRoute>
  ),
});
