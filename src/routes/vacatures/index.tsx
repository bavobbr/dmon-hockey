import { createFileRoute } from "@tanstack/react-router";
import Vacatures from "@/pages/Vacatures";

export const Route = createFileRoute("/vacatures/")({
  component: Vacatures,
});
