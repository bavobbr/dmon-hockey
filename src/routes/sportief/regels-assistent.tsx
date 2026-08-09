import { createFileRoute } from "@tanstack/react-router";
import RulesAgent from "@/pages/sportief/RulesAgent";

export const Route = createFileRoute("/sportief/regels-assistent")({
  component: RulesAgent,
});
