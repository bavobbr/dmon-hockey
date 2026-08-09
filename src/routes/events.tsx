import { createFileRoute } from "@tanstack/react-router";
import Events from "@/pages/Events";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/events")({
  head: () => buildPageHead("/events"),
  component: Events,
});
