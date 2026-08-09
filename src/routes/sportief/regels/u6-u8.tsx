import { createFileRoute } from "@tanstack/react-router";
import U6U8Rules from "@/pages/sportief/regels/U6U8";
import { buildPageHead } from "@/lib/pageHead";

export const Route = createFileRoute("/sportief/regels/u6-u8")({
  head: () => buildPageHead("/sportief/regels/u6-u8"),
  component: U6U8Rules,
});
