import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Heart, Users, AlertTriangle, Mail, ExternalLink } from "lucide-react";
import clubValuesImage from "@/assets/club-values.png";

const ClubValues = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Clubwaarden</h1>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  Respect
                </CardTitle>
                <CardDescription>De basis van onze clubgemeenschap</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Wij behandelen alle spelers, coaches, officials en supporters met respect, 
                  ongeacht leeftijd, vaardigheidsniveau, achtergrond of ervaring. Respect creëert 
                  een omgeving waar iedereen kan genieten van hockey en zijn potentieel kan ontwikkelen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-500" />
                  Fair Play
                </CardTitle>
                <CardDescription>Spelen volgens de regels, in geest en letter</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fair play betekent meer dan het volgen van de regels. Het gaat over spelen met 
                  integriteit, beslissingen waardig accepteren en succesvol zijn met nederigheid. 
                  We strijden hard maar altijd met sportiviteit en eer.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-500" />
                  Inclusiviteit
                </CardTitle>
                <CardDescription>Hockey voor iedereen</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Onze club verwelkomt spelers van alle achtergronden, vaardigheden en ervaringsniveaus. 
                  We geloven dat diversiteit onze gemeenschap versterkt en hockey leuker maakt voor 
                  iedereen die betrokken is.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="max-w-sm">
              <img 
                src={clubValuesImage} 
                alt="D-mon Hockey Club Waarden - Respect en Afspraken" 
                className="w-full h-auto rounded-lg shadow-lg border"
              />
            </div>
          </div>
        </div>

        <Card className="border-orange-200 bg-orange-50/50 dark:bg-orange-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-400">
              <AlertTriangle className="h-5 w-5" />
              AanspreekPunt Integriteit (API)
            </CardTitle>
            <CardDescription className="text-orange-600 dark:text-orange-300">
              Meld grensoverschrijdend gedrag
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-orange-700 dark:text-orange-300">
                Grensoverschrijdend gedrag is elke vorm van ongewenst gedrag van anderen dat persoonlijke 
                grenzen overschrijdt. Kom je in aanraking met pesterijen, discriminatie, racisme, 
                ongewenst seksueel gedrag... Weet dat je hiervoor bij ons terechtkan.
              </p>
              
              <p className="text-orange-700 dark:text-orange-300">
                Onze club tolereert geen enkele vorm van grensoverschrijdend gedrag. Alle meldingen worden 
                steeds ernstig genomen en behandeld in alle discretie en objectiviteit. Er worden geen 
                stappen ondernomen zonder uitdrukkelijke toestemming van de melder.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="outline" 
                  className="border-orange-300 text-orange-700 hover:bg-orange-100 dark:border-orange-600 dark:text-orange-300 dark:hover:bg-orange-950" 
                  asChild
                >
                  <a href="mailto:api@dmon.be" className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    api@dmon.be
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-orange-300 text-orange-700 hover:bg-orange-100 dark:border-orange-600 dark:text-orange-300 dark:hover:bg-orange-950"
                  asChild
                >
                  <a 
                    href="https://app.trustan.io/report/65b1137a7413f40088e747eb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Anonieme Melding via Trustan
                  </a>
                </Button>
              </div>
              
              <p className="text-sm text-orange-600 dark:text-orange-400">
                Contacteer je liever iemand van de Vlaamse Hockey Liga of verkies je om een anonieme 
                melding te maken? Het Trustan platform zet een veilige en anonieme dialoog in gang 
                met de neutrale vertrouwenspersoon van uw keuze.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClubValues;