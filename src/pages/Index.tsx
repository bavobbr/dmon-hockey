import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { user, isAdmin, isModerator, loading } = useAuth();
  const { toast } = useToast();

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
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-4 shadow-lg">
              <img 
                src="/lovable-uploads/03104bbc-f9de-44a2-a8b0-aedb91fd1c6c.png" 
                alt="D-Man Hockey Club Logo" 
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">D-Man Hockey Club</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
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
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" variant="secondary">Join Our Club</Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Learn More
              </Button>
              <Link to="/auth">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Member Login
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="text-primary">Training Sessions</CardTitle>
                <CardDescription>Professional coaching for all skill levels</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Weekly training sessions with experienced coaches to improve your technique and game strategy.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-secondary/20">
              <CardHeader>
                <CardTitle className="text-secondary">Competitive Matches</CardTitle>
                <CardDescription>Regular league and tournament play</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Participate in local and regional competitions representing our club with pride.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="text-accent">Community Spirit</CardTitle>
                <CardDescription>A welcoming hockey family</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Join a supportive community of hockey enthusiasts who share your passion for the sport.
                </p>
              </CardContent>
            </Card>
          </div>
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
