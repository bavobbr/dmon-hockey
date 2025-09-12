import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Timer, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const U9Rules = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Spelregels U9</h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="mb-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-lg mb-4">
              Je bent vaak op hockey-wedstrijden aanwezig en wilt de club graag meehelpen? Dan is scheidsrechter een van de meest zinvolle, interessante én leuke taken die je kan opnemen!
            </p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Timer className="h-5 w-5" />
                Opbouw naar meer regels
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Je kan als je wenst al bijdragen — met minimale technische kennis — vanaf U6 (kinderen onder 6 jaar) matchen. 
                Vanaf U9 wordt het spel iets uitgebreider qua regels en dan vanaf U14 starten we met de volledige regels. 
                Elke leeftijdscategorie voegt op die manier nieuwe elementen toe zodat kinderen het spel stap voor stap leren, 
                en ouders/supporters kunnen meegroeien aan de zijlijn.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Registreren</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Wil je jezelf al registreren bij ons, zodat we je meteen toegang kunnen voorzien tot onder andere Drillster 
                  én je mee op het wedstrijdblad kunnen zetten?
                </p>
                <Button asChild className="w-full">
                  <a 
                    href="https://app.twizzit.com/v2/public/form/cea9e8831bead08352918535621cd399" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Registreer via Twizzit
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Materiaal per categorie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Je kan als je wenst al bijdragen — met minimale technische kennis — vanaf U6 (kinderen onder 6 jaar) matchen. 
                  Vanaf U9 wordt het spel iets uitgebreider qua regels en dan vanaf U14 starten we met de volledige regels.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Pictogrammen voor U9
              </CardTitle>
              <CardDescription>
                Voor de allerkleinsten zijn de pictogrammen erg informatief, ook te vinden op de VHL website
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button asChild>
                  <a 
                    href="https://hockey.be/nl/competitie/outdoor-hockey/spelregels-1/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Bekijk pictogrammen op VHL website
                  </a>
                </Button>
                
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Spelregels U9</h4>
                  <p className="text-sm text-muted-foreground">
                    Voor U9 spelers worden de spelregels uitgebreid ten opzichte van U6-U8, maar blijven gebaseerd op de 
                    pictogrammen die de basis vormen voor het leren van hockey op jonge leeftijd.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Geleidelijke opbouw</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Elke leeftijdscategorie voegt op die manier nieuwe elementen toe zodat kinderen het spel stap voor stap leren, 
                en ouders/supporters kunnen meegroeien aan de zijlijn. Dit maakt het voor iedereen toegankelijk om betrokken 
                te blijven bij de ontwikkeling van de jonge hockeyspelers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default U9Rules;