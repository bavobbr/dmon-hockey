import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import DOMPurify from 'dompurify';
import UpcomingEvents from "@/components/UpcomingEvents";
import { Target, Trophy, Users, Newspaper } from "lucide-react";
import trainingImage from "@/assets/training-card.png";
import competitiveImage from "@/assets/competitive-card.png";
import familyImage from "@/assets/family-card.png";
import { HomepageJsonLd } from "@/components/JsonLd";
import heroAction from "@/assets/hero-action.jpg";
interface Announcement {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  featured: boolean;
  published: boolean;
  created_at: string;
}
interface Team {
  id: string;
  name: string;
  division: string;
  age_group: string;
  description: string;
  season: string;
  image_url: string | null;
}
interface Sponsor {
  id: string;
  name: string;
  logo_path: string;
  website_url: string;
  tier: string;
}
interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  media_type: string;
  timestamp: string;
  permalink: string;
}
const Index = () => {
  const {
    user,
    isAdmin,
    isModerator,
    loading
  } = useAuth();
  const {
    toast
  } = useToast();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);
  const [announcementsLoading, setAnnouncementsLoading] = useState(true);
  const [teamsLoading, setTeamsLoading] = useState(true);
  const [sponsorsLoading, setSponsorsLoading] = useState(true);
  const [instagramLoading, setInstagramLoading] = useState(true);
  useEffect(() => {
    fetchAnnouncements();
    fetchTeams();
    fetchSponsors();
    fetchInstagramPosts();
  }, []);
  const fetchSponsors = async () => {
    try {
      const {
        data,
        error
      } = await supabase.from('sponsors').select('id, name, logo_path, website_url, tier').eq('active', true).in('tier', ['diamond', 'gold', 'silver', 'bronze']).order('tier', {
        ascending: true
      });
      if (error) throw error;
      setSponsors(data || []);
    } catch (error) {
      console.error('Error fetching sponsors:', error);
    } finally {
      setSponsorsLoading(false);
    }
  };
  const fetchInstagramPosts = async () => {
    try {
      const {
        data,
        error
      } = await supabase.functions.invoke('fetch-instagram-posts');
      if (error) {
        console.error('Error fetching Instagram posts:', error);
        return;
      }
      setInstagramPosts(data?.posts?.slice(0, 4) || []);
    } catch (error) {
      console.error('Error fetching Instagram posts:', error);
    } finally {
      setInstagramLoading(false);
    }
  };
  const fetchTeams = async () => {
    try {
      const {
        data,
        error
      } = await supabase.from('teams').select('*').eq('active', true).order('image_url', {
        ascending: false,
        nullsFirst: false
      }).order('created_at', {
        ascending: false
      }).limit(6);
      if (error) throw error;
      setTeams(data || []);
    } catch (error) {
      console.error('Error fetching teams:', error);
    } finally {
      setTeamsLoading(false);
    }
  };
  const fetchAnnouncements = async () => {
    try {
      const {
        data,
        error
      } = await supabase.from('announcements').select('*').eq('published', true).order('created_at', {
        ascending: false
      }).limit(3);
      if (error) throw error;
      setAnnouncements(data || []);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    } finally {
      setAnnouncementsLoading(false);
    }
  };
  const handleSignOut = async () => {
    try {
      const {
        error
      } = await supabase.auth.signOut();
      if (error) throw error;
      toast({
        title: "Succesvol afgemeld",
        description: "Je bent uitgelogd van je account."
      });
    } catch (error) {
      console.error('Error signing out:', error);
      toast({
        title: "Fout",
        description: "Afmelden mislukt. Probeer opnieuw.",
        variant: "destructive"
      });
    }
  };
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>;
  }
  return <div className="min-h-screen bg-background overflow-x-hidden max-w-full">
      <HomepageJsonLd />
      {/* Hero Section — Dynamic Editorial */}
      <section className="relative w-full px-0 lg:px-6 lg:pt-6">
        <div className="relative w-full overflow-hidden bg-primary text-primary-foreground min-h-[560px] md:min-h-[640px] lg:min-h-[680px] lg:rounded-3xl shadow-elegant flex items-center">
          {/* Layer 1: action photography */}
          <img
            src={heroAction}
            alt="Veldhockey actie — D-mon Hockey Club"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity pointer-events-none select-none"
          />
          {/* Layer 2: navy wash + radial highlight */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/95 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary-glow)/0.35),transparent_60%)] pointer-events-none" />

          {/* Layer 3: hockey pitch lines */}
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.10] pointer-events-none"
            viewBox="0 0 1000 1000"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <circle cx="500" cy="500" r="250" stroke="white" strokeWidth="2" />
            <rect x="0" y="250" width="150" height="500" stroke="white" strokeWidth="2" />
            <rect x="850" y="250" width="150" height="500" stroke="white" strokeWidth="2" />
            <line x1="500" y1="0" x2="500" y2="1000" stroke="white" strokeWidth="2" />
          </svg>

          {/* Layer 4: content */}
          <div className="relative z-10 grid lg:grid-cols-12 w-full px-6 md:px-12 lg:px-16 py-16 lg:py-20 gap-8 items-center">
            <div className="lg:col-span-9 flex flex-col items-start">
              <div className="mb-8 p-1.5 bg-white rounded-full shadow-2xl inline-block fade-in-up">
                <img
                  src="/lovable-uploads/03104bbc-f9de-44a2-a8b0-aedb91fd1c6c.png"
                  alt="D-mon Hockey Club logo"
                  className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-full"
                />
              </div>

              <span className="text-accent font-display font-bold tracking-[0.3em] text-xs md:text-sm uppercase mb-3 fade-in-up">
                Welkom bij de Club
              </span>

              <h1 className="font-display uppercase text-white leading-[0.9]  text-5xl md:text-7xl lg:text-8xl fade-in-up">
                D-mon<br />
                <span className="relative inline-block">
                  Hockey Club
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-secondary/90" aria-hidden="true" />
                </span>
              </h1>

              <p className="mt-6 text-primary-foreground/80 text-base md:text-xl max-w-xl font-medium leading-relaxed fade-in-up">
                Welkom bij onze veldhockey gemeenschap in België. Sluit je aan voor trainingen, wedstrijden, en de passie voor hockey.
              </p>

              {user ? (
                <div className="mt-8 space-y-4 fade-in-up">
                  <div>
                    <p className="text-base md:text-lg mb-2">Welkom terug, {user.email}!</p>
                    {isAdmin && <span className="text-sm bg-accent text-accent-foreground px-3 py-1 rounded-full mr-2">Admin</span>}
                    {isModerator && !isAdmin && <span className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full mr-2">Moderator</span>}
                  </div>
                  <div className="flex gap-4 flex-wrap">
                    {(isAdmin || isModerator) && (
                      <Link to="/admin">
                        <Button size="lg" variant="secondary">Admin Dashboard</Button>
                      </Link>
                    )}
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={handleSignOut}
                      className="border-white/40 text-white bg-white/10 hover:bg-white/20 hover:text-white hover:border-white/60 backdrop-blur-sm"
                    >
                      Afmelden
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="mt-10 flex flex-wrap gap-4 fade-in-up">
                  <Link to="/lidmaatschap/info">
                    <Button
                      size="lg"
                      className="rounded-full px-8 py-4 bg-secondary text-secondary-foreground hover:bg-secondary-light shadow-lg shadow-secondary/30 hover:-translate-y-0.5 transition-all"
                    >
                      Word Lid van Onze Club
                    </Button>
                  </Link>
                  <a href="https://app.twizzit.com/v2/home" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full px-8 py-4 bg-transparent border-2 border-accent/60 text-accent hover:bg-accent hover:text-accent-foreground hover:border-accent backdrop-blur-sm"
                    >
                      Leden Login
                    </Button>
                  </a>
                </div>
              )}
            </div>

            {/* Vertical watermark */}
            <div className="hidden lg:flex lg:col-span-3 justify-end items-center overflow-hidden">
              <div className="rotate-90 origin-right translate-x-8 whitespace-nowrap">
                <span className="font-display uppercase  text-white/[0.05] select-none text-[10rem] leading-none">
                  Sinds 2023
                </span>
              </div>
            </div>
          </div>

          {/* Bottom accent strip */}
          <div className="absolute bottom-0 right-0 w-1/2 h-1.5 flex pointer-events-none">
            <div className="h-full flex-1 bg-accent" />
            <div className="h-full flex-1 bg-secondary" />
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-24 md:py-32 px-4 bg-gradient-subtle overflow-x-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
            <div className="max-w-xl">
              <span className="text-primary font-display font-bold tracking-[0.25em] text-xs uppercase mb-3 block">
                Wat we bieden
              </span>
              <h2 className="text-4xl md:text-5xl font-display uppercase text-foreground tracking-tight leading-[0.95]">
                Hockey op<br />jouw niveau
              </h2>
            </div>
            <Link to="/club/sfeer">
              <Button variant="outline" size="sm">
                Bekijk Meer
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20 hover:border-primary/40 group fade-in-up overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0 border border-primary/20">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-primary text-xl">Trainingen</CardTitle>
                </div>
                <CardDescription className="text-base">Professionele coaching voor alle niveaus</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-muted-foreground leading-relaxed mb-4">Wekelijkse trainingen met ervaren trainers om je techniek en strategie te verbeteren.</p>
              </CardContent>
              <div className="relative h-48 overflow-hidden">
                <img src={trainingImage} alt="Training sessie" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 contrast-100 saturate-90" />
              </div>
            </Card>
            
            <Card className="border-secondary/20 hover:border-secondary/40 group fade-in-up overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors shrink-0 border border-secondary/20">
                    <Trophy className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-secondary text-xl">Competitieve Wedstrijden</CardTitle>
                </div>
                <CardDescription className="text-base">Competitie en toernooien</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Deelnemen aan regionale en nationale competities om onze club met trots te vertegenwoordigen.
                </p>
              </CardContent>
              <div className="relative h-48 overflow-hidden">
                <img src={competitiveImage} alt="Competitieve wedstrijd" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 contrast-100 saturate-90" />
              </div>
            </Card>
            
            <Card className="border-accent/20 hover:border-accent/40 group fade-in-up overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0 border border-accent/20">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-accent text-xl">Familieclub</CardTitle>
                </div>
                <CardDescription className="text-base">Een gastvrije hockeyfamilie</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sluit je aan bij een ondersteunende gemeenschap van hockeyliefhebbers die je passie voor de sport delen.
                </p>
              </CardContent>
              <div className="relative h-48 overflow-hidden">
                <img src={familyImage} alt="Club familie" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 contrast-100 saturate-90" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Announcements - Editorial Grid */}
      <section className="py-24 md:py-32 px-4 bg-muted/30 overflow-x-hidden">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-l-4 border-primary pl-6 md:pl-8">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase block">
                Blijf op de hoogte
              </span>
              <h2 className="text-5xl md:text-6xl font-display font-extrabold text-foreground uppercase tracking-tight leading-none">
                Laatste Nieuws
              </h2>
            </div>
            <Link to="/nieuws" className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all uppercase tracking-wide text-sm">
              Alle berichten
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {announcementsLoading ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-8 animate-pulse">
                <div className="aspect-[16/9] bg-muted rounded-lg mb-6" />
                <div className="h-4 bg-muted rounded w-1/3 mb-4" />
                <div className="h-8 bg-muted rounded w-3/4 mb-3" />
                <div className="h-4 bg-muted rounded w-full" />
              </div>
              <div className="lg:col-span-4 flex flex-col gap-10 lg:border-l border-border lg:pl-10">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-video bg-muted rounded-lg mb-4" />
                    <div className="h-3 bg-muted rounded w-1/3 mb-2" />
                    <div className="h-5 bg-muted rounded w-3/4" />
                  </div>
                ))}
              </div>
            </div>
          ) : announcements.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Featured Article */}
              {(() => {
                const featured = announcements[0];
                const imgMatch = featured.content.match(/<img[^>]+src=["']([^"']+)["']/i);
                const featuredImage = imgMatch ? imgMatch[1] : null;
                return (
                  <Dialog key={featured.id}>
                    <DialogTrigger asChild>
                      <article className="lg:col-span-8 group cursor-pointer fade-in-up">
                        <div className="relative overflow-hidden bg-muted aspect-[16/9] mb-6 rounded-lg">
                          {featuredImage ? (
                            <img
                              src={featuredImage}
                              alt={featured.title}
                              loading="lazy"
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                              <Newspaper className="w-16 h-16 text-primary/40" />
                            </div>
                          )}
                          <div className="absolute top-6 left-6">
                            <span className="bg-primary text-primary-foreground px-5 py-2 text-xs font-bold uppercase tracking-wider shadow-lg">
                              {featured.featured ? "Uitgelicht" : "Hoofdartikel"}
                            </span>
                          </div>
                        </div>
                        <div className="max-w-3xl">
                          <div className="flex items-center gap-4 mb-4">
                            <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                              {new Date(featured.created_at).toLocaleDateString("nl-BE", { day: "numeric", month: "long", year: "numeric" })}
                            </span>
                            <span className="h-px w-8 bg-border" />
                            <span className="text-sm font-bold text-primary uppercase">Nieuws</span>
                          </div>
                          <h3 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                            {featured.title}
                          </h3>
                          <p className="text-muted-foreground text-lg leading-relaxed">
                            {featured.excerpt || featured.content.replace(/<[^>]+>/g, "").substring(0, 200) + "..."}
                          </p>
                        </div>
                      </article>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-bold mb-2">{featured.title}</DialogTitle>
                        <DialogDescription className="text-sm text-muted-foreground">
                          {new Date(featured.created_at).toLocaleDateString("nl-BE")}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="prose prose-sm max-w-none text-foreground mt-4" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(featured.content) }} />
                    </DialogContent>
                  </Dialog>
                );
              })()}

              {/* Sidebar Articles */}
              <div className="lg:col-span-4 flex flex-col gap-10 border-t lg:border-t-0 lg:border-l border-border lg:pl-10 pt-10 lg:pt-0">
                {announcements.slice(1, 3).map((announcement) => {
                  const imgMatch = announcement.content.match(/<img[^>]+src=["']([^"']+)["']/i);
                  const sideImage = imgMatch ? imgMatch[1] : null;
                  return (
                    <Dialog key={announcement.id}>
                      <DialogTrigger asChild>
                        <article className="group cursor-pointer fade-in-up">
                          <div className="relative overflow-hidden bg-muted aspect-video mb-4 rounded-lg">
                            {sideImage ? (
                              <img
                                src={sideImage}
                                alt={announcement.title}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                                <Newspaper className="w-10 h-10 text-primary/40" />
                              </div>
                            )}
                          </div>
                          <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2 block">
                            {new Date(announcement.created_at).toLocaleDateString("nl-BE", { day: "numeric", month: "long", year: "numeric" })}
                          </span>
                          <h4 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors mb-2 leading-snug">
                            {announcement.title}
                          </h4>
                          <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                            {announcement.excerpt || announcement.content.replace(/<[^>]+>/g, "").substring(0, 120) + "..."}
                          </p>
                        </article>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-xl font-bold mb-2">{announcement.title}</DialogTitle>
                          <DialogDescription className="text-sm text-muted-foreground">
                            {new Date(announcement.created_at).toLocaleDateString("nl-BE")}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="prose prose-sm max-w-none text-foreground mt-4" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(announcement.content) }} />
                      </DialogContent>
                    </Dialog>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">Nog geen aankondigingen.</p>
              {(isAdmin || isModerator) && (
                <Link to="/admin/announcements/new">
                  <Button>Eerste Aankondiging Maken</Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Full-bleed identity band */}
      <section className="relative w-full overflow-hidden bg-primary text-primary-foreground py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary-glow)/0.35),transparent_55%)] pointer-events-none" />
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
          viewBox="0 0 1200 400"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <circle cx="600" cy="200" r="160" stroke="white" strokeWidth="2" fill="none" />
          <line x1="600" y1="0" x2="600" y2="400" stroke="white" strokeWidth="2" />
          <rect x="0" y="100" width="120" height="200" stroke="white" strokeWidth="2" fill="none" />
          <rect x="1080" y="100" width="120" height="200" stroke="white" strokeWidth="2" fill="none" />
        </svg>

        <div className="relative z-10 container mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-accent font-display font-bold tracking-[0.3em] text-xs uppercase mb-4 block">
                Onze passie
              </span>
              <h2 className="font-display uppercase leading-[0.95] tracking-tight text-4xl md:text-6xl lg:text-7xl">
                Meer dan een<br />
                <span className="relative inline-block">
                  hockeyclub
                  <span className="absolute -bottom-1 left-0 w-full h-2 bg-secondary/90" aria-hidden="true" />
                </span>
              </h2>
              <p className="mt-8 text-primary-foreground/80 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
                Bij D-mon Hockey Club bouwen we elke week aan een gemeenschap waar plezier, sportiviteit en groei centraal staan — voor jong en oud.
              </p>
            </div>
            <div className="lg:col-span-5 grid grid-cols-3 gap-4 md:gap-6">
              <div className="text-center p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="font-display text-4xl md:text-5xl text-accent">2018</div>
                <div className="text-xs md:text-sm uppercase tracking-wider text-primary-foreground/70 mt-2">Opgericht</div>
              </div>
              <div className="text-center p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="font-display text-4xl md:text-5xl text-accent">30+</div>
                <div className="text-xs md:text-sm uppercase tracking-wider text-primary-foreground/70 mt-2">Teams</div>
              </div>
              <div className="text-center p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="font-display text-4xl md:text-5xl text-accent">350+</div>
                <div className="text-xs md:text-sm uppercase tracking-wider text-primary-foreground/70 mt-2">Spelende leden</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-1/3 h-1.5 flex pointer-events-none">
          <div className="h-full flex-1 bg-secondary" />
          <div className="h-full flex-1 bg-accent" />
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
            <div>
              <span className="text-secondary font-display font-bold tracking-[0.25em] text-xs uppercase mb-3 block">
                Agenda
              </span>
              <h2 className="text-4xl md:text-5xl font-display uppercase text-foreground tracking-tight">Aankomende Evenementen</h2>
            </div>
            <Link to="/events">
              <Button variant="outline" size="sm">
                Bekijk Meer
              </Button>
            </Link>
          </div>
          <UpcomingEvents />
        </div>
      </section>

      {/* Teams Section — dark full-bleed */}
      <section className="relative py-24 md:py-32 px-4 bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-foreground via-foreground to-primary/40 pointer-events-none" />
        <div className="relative z-10 container mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
            <div>
              <span className="text-accent font-display font-bold tracking-[0.25em] text-xs uppercase mb-3 block">
                Onze teams
              </span>
              <h2 className="text-4xl md:text-5xl font-display uppercase text-background tracking-tight">Spelend op het veld</h2>
            </div>
            <Link to="/club/teams">
              <Button variant="outline" size="sm" className="border-background/40 text-background bg-background/10 hover:bg-background/20 hover:text-background">
                Bekijk Meer
              </Button>
            </Link>
          </div>
          
          {teamsLoading ? <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-3 bg-muted rounded w-1/2"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-3 bg-muted rounded mb-2"></div>
                    <div className="h-3 bg-muted rounded w-2/3"></div>
                  </CardContent>
                </Card>)}
            </div> : teams.length > 0 ? <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teams.map(team => <Card key={team.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                  {team.image_url && <div className="relative h-48 overflow-hidden">
                      <img src={team.image_url} alt={team.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>}
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {team.name}
                    </CardTitle>
                    <CardDescription>
                      {team.division} {team.age_group && `• ${team.age_group}`}
                      {team.season && ` • ${team.season}`}
                    </CardDescription>
                  </CardHeader>
                </Card>)}
            </div> : <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">Nog geen teams beschikbaar.</p>
              {isAdmin && <Link to="/admin/teams/new">
                  <Button>Eerste Team Toevoegen</Button>
                </Link>}
            </div>}
        </div>
      </section>

      {/* Instagram Posts Section */}
      <section className="py-24 md:py-32 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
            <div>
              <span className="text-accent font-display font-bold tracking-[0.25em] text-xs uppercase mb-3 block">
                Socials
              </span>
              <h2 className="text-4xl md:text-5xl font-display uppercase text-foreground tracking-tight">Van Onze Instagram</h2>
            </div>
            <Link to="/socials">
              <Button variant="outline" size="sm">
                Bekijk Meer
              </Button>
            </Link>
          </div>
          
          {instagramLoading ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => <Card key={i} className="animate-pulse">
                  <div className="aspect-square bg-muted rounded-t-lg"></div>
                  <CardContent className="p-4">
                    <div className="h-3 bg-muted rounded mb-2"></div>
                    <div className="h-3 bg-muted rounded w-2/3"></div>
                  </CardContent>
                </Card>)}
            </div> : instagramPosts.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {instagramPosts.map(post => <Card key={post.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img src={post.media_url} alt={post.caption || "Instagram post"} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                      {post.caption}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(post.timestamp).toLocaleDateString("nl-BE")}
                    </p>
                  </CardContent>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-lg">
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                          Bekijk op Instagram
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>)}
            </div> : <div className="text-center py-12">
              <p className="text-muted-foreground">
                Volg ons op Instagram voor de nieuwste updates!
              </p>
            </div>}
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-24 md:py-32 px-4 bg-muted/30 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-primary font-display font-bold tracking-[0.25em] text-xs uppercase mb-3 block">
              Met de steun van
            </span>
            <h2 className="text-4xl md:text-5xl font-display uppercase text-foreground tracking-tight">Onze Sponsors</h2>
          </div>
          
          {sponsorsLoading ? <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[...Array(6)].map((_, i) => <div key={i} className="animate-pulse bg-muted rounded-lg h-24"></div>)}
            </div> : sponsors.length > 0 ? <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              {sponsors.map(sponsor => <div key={sponsor.id} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
                  {sponsor.logo_path ? <img src={supabase.storage.from('sponsor-logos').getPublicUrl(sponsor.logo_path).data.publicUrl} alt={sponsor.name} loading="lazy" className="max-h-16 max-w-full object-contain" /> : <div className="text-center text-sm font-medium text-muted-foreground">
                      {sponsor.name}
                    </div>}
                </div>)}
            </div> : <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">Nog geen sponsors.</p>
              {isAdmin && <Link to="/admin/sponsors/new">
                  <Button>Eerste Sponsor Toevoegen</Button>
                </Link>}
            </div>}
          <div className="mt-12 text-center">
            <Link to="/club/sponsors">
              <Button variant="outline" size="sm">
                Bekijk alle sponsors
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;