import { createFileRoute } from "@tanstack/react-router";
import Sfeer from "@/pages/club/Sfeer";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/club/sfeer")({
  head: () => buildPageHead("/club/sfeer"),
  component: Sfeer,
});
