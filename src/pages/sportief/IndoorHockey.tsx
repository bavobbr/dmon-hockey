import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  Users,
  ShoppingBag,
  Euro,
  CheckCircle2,
  AlertCircle,
  BookOpen,
  ArrowRight,
  Sparkles,
  Shield,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

const subNavLinks = [
  { href: "#overzicht", label: "Overzicht" },
  { href: "#teams", label: "Teams" },
  { href: "#planning", label: "Planning" },
  { href: "#training", label: "Training" },
  { href: "#materiaal", label: "Materiaal" },
  { href: "#prijzen", label: "Prijzen" },
  { href: "#info", label: "Info" },
];

const IndoorHockey = () => {
  const competitionTeams = [
    "U9G", "U10G", "U10B", "U12B", "U14G", "U14B1", "U14B2", "U16G1", "U16G2"
  ];

  const trainingSchedule = [
    {
      day: "Woensdag",
      time: "14u15 – 17u15",
      note: "Sporthal Hamme-Meulenbroek",
      sessions: [
        { time: "14u15 – 15u15", groups: "U16G" },
        { time: "15u15 – 16u15", groups: "U9B, U10G, U10B" },
        { time: "16u15 – 17u15", groups: "U9G, U12B" },
      ],
    },
    {
      day: "Vrijdag",
      time: "17u – 19u",
      note: "Geen training op 26/12 en 02/01",
      sessions: [
        { time: "17u – 18u", groups: "U6, U7G, U7B, U8G, U8B" },
        { time: "18u – 19u", groups: "U14B, U14G" },
      ],
    },
    {
      day: "Zondag",
      time: "16u30 – 18u",
      note: "Geen training op 14/12, 28/12 en 08/02",
      sessions: [
        { time: "16u30 – 18u", groups: "U19G, U19B, Trimmers, Dames, Heren, Gents" },
      ],
    },
  ];

  const equipment = [
    {
      item: "Indoor stick",
      note: "In het algemeen goedkoper dan outdoor sticks",
      required: true,
    },
    {
      item: "Indoor handschoen",
      note: "Dit is een specifieke indoor handschoen – verplicht!",
      required: true,
    },
    {
      item: "Zaalschoenen",
      note: "Geen zwarte zool",
      required: true,
    },
    {
      item: "Wedstrijdtenue, bit en scheenbeschermers",
      note: "Blijven dezelfde als outdoor",
      required: false,
    },
  ];

  const pricing = [
    { category: "Training onderbouw (U7, U8)", price: "€80" },
    { category: "Training onderbouw (≥ U9) en bovenbouw (≥ U14) en volwassenen", price: "€90" },
    { category: "Training + competitie (≤ U14)", price: "€130" },
    { category: "Training + competitie (≥ U14)", price: "€140" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-30" />
        <div className="container relative mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
              Seizoen 2025-2026
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Indoor Hockey
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-primary-foreground/85 md:text-xl">
              De snelle, technische en dynamische variant van veldhockey. 
              Negen ploegen schreven zich in voor de competitie en er is opnieuw een mogelijkheid om enkel trainingen te volgen.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="secondary" size="lg">
                <Link to="/lidmaatschap/indoor-registratie" className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Inschrijven
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link to="/sportief/regels/indoor" className="inline-flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Spelregels indoor
                </Link>
              </Button>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-bold md:text-3xl">9</div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/70">Competitieteams</div>
              </div>
              <div>
                <div className="text-2xl font-bold md:text-3xl">3</div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/70">Trainingsdagen</div>
              </div>
              <div>
                <div className="text-2xl font-bold md:text-3xl">Nov – Feb</div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/70">Seizoen</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky sub-nav */}
      <div className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <nav className="flex gap-1 overflow-x-auto py-3 text-sm">
            {subNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="mx-auto max-w-5xl space-y-16">
          {/* Overzicht */}
          <section id="overzicht">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Wat is Indoor Hockey?</h2>
                <p className="text-muted-foreground">De wintervariant die je techniek aanscherpt</p>
              </div>
            </div>

            <Card>
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Indoor hockey wordt gespeeld in een sporthal op een kleiner veld (36–44 m lang, 18–22 m breed) 
                  afgebakend met indoor balken met <strong className="text-foreground">6 spelers per team</strong>, inclusief keeper.
                </p>
                <div className="flex items-start gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950/20">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    De bal blijft laag en wordt enkel <strong>geschoven ('gepusht')</strong> en je mag de balken 
                    gebruiken wat het spel razendsnel en technisch maakt.
                  </p>
                </div>
                <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950/20">
                  <p className="text-sm text-green-800 dark:text-green-200">
                    <strong>🏆 Vorig jaar:</strong> Onze toenmalige U14G-ploeg kroonde zich tot kampioen! 
                    De voordelen waren duidelijk: technische vooruitgang, continuïteit tijdens de winter, 
                    en de teamgeest bleef behouden.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Regels Link */}
          <section>
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Spelregels Indoor Hockey</h3>
                      <p className="text-sm text-muted-foreground">
                        Ontdek alle regels en richtlijnen voor indoor hockey
                      </p>
                    </div>
                  </div>
                  <Button asChild>
                    <Link to="/sportief/regels/indoor" className="inline-flex items-center gap-2">
                      Bekijk de spelregels
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Teams */}
          <section id="teams">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Competitie Teams</h2>
                <p className="text-muted-foreground">Ploegen ingeschreven voor het seizoen 2025-2026</p>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2">
                  {competitionTeams.map((team) => (
                    <Badge key={team} variant="secondary" className="px-3 py-1.5 text-sm">
                      {team}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Planning */}
          <section id="planning">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Competitie Planning</h2>
                <p className="text-muted-foreground">Seizoen 29 november 2025 – 15 februari 2026</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/20">
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  <strong>Opgelet:</strong> Er wordt ook gespeeld in de weekends van 20 &amp; 21 december, 
                  3 &amp; 4 januari en 14 &amp; 15 februari.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <MapPin className="h-4 w-4 text-primary" />
                      Thuis – Onderbouw Meisjes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Hamme-Meulenbroek (zaterdag)</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <MapPin className="h-4 w-4 text-primary" />
                      Thuis – Onderbouw Jongens
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Sint-Gillis (zondag)</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <MapPin className="h-4 w-4 text-primary" />
                      Thuis – Bovenbouw
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-1 text-sm text-muted-foreground">
                    <p>Jongens: Hamme-Meulenbroek (zat)</p>
                    <p>Meisjes: Sint-Gillis (zon)</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h4 className="mb-2 font-semibold flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    Uitwedstrijden
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Gezien onze ploegen (op U16G1 na) zijn ingeschreven in VHL3, verwachten we niet 
                    dat de verplaatsingen heel ver zullen zijn.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Training */}
          <section id="training">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Trainingsschema</h2>
                <p className="text-muted-foreground">Periode 26 november – 15 februari | Locatie: Sporthal Hamme-Meulenbroek</p>
              </div>
            </div>

            <div className="space-y-4">
              {trainingSchedule.map((schedule) => (
                <Card key={schedule.day}>
                  <CardContent className="p-6">
                    <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h4 className="font-semibold">{schedule.day}</h4>
                        <p className="text-sm text-muted-foreground">{schedule.time}</p>
                      </div>
                      <p className="text-xs text-muted-foreground">{schedule.note}</p>
                    </div>
                    <div className="space-y-2">
                      {schedule.sessions.map((session, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm">
                          <Badge variant="outline" className="font-mono">
                            {session.time}
                          </Badge>
                          <span className="text-muted-foreground">{session.groups}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/20">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  We streven naar een <strong>maximum van 30 spelers per uur</strong> om de kwaliteit te garanderen.
                </p>
              </div>
            </div>
          </section>

          {/* Materiaal */}
          <section id="materiaal">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <ShoppingBag className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Benodigdheden</h2>
                <p className="text-muted-foreground">Wat heb je nodig voor indoor hockey?</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {equipment.map((item) => (
                <Card key={item.item}>
                  <CardContent className="flex items-start gap-4 p-6">
                    {item.required ? (
                      <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                    ) : (
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Prijzen */}
          <section id="prijzen">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Euro className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Prijzen</h2>
                <p className="text-muted-foreground">Financieel overzicht seizoen 2025-2026</p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {pricing.map((item) => (
                <Card key={item.category}>
                  <CardContent className="flex items-center justify-between gap-3 p-6">
                    <h4 className="text-sm font-medium">{item.category}</h4>
                    <Badge variant="secondary" className="text-lg font-bold">
                      {item.price}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Info */}
          <section id="info">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Belangrijke Informatie</h2>
                <p className="text-muted-foreground">Praktische zaken om rekening mee te houden</p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Scheidsrechters</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Elke ploeg is verplicht één scheidsrechter te leveren op zowel uit- als thuiswedstrijden 
                    en moet een apart indoor examen afleggen.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Spelers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Vanaf 2de jaars U14 is het indoor examen ook verplicht.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Balken</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    De club heeft een tweede set balken aangekocht voor de site Hamme-Meulenbroek. 
                    Die van Sint-Gillis zullen ter plaatse blijven.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Final CTA */}
          <section className="rounded-2xl bg-gradient-to-br from-primary to-accent p-8 text-primary-foreground md:p-12">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10">
                  <Mail className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Klaar voor indoor?</h3>
                  <p className="mt-1 max-w-lg text-primary-foreground/85">
                    Schrijf je nu in voor het indoor seizoen 2025-2026 en blijf ook in de winter actief op de stick!
                  </p>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="flex-shrink-0"
              >
                <Link to="/lidmaatschap/indoor-registratie" className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Naar inschrijvingsformulier
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default IndoorHockey;
