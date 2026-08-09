import { createFileRoute } from "@tanstack/react-router";
import IndoorRegistration from "@/pages/lidmaatschap/IndoorRegistration";

export const Route = createFileRoute("/lidmaatschap/indoor-registratie")({
  component: IndoorRegistration,
});
