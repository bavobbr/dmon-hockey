import { createFileRoute } from "@tanstack/react-router";
import HockeyPrinciples from "@/pages/sportief/HockeyPrinciples";

export const Route = createFileRoute("/sportief/hockey-principes")({
  component: HockeyPrinciples,
});
