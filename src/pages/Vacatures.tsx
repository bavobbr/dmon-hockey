import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, HandHeart, Mail, Sparkles } from "lucide-react";
import {
  VACANCY_CATEGORY_LABELS,
  VACANCY_CATEGORY_BADGE,
  VACANCY_CATEGORY_OPTIONS,
  type VacancyCategory,
} from "@/lib/vacancies";
import { cn } from "@/lib/utils";

interface Vacancy {
  id: string;
  title: string;
  slug: string;
  category: VacancyCategory;
  emoji: string | null;
  intro: string;
  contact_name: string;
  contact_email: string;
}

type Filter = "all" | VacancyCategory;

const Vacatures = () => {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("vacancies")
        .select("id,title,slug,category,emoji,intro,contact_name,contact_email")
        .eq("published", true)
        .order("sort_order", { ascending: true })
        .order("created_at", { ascending: false });
      if (!error) setVacancies(data || []);
      setLoading(false);
    })();
  }, []);

  const filtered = useMemo(
    () => (filter === "all" ? vacancies : vacancies.filter(v => v.category === filter)),
    [filter, vacancies],
  );

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: "Alle" },
    ...VACANCY_CATEGORY_OPTIONS.map(c => ({ key: c as Filter, label: VACANCY_CATEGORY_LABELS[c] })),
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div
          className="absolute inset-0 opacity-30"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, hsl(var(--primary-glow) / 0.6) 0%, transparent 50%), radial-gradient(circle at 80% 70%, hsl(var(--accent) / 0.4) 0%, transparent 50%)",
          }}
        />
        <div className="container mx-auto px-4 py-16 lg:py-24 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
              <HandHeart className="h-3.5 w-3.5" />
              Word vrijwilliger
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight lg:text-6xl">
              Zonder vrijwilligers geen D{"\u2011"}mon
            </h1>
            <p className="mt-4 max-w-2xl text-base lg:text-lg text-primary-foreground/85">
              Onze club draait op mensen die hun tijd, talent en enthousiasme delen. Vind hieronder de
              vrijwilligersrol die bij jou past — en maak samen met ons het verschil op en naast het veld.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky filter-nav */}
      <div className="sticky top-0 z-20 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="container mx-auto px-4 py-3 flex gap-2 overflow-x-auto">
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={cn(
                "rounded-full whitespace-nowrap border px-4 py-1.5 text-sm font-medium transition-colors",
                filter === f.key
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border/60 bg-background text-muted-foreground hover:border-primary/40 hover:bg-primary/5 hover:text-foreground",
              )}
            >
              {f.label}
              {f.key !== "all" && (
                <span className="ml-2 text-xs opacity-70">
                  {vacancies.filter(v => v.category === f.key).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-16 max-w-6xl">
        {loading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse rounded-2xl bg-muted h-64" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">Momenteel geen openstaande vacatures in deze categorie.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map(v => (
              <Link
                key={v.id}
                to={`/vacatures/${v.slug}`}
                className="group relative flex flex-col rounded-2xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] hover:border-primary/40"
              >
                <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-primary via-primary/70 to-accent rounded-b-full" />
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="rounded-xl bg-primary/10 p-2.5">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>

                  <Badge variant="outline" className={VACANCY_CATEGORY_BADGE[v.category]}>
                    {VACANCY_CATEGORY_LABELS[v.category]}
                  </Badge>
                </div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {v.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4 flex-1">
                  {v.intro}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
                  Meer info <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <section className="border-t border-border/60 bg-gradient-subtle">
        <div className="container mx-auto px-4 py-16 max-w-4xl text-center">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
            Staat er niets voor jou tussen?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Ook algemene helpende handen zijn altijd welkom. Laat het ons weten en we zoeken samen een rol
            die bij jou past.
          </p>
          <Button asChild size="lg" className="mt-6">
            <a href="mailto:info@dmon.be" className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Mail naar info@dmon.be
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Vacatures;
