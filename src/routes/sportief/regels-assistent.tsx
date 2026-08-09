import { createFileRoute } from "@tanstack/react-router";
import RulesAgent from "@/pages/sportief/RulesAgent";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/sportief/regels-assistent")({
  head: () => buildPageHead("/sportief/regels-assistent"),
  component: RulesAgent,
});
