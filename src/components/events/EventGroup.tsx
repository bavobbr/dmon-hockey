import { Badge } from "@/components/ui/badge";
import { TwizzitEvent } from "@/lib/events";
import EventCard from "./EventCard";
import { forwardRef } from "react";

interface EventGroupProps {
  title: string;
  events: TwizzitEvent[];
  variant: "today" | "tomorrow" | "default";
}

const EventGroup = forwardRef<HTMLDivElement, EventGroupProps>(
  ({ title, events, variant }, ref) => {
    if (events.length === 0) return null;

    const getBadgeVariant = () => {
      switch (variant) {
        case "today": return "destructive" as const;
        case "tomorrow": return "secondary" as const;
        default: return "outline" as const;
      }
    };

    return (
      <div ref={ref} className="mb-8">
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 py-3 mb-4 border-b">
          <div className="flex items-center gap-3">
            <Badge variant={getBadgeVariant()} className="text-sm px-3 py-1">
              {title}
            </Badge>
            <span className="text-sm text-muted-foreground">
              {events.length} {events.length === 1 ? "evenement" : "evenementen"}
            </span>
          </div>
        </div>
        <div className="space-y-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    );
  }
);

EventGroup.displayName = "EventGroup";

export default EventGroup;
