import { createFileRoute } from "@tanstack/react-router";
import U9Rules from "@/pages/sportief/regels/U9";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/sportief/regels/u9")({
  head: () => buildPageHead("/sportief/regels/u9"),
  component: U9Rules,
});
