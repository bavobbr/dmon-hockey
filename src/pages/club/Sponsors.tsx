import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { HandHeart, ExternalLink, Mail } from "lucide-react";

const ClubSponsors = () => {
  const { data: sponsors } = useQuery({
    queryKey: ['sponsors'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('sponsors')
        .select('*')
        .eq('active', true)
        .order('tier');
      
      if (error) throw error;
      return data || [];
    },
  });

  const tierColors = {
    diamond: "border-blue-300 bg-blue-50/50",
    gold: "border-yellow-300 bg-yellow-50/50",
    silver: "border-gray-300 bg-gray-50/50", 
    bronze: "border-amber-300 bg-amber-50/50",
    woodstick: "border-green-300 bg-green-50/50"
  };

  const groupedSponsors = sponsors?.reduce((acc, sponsor) => {
    const tier = sponsor.tier || 'bronze';
    if (!acc[tier]) acc[tier] = [];
    acc[tier].push(sponsor);
    return acc;
  }, {} as Record<string, typeof sponsors>);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Onze Sponsors</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HandHeart className="h-5 w-5" />
              Dank aan Onze Partners
            </CardTitle>
            <CardDescription>
              We zijn dankbaar voor de steun van onze sponsors die onze clubactiviteiten mogelijk maken.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Onze sponsors helpen ons om kwaliteitsvolle training, uitrusting en faciliteiten te bieden aan al onze leden. 
              Hun steun stelt ons in staat om de hockeysport in onze gemeenschap te laten groeien en 
              betaalbaar lidmaatschap te behouden voor spelers van alle achtergronden.
            </p>
          </CardContent>
        </Card>

        {/* Display sponsors by tier */}
        {['diamond', 'gold', 'silver', 'bronze', 'woodstick'].map((tier) => {
          const tierSponsors = groupedSponsors?.[tier];
          if (!tierSponsors || tierSponsors.length === 0) return null;
          
          return (
            <div key={tier} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground capitalize">
                {tier === 'diamond' ? 'Diamant' : tier === 'gold' ? 'Goud' : tier === 'silver' ? 'Zilver' : tier === 'bronze' ? 'Brons' : 'Woodstick'} Sponsors
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tierSponsors.map((sponsor) => (
                  <Card 
                    key={sponsor.id} 
                    className={`hover:shadow-lg transition-shadow ${tierColors[tier as keyof typeof tierColors]}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center gap-4">
                        {sponsor.logo_path ? (
                          <img 
                            src={supabase.storage.from('sponsor-logos').getPublicUrl(sponsor.logo_path).data.publicUrl}
                            alt={sponsor.name}
                            className="max-h-16 max-w-full object-contain"
                          />
                        ) : (
                          <div className="h-16 w-full bg-muted rounded flex items-center justify-center">
                            <span className="font-medium text-muted-foreground">{sponsor.name}</span>
                          </div>
                        )}
                        
                        <div className="w-full">
                          <h3 className="font-semibold text-lg mb-2">{sponsor.name}</h3>
                          {sponsor.description && (
                            <p className="text-sm text-muted-foreground mb-3">{sponsor.description}</p>
                          )}
                          
                          {sponsor.website_url && (
                            <a 
                              href={sponsor.website_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
                            >
                              Bezoek Website
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}

        {(!sponsors || sponsors.length === 0) && (
          <div className="text-center py-12">
            <HandHeart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-4">Nog geen sponsors om weer te geven.</p>
          </div>
        )}

        {/* Sponsorship invitation */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-primary">Word Sponsor</CardTitle>
            <CardDescription>
              Steun lokale hockey en krijg zichtbaarheid in onze gemeenschap
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              We bieden verschillende sponsorpakketten om aan verschillende bedrijfsbehoeften en budgetten te voldoen. 
              Door een partnerschap met ons aan te gaan, steunt u de ontwikkeling van jeugdsport terwijl u 
              exposure krijgt bij onze groeiende hockeygemeenschap.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button>
                <Mail className="h-4 w-4 mr-2" />
                Contacteer Ons Over Sponsoring
              </Button>
              <Button variant="outline">
                Download Sponsorpakket
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClubSponsors;