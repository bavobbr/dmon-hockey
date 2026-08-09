import { createFileRoute } from "@tanstack/react-router";
import ClubValues from "@/pages/club/Values";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/club/waarden")({
  head: () => buildPageHead("/club/waarden"),
  component: ClubValues,
});
