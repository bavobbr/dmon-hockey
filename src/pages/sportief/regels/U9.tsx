import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Timer, Users, ExternalLink, Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import u9Image from "@/assets/u9-regels.png.asset.json";
import u9BackImage from "@/assets/u9-regels-details.png.asset.json";

const U9Rules = () => {
  return (
    <div className="container mx-auto px-4 py-12 lg:py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Spelregels U9</h1>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="mb-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-lg mb-4">
              Je bent vaak op hockey-wedstrijden aanwezig en wilt de club graag meehelpen? Dan is scheidsrechter een van de meest zinvolle, interessante én leuke taken die je kan opnemen!
            </p>
            <p className="text-base">
              Je kan als je wenst al bijdragen — met minimale technische kennis — vanaf U6 (kinderen onder 6 jaar) matchen.
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
              <p className="text-sm">
                Vanaf U9 wordt het spel iets uitgebreider qua regels: 6x6 op een kwart veld met een 10m-zone,
                een verplichte keeper (zonder stick) en twee scheidsrechters. Vanaf U14 starten we met de volledige regels.
                Elke leeftijdscategorie voegt op die manier nieuwe elementen toe zodat kinderen het spel stap voor stap leren,
                en ouders/supporters kunnen meegroeien aan de zijlijn.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Nieuw bij U9
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">6 tegen 6 (min 4, max 6 per team op het veld), 2 x 25 minuten met 5 minuten rusttijd</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Keeper verplicht in volledige uitrusting, maar ZONDER stick — mag de zone niet verlaten</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Kwart veld met een 10m-zone rond het doel; scoringspogingen moeten in de zone aangeraakt worden</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Hoge ballen niet toegelaten (ook niet op doel); back stick en kick blijven fouten</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Self pass toegestaan; penalty corner is niet van toepassing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Elke coach krijgt 1 time-out per helft (max 30 sec); coach blijft buiten het veld</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Pictogrammen voor U9</CardTitle>
              <CardDescription>
                De pictogrammen hieronder zijn ook te vinden op de RBHA/VHL website
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 mb-4">
                <Button asChild>
                  <a
                    href="/docs/pictos-u9.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Download pictogrammen (PDF)
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href="https://hockey.be/nl/officials-division/spelregels-outdoor/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Bekijk op VHL website
                  </a>
                </Button>
              </div>

              <div className="space-y-6">
                <div className="text-center">
                  <img
                    src={u9Image.url}
                    alt="U9 spelregels pictogrammen overzicht"
                    loading="lazy"
                    className="w-full mx-auto rounded-lg shadow-md"
                  />
                  <p className="text-sm text-muted-foreground mt-2">U9 Spelregels (6x6)</p>
                </div>

                <div className="text-center">
                  <img
                    src={u9BackImage.url}
                    alt="U9 spelregels detailtabel"
                    loading="lazy"
                    className="w-full mx-auto rounded-lg shadow-md"
                  />
                  <p className="text-sm text-muted-foreground mt-2">Detailregels U9</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Registreren</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Wil je jezelf al registreren bij ons, zodat we je ook persoonlijk toegang kunnen voorzien tot onder andere
                de Twizzit app én je mee op het wedstrijdblad kunnen zetten?
              </p>
              <Button asChild>
                <a
                  href="https://app.twizzit.com/v2/public/form/cea9e8831bead08352918535621cd399"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Registreer via Twizzit formulier
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default U9Rules;
