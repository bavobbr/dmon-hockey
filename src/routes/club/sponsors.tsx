import { createFileRoute } from "@tanstack/react-router";
import ClubSponsors from "@/pages/club/Sponsors";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/club/sponsors")({
  head: () => buildPageHead("/club/sponsors"),
  component: ClubSponsors,
});
