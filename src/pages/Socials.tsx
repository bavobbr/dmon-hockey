import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Heart, MessageCircle, Share2 } from "lucide-react";
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
        caption: "Geweldige training vandaag! 🏑 #dmanhockey #hockey #training",
        media_url: "/placeholder.svg",
        media_type: "IMAGE",
        timestamp: "2024-01-15T10:00:00Z",
        permalink: "https://instagram.com/p/example1"
      },
      {
        id: "2",
        caption: "Match van het weekend 💪 Fantastische prestatie van het team!",
        media_url: "/placeholder.svg",
        media_type: "IMAGE",
        timestamp: "2024-01-12T15:30:00Z",
        permalink: "https://instagram.com/p/example2"
      },
      {
        id: "3",
        caption: "Nieuwe teamfoto 📸 Trots op onze club! #dman #hockeyteam",
        media_url: "/placeholder.svg",
        media_type: "IMAGE",
        timestamp: "2024-01-10T12:00:00Z",
        permalink: "https://instagram.com/p/example3"
      },
      {
        id: "4",
        caption: "Jeugdtraining in volle gang 🌟 De toekomst van onze club!",
        media_url: "/placeholder.svg",
        media_type: "IMAGE",
        timestamp: "2024-01-08T09:00:00Z",
        permalink: "https://instagram.com/p/example4"
      },
      {
        id: "5",
        caption: "Sponsorevent was een groot succes! 🎉 Bedankt alle sponsors!",
        media_url: "/placeholder.svg",
        media_type: "IMAGE",
        timestamp: "2024-01-05T18:00:00Z",
        permalink: "https://instagram.com/p/example5"
      }
    ];

    const fetchInstagramPosts = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('fetch-instagram-posts');
        
        if (error) {
          console.error('Error fetching Instagram posts:', error);
          // Fallback to mock data on error
          setPosts(mockPosts);
        } else {
          setPosts(data.posts || []);
        }
      } catch (error) {
        console.error('Error calling Instagram function:', error);
        // Fallback to mock data on error
        setPosts(mockPosts);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('nl-NL', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Socials</h1>
            <p className="text-muted-foreground">Laden van de laatste posts...</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <div className="h-64 bg-muted rounded-t-lg"></div>
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
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Socials</h1>
          <p className="text-muted-foreground mb-6">
            Volg ons op Instagram{" "}
            <a 
              href="https://instagram.com/dmon_hockey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              @dmon_hockey
            </a>
          </p>
          <Badge variant="secondary" className="mb-6">
            Laatste 5 posts
          </Badge>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={post.media_url} 
                  alt="Instagram post"
                  className="w-full h-64 object-cover"
                />
                <Badge 
                  variant="secondary" 
                  className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm"
                >
                  {formatDate(post.timestamp)}
                </Badge>
              </div>
              
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {post.caption}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4 text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span className="text-xs">-</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-xs">-</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => window.open(post.permalink, '_blank')}
                    className="h-8 px-2"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Bekijk
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center pt-6">
          <Button 
            variant="outline"
            onClick={() => window.open('https://instagram.com/dmon_hockey', '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Bekijk meer op Instagram
          </Button>
        </div>
      </div>
    </div>
  );
}