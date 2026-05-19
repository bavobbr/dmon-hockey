import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { HandHeart, ExternalLink, Mail, Sparkles } from "lucide-react";

const tierColors: Record<string, string> = {
  diamond: "border-[hsl(var(--sponsor-diamond))] bg-[hsl(var(--sponsor-diamond-bg))]",
  gold: "border-[hsl(var(--sponsor-gold))] bg-[hsl(var(--sponsor-gold-bg))]",
  silver: "border-[hsl(var(--sponsor-silver))] bg-[hsl(var(--sponsor-silver-bg))]",
  bronze: "border-[hsl(var(--sponsor-bronze))] bg-[hsl(var(--sponsor-bronze-bg))]",
  materiaal_kledij: "border-[hsl(var(--sponsor-materiaal-kledij))] bg-[hsl(var(--sponsor-materiaal-kledij-bg))]",
  woodstick: "border-[hsl(var(--sponsor-woodstick))] bg-[hsl(var(--sponsor-woodstick-bg))]",
  sympathie: "border-[hsl(var(--sponsor-sympathie))] bg-[hsl(var(--sponsor-sympathie-bg))]",
};

const tierBadge: Record<string, string> = {
  diamond: "bg-[hsl(var(--sponsor-diamond))] text-white",
  gold: "bg-[hsl(var(--sponsor-gold))] text-white",
  silver: "bg-[hsl(var(--sponsor-silver))] text-white",
  bronze: "bg-[hsl(var(--sponsor-bronze))] text-white",
  materiaal_kledij: "bg-[hsl(var(--sponsor-materiaal-kledij))] text-white",
  woodstick: "bg-[hsl(var(--sponsor-woodstick))] text-white",
  sympathie: "bg-[hsl(var(--sponsor-sympathie))] text-white",
};

const tierNames: Record<string, string> = {
  diamond: "Diamant",
  gold: "Goud",
  silver: "Zilver",
  bronze: "Brons",
  materiaal_kledij: "Materiaal & Kledij",
  woodstick: "Woodstick",
  sympathie: "Sympathie",
};

const TIER_ORDER = ["diamond", "gold", "silver", "bronze", "materiaal_kledij", "woodstick", "sympathie"];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const ClubSponsors = () => {
  const { data: sponsors, isLoading } = useQuery({
    queryKey: ["sponsors"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("sponsors")
        .select("*")
        .eq("active", true)
        .order("tier");
      if (error) throw error;
      return data || [];
    },
  });

  const groupedSponsors = sponsors?.reduce((acc, sponsor) => {
    const tier = sponsor.tier || "bronze";
    if (!acc[tier]) acc[tier] = [];
    acc[tier].push(sponsor);
    return acc;
  }, {} as Record<string, NonNullable<typeof sponsors>>);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6 py-20 lg:py-28">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-6 bg-white/15 text-primary-foreground border-white/20 hover:bg-white/20">
              <Sparkles className="h-3 w-3 mr-1" /> Onze partners
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Sponsors
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 max-w-2xl">
              Dankzij de steun van onze partners kunnen we kwaliteitsvolle hockey aanbieden en de club laten groeien.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" size="lg" onClick={() => scrollToSection("sponsors")}>
                Bekijk sponsors
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 text-primary-foreground border-white/30 hover:bg-white/20 hover:text-primary-foreground"
                onClick={() => scrollToSection("word-sponsor")}
              >
                Word sponsor
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky sub-nav */}
      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border/60">
        <div className="container mx-auto px-6">
          <div className="flex gap-6 overflow-x-auto py-4 text-sm font-medium">
            <button onClick={() => scrollToSection("sponsors")} className="text-foreground hover:text-primary whitespace-nowrap transition-colors">
              Sponsors
            </button>
            <button onClick={() => scrollToSection("word-sponsor")} className="text-foreground hover:text-primary whitespace-nowrap transition-colors">
              Word sponsor
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12 lg:py-16 space-y-16">
        {/* Sponsors */}
        <section id="sponsors" className="scroll-mt-20 space-y-12">
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-48 rounded-xl bg-muted animate-pulse" />
              ))}
            </div>
          )}

          {!isLoading && (!sponsors || sponsors.length === 0) && (
            <Card className="text-center py-12">
              <CardContent>
                <HandHeart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Nog geen sponsors om weer te geven.</p>
              </CardContent>
            </Card>
          )}

          {TIER_ORDER.map((tier) => {
            const tierSponsors = groupedSponsors?.[tier];
            if (!tierSponsors || tierSponsors.length === 0) return null;

            return (
              <div key={tier} className="space-y-6">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    {tierNames[tier]}
                  </h2>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${tierBadge[tier]}`}>
                    {tierSponsors.length}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tierSponsors.map((sponsor) => (
                    <Card key={sponsor.id} className={`border-2 ${tierColors[tier]}`}>
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center gap-4">
                          {sponsor.logo_path ? (
                            <img
                              src={supabase.storage.from("sponsor-logos").getPublicUrl(sponsor.logo_path).data.publicUrl}
                              alt={sponsor.name}
                              loading="lazy"
                              className="max-h-20 max-w-full object-contain"
                            />
                          ) : (
                            <div className="h-20 w-full bg-muted/50 rounded flex items-center justify-center">
                              <span className="font-display font-semibold text-muted-foreground">{sponsor.name}</span>
                            </div>
                          )}
                          <div className="w-full">
                            <h3 className="font-display font-semibold text-lg mb-2">{sponsor.name}</h3>
                            {sponsor.description && (
                              <p className="text-sm text-muted-foreground mb-3">{sponsor.description}</p>
                            )}
                            {sponsor.website_url && (
                              <a
                                href={sponsor.website_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium"
                              >
                                Bezoek website
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* Word sponsor CTA */}
        <section id="word-sponsor" className="scroll-mt-20">
          <div className="rounded-2xl bg-gradient-primary p-10 md:p-14 text-primary-foreground text-center">
            <HandHeart className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Word sponsor van DMON
            </h2>
            <p className="text-lg text-primary-foreground/85 max-w-2xl mx-auto mb-8">
              Steun lokale hockey en krijg zichtbaarheid binnen onze groeiende gemeenschap.
              We bieden pakketten op maat van elk budget.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="secondary" size="lg" asChild>
                <a href="mailto:sponsoring@dmon.be">
                  <Mail className="h-4 w-4 mr-2" />
                  Contacteer ons
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ClubSponsors;
