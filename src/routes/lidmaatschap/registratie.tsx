import { createFileRoute } from "@tanstack/react-router";
import Registration from "@/pages/lidmaatschap/Registration";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/lidmaatschap/registratie")({
  head: () => buildPageHead("/lidmaatschap/registratie"),
  component: Registration,
});
