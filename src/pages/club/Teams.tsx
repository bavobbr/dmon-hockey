import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { Trophy, Users, Mail, Sparkles, ImageIcon } from "lucide-react";
import { TeamsPageJsonLd } from "@/components/JsonLd";
import { cn } from "@/lib/utils";

const FALLBACK_IMG = "/lovable-uploads/03104bbc-f9de-44a2-a8b0-aedb91fd1c6c.png";

const categorize = (team: { age_group?: string | null; name: string }) => {
  const src = `${team.age_group ?? ""} ${team.name}`.toLowerCase();
  if (/indoor|zaal/.test(src)) return "Indoor";
  if (/heren|gents|\bmen\b/.test(src)) return "Heren";
  if (/dames|ladies|women/.test(src)) return "Dames";
  const uMatch = src.match(/u\s?(\d{1,2})/);
  if (uMatch) {
    const n = parseInt(uMatch[1], 10);
    if (n <= 12) return "Jeugd U6–U12";
    if (n <= 19) return "Jeugd U14–U19";
  }
  return "Overige";
};

const CATEGORY_ORDER = ["Heren", "Dames", "Jeugd U6–U12", "Jeugd U14–U19", "Indoor", "Overige"];

const ClubTeams = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("Alle");

  const { data: teams, isLoading } = useQuery({
    queryKey: ['teams'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('teams')
        .select('*')
        .eq('active', true)
        .order('name', { ascending: true });
      if (error) throw error;
      return data || [];
    },
  });

  const { categories, filtered, withPhoto } = useMemo(() => {
    const list = teams ?? [];
    const set = new Set<string>();
    list.forEach((t) => set.add(categorize(t)));
    const cats = CATEGORY_ORDER.filter((c) => set.has(c));
    const f = filter === "Alle" ? list : list.filter((t) => categorize(t) === filter);
    return { categories: cats, filtered: f, withPhoto: list.filter((t) => t.image_url).length };
  }, [teams, filter]);

  return (
    <div className="relative">
      <TeamsPageJsonLd teams={teams || []} />

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
              <Sparkles className="h-3.5 w-3.5" />
              Seizoen {teams?.[0]?.season ?? "2025–2026"}
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight lg:text-6xl">
              Onze teams
            </h1>
            <p className="mt-4 max-w-2xl text-base lg:text-lg text-primary-foreground/85">
              Van onze jongste U6-spelertjes tot Heren en Dames — ontdek alle teams van D-mon Hockey,
              hun coaches en team managers.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-primary-foreground/85">
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                <span className="font-semibold text-primary-foreground">{teams?.length ?? 0}</span>
                <span>teams actief</span>
              </div>
              <div className="flex items-center gap-2">
                <ImageIcon className="h-4 w-4" />
                <span className="font-semibold text-primary-foreground">{withPhoto}</span>
                <span>met teamfoto</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="font-semibold text-primary-foreground">{categories.length}</span>
                <span>categorieën</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <div className="sticky top-0 z-20 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="container mx-auto px-4 py-3 flex gap-2 overflow-x-auto">
          {["Alle", ...categories].map((cat) => (
            <Button
              key={cat}
              size="sm"
              variant={filter === cat ? "default" : "outline"}
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-full whitespace-nowrap transition-all",
                filter === cat && "shadow-md shadow-primary/20"
              )}
            >
              {cat}
              <span className="ml-2 text-xs opacity-70">
                {cat === "Alle"
                  ? teams?.length ?? 0
                  : (teams ?? []).filter((t) => categorize(t) === cat).length}
              </span>
            </Button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="container mx-auto px-4 py-12 lg:py-16">
        {isLoading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-80 rounded-2xl bg-muted animate-pulse" />
            ))}
          </div>
        )}

        {!isLoading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((team, idx) => {
              const hasPhoto = !!team.image_url;
              const img = team.image_url || FALLBACK_IMG;
              const cat = categorize(team);
              return (
                <article
                  key={team.id}
                  className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  style={{ animationDelay: `${idx * 40}ms` }}
                >
                  {/* Image */}
                  <button
                    type="button"
                    onClick={() => setSelectedImage(img)}
                    className="relative block w-full h-56 overflow-hidden bg-gradient-to-br from-muted to-muted/50"
                    aria-label={`Bekijk teamfoto ${team.name}`}
                  >
                    <img
                      src={img}
                      alt={team.name}
                      loading="lazy"
                      className={cn(
                        "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                        !hasPhoto && "opacity-30 grayscale object-contain p-8"
                      )}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <Badge variant="secondary" className="bg-background/90 backdrop-blur text-foreground">
                        {cat}
                      </Badge>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-background">
                      <h2 className="text-xl font-bold leading-tight drop-shadow">{team.name}</h2>
                      {team.division && team.age_group && (
                        <p className="text-xs text-background/80 mt-1">
                          {team.division} • {team.age_group}
                        </p>
                      )}
                    </div>
                  </button>

                  {/* Body */}
                  <div className="p-5 space-y-3">
                    {team.description && (
                      <p className="text-sm text-muted-foreground line-clamp-3">{team.description}</p>
                    )}
                    <div className="space-y-2 text-sm pt-1">
                      {team.coach && (
                        <div className="flex items-center gap-2">
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                            <Users className="h-3.5 w-3.5 text-primary" />
                          </span>
                          <span className="text-muted-foreground">
                            <span className="text-foreground font-medium">Coach:</span> {team.coach}
                          </span>
                        </div>
                      )}
                      {team.team_manager && (
                        <div className="flex items-center gap-2">
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary/10">
                            <Mail className="h-3.5 w-3.5 text-secondary" />
                          </span>
                          <span className="text-muted-foreground">
                            <span className="text-foreground font-medium">Manager:</span> {team.team_manager}
                          </span>
                        </div>
                      )}
                      {!team.coach && !team.team_manager && (
                        <p className="text-xs text-muted-foreground italic">Coach en manager nog te bevestigen.</p>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {!isLoading && filtered.length === 0 && (
          <div className="text-center py-16 border border-dashed border-border rounded-2xl">
            <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Geen teams in deze categorie.</p>
          </div>
        )}
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Vergroot teamfoto van D-mon Hockey Club"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ClubTeams;
