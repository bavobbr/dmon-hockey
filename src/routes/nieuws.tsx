import { createFileRoute } from "@tanstack/react-router";
import Nieuws from "@/pages/Nieuws";

export const Route = createFileRoute("/nieuws")({
  component: Nieuws,
});
