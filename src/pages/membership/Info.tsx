import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Euro, Gift, ShoppingBag, Shirt, FileText, Phone, ExternalLink } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

const MembershipInfo = () => {
  const membershipFees = [
    { category: "Basistarief", description: "2 trainingen + match", fee: "320 euro" },
    { category: "U6", description: "1 training + match vanaf februari", fee: "220 euro" },
    { category: "Dames en heren", description: "Volwassen teams", fee: "320 euro" },
    { category: "Trimmers en Gents", description: "Oudere teams", fee: "285 euro" },
    { category: "G-hockey", description: "Hockey voor jongeren met een beperking", fee: "195 euro" }
  ];

  const discounts = [
    { 
      type: "Gezinskorting", 
      description: "Vanaf elke bijkomende inschrijving binnen een gezin wordt een korting van 25 euro voorzien.", 
      icon: Gift 
    },
    { 
      type: "Sociaal tarief", 
      description: "Bij moeilijkheden kan een beroep gedaan worden op een sociaal tarief via de Uitpas Kansentarief.", 
      icon: Gift 
    }
  ];

  const requiredEquipment = [
    { item: "Hockeystick", required: true, note: "Geschikt voor leeftijd en niveau" },
    { item: "Beenbeschermers", required: true, note: "Goed passend voor bescherming" },
    { item: "Bitje", required: true, note: "Verplicht voor alle spelers" },
    { item: "Hockeyschoenen", required: true, note: "Antislip zolen voor kunstgras" }
  ];

  const storeDiscounts = [
    { store: "Topsport Dendermonde", discount: "20%", note: "Mogelijk dien je je lidmaatschap aan te tonen" },
    { store: "DNA Boom", discount: "10%", note: "Voor de aankoop van hockeymateriaal" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Lid Worden - Informatie</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Welkom bij D-MON Hockey</CardTitle>
            <CardDescription>
              Ontdek onze programma's voor spelers van alle leeftijden en niveaus
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We hebben zowel een jeugd- als volwassenenwerking. Ook jongeren met een beperking zijn welkom.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-blue-800 dark:text-blue-200 mb-3 font-medium">
                📅 Trainingsrooster 2024-2025
              </p>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://static.twizzit.com/public/v2/chat/message/attachment/3210422/f72e69c96d253fcdc03611b7dc769262d0fd5f8b.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FileText className="h-4 w-4" />
                  Download Trainingsrooster (PDF)
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Membership Fees */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Euro className="h-5 w-5" />
              Lidgeld
            </CardTitle>
            <CardDescription>Overzicht van de lidgelden voor het seizoen 2024-2025</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {membershipFees.map((fee) => (
                <div key={fee.category} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{fee.category}</h4>
                    <Badge variant="secondary" className="text-lg font-bold">{fee.fee}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{fee.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Discounts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="h-5 w-5" />
              Korting
            </CardTitle>
            <CardDescription>We doen extra inspanningen om de toegankelijkheid te borgen</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {discounts.map((discount) => (
                <div key={discount.type} className="flex items-start gap-3 p-4 border rounded-lg">
                  <discount.icon className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-medium">{discount.type}</h4>
                    <p className="text-sm text-muted-foreground">{discount.description}</p>
                  </div>
                </div>
              ))}
              
              <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                  <strong>Betalingsinformatie:</strong> Uitnodiging tot betaling volgt via de penningmeester in september/oktober. 
                  Er wordt ook een attest bezorgd voor het ziekenfonds. Vragen over betaling of attesten? Neem contact met{" "}
                  <a href="mailto:penningmeester@dmon.be" className="underline hover:no-underline">
                    penningmeester@dmon.be
                  </a>
                </p>
                <p className="text-amber-800 dark:text-amber-200 text-sm mt-2">
                  Voor vragen over sociaal tarief: <a href="mailto:info@dmon.be" className="underline hover:no-underline">info@dmon.be</a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Required Equipment */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              Benodigde Uitrusting
            </CardTitle>
            <CardDescription>Wat je zeker nodig hebt om te beginnen</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {requiredEquipment.map((item) => (
                <div key={item.item} className="flex items-start gap-3 p-3 border rounded-lg">
                  <div className={`w-3 h-3 rounded-full mt-2 ${item.required ? 'bg-red-500' : 'bg-green-500'}`}></div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{item.item}</h4>
                      <Badge variant={item.required ? "destructive" : "secondary"} className="text-xs">
                        {item.required ? "Verplicht" : "Optioneel"}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">💡 Tip voor nieuwe leden</h4>
              <p className="text-blue-700 dark:text-blue-300 text-sm mb-3">
                Lees meer uitgebreide informatie in onze onthaalbrochure voor nieuwe leden:
              </p>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://dmon.be/wp-content/uploads/2024/09/Onthaalbrochure-D-MON-Hockey.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FileText className="h-4 w-4" />
                  Download Onthaalbrochure (PDF)
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Club Clothing */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shirt className="h-5 w-5" />
              Wedstrijdoutfit en Clubkledij
            </CardTitle>
            <CardDescription>Officiële clubuitrusting en uniformen</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">🏑 Wedstrijdoutfit</h4>
                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <p className="text-green-800 dark:text-green-200 text-sm mb-3">
                    De outfit bestaat uit een T-shirt met je naam (+ rugnummer vanaf U14), rokje/short, kousen.
                  </p>
                  <ul className="text-green-700 dark:text-green-300 text-sm space-y-1 mb-3">
                    <li>• Te bestellen via de rubriek Shop (kleding Topsport)</li>
                    <li>• We spelen nog tot juni 2025 in deze outfit, daarna verrassen we jullie met iets nieuws</li>
                    <li>• <strong>Opgelet:</strong> je kan niet in de winkel zelf bestellen</li>
                  </ul>
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href="https://topsport-clubs.be/collections/d-mon-hockey"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      Bestellen via Topsport
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">👕 Andere Clubkledij (optioneel)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Hoodie, regenjas en andere clubkledij zijn optioneel en te bestellen via dezelfde link.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-3">💰 Kortingen bij Sportgeslachten</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {storeDiscounts.map((store) => (
                    <div key={store.store} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h5 className="font-medium">{store.store}</h5>
                        <Badge variant="outline" className="text-green-600 border-green-600">{store.discount} korting</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{store.note}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <RouterLink to="/shop">
                  <Button>
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Bezoek Club Shop
                  </Button>
                </RouterLink>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* New Members */}
        <Card className="mb-8 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-primary">Nieuwe Leden</CardTitle>
            <CardDescription>
              Interesse om lid te worden? Hier vind je alle stappen
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-1">1</div>
                <div>
                  <h4 className="font-medium">Interesse?</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Vul het registratieformulier in. We geven een seintje om te laten weten of er nog plaats is.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-1">2</div>
                <div>
                  <h4 className="font-medium">Start je met competitie?</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Vraag de hoofdtrainer (Pierre Samyn – 0477 49 11 89), team manager/coach/trainer gerust om meer informatie.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ready to Join */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-primary">Klaar om Lid te Worden?</CardTitle>
            <CardDescription>
              Start je hockeyavontuur vandaag nog bij ons
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <RouterLink to="/membership/register">
                <Button size="lg">
                  Vul Registratieformulier In
                </Button>
              </RouterLink>
              <RouterLink to="/membership/contact">
                <Button variant="outline" size="lg">
                  Heb je Vragen? Neem Contact Op
                </Button>
              </RouterLink>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MembershipInfo;