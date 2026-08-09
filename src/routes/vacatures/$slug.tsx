import { createFileRoute } from "@tanstack/react-router";
import VacatureDetail from "@/pages/VacatureDetail";
import { supabase } from "@/integrations/supabase/client";
import { buildHead } from "@/lib/pageHead";

export const Route = createFileRoute("/vacatures/$slug")({
  loader: async ({ params }) => {
    const { data } = await supabase
      .from("vacancies")
      .select("title,intro")
      .eq("slug", params.slug)
      .eq("published", true)
      .maybeSingle();
    return { vacancy: data ?? null, slug: params.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.vacancy) {
      return buildHead({
        title: "Vacature niet gevonden",
        description: "Deze vacature is niet langer beschikbaar.",
        noindex: true,
      });
    }
    const { title, intro } = loaderData.vacancy;
    return buildHead({
      title: `Vacature: ${title}`,
      description: (intro ?? "").replace(/\s+/g, " ").trim().slice(0, 155),
      path: `/vacatures/${loaderData.slug}`,
      ogType: "article",
    });
  },
  component: VacatureDetail,
});
