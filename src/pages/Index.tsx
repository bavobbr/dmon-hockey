import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

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
  logo_url: string;
  website_url: string;
  tier: string;
}

interface BoardMember {
  id: string;
  name: string;
  position: string;
  photo_url: string;
  order_index: number;
}

const Index = () => {
  const { user, isAdmin, isModerator, loading } = useAuth();
  const { toast } = useToast();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [boardMembers, setBoardMembers] = useState<BoardMember[]>([]);
  const [announcementsLoading, setAnnouncementsLoading] = useState(true);
  const [teamsLoading, setTeamsLoading] = useState(true);
  const [sponsorsLoading, setSponsorsLoading] = useState(true);
  const [boardLoading, setBoardLoading] = useState(true);

  useEffect(() => {
    fetchAnnouncements();
    fetchTeams();
    fetchSponsors();
    fetchBoardMembers();
  }, []);

  const fetchSponsors = async () => {
    try {
      const { data, error } = await supabase
        .from('sponsors')
        .select('id, name, logo_url, website_url, tier')
        .eq('active', true)
        .order('tier', { ascending: true });

      if (error) throw error;
      setSponsors(data || []);
    } catch (error) {
      console.error('Error fetching sponsors:', error);
    } finally {
      setSponsorsLoading(false);
    }
  };

  const fetchBoardMembers = async () => {
    try {
      const { data, error } = await supabase
        .from('board_members_public')
        .select('id, name, position, photo_url, order_index')
        .limit(6);

      if (error) throw error;
      setBoardMembers(data || []);
    } catch (error) {
      console.error('Error fetching board members:', error);
    } finally {
      setBoardLoading(false);
    }
  };

  const fetchTeams = async () => {
    try {
      const { data, error } = await supabase
        .from('teams')
        .select('*')
        .eq('active', true)
        .order('created_at', { ascending: false })
        .limit(6);

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
      const { data, error } = await supabase
        .from('announcements')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })
        .limit(3);

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
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast({
        title: "Signed out successfully",
        description: "You have been logged out of your account.",
      });
    } catch (error) {
      console.error('Error signing out:', error);
      toast({
        title: "Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-8 fade-in-up">
            <div className="bg-white rounded-full p-6 shadow-glow pulse-glow float-animation">
              <img 
                src="/lovable-uploads/03104bbc-f9de-44a2-a8b0-aedb91fd1c6c.png" 
                alt="D-mon Hockey Club Logo" 
                className="w-28 h-28 object-contain"
              />
            </div>
          </div>
          <h1 className="font-display text-5xl lg:text-7xl font-bold mb-6 fade-in-up tracking-tight">
            D-mon Hockey Club
          </h1>
          <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed fade-in-up opacity-90">
            Welcome to our field hockey community in Belgium. Join us for training, matches, and the passion of hockey.
          </p>
          {user ? (
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-lg mb-2">Welcome back, {user.email}!</p>
                {isAdmin && <span className="text-sm bg-accent text-accent-foreground px-3 py-1 rounded-full mr-2">Admin</span>}
                {isModerator && !isAdmin && <span className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full mr-2">Moderator</span>}
              </div>
              <div className="flex gap-4 justify-center flex-wrap">
                {(isAdmin || isModerator) && (
                  <Link to="/admin">
                    <Button size="lg" variant="secondary">
                      Admin Dashboard
                    </Button>
                  </Link>
                )}
                <Button size="lg" variant="outline" onClick={handleSignOut} className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Sign Out
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex gap-6 justify-center flex-wrap fade-in-up">
              <Button size="lg" variant="hero" className="px-8 py-4">
                Join Our Club
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50 px-8 py-4 backdrop-blur-sm">
                Learn More
              </Button>
              <Link to="/auth">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50 px-8 py-4 backdrop-blur-sm">
                  Member Login
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20 hover:border-primary/40 group fade-in-up">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="w-6 h-6 bg-primary rounded-sm"></div>
                </div>
                <CardTitle className="text-primary text-xl">Training Sessions</CardTitle>
                <CardDescription className="text-base">Professional coaching for all skill levels</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Weekly training sessions with experienced coaches to improve your technique and game strategy.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-secondary/20 hover:border-secondary/40 group fade-in-up">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <div className="w-6 h-6 bg-secondary rounded-sm"></div>
                </div>
                <CardTitle className="text-secondary text-xl">Competitive Matches</CardTitle>
                <CardDescription className="text-base">Regular league and tournament play</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Participate in local and regional competitions representing our club with pride.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-accent/20 hover:border-accent/40 group fade-in-up">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <div className="w-6 h-6 bg-accent rounded-sm"></div>
                </div>
                <CardTitle className="text-accent text-xl">Community Spirit</CardTitle>
                <CardDescription className="text-base">A welcoming hockey family</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Join a supportive community of hockey enthusiasts who share your passion for the sport.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Announcements */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground">Latest News</h2>
          
          {announcementsLoading ? (
            <div className="grid md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-3 bg-muted rounded w-1/2"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-3 bg-muted rounded mb-2"></div>
                    <div className="h-3 bg-muted rounded mb-2"></div>
                    <div className="h-3 bg-muted rounded w-2/3"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : announcements.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {announcements.map((announcement, index) => (
                <Card key={announcement.id} className={`group fade-in-up`} style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
                        {announcement.title}
                      </CardTitle>
                      {announcement.featured && (
                        <Badge variant="secondary" className="ml-2 shrink-0 bg-accent/10 text-accent border-accent/20">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-sm text-muted-foreground">
                      {new Date(announcement.created_at).toLocaleDateString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3 mb-6 leading-relaxed">
                      {announcement.excerpt || announcement.content.substring(0, 150) + '...'}
                    </p>
                    <Button variant="outline" size="sm" className="group-hover:border-primary/50 group-hover:text-primary">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No announcements yet.</p>
              {(isAdmin || isModerator) && (
                <Link to="/admin/announcements/new">
                  <Button>Create First Announcement</Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Teams Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Teams</h2>
          
          {teamsLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-3 bg-muted rounded w-1/2"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-3 bg-muted rounded mb-2"></div>
                    <div className="h-3 bg-muted rounded w-2/3"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : teams.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teams.map((team) => (
                <Card key={team.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {team.name}
                    </CardTitle>
                    <CardDescription>
                      {team.division} {team.age_group && `• ${team.age_group}`}
                      {team.season && ` • ${team.season}`}
                    </CardDescription>
                  </CardHeader>
                  {team.description && (
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-3">
                        {team.description}
                      </p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No teams available yet.</p>
              {isAdmin && (
                <Link to="/admin/teams/new">
                  <Button>Add First Team</Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Sponsors</h2>
          
          {sponsorsLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse bg-muted rounded-lg h-24"></div>
              ))}
            </div>
          ) : sponsors.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {sponsors.map((sponsor) => (
                <div key={sponsor.id} className="flex items-center justify-center p-4 bg-card rounded-lg border hover:shadow-lg transition-shadow">
                  {sponsor.logo_url ? (
                    <img 
                      src={sponsor.logo_url} 
                      alt={sponsor.name}
                      className="max-h-16 max-w-full object-contain"
                    />
                  ) : (
                    <div className="text-center text-sm font-medium text-muted-foreground">
                      {sponsor.name}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No sponsors yet.</p>
              {isAdmin && (
                <Link to="/admin/sponsors/new">
                  <Button>Add First Sponsor</Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Board Members Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Leadership</h2>
          
          {boardLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-muted rounded-full"></div>
                      <div className="flex-1">
                        <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-muted rounded w-1/2"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : boardMembers.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {boardMembers.map((member) => (
                <Card key={member.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      {member.photo_url ? (
                        <img 
                          src={member.photo_url} 
                          alt={member.name}
                          className="w-16 h-16 object-cover rounded-full border"
                        />
                      ) : (
                        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center text-muted-foreground">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{member.name}</h3>
                        <p className="text-sm text-primary font-medium">{member.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No board members listed yet.</p>
              {isAdmin && (
                <Link to="/admin/board-members/new">
                  <Button>Add First Board Member</Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Club Colors Showcase */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Club Colors</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="w-20 h-20 bg-primary rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">Blue</span>
            </div>
            <div className="w-20 h-20 bg-secondary rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-secondary-foreground font-bold text-xs">Red</span>
            </div>
            <div className="w-20 h-20 bg-accent rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-xs">Gold</span>
            </div>
            <div className="w-20 h-20 bg-foreground rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-background font-bold text-xs">Dark</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
