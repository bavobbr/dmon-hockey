import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, ShoppingBag, Euro, CheckCircle2, AlertCircle } from "lucide-react";

const IndoorHockey = () => {
  const competitionTeams = [
    "U9G", "U10G", "U10B", "U12B", "U14G", "U14B1", "U14B2", "U16G1", "U16G2"
  ];

  const trainingSchedule = [
    {
      day: "Woensdag",
      time: "14u15 - 17u15",
      sessions: [
        { time: "14u15 - 15u15", groups: "U16G + U19B" },
        { time: "15u15 - 16u15", groups: "U9G, U10G, U10B" },
        { time: "16u15 - 17u15", groups: "U11B, U11G, U12B" }
      ]
    },
    {
      day: "Vrijdag",
      time: "17u - 19u",
      note: "Geen training op 26/12 en 02/01",
      sessions: [
        { time: "17u - 18u", groups: "U7G, U7B, U8G, U8B" },
        { time: "18u - 19u", groups: "U14B, U14G" }
      ]
    },
    {
      day: "Zondag",
      time: "14u - 16u",
      note: "Geen training op 14/12, 28/12 en 08/02",
      sessions: [
        { time: "14u - 16u", groups: "Trimmers, Ladies, Heren, Gents (verdeling volgt)" }
      ]
    }
  ];

  const equipment = [
    { item: "Indoor stick", note: "In het algemeen goedkoper dan outdoor sticks", required: true },
    { item: "Indoor handschoen", note: "Dit is een specifieke indoor handschoen - verplicht!", required: true },
    { item: "Zaalschoenen", note: "Geen zwarte zool", required: true },
    { item: "Wedstrijdtenue, bit en scheenbeschermers", note: "Blijven dezelfde als outdoor", required: false }
  ];

  const pricing = [
    { category: "Training onderbouw (U7, U8)", price: "€80" },
    { category: "Training onderbouw (≥ U9) en bovenbouw (≥ U14) en volwassenen", price: "€90" },
    { category: "Training + competitie (≤ U14)", price: "€127,50" },
    { category: "Training + competitie (≥ U14)", price: "€140" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Indoor Hockey</h1>
        
        {/* Introduction */}
        <Card className="mb-8 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-primary">Seizoen 2025-2026</CardTitle>
            <CardDescription>
              Na een geslaagde eerste ervaring vorig jaar, zijn we klaar voor een nieuw seizoen!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Deze snelle, technische en dynamische variant van veldhockey zorgt ervoor dat onze spelers 
              ook in de winter actief blijven én hun vaardigheden verder aanscherpen. Negen ploegen hebben 
              zich ingeschreven voor de competitie en er gaat weer een mogelijkheid gegeven worden om enkel 
              trainingen te volgen.
            </p>
            <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-green-800 dark:text-green-200 text-sm">
                <strong>🏆 Vorig jaar:</strong> Onze toenmalige U14G-ploeg kroonde zich tot kampioen! 
                De voordelen waren duidelijk: technische vooruitgang, continuïteit tijdens de winter, 
                en de teamgeest bleef behouden.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* What is Indoor Hockey */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Wat is Indoor Hockey?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Indoor hockey wordt gespeeld in een sporthal op een kleiner veld (36–44 m lang, 18–22 m breed) 
                afgebakend met indoor balken met <strong>6 spelers per team</strong>, inclusief keeper.
              </p>
              <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    De bal blijft laag en wordt enkel <strong>geschoven ('gepusht')</strong> en je mag de balken 
                    gebruiken wat het spel razendsnel en technisch maakt.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Competition Teams */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Competitie Teams
            </CardTitle>
            <CardDescription>Ploegen ingeschreven voor het seizoen 2025-2026</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {competitionTeams.map((team) => (
                <Badge key={team} variant="secondary" className="text-sm px-3 py-1">
                  {team}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Competition Planning */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Competitie Planning
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Seizoen</h4>
              <p className="text-muted-foreground text-sm">
                29 november 2025 – 15 februari 2026
              </p>
              <div className="mt-2 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                  <strong>⚠️ Opgelet:</strong> Er wordt ook gespeeld in de weekends van 20 & 21 december, 
                  3 & 4 januari en 14 & 15 februari
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Locaties
              </h4>
              <div className="space-y-3">
                <div className="border rounded-lg p-3">
                  <p className="font-medium text-sm mb-1">Thuiswedstrijden Onderbouw</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Meisjes: Hamme-Meulenbroek (zaterdag)</li>
                    <li>• Jongens: Sint-Gillis (zondag)</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-3">
                  <p className="font-medium text-sm mb-1">Thuiswedstrijden Bovenbouw</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Jongens: Hamme-Meulenbroek (zaterdag)</li>
                    <li>• Meisjes: Sint-Gillis (zondag)</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-3">
                  <p className="font-medium text-sm mb-1">Uitwedstrijden</p>
                  <p className="text-sm text-muted-foreground">
                    Gezien onze ploegen (op U16G1 na) zijn ingeschreven in VHL3, verwachten we niet 
                    dat de verplaatsingen heel ver zullen zijn.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Training Schedule */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Trainingsschema
            </CardTitle>
            <CardDescription>
              Periode: 19 november – 11 februari | Locatie: Sporthal Hamme-Meulenbroek
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trainingSchedule.map((schedule) => (
                <div key={schedule.day} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold">{schedule.day}</h4>
                      <p className="text-sm text-muted-foreground">{schedule.time}</p>
                      {schedule.note && (
                        <p className="text-xs text-amber-600 dark:text-amber-400 mt-1">{schedule.note}</p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    {schedule.sessions.map((session, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm">
                        <Badge variant="outline" className="font-mono">{session.time}</Badge>
                        <span className="text-muted-foreground">{session.groups}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                We streven naar een <strong>maximum van 30 spelers per uur</strong> om de kwaliteit te garanderen.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Equipment */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              Benodigdheden
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {equipment.map((item) => (
                <div key={item.item} className="flex items-start gap-3 p-3 border rounded-lg">
                  {item.required ? (
                    <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  ) : (
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  )}
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{item.item}</h4>
                      {item.required && (
                        <Badge variant="destructive" className="text-xs">Verplicht</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Belangrijke Informatie</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold mb-1">Scheidsrechters</h4>
              <p className="text-sm text-muted-foreground">
                Elke ploeg is verplicht één scheidsrechter te leveren op zowel uit- en thuiswedstrijden 
                en moet een apart indoor examen afleggen.
              </p>
            </div>
            
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold mb-1">Spelers</h4>
              <p className="text-sm text-muted-foreground">
                Vanaf 2de jaars U14 is het indoor examen ook verplicht.
              </p>
            </div>
            
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold mb-1">Balken</h4>
              <p className="text-sm text-muted-foreground">
                De club heeft een tweede set balken aangekocht voor de site Hamme-Meulenbroek. 
                Die van Sint-Gillis zullen ter plaatse blijven.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Pricing */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Euro className="h-5 w-5" />
              Prijzen
            </CardTitle>
            <CardDescription>Financieel overzicht seizoen 2025-2026</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {pricing.map((item) => (
                <div key={item.category} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start gap-3">
                    <h4 className="font-medium text-sm">{item.category}</h4>
                    <Badge variant="secondary" className="text-lg font-bold">
                      {item.price}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-primary">Vragen of Inschrijven?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              De ploegencommunicatie zal via jullie team managers gebeuren. 
              Indien je specifieke vragen hebt, mag je altijd mailen naar{" "}
              <a 
                href="mailto:pieter.bruylandc@gmail.com" 
                className="text-primary hover:underline font-medium"
              >
                pieter.bruylandc@gmail.com
              </a>
            </p>
            <p className="text-sm text-muted-foreground italic">
              Met sportieve groeten,<br />
              Indoor Hockey Team 2025–2026
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default IndoorHockey;
