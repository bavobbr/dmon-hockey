import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/")({
  head: () => buildPageHead("/"),
  component: Index,
});
