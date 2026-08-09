import { createFileRoute } from "@tanstack/react-router";
import Privacy from "@/pages/club/Privacy";

export const Route = createFileRoute("/club/privacy")({
  component: Privacy,
});
