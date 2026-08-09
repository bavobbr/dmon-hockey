import { createFileRoute } from "@tanstack/react-router";
import Shop from "@/pages/Shop";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/shop")({
  head: () => buildPageHead("/shop"),
  component: Shop,
});
