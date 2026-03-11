import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trophy, Users, Calendar } from "lucide-react";
import { EventFilter } from "@/lib/events";

interface EventFiltersProps {
  filter: EventFilter;
  setFilter: (filter: EventFilter) => void;
  teamFilter: string;
  setTeamFilter: (team: string) => void;
  teamNames: string[];
}

const EventFilters = ({ filter, setFilter, teamFilter, setTeamFilter, teamNames }: EventFiltersProps) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant={filter === "all" ? "default" : "outline"} size="sm" onClick={() => setFilter("all")}>
        Alles
      </Button>
      <Button
        variant={filter === "match" ? "default" : "outline"}
        size="sm"
        onClick={() => setFilter("match")}
        className="flex items-center gap-2"
      >
        <Trophy className="h-4 w-4" />
        Wedstrijden
      </Button>
      <Button
        variant={filter === "training" ? "default" : "outline"}
        size="sm"
        onClick={() => setFilter("training")}
        className="flex items-center gap-2"
      >
        <Users className="h-4 w-4" />
        Trainingen
      </Button>
      <Button
        variant={filter === "event" ? "default" : "outline"}
        size="sm"
        onClick={() => setFilter("event")}
        className="flex items-center gap-2"
      >
        <Calendar className="h-4 w-4" />
        Activiteiten
      </Button>

      {teamNames.length > 0 && (
        <Select value={teamFilter} onValueChange={setTeamFilter}>
          <SelectTrigger className="w-[200px] h-9 text-sm">
            <SelectValue placeholder="Alle teams" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Alle teams</SelectItem>
            {teamNames.map((team) => (
              <SelectItem key={team} value={team}>
                {team}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  );
};

export default EventFilters;
