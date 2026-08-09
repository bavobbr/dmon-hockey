import { createFileRoute } from "@tanstack/react-router";
import HockeyField from "@/pages/club/HockeyField";

export const Route = createFileRoute("/club/veld")({
  component: HockeyField,
});
