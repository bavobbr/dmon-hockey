import { createFileRoute } from "@tanstack/react-router";
import IndoorHockey from "@/pages/sportief/IndoorHockey";

export const Route = createFileRoute("/sportief/indoor-hockey")({
  component: IndoorHockey,
});
