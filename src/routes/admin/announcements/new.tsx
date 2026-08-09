import { createFileRoute } from "@tanstack/react-router";
import AnnouncementForm from "@/pages/admin/AnnouncementForm";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { buildPrivateHead } from "@/lib/pageHead";

export const Route = createFileRoute("/admin/announcements/new")({
  head: () => buildPrivateHead("Beheer"),
  component: () => (
    <ProtectedRoute requireModerator>
      <AnnouncementForm />
    </ProtectedRoute>
  ),
});
