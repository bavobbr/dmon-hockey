import { createFileRoute } from "@tanstack/react-router";
import Sponsors from "@/pages/admin/Sponsors";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export const Route = createFileRoute("/admin/sponsors/")({
  component: () => (
    <ProtectedRoute requireModerator>
      <Sponsors />
    </ProtectedRoute>
  ),
});
