import { fromZonedTime } from "date-fns-tz/fromZonedTime";
import { toZonedTime } from "date-fns-tz/toZonedTime";
import { isToday, isTomorrow, isBefore, isAfter, startOfWeek, endOfWeek, addWeeks, format } from "date-fns";
import { nl } from "date-fns/locale";

export const TIMEZONE = "Europe/Brussels";

export interface TwizzitEvent {
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
  groups?: Array<{ groupName?: string }> | null;
}

export type EventType = "match" | "training" | "event";
export type EventFilter = "all" | EventType;

export interface GroupedEvents {
  pastWeek: TwizzitEvent[];
  today: TwizzitEvent[];
  tomorrow: TwizzitEvent[];
  thisWeek: TwizzitEvent[];
  nextWeek: TwizzitEvent[];
  byMonth: { [key: string]: TwizzitEvent[] };
}

export function parseEventDate(start_at: string): Date {
  const naive = start_at.replace(/Z|[+-]\d{2}:?\d{2}$/, "");
  const eventUtc = fromZonedTime(naive, TIMEZONE);
  return eventUtc;
}

export function parseEventDateZoned(start_at: string): Date {
  const eventUtc = parseEventDate(start_at);
  return toZonedTime(eventUtc, TIMEZONE);
}

export function getEventType(event: TwizzitEvent): EventType {
  if (!event || !event.name) return "event";
  const nameLower = event.name.toLowerCase();

  if (
    nameLower.includes("training") ||
    nameLower.includes("oefening") ||
    nameLower.includes("stage") ||
    nameLower.includes("clinic")
  ) {
    return "training";
  }

  if (event.is_home_game !== null && event.is_home_game !== undefined) return "match";

  if (event.groups && Array.isArray(event.groups) && event.groups.length > 0) {
    try {
      const groupName = event.groups[0]?.groupName || "";
      if (typeof groupName === "string" && groupName.toLowerCase().includes("match")) return "match";
    } catch {}
  }

  if (event.score !== null || event.series !== null) return "match";
  if (nameLower.includes(" - ") || nameLower.includes(" vs ")) return "match";

  return "event";
}

export function getEventTypeLabel(type: EventType): string {
  switch (type) {
    case "match": return "Wedstrijd";
    case "training": return "Training";
    case "event": return "Activiteit";
  }
}

export function groupEvents(events: TwizzitEvent[]): GroupedEvents {
  const grouped: GroupedEvents = {
    pastWeek: [], today: [], tomorrow: [], thisWeek: [], nextWeek: [], byMonth: {},
  };

  const now = new Date();
  const startOfToday = new Date(now);
  startOfToday.setHours(0, 0, 0, 0);
  const thisWeekStart = startOfWeek(now, { weekStartsOn: 1 });
  const thisWeekEnd = endOfWeek(now, { weekStartsOn: 1 });
  const nextWeekStart = addWeeks(thisWeekStart, 1);
  const nextWeekEnd = endOfWeek(nextWeekStart, { weekStartsOn: 1 });

  events.forEach((event) => {
    if (!event || !event.start_at) return;
    try {
      const eventDate = parseEventDateZoned(event.start_at);

      if (isToday(eventDate)) grouped.today.push(event);
      else if (isTomorrow(eventDate)) grouped.tomorrow.push(event);
      else if (isBefore(eventDate, startOfToday)) grouped.pastWeek.push(event);
      else if (isAfter(eventDate, now) && isBefore(eventDate, thisWeekEnd)) grouped.thisWeek.push(event);
      else if (isAfter(eventDate, thisWeekEnd) && isBefore(eventDate, nextWeekEnd)) grouped.nextWeek.push(event);
      else {
        const monthKey = format(eventDate, "MMMM yyyy", { locale: nl });
        if (!grouped.byMonth[monthKey]) grouped.byMonth[monthKey] = [];
        grouped.byMonth[monthKey].push(event);
      }
    } catch (error) {
      console.warn("Error processing event:", event.name, error);
    }
  });

  return grouped;
}

export function extractTeamNames(events: TwizzitEvent[]): string[] {
  const teams = new Set<string>();
  events.forEach((event) => {
    if (event.home_team_name) teams.add(event.home_team_name);
    if (event.away_team_name) teams.add(event.away_team_name);
  });
  return Array.from(teams).sort();
}

export function eventMatchesTeam(event: TwizzitEvent, team: string): boolean {
  return event.home_team_name === team || event.away_team_name === team;
}
