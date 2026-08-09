import { createFileRoute } from "@tanstack/react-router";
import Announcements from "@/pages/admin/Announcements";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { buildPrivateHead } from "@/lib/pageHead";

export const Route = createFileRoute("/admin/announcements/")({
  head: () => buildPrivateHead("Beheer"),
  component: () => (
    <ProtectedRoute requireModerator>
      <Announcements />
    </ProtectedRoute>
  ),
});
