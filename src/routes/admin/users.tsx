import { createFileRoute } from "@tanstack/react-router";
import Users from "@/pages/admin/Users";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export const Route = createFileRoute("/admin/users")({
  component: () => (
    <ProtectedRoute requireAdmin>
      <Users />
    </ProtectedRoute>
  ),
});
