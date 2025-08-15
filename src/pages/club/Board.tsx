import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { UserCheck, Mail, Phone } from "lucide-react";
import organogramImage from "@/assets/organogram.png";

const Board = () => {
  const { data: boardMembers } = useQuery({
    queryKey: ['board-members-full'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('board_members_public')
        .select('*')
        .order('order_index');
      
      if (error) throw error;
      return data || [];
    },
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Bestuur</h1>
        
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Organisatiestructuur</CardTitle>
              <CardDescription>
                Onze club wordt geleid door een toegewijd bestuur van vrijwilligers die zich inzetten voor de ontwikkeling van hockey in onze gemeenschap.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Het bestuur komt maandelijks samen om clubactiviteiten, strategische planning en gemeenschapsbetrokkenheid te bespreken. 
                Elk lid brengt unieke expertise mee om onze club te helpen groeien en bloeien.
              </p>
              
              {/* Organogram Image */}
              <div className="flex justify-center mb-6">
                <div className="max-w-md">
                  <img 
                    src={organogramImage} 
                    alt="Organogram D-mon Hockey Club Bestuur" 
                    className="w-full h-auto rounded-lg shadow-lg border"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {boardMembers?.map((member) => (
            <Card key={member.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  {member.photo_url ? (
                    <img 
                      src={member.photo_url} 
                      alt={member.name}
                      className="w-24 h-24 object-cover rounded-full border"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center text-muted-foreground text-xl font-semibold">
                      {member.name?.split(' ').map(n => n[0]).join('') || ''}
                    </div>
                  )}
                  
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{member.name}</h3>
                    <p className="text-primary font-medium">{member.position}</p>
                    
                    {member.bio && (
                      <p className="text-sm text-muted-foreground mt-2">{member.bio}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {(!boardMembers || boardMembers.length === 0) && (
          <div className="text-center py-12">
            <UserCheck className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Bestuursinformatie zal binnenkort beschikbaar zijn.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Board;