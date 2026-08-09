import { createFileRoute } from "@tanstack/react-router";
import MembershipInfo from "@/pages/lidmaatschap/Info";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/lidmaatschap/info")({
  head: () => buildPageHead("/lidmaatschap/info"),
  component: MembershipInfo,
});
