import { useEffect, useState, useRef, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, CalendarDays, Filter, Mail, Users } from "lucide-react";
import { format, isSameDay } from "date-fns";
import { nl } from "date-fns/locale";
import { Link } from "react-router-dom";
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
          .select("id, name, start_at, address, description, score, series, home_team_name, away_team_name, is_home_game, event_type_id, groups")
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

  const scrollToToday = () => {
    setSelectedDate(undefined);
    todayRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const teamNames = useMemo(() => extractTeamNames(events), [events]);

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

  return (
    <div className="min-h-screen bg-background">
      <EventsPageJsonLd events={events} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6 py-16 md:py-24 max-w-6xl">
          <Badge variant="secondary" className="mb-4 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
            Agenda
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Wedstrijden & evenementen
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8">
            Alle komende wedstrijden, trainingen en clubactiviteiten op één plek. Filter op team of type en bekijk wat eraan komt.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              size="lg"
              variant="secondary"
              onClick={scrollToToday}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Spring naar vandaag
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href="#filters">
                <Filter className="mr-2 h-4 w-4" />
                Filter agenda
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky sub-navigation */}
      <nav className="sticky top-0 z-30 border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex gap-6 overflow-x-auto py-3 text-sm">
            <a href="#filters" className="whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground">Filters</a>
            <a href="#tijdlijn" className="whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground">Tijdlijn</a>
            <a href="#kalender" className="whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground">Kalender</a>
          </div>
        </div>
      </nav>

      {/* Filters */}
      <section id="filters" className="container mx-auto px-6 py-10 max-w-6xl">
        <Card className="border-border/60">
          <CardContent className="p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Filter className="h-5 w-5 text-primary" />
                  Filter de agenda
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Verfijn op type evenement en team.
                </p>
              </div>
              <Button variant="outline" size="sm" onClick={scrollToToday} className="flex items-center gap-2 shrink-0">
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
              <div className="mt-4 flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  Toon events op {format(selectedDate, "d MMMM yyyy", { locale: nl })}
                </span>
                <Button variant="ghost" size="sm" onClick={() => setSelectedDate(undefined)} className="h-7 text-xs">
                  Wis filter
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      {/* Timeline + calendar */}
      <section id="tijdlijn" className="container mx-auto px-6 pb-16 max-w-6xl">
        {loading ? (
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
        ) : error ? (
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground">{error}</p>
            </CardContent>
          </Card>
        ) : (
          <div className="flex gap-6">
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
                    <EventGroup
                      key="selected-date"
                      title={format(selectedDate!, "EEEE d MMMM", { locale: nl })}
                      events={filteredEvents}
                      variant="today"
                    />
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

            <div id="kalender" className="hidden lg:block w-[280px] flex-shrink-0">
              <div className="sticky top-20">
                <Card className="border-border/60">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <CalendarDays className="h-4 w-4 text-primary" />
                      <h3 className="text-sm font-semibold text-foreground">Kalender</h3>
                    </div>
                    <EventCalendar
                      events={events}
                      selectedDate={selectedDate}
                      onSelectDate={setSelectedDate}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6 pb-20 max-w-6xl">
        <div className="rounded-2xl bg-gradient-hero text-primary-foreground p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Mis geen enkele wedstrijd</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Bekijk je teampagina voor specifieke wedstrijden of neem contact op als je een evenement mist.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Link to="/club/teams">
                <Users className="mr-2 h-4 w-4" />
                Bekijk teams
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href="mailto:info@dmon.be">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
