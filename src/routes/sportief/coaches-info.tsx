import { createFileRoute } from "@tanstack/react-router";
import CoachesInfo from "@/pages/sportief/CoachesInfo";

export const Route = createFileRoute("/sportief/coaches-info")({
  component: CoachesInfo,
});
