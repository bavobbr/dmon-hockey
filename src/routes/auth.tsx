import { createFileRoute } from "@tanstack/react-router";
import Auth from "@/pages/Auth";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/auth")({
  head: () => buildPageHead("/auth"),
  component: Auth,
});
