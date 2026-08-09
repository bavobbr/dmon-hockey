import { createFileRoute } from "@tanstack/react-router";
import U14PlusRules from "@/pages/sportief/regels/U14Plus";

export const Route = createFileRoute("/sportief/regels/u14-plus")({
  component: U14PlusRules,
});
