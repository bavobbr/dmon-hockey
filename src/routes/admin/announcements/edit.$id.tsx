import { createFileRoute } from "@tanstack/react-router";
import AnnouncementForm from "@/pages/admin/AnnouncementForm";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export const Route = createFileRoute("/admin/announcements/edit/$id")({
  component: () => (
    <ProtectedRoute requireModerator>
      <AnnouncementForm />
    </ProtectedRoute>
  ),
});
