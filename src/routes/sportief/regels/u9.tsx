import { createFileRoute } from "@tanstack/react-router";
import U9Rules from "@/pages/sportief/regels/U9";

export const Route = createFileRoute("/sportief/regels/u9")({
  component: U9Rules,
});
