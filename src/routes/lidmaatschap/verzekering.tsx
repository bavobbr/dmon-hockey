import { createFileRoute } from "@tanstack/react-router";
import Insurance from "@/pages/lidmaatschap/Insurance";

export const Route = createFileRoute("/lidmaatschap/verzekering")({
  component: Insurance,
});
