import { createFileRoute } from "@tanstack/react-router";
import MembershipInfo from "@/pages/lidmaatschap/Info";

export const Route = createFileRoute("/lidmaatschap/info")({
  component: MembershipInfo,
});
