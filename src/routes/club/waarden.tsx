import { createFileRoute } from "@tanstack/react-router";
import ClubValues from "@/pages/club/Values";

export const Route = createFileRoute("/club/waarden")({
  component: ClubValues,
});
