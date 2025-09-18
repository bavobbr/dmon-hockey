import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import { format, isToday, isTomorrow, isThisWeek } from "date-fns";
import { nl } from "date-fns/locale";
import DOMPurify from "dompurify";

interface TwizzitEvent {
  id: string;
  name: string;
  start_at: string;
  address: string | null;
  description: string | null;
}

const Events = () => {
  const [events, setEvents] = useState<TwizzitEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase
          .from("twizzit_events")
          .select("id, name, start_at, address, description")
          .gte("start_at", new Date().toISOString())
          .order("start_at", { ascending: true })
          .limit(50);

        if (error) throw error;

        setEvents(data || []);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Failed to load events");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const getEventBadge = (startDate: Date) => {
    if (isToday(startDate)) {
      return <Badge variant="destructive">Vandaag</Badge>;
    }
    if (isTomorrow(startDate)) {
      return <Badge variant="secondary">Morgen</Badge>;
    }
    if (isThisWeek(startDate)) {
      return <Badge variant="default" className="bg-primary text-primary-foreground">Deze week</Badge>;
    }
    return null;
  };

  const formatEventDescription = (description: string | null) => {
    if (!description) return null;
    
    // Clean and sanitize HTML
    const cleanDescription = DOMPurify.sanitize(description, {
      ALLOWED_TAGS: ['br', 'small', 'a'],
      ALLOWED_ATTR: ['href', 'target']
    });
    
    return (
      <div 
        className="text-sm text-muted-foreground mt-2 prose prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: cleanDescription }}
      />
    );
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Agenda</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Alle komende evenementen en wedstrijden
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <h1 className="text-3xl font-bold text-foreground">Agenda</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Alle komende evenementen en wedstrijden
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

  if (events.length === 0) {
    return (
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Agenda</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Alle komende evenementen en wedstrijden
          </p>
        </div>
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">
              Geen komende evenementen gevonden.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Agenda</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Alle komende evenementen en wedstrijden
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => {
          const startDate = new Date(event.start_at);
          const badge = getEventBadge(startDate);
          
          return (
            <Card key={event.id} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg leading-tight">{event.name}</CardTitle>
                  {badge}
                </div>
                <CardDescription className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 flex-shrink-0" />
                  {format(startDate, "EEEE d MMMM yyyy", { locale: nl })}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                    <span className="font-medium">
                      {format(startDate, "HH:mm", { locale: nl })}
                    </span>
                  </div>
                  
                  {event.address && (
                    <div className="flex items-start gap-2 text-sm">
                      <MapPin className="h-4 w-4 flex-shrink-0 text-muted-foreground mt-0.5" />
                      <span className="text-muted-foreground">{event.address}</span>
                    </div>
                  )}
                  
                  {event.description && formatEventDescription(event.description)}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Events;