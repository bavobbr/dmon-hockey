import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Mail, User } from "lucide-react";
import { sanitizeRichHtml } from "@/lib/sanitizeHtml";
import { VACANCY_CATEGORY_LABELS, VACANCY_CATEGORY_BADGE, type VacancyCategory } from "@/lib/vacancies";

interface Vacancy {
  id: string;
  title: string;
  slug: string;
  category: VacancyCategory;
  emoji: string | null;
  intro: string;
  content: string;
  contact_name: string;
  contact_email: string;
}

const VacatureDetail = () => {
  const { slug } = useParams();
  const [vacancy, setVacancy] = useState<Vacancy | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    (async () => {
      const { data, error } = await supabase
        .from("vacancies")
        .select("id,title,slug,category,emoji,intro,content,contact_name,contact_email")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();
      if (error || !data) setNotFound(true);
      else setVacancy(data);
      setLoading(false);
    })();
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-muted rounded w-24" />
          <div className="h-10 bg-muted rounded w-3/4" />
          <div className="h-64 bg-muted rounded" />
        </div>
      </div>
    );
  }

  if (notFound || !vacancy) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Card>
          <CardContent className="py-12 text-center space-y-4">
            <p className="text-muted-foreground">Deze vacature bestaat niet (meer).</p>
            <Button asChild variant="outline">
              <Link to="/vacatures"><ArrowLeft className="h-4 w-4 mr-2" />Terug naar vacatures</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

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
        <div className="container mx-auto px-4 py-12 lg:py-16 relative max-w-4xl">
          <Link
            to="/vacatures"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Alle vacatures
          </Link>
          <Badge variant="outline" className="mb-4 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground">
            {VACANCY_CATEGORY_LABELS[vacancy.category]}
          </Badge>
          <h1 className="font-display text-3xl lg:text-5xl font-bold leading-tight">
            {vacancy.emoji && <span className="mr-3" aria-hidden>{vacancy.emoji}</span>}
            {vacancy.title}
          </h1>
          <p className="mt-4 text-base lg:text-lg text-primary-foreground/85 max-w-2xl">
            {vacancy.intro}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 lg:py-16 max-w-4xl grid gap-8 lg:grid-cols-[1fr_320px]">
        {/* Content */}
        <article
          className="prose prose-sm md:prose-base max-w-none text-foreground
                     prose-headings:font-display prose-headings:text-foreground
                     prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-3
                     prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-2
                     prose-a:text-primary prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-primary/80
                     prose-ul:my-3 prose-li:my-1"
          dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(vacancy.content) }}
        />

        {/* Contact card */}
        <aside className="lg:sticky lg:top-20 h-fit">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                Interesse?
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <User className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Contactpersoon</div>
                  <div className="font-semibold text-foreground">{vacancy.contact_name}</div>
                </div>
              </div>
              <Button asChild className="w-full">
                <a href={`mailto:${vacancy.contact_email}?subject=${encodeURIComponent(`Interesse: ${vacancy.title}`)}`}>
                  <Mail className="h-4 w-4 mr-2" />
                  {vacancy.contact_email}
                </a>
              </Button>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
};

export default VacatureDetail;
