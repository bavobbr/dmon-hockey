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
      } = await supabase.from('sponsors').select('id, name, logo_path, website_url, tier').eq('active', true).order('tier', {
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
      const { data, error } = await supabase.functions.invoke('fetch-instagram-posts');
      
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
      } = await supabase.from('teams').select('*').eq('active', true).order('created_at', {
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
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-24 lg:py-32 relative overflow-x-hidden">
        <div className="container mx-auto px-4 text-center relative z-10 max-w-full">
          <div className="flex justify-center mb-8 fade-in-up">
            <div className="bg-white rounded-full p-6 shadow-glow pulse-glow float-animation">
              <img src="/lovable-uploads/03104bbc-f9de-44a2-a8b0-aedb91fd1c6c.png" alt="D-mon Hockey Club Logo" className="w-28 h-28 object-contain" />
            </div>
          </div>
          <h1 className="font-display text-5xl lg:text-7xl font-bold mb-6 fade-in-up tracking-tight">
            D-mon Hockey Club
          </h1>
          <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed fade-in-up opacity-90">
            Welkom bij onze veldhockey gemeenschap in België. Sluit je aan voor trainingen, wedstrijden, en de passie voor hockey.
          </p>
          {user ? <div className="space-y-4">
              <div className="text-center">
                <p className="text-lg mb-2">Welkom terug, {user.email}!</p>
                {isAdmin && <span className="text-sm bg-accent text-accent-foreground px-3 py-1 rounded-full mr-2">Admin</span>}
                {isModerator && !isAdmin && <span className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full mr-2">Moderator</span>}
              </div>
              <div className="flex gap-4 justify-center flex-wrap">
                {(isAdmin || isModerator) && <Link to="/admin">
                    <Button size="lg" variant="secondary">
                      Admin Dashboard
                    </Button>
                  </Link>}
                <Button size="lg" variant="outline" onClick={handleSignOut} className="border-white/50 text-white bg-white/10 hover:bg-white/20 hover:text-white hover:border-white/70 px-8 py-4 backdrop-blur-sm">
                  Afmelden
                </Button>
              </div>
            </div> : <div className="flex gap-6 justify-center flex-wrap fade-in-up">
              <Link to="/membership/info">
                <Button size="lg" variant="hero" className="px-8 py-4">
                  Word Lid van Onze Club
                </Button>
              </Link>
              <a href="https://app.twizzit.com/v2/home" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-white/50 text-white bg-white/10 hover:bg-white/20 hover:text-white hover:border-white/70 px-8 py-4 backdrop-blur-sm">
                  Leden Login
                </Button>
              </a>
            </div>}
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-20 px-4 bg-gradient-subtle overflow-x-hidden">
        <div className="container mx-auto max-w-full">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-3xl font-bold text-foreground">Wat We Bieden</h2>
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
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Wekelijkse trainingen met ervaren coaches om je techniek en strategie te verbeteren.
                </p>
              </CardContent>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={trainingImage} 
                  alt="Training sessie" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 contrast-100 saturate-90"
                />
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
                <img 
                  src={competitiveImage} 
                  alt="Competitieve wedstrijd" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 contrast-100 saturate-90"
                />
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
                <img 
                  src={familyImage} 
                  alt="Club familie" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 contrast-100 saturate-90"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Announcements */}
      <section className="py-20 px-4 overflow-x-hidden">
        <div className="container mx-auto max-w-full">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground">Laatste Nieuws</h2>
            <Link to="/nieuws">
              <Button variant="outline" size="sm">
                Bekijk Meer
              </Button>
            </Link>
          </div>
          
          {announcementsLoading ? <div className="grid md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-3 bg-muted rounded w-1/2"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-3 bg-muted rounded mb-2"></div>
                    <div className="h-3 bg-muted rounded mb-2"></div>
                    <div className="h-3 bg-muted rounded w-2/3"></div>
                  </CardContent>
                </Card>)}
            </div> : announcements.length > 0 ? <div className="grid md:grid-cols-3 gap-8">
              {announcements.map((announcement, index) => <Card key={announcement.id} className={`group fade-in-up`} style={{
            animationDelay: `${index * 0.1}s`
          }}>
                  <CardHeader>
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Newspaper className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
                          {announcement.title}
                        </CardTitle>
                      </div>
                      {announcement.featured && <Badge variant="secondary" className="shrink-0 bg-accent/10 text-accent border-accent/20">
                          Uitgelicht
                        </Badge>}
                    </div>
                    <CardDescription className="text-sm text-muted-foreground">
                      {new Date(announcement.created_at).toLocaleDateString("nl-BE")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3 mb-6 leading-relaxed">
                      {announcement.excerpt || announcement.content.substring(0, 150) + '...'}
                    </p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="group-hover:border-primary/50 group-hover:text-primary">
                          Lees Meer
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-xl font-bold mb-2">
                            {announcement.title}
                          </DialogTitle>
                          <DialogDescription className="text-sm text-muted-foreground">
                            {new Date(announcement.created_at).toLocaleDateString("nl-BE")}
                            {announcement.featured && <Badge variant="secondary" className="ml-2 bg-accent/10 text-accent border-accent/20">
                                Uitgelicht
                              </Badge>}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="prose prose-sm max-w-none text-foreground mt-4" dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(announcement.content)
                  }} />
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>)}
            </div> : <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">Nog geen aankondigingen.</p>
              {(isAdmin || isModerator) && <Link to="/admin/announcements/new">
                  <Button>Eerste Aankondiging Maken</Button>
                </Link>}
            </div>}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-full">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground">Aankomende Evenementen</h2>
            <Link to="/events">
              <Button variant="outline" size="sm">
                Bekijk Meer
              </Button>
            </Link>
          </div>
          <UpcomingEvents />
        </div>
      </section>

      {/* Teams Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-full">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground">Onze Teams</h2>
            <Link to="/club/teams">
              <Button variant="outline" size="sm">
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
              {teams.map(team => <Card key={team.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {team.name}
                    </CardTitle>
                    <CardDescription>
                      {team.division} {team.age_group && `• ${team.age_group}`}
                      {team.season && ` • ${team.season}`}
                    </CardDescription>
                  </CardHeader>
                  {team.description && <CardContent>
                      <p className="text-muted-foreground line-clamp-3">
                        {team.description}
                      </p>
                    </CardContent>}
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
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-full">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground">Van Onze Instagram</h2>
            <Link to="/socials">
              <Button variant="outline" size="sm">
                Bekijk Meer
              </Button>
            </Link>
          </div>
          
          {instagramLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <div className="aspect-square bg-muted rounded-t-lg"></div>
                  <CardContent className="p-4">
                    <div className="h-3 bg-muted rounded mb-2"></div>
                    <div className="h-3 bg-muted rounded w-2/3"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : instagramPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {instagramPosts.map((post) => (
                <Card key={post.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img 
                      src={post.media_url} 
                      alt={post.caption || "Instagram post"} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
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
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Volg ons op Instagram voor de nieuwste updates!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-full">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground">Onze Sponsors</h2>
            <Link to="/club/sponsors">
              <Button variant="outline" size="sm">
                Bekijk Meer
              </Button>
            </Link>
          </div>
          
          {sponsorsLoading ? <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[...Array(6)].map((_, i) => <div key={i} className="animate-pulse bg-muted rounded-lg h-24"></div>)}
            </div> : sponsors.length > 0 ? <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {sponsors.map(sponsor => <div key={sponsor.id} className="flex items-center justify-center p-4 bg-card rounded-lg border hover:shadow-lg transition-shadow">
                  {sponsor.logo_path ? <img src={supabase.storage.from('sponsor-logos').getPublicUrl(sponsor.logo_path).data.publicUrl} alt={sponsor.name} className="max-h-16 max-w-full object-contain" /> : <div className="text-center text-sm font-medium text-muted-foreground">
                      {sponsor.name}
                    </div>}
                </div>)}
            </div> : <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">Nog geen sponsors.</p>
              {isAdmin && <Link to="/admin/sponsors/new">
                  <Button>Eerste Sponsor Toevoegen</Button>
                </Link>}
            </div>}
        </div>
      </section>


      {/* Club Colors Showcase */}
      <section className="bg-muted py-[14px]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-2 sm:gap-4 flex-wrap">
            <div className="w-12 h-12 sm:w-20 sm:h-20 bg-primary rounded-lg shadow-lg flex items-center justify-center">
            </div>
            <div className="w-12 h-12 sm:w-20 sm:h-20 bg-secondary rounded-lg shadow-lg flex items-center justify-center">
            </div>
            <div className="w-12 h-12 sm:w-20 sm:h-20 bg-accent rounded-lg shadow-lg flex items-center justify-center">
            </div>
            <div className="w-12 h-12 sm:w-20 sm:h-20 bg-foreground rounded-lg shadow-lg flex items-center justify-center">
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;