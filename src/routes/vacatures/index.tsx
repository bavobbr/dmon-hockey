import { createFileRoute } from "@tanstack/react-router";
import Vacatures from "@/pages/Vacatures";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/vacatures/")({
  head: () => buildPageHead("/vacatures"),
  component: Vacatures,
});
