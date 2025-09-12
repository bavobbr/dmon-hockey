import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Timer, Users, Award, Lightbulb, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Rules = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Regels & Scheidsrechters</h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="mb-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-lg mb-4">
              Je bent vaak op hockey-wedstrijden aanwezig en wilt de club graag meehelpen? Dan is scheidsrechter een van de meest zinvolle, interessante én leuke taken die je kan opnemen!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Startplan in het kort
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm mb-1">U6 tot U8</h4>
                  <p className="text-sm text-muted-foreground">Pictogrammen (zie spelregels U6 tot U8)</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm mb-1">U9</h4>
                  <p className="text-sm text-muted-foreground">Pictogrammen en Start TO Umpire videos</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm mb-1">U10 tot U12</h4>
                  <p className="text-sm text-muted-foreground">Half veld met cirkel (penalty corners)</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm mb-1">U14 en hoger</h4>
                  <p className="text-sm text-muted-foreground">Volledige regels groot veld</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Timer className="h-5 w-5" />
                  Registreren
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Wil je jezelf al registreren bij ons, zodat we je meteen toegang kunnen voorzien tot onder andere Drillster én je mee op het wedstrijdblad kunnen zetten?
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
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Geleidelijke opbouw
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Je kan als je wenst al bijdragen — met minimale technische kennis — vanaf U6 (kinderen onder 6 jaar) matchen. 
                  Vanaf U9 wordt het spel iets uitgebreider qua regels, vanaf U10 tot U12 spelen we half veld met cirkel (penalty corners) 
                  en dan vanaf U14 starten we met de volledige regels. Elke leeftijdscategorie voegt op die manier nieuwe elementen toe 
                  zodat kinderen het spel stap voor stap leren, en ouders/supporters kunnen meegroeien aan de zijlijn.
                </p>
                <p className="text-sm text-muted-foreground">
                  Of stap je meteen in bij bvb <em>Trimmers</em> (volwassen nieuwelingen) / <em>Gents</em> (35+ mannen) / <em>Ladies</em> (35+ vrouwen) 
                  of <em>Heren/Dames</em>? Dan is het al wat uitdagender, maar ook daar geldt dat op lagere competitie-niveau's 
                  spelplezier en sportiviteit boven regels staat. Een nieuwe scheidsrechter wordt altijd erg geapprecieerd door de spelers, 
                  anders is er geen spel te spelen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  Belangrijke tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Voor beginners</h4>
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    Helemaal geen erg als een beslissing eens juist of onjuist is, dit is een fase van leren voor iedereen. 
                    Zolang het ter goeder trouw is, en in het belang van veiligheid en spelplezier.
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Overleg is de sleutel</h4>
                  <p className="text-green-800 dark:text-green-200 text-sm">
                    Als je start, wees niet bang in overleg te gaan. Je kan altijd de tijd stilleggen. 
                    Overleg is altijd de juiste keuze bij twijfel.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Materiaal per categorie
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground mb-4">
                    Hierboven zie je wat je best kan bekijken vooraleer je een match gaat fluiten. Alles hangt dus af van het niveau, 
                    en of je iemand bij je hebt staan die helpt (je bent in rol van <em>assistent</em>), of dat je zelf iemand gaat 
                    begeleiden (in rol van <em>lead</em>). Want fluiten doe je vanaf U9 steeds met twee. Dat helpt een pak om het te leren, 
                    er is altijd iemand die je kan bijstaan en raad geven.
                  </p>
                  <div className="text-xs text-muted-foreground p-3 bg-muted rounded-lg">
                    <strong>Tip:</strong> Ideaal zijn beide scheidsrechters even ervaren en fluiten ze elk op hun kant van het veld. 
                    De aanpak van een assistent en lead maakt aanleren al doende gemakkelijker, al zullen beide nog steeds een eigen kant toegewezen worden.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;