import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Calendar, MapPin } from "lucide-react";
import { nl } from "date-fns/locale";
import { formatInTimeZone } from "date-fns-tz/formatInTimeZone";
import DOMPurify from "dompurify";
import { TwizzitEvent, EventType, getEventType, getEventTypeLabel, parseEventDate } from "@/lib/events";

const getEventIcon = (type: EventType) => {
  switch (type) {
    case "match": return <Trophy className="h-4 w-4 text-primary" />;
    case "training": return <Users className="h-4 w-4 text-primary-light" />;
    case "event": return <Calendar className="h-4 w-4 text-muted-foreground" />;
  }
};

const formatDescription = (description: string | null) => {
  if (!description) return null;
  const clean = DOMPurify.sanitize(description, {
    ALLOWED_TAGS: ["br", "small", "a"],
    ALLOWED_ATTR: ["href", "target"],
  });
  return (
    <div
      className="text-xs text-muted-foreground mt-1 line-clamp-2"
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
};

interface EventCardProps {
  event: TwizzitEvent;
}

const EventCard = ({ event }: EventCardProps) => {
  const eventUtc = parseEventDate(event.start_at);
  const eventType = getEventType(event);

  return (
    <Card className="hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <CardContent className="p-4">
        <div className="flex gap-4">
          {/* Time */}
          <div className="flex-shrink-0 w-16 text-center">
            <div className="text-xs font-medium text-muted-foreground uppercase">
              {formatInTimeZone(eventUtc, "Europe/Brussels", "EEE", { locale: nl })}
            </div>
            <div className="text-lg font-bold text-foreground leading-tight">
              {formatInTimeZone(eventUtc, "Europe/Brussels", "d MMM", { locale: nl })}
            </div>
            <div className="text-sm font-semibold text-primary">
              {formatInTimeZone(eventUtc, "Europe/Brussels", "HH:mm", { locale: nl })}
            </div>
          </div>

          {/* Divider */}
          <div className="w-px bg-border" />

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start gap-2 mb-1">
              {getEventIcon(eventType)}
              <div className="flex-1 min-w-0">
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
                    <Badge variant="default" className="text-xs">Thuis</Badge>
                  )}
                  {event.score && (
                    <Badge variant="secondary" className="text-xs font-mono bg-foreground/80 text-background hover:bg-foreground/80">
                      {event.score}
                    </Badge>
                  )}
                  {event.series && (
                    <Badge variant="default" className="text-xs bg-primary-light hover:bg-primary-glow">
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

            {event.description && formatDescription(event.description)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
