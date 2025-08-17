import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Trophy, Users, Mail, Phone } from "lucide-react";

const ClubTeams = () => {
  const { data: teams } = useQuery({
    queryKey: ['teams'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('teams')
        .select('*')
        .eq('active', true)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    },
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Our Teams</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams?.map((team) => (
            <Card key={team.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  {team.name}
                </CardTitle>
                <CardDescription>
                  {team.division} {team.age_group && `• ${team.age_group}`}
                  {team.season && ` • ${team.season}`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {team.description && (
                  <p className="text-muted-foreground mb-4">{team.description}</p>
                )}
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Coach: {team.coach || '[To be assigned]'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Team Manager: {team.team_manager || '[To be assigned]'}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {(!teams || teams.length === 0) && (
          <div className="text-center py-12">
            <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No teams available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClubTeams;