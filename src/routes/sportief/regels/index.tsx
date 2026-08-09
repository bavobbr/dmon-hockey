import { createFileRoute } from "@tanstack/react-router";
import Rules from "@/pages/sportief/Rules";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/sportief/regels/")({
  head: () => buildPageHead("/sportief/regels"),
  component: Rules,
});
