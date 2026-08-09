import { createFileRoute } from "@tanstack/react-router";
import BoardMemberForm from "@/pages/admin/BoardMemberForm";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { buildPrivateHead } from "@/lib/pageHead";

export const Route = createFileRoute("/admin/board-members/new")({
  head: () => buildPrivateHead("Beheer"),
  component: () => (
    <ProtectedRoute requireAdmin>
      <BoardMemberForm />
    </ProtectedRoute>
  ),
});
