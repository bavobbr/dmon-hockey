import { createFileRoute } from "@tanstack/react-router";
import Training from "@/pages/sportief/Training";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/sportief/training")({
  head: () => buildPageHead("/sportief/training"),
  component: Training,
});
