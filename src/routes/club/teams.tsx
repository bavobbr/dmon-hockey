import { createFileRoute } from "@tanstack/react-router";
import ClubTeams from "@/pages/club/Teams";

export const Route = createFileRoute("/club/teams")({
  component: ClubTeams,
});
