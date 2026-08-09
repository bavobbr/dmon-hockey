import { createFileRoute } from "@tanstack/react-router";
import AnnouncementForm from "@/pages/admin/AnnouncementForm";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export const Route = createFileRoute("/admin/announcements/new")({
  component: () => (
    <ProtectedRoute requireModerator>
      <AnnouncementForm />
    </ProtectedRoute>
  ),
});
