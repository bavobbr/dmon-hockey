import { createFileRoute } from "@tanstack/react-router";
import HowToPlay from "@/pages/sportief/HowToPlay";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/sportief/hoe-te-spelen")({
  head: () => buildPageHead("/sportief/hoe-te-spelen"),
  component: HowToPlay,
});
