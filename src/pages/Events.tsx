import { useEffect, useState, useRef, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Calendar } from "lucide-react";
import { format, isSameDay } from "date-fns";
import { nl } from "date-fns/locale";
import { EventsPageJsonLd } from "@/components/JsonLd";
import {
  TwizzitEvent,
  EventFilter,
  groupEvents,
  getEventType,
  extractTeamNames,
  eventMatchesTeam,
  parseEventDateZoned,
} from "@/lib/events";
import EventFilters from "@/components/events/EventFilters";
import EventCalendar from "@/components/events/EventCalendar";
import EventGroup from "@/components/events/EventGroup";

const Events = () => {
  const [events, setEvents] = useState<TwizzitEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<EventFilter>("all");
  const [teamFilter, setTeamFilter] = useState("all");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const todayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

        const { data, error } = await supabase
          .from("twizzit_events")
          .select("id, name, start_at, address, description, score, series, home_team_name, away_team_name, is_home_game, groups")
          .gte("start_at", oneWeekAgo.toISOString())
          .order("start_at", { ascending: true })
          .limit(200);

        if (error) throw error;
        setEvents((data as TwizzitEvent[]) || []);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Kon evenementen niet laden");
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  // Auto-scroll to today on load
  useEffect(() => {
    if (!loading && todayRef.current) {
      todayRef.current.scrollIntoView({ behavior: "instant", block: "start" });
    }
  }, [loading]);

  const scrollToToday = () => {
    setSelectedDate(undefined);
    todayRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const teamNames = useMemo(() => extractTeamNames(events), [events]);

  // Apply filters
  const filteredEvents = useMemo(() => {
    let result = events;
    if (filter !== "all") {
      result = result.filter((e) => getEventType(e) === filter);
    }
    if (teamFilter !== "all") {
      result = result.filter((e) => eventMatchesTeam(e, teamFilter));
    }
    if (selectedDate) {
      result = result.filter((e) => {
        try {
          return isSameDay(parseEventDateZoned(e.start_at), selectedDate);
        } catch {
          return false;
        }
      });
    }
    return result;
  }, [events, filter, teamFilter, selectedDate]);

  const grouped = useMemo(() => groupEvents(filteredEvents), [filteredEvents]);
  const showTimeline = !selectedDate;

  const headerContent = (
    <div className="mb-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Agenda</h1>
          <p className="text-muted-foreground mt-1">
            Alle komende evenementen en wedstrijden
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={scrollToToday} className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          Vandaag
        </Button>
      </div>
      <EventFilters
        filter={filter}
        setFilter={setFilter}
        teamFilter={teamFilter}
        setTeamFilter={setTeamFilter}
        teamNames={teamNames}
      />
      {selectedDate && (
        <div className="mt-3 flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            Toon events op {format(selectedDate, "d MMMM yyyy", { locale: nl })}
          </span>
          <Button variant="ghost" size="sm" onClick={() => setSelectedDate(undefined)} className="h-7 text-xs">
            Wis filter
          </Button>
        </div>
      )}
    </div>
  );

  if (loading) {
    return (
      <div className="container mx-auto p-6 max-w-6xl">
        {headerContent}
        <div className="space-y-3 max-w-4xl">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="w-16 h-12 bg-muted rounded" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-muted rounded w-3/4" />
                    <div className="h-3 bg-muted rounded w-1/2" />
                  </div>
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
      <div className="container mx-auto p-6 max-w-6xl">
        {headerContent}
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">{error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <EventsPageJsonLd events={events} />
      {headerContent}

      <div className="flex gap-6">
        {/* Main timeline */}
        <div className="flex-1 min-w-0">
          {showTimeline ? (
            <>
              <EventGroup title="Afgelopen Week" events={grouped.pastWeek} variant="default" />
              <EventGroup ref={todayRef} title="Vandaag" events={grouped.today} variant="today" />
              <EventGroup title="Morgen" events={grouped.tomorrow} variant="tomorrow" />
              <EventGroup title="Deze Week" events={grouped.thisWeek} variant="default" />
              <EventGroup title="Volgende Week" events={grouped.nextWeek} variant="default" />
              {Object.entries(grouped.byMonth).map(([month, events]) => (
                <EventGroup key={month} title={month} events={events} variant="default" />
              ))}
            </>
          ) : (
            <div className="space-y-3">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <EventGroup
                    key="selected-date"
                    title={format(selectedDate!, "EEEE d MMMM", { locale: nl })}
                    events={filteredEvents}
                    variant="today"
                  />
                ))
              ) : (
                <Card>
                  <CardContent className="pt-6 pb-6">
                    <p className="text-center text-muted-foreground">
                      Geen evenementen op deze dag.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {filteredEvents.length === 0 && !selectedDate && (
            <Card>
              <CardContent className="pt-6 pb-6">
                <p className="text-center text-muted-foreground">
                  Geen evenementen gevonden met deze filters.
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Calendar sidebar - hidden on mobile */}
        <div className="hidden lg:block w-[280px] flex-shrink-0">
          <div className="sticky top-4">
            <EventCalendar
              events={events}
              selectedDate={selectedDate}
              onSelectDate={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
