import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Heart,
  MessageCircle,
  Instagram,
  ArrowRight,
  ImageOff,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  media_type: string;
  timestamp: string;
  permalink: string;
}

export default function Socials() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockPosts: InstagramPost[] = [
      {
        id: "1",
        caption: "Geweldige training vandaag! #dmonhockey #hockey #training",
        media_url: "/placeholder.svg",
        media_type: "IMAGE",
        timestamp: "2024-01-15T10:00:00Z",
        permalink: "https://instagram.com/p/example1",
      },
      {
        id: "2",
        caption: "Match van het weekend — fantastische prestatie van het team!",
        media_url: "/placeholder.svg",
        media_type: "IMAGE",
        timestamp: "2024-01-12T15:30:00Z",
        permalink: "https://instagram.com/p/example2",
      },
      {
        id: "3",
        caption: "Nieuwe teamfoto — trots op onze club! #dmon #hockeyteam",
        media_url: "/placeholder.svg",
        media_type: "IMAGE",
        timestamp: "2024-01-10T12:00:00Z",
        permalink: "https://instagram.com/p/example3",
      },
      {
        id: "4",
        caption: "Jeugdtraining in volle gang — de toekomst van onze club!",
        media_url: "/placeholder.svg",
        media_type: "IMAGE",
        timestamp: "2024-01-08T09:00:00Z",
        permalink: "https://instagram.com/p/example4",
      },
      {
        id: "5",
        caption: "Sponsorevent was een groot succes! Bedankt alle sponsors!",
        media_url: "/placeholder.svg",
        media_type: "IMAGE",
        timestamp: "2024-01-05T18:00:00Z",
        permalink: "https://instagram.com/p/example5",
      },
      {
        id: "6",
        caption: "Wintertraining indoor — altijd in beweging!",
        media_url: "/placeholder.svg",
        media_type: "IMAGE",
        timestamp: "2024-01-03T11:00:00Z",
        permalink: "https://instagram.com/p/example6",
      },
    ];

    const fetchInstagramPosts = async () => {
      try {
        const { data, error } = await supabase.functions.invoke(
          "fetch-instagram-posts",
          {
            body: { limit: 9 },
          }
        );

        if (error) {
          console.error("Error fetching Instagram posts:", error);
          setPosts(mockPosts);
        } else {
          setPosts(data.posts || []);
        }
      } catch (error) {
        console.error("Error calling Instagram function:", error);
        setPosts(mockPosts);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString("nl-NL", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (loading) {
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
                <Instagram className="h-3.5 w-3.5" />
                @dmon_hockey
              </div>
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight lg:text-6xl">
                Socials
              </h1>
              <p className="mt-4 max-w-2xl text-base lg:text-lg text-primary-foreground/85">
                Blijf op de hoogte van alles wat er bij D-mon gebeurt — van
                trainingen en matches tot evenementen en clubnieuws.
              </p>
            </div>
          </div>
        </section>

        {/* Loading skeleton */}
        <div className="container mx-auto px-4 py-12 lg:py-16 max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse overflow-hidden">
                <div className="h-64 bg-muted"></div>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
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
        <div className="container mx-auto px-4 py-16 lg:py-24 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
              <Instagram className="h-3.5 w-3.5" />
              @dmon_hockey
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight lg:text-6xl">
              Socials
            </h1>
            <p className="mt-4 max-w-2xl text-base lg:text-lg text-primary-foreground/85">
              Blijf op de hoogte van alles wat er bij D-mon gebeurt — van
              trainingen en matches tot evenementen en clubnieuws.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                variant="secondary"
                className="font-semibold"
                onClick={() =>
                  window.open("https://instagram.com/dmon_hockey", "_blank")
                }
              >
                Volg ons op Instagram
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                onClick={() =>
                  window.open("https://instagram.com/dmon_hockey", "_blank")
                }
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Open in app
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-primary-foreground/85">
              <div className="flex items-center gap-2">
                <ImageOff className="h-4 w-4" />
                <span className="font-semibold text-primary-foreground">
                  {posts.length}
                </span>
                <span>laatste posts</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <span>Altijd up-to-date</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <div className="container mx-auto px-4 py-12 lg:py-16 max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              <Instagram className="h-3.5 w-3.5" />
              Feed
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
              Laatste posts
            </h2>
            <p className="mt-2 text-muted-foreground">
              Een selectie van onze recentste activiteiten op het veld en daarbuiten.
            </p>
          </div>
          <Badge variant="outline" className="hidden sm:inline-flex">
            {posts.length} posts
          </Badge>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={post.media_url}
                  alt={
                    post.caption
                      ? post.caption.substring(0, 120)
                      : `Instagram post van D-mon Hockey Club`
                  }
                  loading="lazy"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge
                  variant="secondary"
                  className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm"
                >
                  {formatDate(post.timestamp)}
                </Badge>
              </div>

              <CardContent className="p-5">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                  {post.caption}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Heart className="h-4 w-4" />
                      <span className="text-xs">-</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-xs">-</span>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(post.permalink, "_blank")}
                    className="h-8 px-2 text-muted-foreground hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Bekijk
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-br from-primary to-primary-light">
          <div className="container mx-auto px-4 py-16 lg:py-20">
            <div className="mx-auto max-w-3xl text-center text-primary-foreground">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
                <Instagram className="h-3.5 w-3.5" />
                Instagram
              </div>
              <h2 className="mt-6 font-display text-3xl font-bold lg:text-4xl">
                Mis niets van D-mon
              </h2>
              <p className="mt-4 text-primary-foreground/85 text-lg">
                Volg ons op Instagram voor het laatste nieuws, foto's van
                matches en achter-de-schermen momenten.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button
                  size="lg"
                  variant="secondary"
                  className="font-semibold"
                  onClick={() =>
                    window.open("https://instagram.com/dmon_hockey", "_blank")
                  }
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  Volg @dmon_hockey
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  onClick={() =>
                    window.open("https://instagram.com/dmon_hockey", "_blank")
                  }
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open Instagram
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
