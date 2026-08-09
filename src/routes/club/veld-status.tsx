import { createFileRoute } from "@tanstack/react-router";
import FieldStatus from "@/pages/club/FieldStatus";

export const Route = createFileRoute("/club/veld-status")({
  component: FieldStatus,
});
