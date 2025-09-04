import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Bus, Car, Bike, AlertTriangle, FileText } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import mobilityMap from "@/assets/mobility-map.png";
import ClubLocationMap from "@/components/ClubLocationMap";

const HockeyField = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Hockeyterrein & Mobiliteit</h1>
        
        <div className="grid gap-6">
          {/* Interactive Map */}
          <ClubLocationMap />
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Locatie Terrein
              </CardTitle>
              <CardDescription>Vind ons hockeyterrein in Grembergen</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Adres</h3>
                  <p className="text-muted-foreground">
                    Oud Kerkhofstraat 20<br />
                    Grembergen<br />
                    België
                  </p>
                </div>
                
                <Alert className="border-amber-200 bg-amber-50 dark:bg-amber-950/20">
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                  <AlertDescription className="text-amber-800 dark:text-amber-200">
                    <strong>Opgelet:</strong> De herinrichting van het kruispunt Mechelsesteenweg/Martelarenlaan (Scheldebrug)/Noordlaan/Leopoldlaan is gestart met impact op de toegankelijkheid voor voetgangers, fietsers en gemotoriseerd verkeer.{" "}
                    <a 
                      href="https://www.dendermonde.be/werkenmechelsepoort" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                    >
                      Bekijk de website van stad Dendermonde voor de meest recente informatie
                    </a> en vertrek op tijd.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="h-5 w-5" />
                Parkeren & Mobiliteit
              </CardTitle>
              <CardDescription>Belangrijke informatie over hoe je ons terrein bereikt</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Het aantal parkeerplaatsen is beperkt. Om de rust te bewaren, vragen we om zo veel mogelijk gebruik te maken van duurzame alternatieven zoals de fiets. Kom je met de wagen, tracht te carpoolen en maak gebruik van de parkeerlocaties zoals aangegeven op onderstaande kaart.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-medium">Parkeerkaart & Richtlijnen</h4>
                  <div className="border rounded-lg overflow-hidden">
                    <img 
                      src={mobilityMap} 
                      alt="Mobiliteits- en parkeerkaart voor D-mon Hockey Club"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href="https://dmon.be/wp-content/uploads/2022/11/Mobiliteit-1.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <FileText className="h-4 w-4" />
                        Download Parkeerkaart PDF
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bus className="h-5 w-5" />
                Duurzame Vervoersopties
              </CardTitle>
              <CardDescription>Milieuvriendelijke manieren om ons terrein te bereiken</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <Bike className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Fietsen (Aanbevolen)</h4>
                    <p className="text-sm text-muted-foreground">Fietsrekken beschikbaar ter plaatse. Help ons een rustige omgeving te behouden.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Car className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Carpoolen</h4>
                    <p className="text-sm text-muted-foreground">Deel ritten met teamgenoten om de parkeerdruk te verminderen.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Bus className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Openbaar Vervoer</h4>
                    <p className="text-sm text-muted-foreground">Contacteer ons voor de beste openbaar vervoer routes.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Afspraken Gebruik Hockeyterrein</CardTitle>
              <CardDescription>Richtlijnen voor verantwoordelijk gebruik van ons hockeyterrein</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  We willen graag samen met onze spelers veel en lang kunnen genieten van ons nieuwe terrein. We zijn ervan overtuigd dat dit zal lukken als iedereen deze afspraken respecteert:
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm">Respecteer het terreinoppervlak - juiste hockeyschoenen verplicht</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm">Houd het terrein schoon - ruim op na gebruik en berg materiaal goed op</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm">Volg de geplande gebruikstijden en respecteer andere gebruikers</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm">Meld onderhoudsproblemen onmiddellijk aan het terreinbeheer</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href="https://dmon.be/wp-content/uploads/2024/01/Afspraken-hockeyterrein-uitgebreid-A4-document.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <FileText className="h-4 w-4" />
                      Download Volledige Terreinafspraken (PDF)
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HockeyField;