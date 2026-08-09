import { createFileRoute } from "@tanstack/react-router";
import SponsorForm from "@/pages/admin/SponsorForm";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { buildPrivateHead } from "@/lib/pageHead";

export const Route = createFileRoute("/admin/sponsors/edit/$id")({
  head: () => buildPrivateHead("Beheer"),
  component: () => (
    <ProtectedRoute requireModerator>
      <SponsorForm />
    </ProtectedRoute>
  ),
});
