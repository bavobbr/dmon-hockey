import { createFileRoute } from "@tanstack/react-router";
import Sponsors from "@/pages/admin/Sponsors";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { buildPrivateHead } from "@/lib/pageHead";

export const Route = createFileRoute("/admin/sponsors/")({
  head: () => buildPrivateHead("Beheer"),
  component: () => (
    <ProtectedRoute requireModerator>
      <Sponsors />
    </ProtectedRoute>
  ),
});
