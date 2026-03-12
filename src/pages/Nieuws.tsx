import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import * as Icons from "lucide-react";
import DOMPurify from 'dompurify';

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

const HeroCard = ({ announcement }: { announcement: Announcement }) => {
  const IconComponent = (Icons as any)[announcement.icon || 'Newspaper'] || Icons.Newspaper;
  const backgroundImage = extractFirstImage(announcement.content);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group cursor-pointer fade-in-up overflow-hidden border-0 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all duration-500">
          <div className="grid md:grid-cols-2 min-h-[320px]">
            {/* Image side */}
            <div className="relative overflow-hidden bg-muted">
              {backgroundImage ? (
                <img
                  src={backgroundImage}
                  alt={announcement.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="absolute inset-0 bg-[image:var(--gradient-hero)] flex items-center justify-center">
                  <IconComponent className="h-20 w-20 text-primary-foreground/30" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20" />
            </div>
            {/* Content side */}
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                  Uitgelicht
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {new Date(announcement.created_at).toLocaleDateString("nl-BE", {
                    year: 'numeric', month: 'long', day: 'numeric'
                  })}
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                {announcement.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-6">
                {announcement.excerpt || announcement.content.replace(/<[^>]*>/g, '').substring(0, 200) + '...'}
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                Lees meer <Icons.ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </Card>
      </DialogTrigger>
      <AnnouncementDialog announcement={announcement} />
    </Dialog>
  );
};

const NewsCard = ({ announcement, index }: { announcement: Announcement; index: number }) => {
  const IconComponent = (Icons as any)[announcement.icon || 'Newspaper'] || Icons.Newspaper;
  const backgroundImage = extractFirstImage(announcement.content);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card
          className="group cursor-pointer fade-in-up overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
          style={{ animationDelay: `${index * 0.08}s` }}
        >
          {/* Image thumbnail */}
          <div className="relative h-48 overflow-hidden bg-muted">
            {backgroundImage ? (
              <img
                src={backgroundImage}
                alt={announcement.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-[image:var(--gradient-primary)] flex items-center justify-center">
                <IconComponent className="h-12 w-12 text-primary-foreground/30" />
              </div>
            )}
            {announcement.featured && (
              <Badge variant="secondary" className="absolute top-3 right-3 bg-accent/90 text-accent-foreground border-0 backdrop-blur-sm">
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
                {new Date(announcement.created_at).toLocaleDateString("nl-BE", {
                  year: 'numeric', month: 'long', day: 'numeric'
                })}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {announcement.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-3 flex-1 leading-relaxed">
              {announcement.excerpt || announcement.content.replace(/<[^>]*>/g, '').substring(0, 120) + '...'}
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
        {new Date(announcement.created_at).toLocaleDateString("nl-BE", {
          year: 'numeric', month: 'long', day: 'numeric'
        })}
        {announcement.featured && (
          <Badge variant="secondary" className="ml-2 bg-accent/10 text-accent border-accent/20">
            Uitgelicht
          </Badge>
        )}
      </DialogDescription>
    </DialogHeader>
    <div
      className="prose prose-sm max-w-none text-foreground mt-4 prose-a:text-primary prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-primary/80"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(announcement.content) }}
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

  // Split featured hero from rest
  const featuredAnnouncement = announcements.find(a => a.featured);
  const otherAnnouncements = announcements.filter(a => a !== featuredAnnouncement);

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Nieuws</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Alle aankondigingen en nieuws van D-mon Hockey Club
          </p>
        </div>
        {/* Hero skeleton */}
        <div className="animate-pulse rounded-xl bg-muted h-[320px] mb-8" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="animate-pulse rounded-xl bg-muted h-[340px]" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Nieuws</h1>
        </div>
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">{error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Nieuws</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Alle aankondigingen en nieuws van D-mon Hockey Club
        </p>
      </div>

      {announcements.length === 0 ? (
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">Geen nieuws gevonden.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-8">
          {/* Hero featured article */}
          {featuredAnnouncement && (
            <HeroCard announcement={featuredAnnouncement} />
          )}

          {/* Grid of remaining articles */}
          {otherAnnouncements.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherAnnouncements.map((announcement, index) => (
                <NewsCard key={announcement.id} announcement={announcement} index={index} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Nieuws;
