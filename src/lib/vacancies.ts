import type { Database } from "@/integrations/supabase/types";

export type VacancyCategory = Database["public"]["Enums"]["vacancy_category"];

export const VACANCY_CATEGORY_LABELS: Record<VacancyCategory, string> = {
  bestuur: "Bestuur",
  werkgroep: "Werkgroep",
  sportief: "Sportief",
};

export const VACANCY_CATEGORY_OPTIONS: VacancyCategory[] = [
  "bestuur",
  "werkgroep",
  "sportief",
];

// Subtiele accent-classes per categorie (semantische tokens)
export const VACANCY_CATEGORY_BADGE: Record<VacancyCategory, string> = {
  bestuur: "bg-primary/10 text-primary border-primary/20",
  werkgroep: "bg-accent/15 text-accent-foreground border-accent/30",
  sportief: "bg-secondary/20 text-secondary-foreground border-secondary/40",
};

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}
