import { createFileRoute } from "@tanstack/react-router";
import Board from "@/pages/club/Board";

export const Route = createFileRoute("/club/bestuur")({
  component: Board,
});
