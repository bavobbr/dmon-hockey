import { createFileRoute } from "@tanstack/react-router";
import IndoorRules from "@/pages/sportief/regels/Indoor";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/sportief/regels/indoor")({
  head: () => buildPageHead("/sportief/regels/indoor"),
  component: IndoorRules,
});
