import { createFileRoute } from "@tanstack/react-router";
import ClubSponsors from "@/pages/club/Sponsors";

export const Route = createFileRoute("/club/sponsors")({
  component: ClubSponsors,
});
