import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { History as HistoryIcon, Calendar, Users, Trophy, Building } from "lucide-react";
import historyStoryImage from "@/assets/history-story.png";

const History = () => {
  const milestones = [
    {
      year: "2018",
      title: "Oprichting van de Club",
      description: "D-MON Hockey Club werd opgericht door een groep gepassioneerde hockeyliefhebbers in Dendermonde.",
      icon: Users
    },
    {
      year: "2019-2021", 
      title: "Groei en Ontwikkeling",
      description: "Uitbreiding van het aantal leden en teams, deelname aan lokale competities.",
      icon: Calendar
    },
    {
      year: "2021",
      title: "Zoektocht naar Eigen Terrein",
      description: "Start van de intensieve zoektocht en planning voor een eigen hockeyterrein.",
      icon: Building
    },
    {
      year: "2022",
      title: "Terrein Gerealiseerd",
      description: "Na juridische procedures en hard werk werd het nieuwe kunstgrasveld eindelijk geopend.",
      icon: Trophy
    },
    {
      year: "2023-2024",
      title: "Verdere Uitbreiding",
      description: "Voortzetting van de groei met nieuwe jeugdprogramma's en verdere faciliteiten.",
      icon: HistoryIcon
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Geschiedenis</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HistoryIcon className="h-5 w-5" />
              Ons Verhaal
            </CardTitle>
            <CardDescription>De reis van D-MON Hockey Club</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  D-MON Hockey Club ontstond uit een gedeelde passie voor veldhockey en een visie om een 
                  gastvrije gemeenschap te creëren voor spelers van alle leeftijden en vaardigheidsniveaus. 
                  Wat begon als een kleine groep enthousiastelingen is uitgegroeid tot een bloeiende club 
                  die het beste van de Belgische hockeycultuur vertegenwoordigt.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Onze club legt de nadruk op niet alleen competitieve excellentie, maar ook op de waarden 
                  van respect, fair play en gemeenschapsgevoel. We geloven dat hockey meer is dan een sport—
                  het is een manier om levenslange vriendschappen op te bouwen, karakter te ontwikkelen en 
                  bij te dragen aan onze lokale gemeenschap.
                </p>
              </div>
              
              <div className="flex justify-center">
                <div className="max-w-sm">
                  <img 
                    src={historyStoryImage} 
                    alt="Verhaal D-MON Hockey - Geschiedenis van de Club" 
                    className="w-full h-auto rounded-lg shadow-lg border"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Belangrijke Mijlpalen</h2>
          
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <Card key={milestone.year} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <milestone.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                        <h3 className="text-lg font-semibold text-foreground">{milestone.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="mt-8 bg-muted/50">
          <CardContent className="p-6 text-center">
            <HistoryIcon className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">
              Onze geschiedenis blijft zich ontvouwen met elke trainingsessie, wedstrijd en nieuw lid dat zich bij onze clubfamilie voegt.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default History;