import { createFileRoute } from "@tanstack/react-router";
import Training from "@/pages/sportief/Training";

export const Route = createFileRoute("/sportief/training")({
  component: Training,
});
