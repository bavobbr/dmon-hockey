import { createFileRoute } from "@tanstack/react-router";
import BoardMembers from "@/pages/admin/BoardMembers";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { buildPrivateHead } from "@/lib/pageHead";

export const Route = createFileRoute("/admin/board-members/")({
  head: () => buildPrivateHead("Beheer"),
  component: () => (
    <ProtectedRoute requireAdmin>
      <BoardMembers />
    </ProtectedRoute>
  ),
});
