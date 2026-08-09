import { createFileRoute } from "@tanstack/react-router";
import HockeyPrinciples from "@/pages/sportief/HockeyPrinciples";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/sportief/hockey-principes")({
  head: () => buildPageHead("/sportief/hockey-principes"),
  component: HockeyPrinciples,
});
