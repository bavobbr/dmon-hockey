import { createFileRoute } from "@tanstack/react-router";
import Announcements from "@/pages/admin/Announcements";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export const Route = createFileRoute("/admin/announcements/")({
  component: () => (
    <ProtectedRoute requireModerator>
      <Announcements />
    </ProtectedRoute>
  ),
});
