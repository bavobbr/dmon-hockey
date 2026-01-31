import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Timer, ExternalLink, BookOpen, Users, Target, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import stappen from "@/assets/stappen.png";
import u10u12Rules1 from "@/assets/u10u12-rules-1.png";
import u10u12Rules2 from "@/assets/u10u12-rules-2.png";

const U10U12Rules = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Spelregels U10 tot U12</h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="mb-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-lg mb-4">
              Je bent vaak op hockey-wedstrijden aanwezig en wilt de club graag meehelpen? Dan is scheidsrechter een van de meest zinvolle, interessante én leuke taken die je kan opnemen!
            </p>
          </div>

          <div className="flex flex-col items-center my-8">
            <img 
              src={stappen} 
              alt="Aangeraden materiaal per categorie" 
              className="max-w-2xl w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-sm text-muted-foreground mt-2 italic">
              Aangeraden materiaal per categorie
            </p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Timer className="h-5 w-5" />
                Geleidelijke opbouw
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
                  Regionaal niveau
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
                <BookOpen className="h-5 w-5" />
                Basisregels hockey
              </CardTitle>
              <CardDescription>
                Voor U10-U12 wordt het interessant om de basisregels van een volwaardige hockeymatch te bekijken
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
              
              <div className="mt-6">
                <h4 className="font-semibold mb-4">Start To Hockey - Spelregels</h4>
                <div className="bg-muted rounded-lg p-4 mb-4">
                  <iframe
                    src="https://www.slideshare.net/slideshow/embed_code/key/4N3oTp9LQrJj3K"
                    width="100%"
                    height="355"
                    frameBorder="0"
                    allow="autoplay; fullscreen; encrypted-media"
                    title="Start To Hockey - Spelregels"
                    className="rounded"
                  ></iframe>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  We hebben zelf ook een handig overzicht gemaakt van de basisregels groot veld. Blader zeker eens door de slides van DMON Start To Hockey waar alles mooi gevisualiseerd wordt!
                </p>
                <p className="text-sm text-muted-foreground">
                  Meer info kan je vinden op <a href="https://www.knhb.nl/spelregels-hockey" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.knhb.nl/spelregels-hockey</a>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Spelregels U10 tot U12 (half veld)</CardTitle>
              <CardDescription>
                U10 tot U12 spelen half veld met penalty corners
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                    Aangeraden materiaal per categorie
                  </h4>
                  <p className="text-green-800 dark:text-green-200 text-sm">
                    Hierboven zie je wat je best kan bekijken vooraleer je een match gaat fluiten. Alles hangt dus af van het niveau, 
                    en of je iemand bij je hebt staan die helpt (je bent in rol van <em>assistent</em>), of dat je zelf iemand gaat 
                    begeleiden (in rol van <em>lead</em>). Want fluiten doe je vanaf U9 steeds met twee. Dat helpt een pak om het te leren, 
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

                <div>
                  <h4 className="font-semibold mb-4">Start to Umpire - Belangrijkste fouten (half veld)</h4>
                  <p className="text-sm mb-4 text-muted-foreground">
                    De Belgische hockeybond heeft een handig overzicht van de belangrijkste fouten die gemaakt worden door spelers in een match vanaf U9 (half veld). Als je in die categorie fluit, is dat waar je extra aandachtig voor wilt zijn!
                  </p>
                  
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <PlayCircle className="h-5 w-5" />
                      <span className="font-medium">Start to Umpire - Kick (Fr)</span>
                    </div>
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/saPV678-3Ik?list=PLag9_tWawv3Q6uOVToLVgb8UixIsBgin2"
                      title="Start to umpire - Kick (Fr)"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded"
                    ></iframe>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    Meer filmpjes vind je op: <a href="https://hockey.be/nl/competitie/outdoor-hockey/starttoumpire/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://hockey.be/nl/competitie/outdoor-hockey/starttoumpire/</a>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Pictogrammen U10/U12</h4>
                  <p className="text-sm mb-4 text-muted-foreground">
                    Ook de Belgische hockeybond heeft pictogrammen voor U10/U12:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="text-center">
                      <img 
                        src={u10u12Rules1} 
                        alt="U10/U12 spelregels - deel 1" 
                        className="w-full h-auto rounded-lg shadow-lg border"
                      />
                    </div>
                    <div className="text-center">
                      <img 
                        src={u10u12Rules2} 
                        alt="U10/U12 spelregels - deel 2" 
                        className="w-full h-auto rounded-lg shadow-lg border"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 text-center">
                    Alle spelregels voor U10/U12
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

export default U10U12Rules;