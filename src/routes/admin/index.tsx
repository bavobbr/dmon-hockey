import { createFileRoute } from "@tanstack/react-router";
import Dashboard from "@/pages/admin/Dashboard";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export const Route = createFileRoute("/admin/")({
  component: () => (
    <ProtectedRoute requireModerator>
      <Dashboard />
    </ProtectedRoute>
  ),
});
