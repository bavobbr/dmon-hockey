import { createFileRoute } from "@tanstack/react-router";
import CoachesInfo from "@/pages/sportief/CoachesInfo";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/sportief/coaches-info")({
  head: () => buildPageHead("/sportief/coaches-info"),
  component: CoachesInfo,
});
