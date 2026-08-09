import { createFileRoute } from "@tanstack/react-router";
import History from "@/pages/club/History";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/club/geschiedenis")({
  head: () => buildPageHead("/club/geschiedenis"),
  component: History,
});
