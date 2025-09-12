import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Timer, ExternalLink, BookOpen, Users, Target, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const U14PlusRules = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Spelregels U14 en hoger</h1>
        
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
                Volledige regels vanaf U14
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Je kan als je wenst al bijdragen — met minimale technische kennis — vanaf U6 (kinderen onder 6 jaar) matchen. 
                Vanaf U9 wordt het spel iets uitgebreider qua regels en dan vanaf U14 starten we met de volledige regels. 
                Elke leeftijdscategorie voegt op die manier nieuwe elementen toe zodat kinderen het spel stap voor stap leren, 
                en ouders/supporters kunnen meegroeien aan de zijlijn.
              </p>
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Een scheidsrechter bij een U8 ploeg hoeft dus geen hockey-technische regels te aan te leren die pas van toepassing 
                  zijn vanaf U9, en een scheidsrechter U10 wordt helemaal niet verwacht alle regels te kennen voor groot veld vanaf U14; 
                  de basisfouten herkennen voldoet helemaal!
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Registreren
                </CardTitle>
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
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Regionaal vs Nationaal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Ook op groot veld geldt dat op regionaal niveau het voldoende is theoretische regelkennis te hebben aangetoond, 
                  en er geen vereiste is van praktische examens. Dat komt pas later in nationale competitie!
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Hoe begin ik eraan?
              </CardTitle>
              <CardDescription>
                Er zijn een paar stappen waar je doorheen kan voor groot veld
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                    Stappenplan groot veld
                  </h4>
                  <p className="text-green-800 dark:text-green-200 text-sm mb-2">
                    Hierboven zie je wat je best kan bekijken vooraleer je een match gaat fluiten. Alles hangt dus af van het niveau, 
                    en of je iemand bij je hebt staan die helpt (je bent in rol van <em>assistent</em>), of dat je zelf iemand gaat 
                    begeleiden (in rol van <em>lead</em>).
                  </p>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    Want fluiten doe je vanaf U9 steeds met twee. Dat helpt een pak om het te leren, 
                    er is altijd iemand die je kan bijstaan en raad geven.
                  </p>
                </div>
                
                <div className="text-xs text-muted-foreground p-3 bg-muted rounded-lg">
                  <strong>Tip:</strong> Ideaal zijn beide scheidsrechters even ervaren en fluiten ze elk op hun kant van het veld. 
                  De aanpak van een assistent en lead maakt aanleren al doende gemakkelijker, al zullen beide nog steeds een eigen kant toegewezen worden.
                </div>
                
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    Belangrijke tip
                  </h4>
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    Als je start, wees niet bang in overleg te gaan. Je kan altijd de tijd stilleggen. 
                    Overleg is altijd de juiste keuze bij twijfel.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Basisregels hockey
              </CardTitle>
              <CardDescription>
                Het allerbeste overzicht van de basisregels voor een volwaardige hockeymatch
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Als je helemaal nieuw bent in Hockey, dan kan het interessant zijn om te kijken wat de basisregels zijn van een 
                volwaardige hockeymatch. Het allerbeste overzicht komt van de Nederlandse hockeybond waar ze het spelverloop 
                uitleggen met de basisregels. Die gelden vanaf groot veld, en komen in eenvoudigere vorm ook voor op half veld.
              </p>
              <p className="text-sm mb-4 text-muted-foreground">
                Voor de allerkleinsten op klein veld is dit niet relevant (je hebt genoeg aan de <em>pictogrammen</em>), 
                al is het zeker goed om weten waar we uiteindelijk naartoe werken!
              </p>
              
              <div className="space-y-3">
                <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                  <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                    Drillster voor oefening
                  </h4>
                  <p className="text-amber-800 dark:text-amber-200 text-sm">
                    Je kan de spelregels oefenen via Drillster. Vraag je Drillster account aan bij Bavo/Pierre. 
                    Dit kan zowel op computer als op GSM via de Drillster app.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default U14PlusRules;