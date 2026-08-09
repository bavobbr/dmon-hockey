import { createFileRoute } from "@tanstack/react-router";
import BoardMemberForm from "@/pages/admin/BoardMemberForm";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export const Route = createFileRoute("/admin/board-members/edit/$id")({
  component: () => (
    <ProtectedRoute requireAdmin>
      <BoardMemberForm />
    </ProtectedRoute>
  ),
});
