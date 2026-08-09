import { createFileRoute } from "@tanstack/react-router";
import IndoorRules from "@/pages/sportief/regels/Indoor";

export const Route = createFileRoute("/sportief/regels/indoor")({
  component: IndoorRules,
});
