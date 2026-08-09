import { createFileRoute } from "@tanstack/react-router";
import Media from "@/pages/club/Media";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/club/media")({
  head: () => buildPageHead("/club/media"),
  component: Media,
});
