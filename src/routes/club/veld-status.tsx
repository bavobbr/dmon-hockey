import { createFileRoute } from "@tanstack/react-router";
import FieldStatus from "@/pages/club/FieldStatus";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/club/veld-status")({
  head: () => buildPageHead("/club/veld-status"),
  component: FieldStatus,
});
