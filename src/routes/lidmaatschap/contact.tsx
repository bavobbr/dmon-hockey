import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/pages/lidmaatschap/Contact";

export const Route = createFileRoute("/lidmaatschap/contact")({
  component: Contact,
});
