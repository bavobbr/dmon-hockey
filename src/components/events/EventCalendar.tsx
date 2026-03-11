import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { TwizzitEvent, parseEventDateZoned } from "@/lib/events";
import { isSameDay } from "date-fns";
import { nl } from "date-fns/locale";

interface EventCalendarProps {
  events: TwizzitEvent[];
  selectedDate: Date | undefined;
  onSelectDate: (date: Date | undefined) => void;
}

const EventCalendar = ({ events, selectedDate, onSelectDate }: EventCalendarProps) => {
  // Build set of dates that have events
  const eventDates = events.reduce<Date[]>((acc, event) => {
    try {
      acc.push(parseEventDateZoned(event.start_at));
    } catch {}
    return acc;
  }, []);

  const hasEvent = (day: Date) => eventDates.some((d) => isSameDay(d, day));

  return (
    <div className="rounded-lg border bg-card p-3">
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={onSelectDate}
        locale={nl}
        weekStartsOn={1}
        className={cn("p-0 pointer-events-auto")}
        modifiers={{ hasEvent }}
        modifiersClassNames={{
          hasEvent: "font-bold text-primary underline underline-offset-4 decoration-primary/50",
        }}
      />
    </div>
  );
};

export default EventCalendar;
