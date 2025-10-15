import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { parseISO } from "date-fns";
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
        <CardTitle>Volgende evenementen</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <p className="text-muted-foreground">Loading events...</p>
        ) : error ? (
          <p className="text-muted-foreground">{error}</p>
        ) : events.length === 0 ? (
          <p className="text-muted-foreground">No upcoming events.</p>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {events.map((event) => {
              // Parse the timestamp as-is (already in CET) without timezone conversion
              const startDate = parseISO(event.start_at.replace('Z', ''));
              return (
                <div key={event.id} className="break-inside-avoid mb-4 group">
                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {event.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {startDate.toLocaleString("nl-BE")}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UpcomingEvents;
