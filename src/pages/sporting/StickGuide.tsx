import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Ruler, Target, Users, AlertTriangle, ShoppingBag } from "lucide-react";

const StickGuide = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">De juiste stick kiezen</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Drie belangrijke factoren
            </CardTitle>
            <CardDescription>
              Hockey sticks komen er in vele maten en soorten
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Als je de juiste stick wilt kiezen, let je best op drie grote factoren:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <Ruler className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold">De lengte</h3>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Target className="h-8 w-8 mx-auto mb-2 text-secondary" />
                <h3 className="font-semibold">De samenstelling</h3>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Zap className="h-8 w-8 mx-auto mb-2 text-accent" />
                <h3 className="font-semibold">De kromming</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Ruler className="h-5 w-5" />
              Lengte
            </CardTitle>
            <CardDescription>
              Sticks worden qua lengte uitgedrukt in inch
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium mb-2">Volwassenen (vanaf U16)</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Standaard:</strong> 36.5 inch</li>
                    <li>• <strong>Voor langere spelers:</strong> 37.5 inch</li>
                    <li>• Makkelijker tot aan de grond reiken</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-medium mb-2">Kinderen</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Richtlijn:</strong> Heuphoogte of navelhoogte</li>
                    <li>• Stick van grond tot heup/navel</li>
                    <li>• Helpt juiste houding aan te leren</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="font-medium mb-2 text-primary">💡 Clubadvies</h4>
                <p className="text-sm text-muted-foreground">
                  Een stick tot aan de navel, met een overstap naar volgende om de twee jaar ongeveer.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Samenstelling
            </CardTitle>
            <CardDescription>
              Hedendaagse sticks worden gemaakt in kunststof, wat ze duurzamer en lichter maakt
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Drie belangrijke componenten:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <h5 className="font-medium mb-2">Fiberglass/Composiet</h5>
                    <p className="text-sm text-muted-foreground">Een betaalbare kunstofvezel</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h5 className="font-medium mb-2">Carbon</h5>
                    <p className="text-sm text-muted-foreground">Erg stevige en lichte kunststof</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h5 className="font-medium mb-2">Aramide</h5>
                    <p className="text-sm text-muted-foreground">Een schokdempende kunststof</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Carbon percentage begeleidt</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Het carbonpercentage bepaalt de basiskost van de stick. Hoe meer carbon, hoe stijver de stick 
                  en hoe meer techniek vereist is voor balcontrole.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm"><strong>Kinderen:</strong> 0% tot 40% carbon</p>
                    <p className="text-sm"><strong>Volwassenen:</strong> 40% tot 70% carbon</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>✓ Meer carbon = meer <em>power</em></p>
                    <p>✗ Meer carbon = moeilijker <em>trapping/dribbling</em></p>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="font-medium mb-2 text-primary">💡 Clubadvies</h4>
                <div className="text-sm space-y-1">
                  <p>• <strong>Onderbouw:</strong> 0 tot 30% carbon</p>
                  <p>• <strong>Middenbouw:</strong> 30 tot 70% carbon</p>
                  <p>• <strong>Bovenbouw:</strong> 40 tot 100% carbon</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Kromming
            </CardTitle>
            <CardDescription>
              Een hockeystick heeft een kromming van maximum 25 millimeter volgens FIH regels
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                De kromming maakt het makkelijker om de bal te controleren. Hoe groot die kromming is en waar die zich bevindt 
                verschilt van stick per stick, en bepaalt de specifieke speeleigenschappen.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium mb-2">Locatie (200mm - 300mm)</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• <strong>Mid-bow:</strong> Kromming in het midden (300mm)</li>
                      <li>• <strong>Low-bow:</strong> Dichter bij de krul (200-250mm)</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-medium mb-2">Hoogte</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• <strong>Minder kromming:</strong> Makkelijkere techniek</li>
                      <li>• <strong>Meer kromming:</strong> Betere 3D technieken mogelijk</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Effect van lage kromming</h4>
                  <div className="text-sm space-y-2">
                    <p>✓ Makkelijker bal liften voor 3D skills</p>
                    <p>✓ Betere hoge shots mogelijk</p>
                    <p>✗ Moeilijker bal laag houden voor passes</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Standaard types:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="border rounded-lg p-3">
                    <h5 className="font-medium text-sm">Midbow</h5>
                    <p className="text-xs text-muted-foreground">Minimale kromming, ideaal voor sterk laag spel</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h5 className="font-medium text-sm">Probow</h5>
                    <p className="text-xs text-muted-foreground">Beetje kromming, maakt 3D spel makkelijker</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h5 className="font-medium text-sm">Lowbow</h5>
                    <p className="text-xs text-muted-foreground">Veel kromming, voor 3D spel en hoge shots</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h5 className="font-medium text-sm">Extreme Lowbow</h5>
                    <p className="text-xs text-muted-foreground">Maximale kromming, ideaal voor dragflicks bij PC</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="font-medium mb-2 text-primary">💡 Clubadvies</h4>
                <div className="text-sm space-y-1">
                  <p>• <strong>Onderbouw:</strong> Standard/midbow types</p>
                  <p>• <strong>Midden/bovenbouw:</strong> Midbow tot lowbow afhankelijk van speelstijl</p>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Hoog spel is altijd leuk om te zien, maar in matchen moet het spaarzaam worden toegepast 
                  totdat behendigheid en inzicht groot genoeg zijn om gevaarlijke fouten te vermijden.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <ShoppingBag className="h-5 w-5" />
              Stick nodig?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Zoek je een stick? Hoor zeker eens bij de trainers / sportieve cel. 
              We bieden sticks aan uit voorraad (Thurso) die perfect geschikt zijn voor de speler!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline">
                <Users className="h-4 w-4 mr-2" />
                Contacteer trainers
              </Button>
              <Button variant="outline" asChild>
                <a href="/shop">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Bezoek clubwinkel
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default StickGuide;