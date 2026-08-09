import { createFileRoute } from "@tanstack/react-router";
import BoardMembers from "@/pages/admin/BoardMembers";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export const Route = createFileRoute("/admin/board-members/")({
  component: () => (
    <ProtectedRoute requireAdmin>
      <BoardMembers />
    </ProtectedRoute>
  ),
});
