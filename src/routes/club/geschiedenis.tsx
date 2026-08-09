import { createFileRoute } from "@tanstack/react-router";
import History from "@/pages/club/History";

export const Route = createFileRoute("/club/geschiedenis")({
  component: History,
});
