import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
import { buildPageHead } from "@/lib/pageHead";
import { HERO_COUNT } from "@/lib/heroImages";

export const Route = createFileRoute("/")({
  head: () => buildPageHead("/"),
  // Elke pagina-lading toont een ander sfeerbeeld. De keuze gebeurt op de
  // server, zodat de foto al in de eerste HTML staat (sneller zichtbaar) en
  // de hydratie dezelfde foto toont.
  loader: () => ({ heroIndex: Math.floor(Math.random() * HERO_COUNT) }),
  component: HomePage,
});

function HomePage() {
  const { heroIndex } = Route.useLoaderData();
  return <Index heroIndex={heroIndex} />;
}
