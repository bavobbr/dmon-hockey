import { createFileRoute } from "@tanstack/react-router";
import IndoorHockey from "@/pages/sportief/IndoorHockey";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/sportief/indoor-hockey")({
  head: () => buildPageHead("/sportief/indoor-hockey"),
  component: IndoorHockey,
});
