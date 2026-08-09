import { createFileRoute } from "@tanstack/react-router";
import Board from "@/pages/club/Board";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/club/bestuur")({
  head: () => buildPageHead("/club/bestuur"),
  component: Board,
});
