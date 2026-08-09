import { createFileRoute } from "@tanstack/react-router";
import Users from "@/pages/admin/Users";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { buildPrivateHead } from "@/lib/pageHead";

export const Route = createFileRoute("/admin/users")({
  head: () => buildPrivateHead("Beheer"),
  component: () => (
    <ProtectedRoute requireAdmin>
      <Users />
    </ProtectedRoute>
  ),
});
