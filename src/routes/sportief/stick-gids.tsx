import { createFileRoute } from "@tanstack/react-router";
import StickGuide from "@/pages/sportief/StickGuide";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/sportief/stick-gids")({
  head: () => buildPageHead("/sportief/stick-gids"),
  component: StickGuide,
});
