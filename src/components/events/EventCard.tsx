import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Calendar, MapPin } from "lucide-react";
import { nl } from "date-fns/locale";
import { formatInTimeZone } from "date-fns-tz/formatInTimeZone";
import { TwizzitEvent, EventType, getEventType, getEventTypeLabel, parseEventDate } from "@/lib/events";
import { cn } from "@/lib/utils";

const typeStyles: Record<EventType, { bar: string; icon: string; label: string; bg: string }> = {
  match: {
    bar: "bg-primary",
    icon: "text-primary",
    label: "text-primary",
    bg: "bg-primary/[0.04] hover:bg-primary/[0.07]",
  },
  training: {
    bar: "bg-border",
    icon: "text-muted-foreground",
    label: "text-muted-foreground",
    bg: "hover:bg-muted/40",
  },
  event: {
    bar: "bg-accent",
    icon: "text-accent-foreground",
    label: "text-foreground",
    bg: "bg-accent/[0.05] hover:bg-accent/[0.08]",
  },
};

const getIcon = (type: EventType, className: string) => {
  switch (type) {
    case "match": return <Trophy className={className} />;
    case "training": return <Users className={className} />;
    case "event": return <Calendar className={className} />;
  }
};

interface EventCardProps {
  event: TwizzitEvent;
}

const EventCard = ({ event }: EventCardProps) => {
  const eventUtc = parseEventDate(event.start_at);
  const type = getEventType(event);
  const styles = typeStyles[type];
  const isMatch = type === "match";

  const title =
    event.home_team_name && event.away_team_name ? (
      <span className="font-semibold text-sm sm:text-[15px] text-foreground">
        <span className={cn(event.is_home_game === false && "text-muted-foreground")}>
          {event.home_team_name}
        </span>
        <span className="text-muted-foreground mx-1.5">vs</span>
        <span className={cn(event.is_home_game === true && "text-muted-foreground")}>
          {event.away_team_name}
        </span>
      </span>
    ) : event.name ? (
      <span className="font-medium text-sm sm:text-[15px] text-foreground">{event.name}</span>
    ) : (
      <span className="italic text-sm text-muted-foreground">Naamloos event</span>
    );

  return (
    <div
      className={cn(
        "group relative flex items-stretch gap-3 sm:gap-4 rounded-md transition-colors",
        styles.bg
      )}
    >
      {/* Accent bar */}
      <div className={cn("w-1 rounded-l-md flex-shrink-0", styles.bar)} />

      {/* Time */}
      <div className="flex-shrink-0 w-12 sm:w-14 flex flex-col justify-center py-2.5">
        <div className="text-sm sm:text-base font-bold tabular-nums text-foreground leading-tight">
          {formatInTimeZone(eventUtc, "Europe/Brussels", "HH:mm", { locale: nl })}
        </div>
      </div>

      {/* Type label */}
      <div className="flex-shrink-0 w-[88px] hidden sm:flex items-center gap-1.5">
        {getIcon(type, cn("h-3.5 w-3.5", styles.icon))}
        <span className={cn("text-[11px] uppercase tracking-wide font-semibold", styles.label)}>
          {getEventTypeLabel(type)}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 py-2.5 pr-3 max-w-3xl">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="sm:hidden">{getIcon(type, cn("h-3.5 w-3.5 inline", styles.icon))}</span>
          {title}
          {event.series && (
            <Badge variant="outline" className="text-[10px] py-0 px-1.5 h-4 font-normal">
              {event.series}
            </Badge>
          )}
        </div>
        {(event.address || (isMatch && event.is_home_game !== null)) && (
          <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
            {isMatch && event.is_home_game !== null && (
              <span className={cn(
                "font-medium",
                event.is_home_game ? "text-primary" : "text-muted-foreground"
              )}>
                {event.is_home_game ? "Thuis" : "Uit"}
              </span>
            )}
            {event.address && (
              <>
                {isMatch && event.is_home_game !== null && <span>·</span>}
                <MapPin className="h-3 w-3 flex-shrink-0" />
                <span className="line-clamp-1">{event.address}</span>
              </>
            )}
          </div>
        )}
      </div>

      {/* Score */}
      {event.score && (
        <div className="flex-shrink-0 flex items-center pr-3">
          <span className="font-mono font-bold text-sm bg-foreground text-background px-2 py-1 rounded">
            {event.score}
          </span>
        </div>
      )}
    </div>
  );
};

export default EventCard;
