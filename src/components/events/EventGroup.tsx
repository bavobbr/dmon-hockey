import { TwizzitEvent, parseEventDateZoned } from "@/lib/events";
import EventCard from "./EventCard";
import { forwardRef, useMemo } from "react";
import { format, isSameDay } from "date-fns";
import { nl } from "date-fns/locale";

interface EventGroupProps {
  title: string;
  events: TwizzitEvent[];
  variant: "today" | "tomorrow" | "default";
}

const accentByVariant: Record<EventGroupProps["variant"], string> = {
  today: "bg-primary",
  tomorrow: "bg-accent",
  default: "bg-border",
};

const EventGroup = forwardRef<HTMLDivElement, EventGroupProps>(
  ({ title, events, variant }, ref) => {
    const days = useMemo(() => {
      const result: { date: Date; events: TwizzitEvent[] }[] = [];
      for (const ev of events) {
        try {
          const d = parseEventDateZoned(ev.start_at);
          const last = result[result.length - 1];
          if (last && isSameDay(last.date, d)) {
            last.events.push(ev);
          } else {
            result.push({ date: d, events: [ev] });
          }
        } catch {
          // skip
        }
      }
      return result;
    }, [events]);

    if (events.length === 0) return null;

    return (
      <div ref={ref} className="mb-10 scroll-mt-4">
        {/* Section header */}
        <div className="sticky top-0 z-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 py-3 mb-2">
          <div className="flex items-baseline gap-3">
            <div className="flex items-center gap-2.5">
              <span className={`inline-block w-1.5 h-5 rounded-sm ${accentByVariant[variant]}`} />
              <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground">
                {title}
              </h2>
            </div>
            <span className="text-xs text-muted-foreground">
              {events.length} {events.length === 1 ? "event" : "events"}
            </span>
          </div>
        </div>

        {/* Day groups */}
        <div className="space-y-6">
          {days.map(({ date, events: dayEvents }) => (
            <div key={date.toISOString()}>
              <div className="sticky top-[60px] z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 py-1.5 mb-1.5">
                <div className="flex items-baseline justify-between gap-3 border-b border-border/60 pb-1.5">
                  <h3 className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground">
                    {format(date, "EEEE d MMMM", { locale: nl })}
                  </h3>
                  <span className="text-[11px] text-muted-foreground">
                    {dayEvents.length}
                  </span>
                </div>
              </div>
              <div className="space-y-1">
                {dayEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

EventGroup.displayName = "EventGroup";

export default EventGroup;
