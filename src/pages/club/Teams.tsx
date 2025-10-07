import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { Trophy, Users, Mail } from "lucide-react";
import logoImage from "/dman-hockey-logo.png";

const ClubTeams = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
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
                <div 
                  className="mb-4 cursor-pointer rounded-lg overflow-hidden bg-muted flex items-center justify-center"
                  onClick={() => setSelectedImage(team.image_url || logoImage)}
                  style={{ height: '200px' }}
                >
                  <img 
                    src={team.image_url || logoImage}
                    alt={team.name}
                    className="w-full h-full object-contain hover:scale-105 transition-transform"
                  />
                </div>
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

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <img 
              src={selectedImage}
              alt="Team image"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ClubTeams;