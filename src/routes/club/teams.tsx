import { createFileRoute } from "@tanstack/react-router";
import ClubTeams from "@/pages/club/Teams";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/club/teams")({
  head: () => buildPageHead("/club/teams"),
  component: ClubTeams,
});
