import { createFileRoute } from "@tanstack/react-router";
import Socials from "@/pages/Socials";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/socials")({
  head: () => buildPageHead("/socials"),
  component: Socials,
});
