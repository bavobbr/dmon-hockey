import { createFileRoute } from "@tanstack/react-router";
import SponsorForm from "@/pages/admin/SponsorForm";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export const Route = createFileRoute("/admin/sponsors/new")({
  component: () => (
    <ProtectedRoute requireModerator>
      <SponsorForm />
    </ProtectedRoute>
  ),
});
