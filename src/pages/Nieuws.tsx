import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import * as Icons from "lucide-react";
import { sanitizeRichHtml } from "@/lib/sanitizeHtml";
import { cn } from "@/lib/utils";
import { NewsPageJsonLd } from "@/components/JsonLd";

interface Announcement {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  featured: boolean;
  published: boolean;
  created_at: string;
  icon: string;
}

function extractFirstImage(html: string): string | null {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : null;
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("nl-BE", {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}

const HeroCard = ({ announcement }: { announcement: Announcement }) => {
  const IconComponent = (Icons as any)[announcement.icon || 'Newspaper'] || Icons.Newspaper;
  const backgroundImage = extractFirstImage(announcement.content);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group relative cursor-pointer fade-in-up overflow-hidden border-0 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all duration-500 min-h-[420px] md:min-h-[520px]">
          {/* Background image / gradient */}
          {backgroundImage ? (
            <img
              src={backgroundImage}
              alt={announcement.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[1400ms] ease-out"
            />
          ) : (
            <div className="absolute inset-0 bg-[image:var(--gradient-hero)] flex items-center justify-center">
              <IconComponent className="h-32 w-32 text-primary-foreground/20" />
            </div>
          )}
          {/* Readability overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

          {/* Text content */}
          <div className="relative h-full flex flex-col justify-end p-6 md:p-10 lg:p-14 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-accent text-accent-foreground border-0 uppercase tracking-wider text-[10px] font-bold">
                Hoofdartikel
              </Badge>
              <span className="text-sm text-white/80">
                {formatDate(announcement.created_at)}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-[1.1] max-w-3xl drop-shadow-md">
              {announcement.title}
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed line-clamp-2 max-w-2xl mb-6">
              {announcement.content.replace(/<[^>]*>/g, '').substring(0, 200) + '...'}
            </p>
            <span className="inline-flex items-center gap-2 font-medium group-hover:gap-3 transition-all w-fit">
              Lees meer <Icons.ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </Card>
      </DialogTrigger>
      <AnnouncementDialog announcement={announcement} />
    </Dialog>
  );
};

// Bento layout: 4-col grid on lg with varied widths
// Pattern per 5 cards: [2][2] / [1][2][1] / [1][1][2] — fills cleanly
const bentoSpan = (i: number): string => {
  const pattern = i % 7;
  switch (pattern) {
    case 0: return "lg:col-span-2";
    case 1: return "lg:col-span-2";
    case 2: return "lg:col-span-1";
    case 3: return "lg:col-span-2";
    case 4: return "lg:col-span-1";
    case 5: return "lg:col-span-1";
    case 6: return "lg:col-span-1";
    default: return "lg:col-span-1";
  }
};

const NewsCard = ({ announcement, index, eager }: { announcement: Announcement; index: number; eager?: boolean }) => {
  const IconComponent = (Icons as any)[announcement.icon || 'Newspaper'] || Icons.Newspaper;
  const backgroundImage = extractFirstImage(announcement.content);
  const span = bentoSpan(index);
  const isTall = span.includes("row-span-2");
  const isWide = span.includes("col-span-2");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card
          className={cn(
            "group cursor-pointer fade-in-up overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-all duration-500 flex flex-col relative border-border/60 h-full",
            span,
          )}
          style={{ animationDelay: `${Math.min(index * 0.06, 0.4)}s` }}
        >
          {/* Top accent bar in clubkleur */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/70 to-accent z-10" />

          {/* Image */}
          <div className={cn(
            "relative overflow-hidden bg-muted",
            isWide ? "h-52 md:h-60" : "h-52"
          )}>
            {backgroundImage ? (
              <>
                <img
                  src={backgroundImage}
                  alt={announcement.title}
                  loading={eager ? "eager" : "lazy"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Grijstint-overlay voor visuele samenhang, fade-t weg op hover */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-black/20 mix-blend-multiply opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                />
              </>
            ) : (
              <div className="w-full h-full bg-[image:var(--gradient-primary)] flex items-center justify-center relative">
                <IconComponent className="h-16 w-16 text-primary-foreground/25" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary-foreground)/0.15),transparent_60%)]" />
              </div>
            )}
            {announcement.featured && (
              <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground border-0 backdrop-blur-sm uppercase tracking-wider text-[10px] font-bold z-10">
                Uitgelicht
              </Badge>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 rounded-md bg-primary/10">
                <IconComponent className="h-4 w-4 text-primary" />
              </div>
              <span className="text-xs text-muted-foreground">
                {formatDate(announcement.created_at)}
              </span>
            </div>
            <h3 className={cn(
              "font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors",
              isWide || isTall ? "text-xl lg:text-2xl" : "text-lg"
            )}>
              {announcement.title}
            </h3>
            <p className={cn(
              "text-sm text-muted-foreground flex-1 leading-relaxed",
              isTall ? "line-clamp-5" : "line-clamp-3"
            )}>
              {announcement.excerpt || announcement.content.replace(/<[^>]*>/g, '').substring(0, 160) + '...'}
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm text-primary font-medium mt-4 group-hover:gap-2.5 transition-all">
              Lees meer <Icons.ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </Card>
      </DialogTrigger>
      <AnnouncementDialog announcement={announcement} />
    </Dialog>
  );
};

const AnnouncementDialog = ({ announcement }: { announcement: Announcement }) => (
  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
    <DialogHeader>
      <DialogTitle className="text-xl font-bold mb-2">
        {announcement.title}
      </DialogTitle>
      <DialogDescription className="text-sm text-muted-foreground">
        {formatDate(announcement.created_at)}
        {announcement.featured && (
          <Badge variant="secondary" className="ml-2 bg-accent/10 text-accent border-accent/20">
            Uitgelicht
          </Badge>
        )}
      </DialogDescription>
    </DialogHeader>
    <div
      className="prose prose-sm max-w-none text-foreground mt-4 prose-a:text-primary prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-primary/80"
      dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(announcement.content) }}
    />
  </DialogContent>
);

