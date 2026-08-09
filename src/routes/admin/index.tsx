import { createFileRoute } from "@tanstack/react-router";
import Dashboard from "@/pages/admin/Dashboard";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { buildPrivateHead } from "@/lib/pageHead";

export const Route = createFileRoute("/admin/")({
  head: () => buildPrivateHead("Beheer"),
  component: () => (
    <ProtectedRoute requireModerator>
      <Dashboard />
    </ProtectedRoute>
  ),
});
