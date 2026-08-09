import { createFileRoute } from "@tanstack/react-router";
import StickGuide from "@/pages/sportief/StickGuide";

export const Route = createFileRoute("/sportief/stick-gids")({
  component: StickGuide,
});
