import { createFileRoute } from "@tanstack/react-router";
import Registration from "@/pages/lidmaatschap/Registration";

export const Route = createFileRoute("/lidmaatschap/registratie")({
  component: Registration,
});
