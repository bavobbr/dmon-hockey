import { createFileRoute } from "@tanstack/react-router";
import Insurance from "@/pages/lidmaatschap/Insurance";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/lidmaatschap/verzekering")({
  head: () => buildPageHead("/lidmaatschap/verzekering"),
  component: Insurance,
});
