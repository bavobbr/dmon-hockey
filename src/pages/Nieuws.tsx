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

const Nieuws = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

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

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Nieuws</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Alle aankondigingen en nieuws van D-mon Hockey Club
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-4 bg-muted rounded w-3/4"></div>
                <div className="h-3 bg-muted rounded w-1/2"></div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="h-3 bg-muted rounded w-full"></div>
                  <div className="h-3 bg-muted rounded w-2/3"></div>
                </div>
              </CardContent>
            </Card>
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
          <p className="text-lg text-muted-foreground mt-2">
            Alle aankondigingen en nieuws van D-mon Hockey Club
          </p>
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
            <p className="text-center text-muted-foreground">
              Geen nieuws gevonden.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcements.map((announcement, index) => {
            const IconComponent = (Icons as any)[announcement.icon || 'Newspaper'] || Icons.Newspaper;
            
            return (
              <Card 
                key={announcement.id} 
                className="group fade-in-up hover:shadow-lg transition-shadow duration-200" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 rounded-lg bg-primary/10 shrink-0">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
                          {announcement.title}
                        </CardTitle>
                        {announcement.featured && (
                          <Badge variant="secondary" className="shrink-0 bg-accent/10 text-accent border-accent/20">
                            Uitgelicht
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-sm text-muted-foreground mt-2">
                        {new Date(announcement.created_at).toLocaleDateString("nl-BE", {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </CardDescription>
                    </div>
                  </div>
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
                        {new Date(announcement.created_at).toLocaleDateString("nl-BE", {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
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
                      dangerouslySetInnerHTML={{ 
                        __html: DOMPurify.sanitize(announcement.content) 
                      }} 
                    />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Nieuws;