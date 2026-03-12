import { useEffect, useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { nl } from "date-fns/locale";
import { formatInTimeZone } from "date-fns-tz/formatInTimeZone";
import { fromZonedTime } from "date-fns-tz/fromZonedTime";
import { MapPin, Clock, ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";

interface TwizzitEvent {
  id: string;
  name: string;
  start_at: string;
  end_at: string;
  address: string | null;
  description: string | null;
  is_home_game: boolean | null;
  home_team_name: string | null;
  away_team_name: string | null;
  event_type_id: number | null;
}

function parseEventDate(startAt: string) {
  const naive = startAt.replace(/Z|[+-]\d{2}:?\d{2}$/, "");
  return fromZonedTime(naive, "Europe/Brussels");
}

const EventCard = ({ event }: { event: TwizzitEvent }) => {
  const date = parseEventDate(event.start_at);
  const dayName = formatInTimeZone(date, "Europe/Brussels", "EEE", { locale: nl });
  const dayNum = formatInTimeZone(date, "Europe/Brussels", "d", { locale: nl });
  const month = formatInTimeZone(date, "Europe/Brussels", "MMM", { locale: nl });
  const time = formatInTimeZone(date, "Europe/Brussels", "HH:mm", { locale: nl });

  const isMatch = event.event_type_id === 1;

  return (
    <Card className="group h-full border hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden">
      <CardContent className="p-0 flex h-full">
        {/* Date badge */}
        <div className="shrink-0 w-20 flex flex-col items-center justify-center bg-primary/5 group-hover:bg-primary/10 transition-colors border-r border-border">
          <span className="text-xs font-medium text-primary uppercase">{dayName}</span>
          <span className="text-2xl font-bold text-foreground leading-none mt-0.5">{dayNum}</span>
          <span className="text-xs text-muted-foreground uppercase">{month}</span>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 min-w-0">
          <h4 className="font-semibold text-foreground text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors">
            {event.name}
          </h4>

          {/* Match score line */}
          {isMatch && event.home_team_name && event.away_team_name && (
            <p className="text-xs text-muted-foreground mt-1.5 truncate">
              {event.home_team_name} vs {event.away_team_name}
            </p>
          )}

          <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {time}
            </span>
            {event.address && (
              <span className="flex items-center gap-1 truncate">
                <MapPin className="h-3 w-3 shrink-0" />
                <span className="truncate">{event.address}</span>
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const UpcomingEvents = () => {
  const [events, setEvents] = useState<TwizzitEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase
          .from("twizzit_events")
          .select("id, name, start_at, end_at, address, description, is_home_game, home_team_name, away_team_name, event_type_id")
          .gte("start_at", new Date().toISOString())
          .order("start_at", { ascending: true })
          .limit(12);

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

  if (loading) {
    return (
      <div className="flex gap-4 overflow-hidden">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="animate-pulse rounded-xl bg-muted h-24 min-w-[280px] flex-1" />
        ))}
      </div>
    );
  }

  if (error || events.length === 0) {
    return (
      <Card>
        <CardContent className="py-8 text-center">
          <Calendar className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground">
            {error || "Geen aankomende evenementen."}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="relative group/carousel">
      {/* Navigation buttons */}
      {canScrollPrev && (
        <Button
          variant="outline"
          size="icon"
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full shadow-md bg-background/90 backdrop-blur-sm opacity-0 group-hover/carousel:opacity-100 transition-opacity"
          onClick={() => emblaApi?.scrollPrev()}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      )}
      {canScrollNext && (
        <Button
          variant="outline"
          size="icon"
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full shadow-md bg-background/90 backdrop-blur-sm opacity-0 group-hover/carousel:opacity-100 transition-opacity"
          onClick={() => emblaApi?.scrollNext()}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      )}

      {/* Carousel */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-4">
          {events.map((event) => (
            <div key={event.id} className="min-w-[280px] max-w-[320px] flex-[0_0_auto]">
              <EventCard event={event} />
            </div>
          ))}

          {/* CTA slide */}
          <div className="min-w-[200px] flex-[0_0_auto] flex items-center">
            <Link to="/events" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors px-6">
              <Calendar className="h-8 w-8" />
              <span className="text-sm font-medium whitespace-nowrap">Bekijk alle events →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
