import { createFileRoute } from "@tanstack/react-router";
import VacatureDetail from "@/pages/VacatureDetail";

export const Route = createFileRoute("/vacatures/$slug")({
  component: VacatureDetail,
});
