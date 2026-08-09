import { createFileRoute } from "@tanstack/react-router";
import HockeyField from "@/pages/club/HockeyField";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/club/veld")({
  head: () => buildPageHead("/club/veld"),
  component: HockeyField,
});
