import { createFileRoute } from "@tanstack/react-router";
import Socials from "@/pages/Socials";

export const Route = createFileRoute("/socials")({
  component: Socials,
});
