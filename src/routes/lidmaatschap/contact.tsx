import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/pages/lidmaatschap/Contact";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/lidmaatschap/contact")({
  head: () => buildPageHead("/lidmaatschap/contact"),
  component: Contact,
});
