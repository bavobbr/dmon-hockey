import { createFileRoute } from "@tanstack/react-router";
import IndoorRegistration from "@/pages/lidmaatschap/IndoorRegistration";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/lidmaatschap/indoor-registratie")({
  head: () => buildPageHead("/lidmaatschap/indoor-registratie"),
  component: IndoorRegistration,
});
