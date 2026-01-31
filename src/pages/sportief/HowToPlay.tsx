import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Users,
  Trophy,
  Play,
  Shield,
  Target,
  Heart,
  ExternalLink,
  ArrowRight,
  PlayCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
const HowToPlay = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Start met hockey bij D-mon Hockey</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hockey is een snelle, technische en vooral ontzettend leuke teamsport die je buiten speelt op kunstgras.
            Twee ploegen proberen de bal in elkaars doel te krijgen door te passen, dribbelen en slim samen te spelen.
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-muted-foreground mb-4">
                  Hockey is in België enorm populair en onze nationale teams – de <strong>Red Lions</strong> (heren) en{" "}
                  <strong>Red Panthers</strong> (dames) – behoren tot de wereldtop.
                </p>
                <p className="text-muted-foreground">
                  Het mooiste aan hockey vind je niet alleen op het hoogste niveau: het is een sport voor alle
                  leeftijden, van 5 tot 75 jaar, en iedereen kan het leren.
                </p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-primary">Bij D-mon staat centraal:</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    ✓ <strong>Plezier</strong>
                  </li>
                  <li>
                    ✓ <strong>Teamgevoel</strong>
                  </li>
                  <li>
                    ✓ <strong>Fair play</strong>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  Of je nu wilt trainen om fitter te worden, nieuwe vrienden wilt maken of droomt van tophockey, er is
                  altijd een plek voor jou in onze club.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Basisregels van veldhockey
            </CardTitle>
            <CardDescription>
              Hockey lijkt op het eerste gezicht misschien complex, maar de basis is eenvoudig
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium mb-2">Doel van het spel</h4>
                  <p className="text-sm text-muted-foreground">
                    Twee teams proberen meer doelpunten te maken dan de tegenstander, door de bal met de platte kant van
                    de stick in het doel te spelen.
                  </p>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-medium mb-2">Teams</h4>
                  <p className="text-sm text-muted-foreground">
                    Bij jeugd vaak in kleinere formaties (3, 6 of 8 tegen 8), bij senioren 11 tegen 11.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-medium mb-2">Het veld</h4>
                  <p className="text-sm text-muted-foreground">
                    91,4 meter lang, 55 meter breed, met aan beide kanten een cirkel waaruit alleen gescoord mag worden.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium mb-2">De bal</h4>
                  <p className="text-sm text-muted-foreground">
                    Hard en kunststof, alleen speelbaar met de platte kant van de stick.
                  </p>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-medium mb-2">Regels</h4>
                  <p className="text-sm text-muted-foreground">
                    Geen gevaarlijk spel, geen voetfouten, hoge ballen alleen als het veilig is.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Hockey in 3 minuten
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/NPnrKxFwInc"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2">FIH</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Basisregels hockey
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/p8OF9JyiBC0"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2">Hockey Belgium</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Uitrusting & veiligheid
            </CardTitle>
            <CardDescription>Bij D-mon Hockey vinden we dat veiligheid en plezier hand in hand gaan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Stick</p>
                    <p className="text-sm text-muted-foreground">Tot net onder de navel, platte kant speelbaar</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Bal</p>
                    <p className="text-sm text-muted-foreground">Hard, klein en licht gekleurd</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Bescherming</p>
                    <p className="text-sm text-muted-foreground">
                      Bitje (verplicht), scheenbeschermers (sterk aanbevolen), hockeyhandschoen (optioneel),
                      keeperuitrusting voor doelmannen
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Kleding</p>
                    <p className="text-sm text-muted-foreground">
                      Clubtenue met shirt, short/rok en kousen. Kunstgrasschoenen voor grip
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Het veld & de posities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Veldafmetingen</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>
                    • <strong>Afmetingen:</strong> 91,4 m × 55 m
                  </li>
                  <li>
                    • <strong>Cirkel:</strong> Halfronde lijn voor het doel – alleen van hieruit scoren
                  </li>
                  <li>
                    • <strong>23-meterlijnen:</strong> Belangrijk bij spelhervattingen
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Posities</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-muted/50 p-2 rounded">Keeper</div>
                  <div className="bg-muted/50 p-2 rounded">Verdedigers</div>
                  <div className="bg-muted/50 p-2 rounded">Middenvelders</div>
                  <div className="bg-muted/50 p-2 rounded">Aanvallers</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Link to="/sportief/hockey-principes" className="block mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Hockey Principes</h3>
                    <p className="text-muted-foreground text-sm">
                      Ontdek de vier fasen van het spel: Offense, Defensive Transition, Defense en Offensive Transition
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-6 w-6 text-muted-foreground flex-shrink-0" />
              </div>
            </CardContent>
          </Card>
        </Link>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Technieken
            </CardTitle>
            <CardDescription>Technische vaardigheden en oefeningen</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Button variant="outline" className="h-auto p-4 justify-start" asChild>
                <a
                  href="https://docs.google.com/presentation/d/1EHJzdGfRRBGcnwlDCafCR-YrQ1HAUviS/edit?usp=drive_link&ouid=115910454372893949468&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <PlayCircle className="h-4 w-4" />
                      <span className="font-medium">Basistechnieken: tackling and dribbling</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Verdediging en balcontrole</p>
                  </div>
                </a>
              </Button>

              <Button variant="outline" className="h-auto p-4 justify-start" asChild>
                <a
                  href="https://docs.google.com/presentation/d/1cioswx4jL4AMpXzzaSs6Y-okl302Twm6/edit?usp=sharing&ouid=115910454372893949468&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <PlayCircle className="h-4 w-4" />
                      <span className="font-medium">Basistechnieken: passing, receiving and scoring</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Aanvallende technieken</p>
                  </div>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Spelverloop & spelvormen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium">U7–U8</h4>
                  <p className="text-sm text-muted-foreground">3v3, 1/8ste veld, zonder keeper</p>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-medium">U9</h4>
                  <p className="text-sm text-muted-foreground">6v6, 1/4de veld, vaak met keeper</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-medium">U10–U12</h4>
                  <p className="text-sm text-muted-foreground">8v8, groter veld, meer posities</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium">U14 en ouder</h4>
                  <p className="text-sm text-muted-foreground">11v11, volledig veld</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <ul className="text-sm space-y-1">
                <li>
                  • <strong>Trainingen:</strong> Afgestemd op leeftijd en niveau – veel techniek en spelplezier
                </li>
                <li>
                  • <strong>Fair play:</strong> Respect tussen spelers, scheidsrechters en supporters is de norm
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Waarom hockey?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Teamgevoel</p>
                    <p className="text-sm text-muted-foreground">Samen trainen, samen winnen</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Techniek & intelligentie</p>
                    <p className="text-sm text-muted-foreground">Balgevoel én tactisch inzicht</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Fysiek</p>
                    <p className="text-sm text-muted-foreground">Complete work-out</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Respect & sportiviteit</p>
                    <p className="text-sm text-muted-foreground">Fair play staat centraal</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Levenslang plezier</p>
                    <p className="text-sm text-muted-foreground">Voor jong en oud</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle>Meer informatie</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Voor coaches en trainers hebben we aanvullende informatie beschikbaar:
            </p>
            <Button variant="outline" asChild>
              <a href="/sportief/coaches-info">
                <ExternalLink className="h-4 w-4 mr-2" />
                Informatie voor coaches
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default HowToPlay;
