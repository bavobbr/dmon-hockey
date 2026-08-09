import { createFileRoute } from "@tanstack/react-router";
import Rules from "@/pages/sportief/Rules";

export const Route = createFileRoute("/sportief/regels/")({
  component: Rules,
});
