import { createFileRoute } from "@tanstack/react-router";
import Media from "@/pages/club/Media";

export const Route = createFileRoute("/club/media")({
  component: Media,
});
