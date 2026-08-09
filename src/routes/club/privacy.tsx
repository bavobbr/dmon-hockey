import { createFileRoute } from "@tanstack/react-router";
import Privacy from "@/pages/club/Privacy";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/club/privacy")({
  head: () => buildPageHead("/club/privacy"),
  component: Privacy,
});