const Nieuws = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const { data, error } = await supabase
          .from('announcements')
          .select('*')
          .eq('published', true)
          .order('created_at', { ascending: false });
        if (error) throw error;
        setAnnouncements(data || []);
      } catch (err) {
        console.error('Error fetching announcements:', err);
        setError('Failed to load announcements');
      } finally {
        setLoading(false);
      }
    };
    fetchAnnouncements();
  }, []);

  const featuredAnnouncement = announcements[0];
  const otherAnnouncements = announcements.slice(1);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        {/* Hero skeleton */}
        <section className="relative overflow-hidden bg-gradient-hero">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-6xl">
            <div className="animate-pulse rounded-full bg-primary-foreground/20 h-6 w-24 mb-4" />
            <div className="animate-pulse rounded bg-primary-foreground/20 h-12 md:h-16 w-3/4 mb-4" />
            <div className="animate-pulse rounded bg-primary-foreground/10 h-6 w-1/2" />
          </div>
        </section>
        <div className="container mx-auto px-6 py-10 max-w-6xl">
          <div className="animate-pulse rounded-xl bg-muted h-[420px] mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse rounded-xl bg-muted h-[340px]" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-6xl">
            <Badge variant="secondary" className="mb-4 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
              Nieuws
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Laatste nieuws
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
              Alle aankondigingen en nieuws van D-mon Hockey Club.
            </p>
          </div>
        </section>
        <div className="container mx-auto px-6 py-10 max-w-6xl">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground">{error}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <NewsPageJsonLd announcements={announcements} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6 py-16 md:py-24 max-w-6xl">
          <Badge variant="secondary" className="mb-4 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
            Nieuws
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Laatste nieuws
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
            Alle aankondigingen en nieuws van D-mon Hockey Club.
          </p>
        </div>
      </section>

      {/* Sticky sub-navigation */}
      <nav className="sticky top-0 z-30 border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex gap-6 overflow-x-auto py-3 text-sm">
            <a href="#uitgelicht" className="whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground">Uitgelicht</a>
            <a href="#laatste" className="whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground">Laatste nieuws</a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-10 max-w-6xl">
        {announcements.length === 0 ? (
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground">Geen nieuws gevonden.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8">
            {featuredAnnouncement && (
              <section id="uitgelicht">
                <HeroCard announcement={featuredAnnouncement} />
              </section>
            )}

            {otherAnnouncements.length > 0 && (
              <section id="laatste">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-6 auto-rows-fr">
                  {otherAnnouncements.map((announcement, index) => (
                    <NewsCard
                      key={announcement.id}
                      announcement={announcement}
                      index={index}
                      eager={index < 3}
                    />
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Nieuws;
