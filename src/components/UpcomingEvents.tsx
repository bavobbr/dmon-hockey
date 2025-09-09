import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import DOMPurify from "dompurify";

interface TwizzitEvent {
  id: string;
  name: string;
  start_at: string;
  address: string | null;
  description: string | null;
}

const UpcomingEvents = () => {
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
          .limit(10);

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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <p className="text-muted-foreground">Loading events...</p>
        ) : error ? (
          <p className="text-muted-foreground">{error}</p>
        ) : events.length === 0 ? (
          <p className="text-muted-foreground">No upcoming events.</p>
        ) : (
          <ul className="space-y-4">
            {events.map((event) => (
              <li key={event.id}>
                <h3 className="font-medium">{event.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {new Date(event.start_at).toLocaleString("nl-BE")}
                </p>
                {event.address && (
                  <p className="text-sm text-muted-foreground">{event.address}</p>
                )}
                {event.description && (
                  <div
                    className="text-sm mt-2"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(event.description),
                    }}
                  />
                )}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default UpcomingEvents;
