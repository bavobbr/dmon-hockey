import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, Clock, MapPin, Trophy, Users, ChevronDown } from "lucide-react";
import { format, isToday, isTomorrow, isThisWeek, isAfter, isBefore, startOfWeek, endOfWeek, addWeeks, startOfMonth, endOfMonth } from "date-fns";
import { nl } from "date-fns/locale";
import { formatInTimeZone } from "date-fns-tz/formatInTimeZone";
import { toZonedTime } from "date-fns-tz/toZonedTime";
import { fromZonedTime } from "date-fns-tz/fromZonedTime";
import DOMPurify from "dompurify";

interface TwizzitEvent {
  id: string;
  name: string;
  start_at: string;
  address: string | null;
  description: string | null;
  score: string | null;
  series: string | null;
  home_team_name: string | null;
  away_team_name: string | null;
  is_home_game: boolean | null;
  groups: Array<{ groupName?: string }> | null;
}

type EventType = 'match' | 'training' | 'event';
type EventFilter = 'all' | EventType;

interface GroupedEvents {
  pastWeek: TwizzitEvent[];
  today: TwizzitEvent[];
  tomorrow: TwizzitEvent[];
  thisWeek: TwizzitEvent[];
  nextWeek: TwizzitEvent[];
  byMonth: { [key: string]: TwizzitEvent[] };
}

