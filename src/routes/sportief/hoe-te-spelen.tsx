import { createFileRoute } from "@tanstack/react-router";
import HowToPlay from "@/pages/sportief/HowToPlay";

export const Route = createFileRoute("/sportief/hoe-te-spelen")({
  component: HowToPlay,
});
