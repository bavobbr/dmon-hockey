import { createFileRoute } from "@tanstack/react-router";
import Nieuws from "@/pages/Nieuws";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/nieuws")({
  head: () => buildPageHead("/nieuws"),
  component: Nieuws,
});