const Events = () => {
  const [events, setEvents] = useState<TwizzitEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<EventFilter>('all');
  const todayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fetch events from 1 week ago to show recent past events
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

        const { data, error } = await supabase
          .from("twizzit_events")
          .select("id, name, start_at, address, description, score, series, home_team_name, away_team_name, is_home_game, groups")
          .gte("start_at", oneWeekAgo.toISOString())
          .order("start_at", { ascending: true })
          .limit(100);

        if (error) throw error;

        setEvents(data || []);
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
    todayRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const getEventType = (event: TwizzitEvent): EventType => {
    const nameLower = event.name.toLowerCase();

    // 1. Check for training keywords in name (most specific)
    if (
      nameLower.includes('training') ||
      nameLower.includes('oefening') ||
      nameLower.includes('stage') ||
      nameLower.includes('clinic')
    ) {
      return 'training';
    }

    // 2. Check if it's a match (most reliable indicators)
    if (event.is_home_game !== null) {
      return 'match';
    }

    // 3. Check groups for "match" in groupName
    if (event.groups && Array.isArray(event.groups) && event.groups.length > 0) {
      const groupName = event.groups[0]?.groupName || '';
      if (groupName.toLowerCase().includes('match')) {
        return 'match';
      }
    }

    // 4. Score or series indicates match
    if (event.score !== null || event.series !== null) {
      return 'match';
    }

    // 5. Team format in name (e.g., "Team A - Team B")
    if (nameLower.includes(' - ') || nameLower.includes(' vs ')) {
      return 'match';
    }

    // 6. Default: activity
    return 'event';
  };

  const getEventIcon = (type: EventType) => {
    switch (type) {
      case 'match':
        return <Trophy className="h-4 w-4 text-primary" />;
      case 'training':
        return <Users className="h-4 w-4 text-blue-600" />;
      case 'event':
        return <Calendar className="h-4 w-4 text-slate-600" />;
    }
  };

  const getEventTypeLabel = (type: EventType) => {
    switch (type) {
      case 'match':
        return 'Wedstrijd';
      case 'training':
        return 'Training';
      case 'event':
        return 'Activiteit';
    }
  };

  const groupEvents = (events: TwizzitEvent[]): GroupedEvents => {
    const grouped: GroupedEvents = {
      pastWeek: [],
      today: [],
      tomorrow: [],
      thisWeek: [],
      nextWeek: [],
      byMonth: {}
    };

    const now = new Date();
    const startOfToday = new Date(now);
    startOfToday.setHours(0, 0, 0, 0);
    const thisWeekStart = startOfWeek(now, { weekStartsOn: 1 });
    const thisWeekEnd = endOfWeek(now, { weekStartsOn: 1 });
    const nextWeekStart = addWeeks(thisWeekStart, 1);
    const nextWeekEnd = endOfWeek(nextWeekStart, { weekStartsOn: 1 });

    events.forEach(event => {
      const naive = event.start_at.replace(/Z|[+-]\d{2}:?\d{2}$/, '');
      const eventUtc = fromZonedTime(naive, 'Europe/Brussels');
      const eventDate = toZonedTime(eventUtc, 'Europe/Brussels');

      if (isToday(eventDate)) {
        grouped.today.push(event);
      } else if (isTomorrow(eventDate)) {
        grouped.tomorrow.push(event);
      } else if (isBefore(eventDate, startOfToday)) {
        // Past events (before today)
        grouped.pastWeek.push(event);
      } else if (isAfter(eventDate, now) && isBefore(eventDate, thisWeekEnd)) {
        grouped.thisWeek.push(event);
      } else if (isAfter(eventDate, thisWeekEnd) && isBefore(eventDate, nextWeekEnd)) {
        grouped.nextWeek.push(event);
      } else {
        const monthKey = format(eventDate, 'MMMM yyyy', { locale: nl });
        if (!grouped.byMonth[monthKey]) {
          grouped.byMonth[monthKey] = [];
        }
        grouped.byMonth[monthKey].push(event);
      }
    });

    return grouped;
  };

  const filterEvents = (events: TwizzitEvent[]): TwizzitEvent[] => {
    if (filter === 'all') return events;
    return events.filter(event => getEventType(event) === filter);
  };

  const formatEventDescription = (description: string | null) => {
    if (!description) return null;

    const cleanDescription = DOMPurify.sanitize(description, {
      ALLOWED_TAGS: ['br', 'small', 'a'],
      ALLOWED_ATTR: ['href', 'target']
    });

    return (
      <div
        className="text-xs text-muted-foreground mt-1 line-clamp-2"
        dangerouslySetInnerHTML={{ __html: cleanDescription }}
      />
    );
  };

  const renderEvent = (event: TwizzitEvent) => {
    const naive = event.start_at.replace(/Z|[+-]\d{2}:?\d{2}$/, '');
    const eventUtc = fromZonedTime(naive, 'Europe/Brussels');
    const eventType = getEventType(event);

    return (
      <Card key={event.id} className="hover:shadow-md transition-shadow duration-200 overflow-hidden">
        <CardContent className="p-4">
          <div className="flex gap-4">
            {/* Time */}
            <div className="flex-shrink-0 w-16 text-center">
              <div className="text-2xl font-bold text-primary">
                {formatInTimeZone(eventUtc, "Europe/Brussels", "HH:mm", { locale: nl })}
              </div>
              <div className="text-xs text-muted-foreground">
                {formatInTimeZone(eventUtc, "Europe/Brussels", "EEE", { locale: nl })}
              </div>
            </div>

            {/* Divider */}
            <div className="w-px bg-border"></div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start gap-2 mb-1">
                {getEventIcon(eventType)}
                <div className="flex-1 min-w-0">
                  {/* Show team names if available, otherwise show event name */}
                  {event.home_team_name && event.away_team_name ? (
                    <div className="font-semibold text-sm leading-tight">
                      <span className={event.is_home_game === false ? "text-muted-foreground" : ""}>
                        {event.home_team_name}
                      </span>
                      <span className="text-muted-foreground mx-1.5">-</span>
                      <span className={event.is_home_game === true ? "text-muted-foreground" : ""}>
                        {event.away_team_name}
                      </span>
                    </div>
                  ) : (
                    <h3 className="font-semibold text-sm leading-tight">{event.name}</h3>
                  )}
                  <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                    <Badge variant="outline" className="text-xs">
                      {getEventTypeLabel(eventType)}
                    </Badge>
                    {event.is_home_game === true && (
                      <Badge variant="default" className="text-xs">
                        Thuis
                      </Badge>
                    )}
                    {event.score && (
                      <Badge variant="secondary" className="text-xs font-mono bg-slate-700 text-slate-200 hover:bg-slate-700">
                        {event.score}
                      </Badge>
                    )}
                    {event.series && (
                      <Badge variant="default" className="text-xs bg-blue-600 hover:bg-blue-700">
                        {event.series}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              {event.address && (
                <div className="flex items-start gap-1.5 text-xs text-muted-foreground mt-2">
                  <MapPin className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{event.address}</span>
                </div>
              )}

              {event.description && formatEventDescription(event.description)}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  const renderGroup = (title: string, events: TwizzitEvent[], variant: 'today' | 'tomorrow' | 'default', isToday?: boolean) => {
    const filteredEvents = filterEvents(events);
    if (filteredEvents.length === 0) return null;

    const getBadgeVariant = () => {
      switch (variant) {
        case 'today':
          return 'destructive';
        case 'tomorrow':
          return 'secondary';
        default:
          return 'outline';
      }
    };

    return (
      <div ref={isToday ? todayRef : null} className="mb-8">
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 py-3 mb-4 border-b">
          <div className="flex items-center gap-3">
            <Badge variant={getBadgeVariant()} className="text-sm px-3 py-1">
              {title}
            </Badge>
            <span className="text-sm text-muted-foreground">
              {filteredEvents.length} {filteredEvents.length === 1 ? 'evenement' : 'evenementen'}
            </span>
          </div>
        </div>
        <div className="space-y-3">
          {filteredEvents.map(renderEvent)}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Agenda</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Alle komende evenementen en wedstrijden
          </p>
        </div>
        <div className="space-y-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="w-16 h-12 bg-muted rounded"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-3 bg-muted rounded w-1/2"></div>
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
      <div className="container mx-auto p-6 max-w-4xl">
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
      <div className="container mx-auto p-6 max-w-4xl">
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

  const grouped = groupEvents(events);
  const hasToday = grouped.today.length > 0;

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Agenda</h1>
            <p className="text-lg text-muted-foreground mt-2">
              Alle komende evenementen en wedstrijden
            </p>
          </div>
          {hasToday && (
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToToday}
              className="flex items-center gap-2"
            >
              <Calendar className="h-4 w-4" />
              Naar vandaag
            </Button>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('all')}
          >
            Alles
          </Button>
          <Button
            variant={filter === 'match' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('match')}
            className="flex items-center gap-2"
          >
            <Trophy className="h-4 w-4" />
            Wedstrijden
          </Button>
          <Button
            variant={filter === 'training' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('training')}
            className="flex items-center gap-2"
          >
            <Users className="h-4 w-4" />
            Trainingen
          </Button>
          <Button
            variant={filter === 'event' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('event')}
            className="flex items-center gap-2"
          >
            <Sparkles className="h-4 w-4" />
            Activiteiten
          </Button>
        </div>
      </div>

      {/* Timeline */}
      <div>
        {renderGroup('Afgelopen Week', grouped.pastWeek, 'default')}
        {renderGroup('Vandaag', grouped.today, 'today', true)}
        {renderGroup('Morgen', grouped.tomorrow, 'tomorrow')}
        {renderGroup('Deze Week', grouped.thisWeek, 'default')}
        {renderGroup('Volgende Week', grouped.nextWeek, 'default')}

        {Object.entries(grouped.byMonth).map(([month, events]) =>
          renderGroup(month, events, 'default')
        )}
      </div>

      {/* No results message */}
      {filter !== 'all' && filterEvents(events).length === 0 && (
        <Card>
          <CardContent className="pt-6 pb-6">
            <p className="text-center text-muted-foreground">
              Geen {filter === 'match' ? 'wedstrijden' : filter === 'training' ? 'trainingen' : 'activiteiten'} gevonden.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Events;
