import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Ruler, Target, ShoppingBag, ArrowRight, Mail, Lightbulb, AlertTriangle, Euro } from "lucide-react";
import { Link } from "@/lib/router-compat";

const sections = [
  { id: "advies", label: "Advies" },
  { id: "vuistregel", label: "Vuistregel" },
  { id: "lengte", label: "Lengte" },
  { id: "kromming", label: "Kromming" },
  { id: "carbon", label: "Carbon" },
  { id: "prijsadvies", label: "Prijsadvies" },
  { id: "stick-nodig", label: "Stick nodig?" },
];

const advice = [
  { player: "Jonge starter", length: "Volgens lichaamslengte", bow: "Standard / Mid", carbon: "0–20%" },
  { player: "Jeugdspeler die de basis leert", length: "Volgens lichaamslengte", bow: "Mid", carbon: "0–30%" },
  { player: "Jeugdspeler met enkele jaren ervaring", length: "Volgens lichaamslengte", bow: "Mid / Pro", carbon: "20–50%" },
  { player: "Technisch goede jeugdspeler", length: "Volgens lichaamslengte", bow: "Mid / Pro, eventueel Low", carbon: "40–70%" },
  { player: "Gevorderde competitieve speler", length: "Volwassen maat volgens lengte", bow: "Pro / Low", carbon: "60–90%" },
  { player: "Zeer ervaren speler", length: "Volgens voorkeur en lichaamsbouw", bow: "Volgens speelstijl", carbon: "80–100%" },
  { player: "Dragflick- of aerialspecialist", length: "Volgens voorkeur", bow: "Low / Extreme Low", carbon: "Meestal hoog" },
];

const rulesOfThumb = [
  {
    title: "Beginner?",
    text: "Juiste lengte, een Mid Bow en weinig carbon. Dat is de beste basis om techniek te leren.",
  },
  {
    title: "Enkele jaren ervaring?",
    text: "Kijk naar 30–60% carbon en eventueel een Pro Bow.",
  },
  {
    title: "Sterk en technisch ervaren?",
    text: "Dan worden 60–100% carbon en een Pro of Low Bow interessante opties.",
  },
  {
    title: "Extreme Low Bow?",
    text: "Alleen kopen wanneer je precies weet waarvoor je hem nodig hebt.",
  },
];

const lengthGuide = [
  { body: "tot ±122 cm", stick: '28"' },
  { body: "±122–130 cm", stick: '30"' },
  { body: "±130–137 cm", stick: '32"' },
  { body: "±137–152 cm", stick: '34"' },
  { body: "±152–161 cm", stick: '35"' },
  { body: "±161–178 cm", stick: '36.5"' },
  { body: "vanaf ±178 cm", stick: '37.5"' },
  { body: "zeer lange spelers", stick: '38–38.5"' },
];

const bowTypes = [
  { name: "Standard / Mid Bow", point: "±270–320 mm", use: "Basisvaardigheden, passing, stoppen en slaan" },
  { name: "Pro / Late Bow", point: "±240–260 mm", use: "Allround hockey, 3D-skills, flicks en aerials" },
  { name: "Low Bow", point: "±220–250 mm", use: "Technisch spel, liften, flicks en gevorderde 3D-skills" },
  { name: "Extreme Low Bow", point: "±200–220 mm", use: "Specialistisch: dragflicks en gevorderde aerials" },
];

const carbonGuide = [
  { level: "Eerste stick / absolute beginner", carbon: "0–20%" },
  { level: "Beginnende jeugdspeler", carbon: "0–30%" },
  { level: "Regelmatige speler met goede basis", carbon: "30–50%" },
  { level: "Technisch goede / competitieve speler", carbon: "50–70%" },
  { level: "Gevorderde en krachtige speler", carbon: "70–90%" },
  { level: "Zeer ervaren / hoog niveau", carbon: "80–100%" },
];

const priceGuide = [
  { carbon: "20%", new: "~ €60", lastSeason: "~ €40", older: "~ €30" },
  { carbon: "50%", new: "~ €150", lastSeason: "~ €100", older: "~ €75" },
  { carbon: "70%", new: "~ €210", lastSeason: "~ €140", older: "~ €105" },
  { carbon: "90%", new: "~ €270", lastSeason: "~ €180", older: "~ €135" },
  { carbon: "100%", new: "~ €300", lastSeason: "~ €200", older: "~ €150" },
];

const SectionHeader = ({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) => (
  <div className="mb-8">
    <div className="mb-2 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
      {eyebrow}
    </div>
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
    {intro && <p className="mt-2 max-w-3xl text-muted-foreground">{intro}</p>}
  </div>
);

const StickGuide = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="hero-decor" aria-hidden />
        <div className="hero-rule" aria-hidden />
        <div className="container mx-auto px-4 py-16 lg:py-24 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur-xs mb-6">
              Materiaalgids
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">De juiste hockeystick kiezen</h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 max-w-2xl">
              Mid Bow, Low Bow, 3K carbon, 95% carbon… merken gooien met termen. In de praktijk hoef je maar op drie
              zaken te letten. En nee: een duurdere of extremere stick is niet automatisch een betere stick.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="secondary">
                <a href="#advies">
                  Direct naar het advies <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href="#lengte">Lees de volledige gids</a>
              </Button>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-6">
              {[
                { n: "1", label: "Lengte", sub: "Past bij je lichaam" },
                { n: "2", label: "Kromming", sub: "Past bij je techniek" },
                { n: "3", label: "Carbon", sub: "Past bij je niveau" },
              ].map((f) => (
                <div key={f.label}>
                  <div className="text-2xl font-bold md:text-3xl whitespace-nowrap">{f.n}. {f.label}</div>
                  <div className="text-xs uppercase tracking-wider text-primary-foreground/70">{f.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky sub-nav */}
      <nav className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border/60">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-md whitespace-nowrap transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="max-w-5xl mx-auto space-y-16">

          {/* Advies — zwaartepunt van de pagina */}
          <section id="advies" className="scroll-mt-24">
            <SectionHeader
              eyebrow="Kort antwoord"
              title="Wat raden we concreet aan?"
              intro="Zoek de speler die het best past en je hebt meteen een goede richting. Alle details staan verder op deze pagina."
            />

            <Card className="border-primary/40 bg-primary/5 shadow-lg">
              <CardContent className="p-0">
                {/* Tabel (desktop) */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-primary/20 text-left">
                        <th className="px-6 py-4 font-semibold text-foreground">Speler</th>
                        <th className="px-6 py-4 font-semibold text-foreground">Lengte</th>
                        <th className="px-6 py-4 font-semibold text-foreground">Kromming</th>
                        <th className="px-6 py-4 text-right font-semibold text-foreground">Carbon</th>
                      </tr>
                    </thead>
                    <tbody>
                      {advice.map((row) => (
                        <tr key={row.player} className="border-b border-border/50 last:border-0 align-top">
                          <td className="px-6 py-4 font-medium text-foreground">{row.player}</td>
                          <td className="px-6 py-4 text-muted-foreground">{row.length}</td>
                          <td className="px-6 py-4 text-muted-foreground">{row.bow}</td>
                          <td className="px-6 py-4 text-right font-semibold text-primary whitespace-nowrap">{row.carbon}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Kaarten (mobiel) */}
                <div className="md:hidden divide-y divide-border/50">
                  {advice.map((row) => (
                    <div key={row.player} className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-semibold text-foreground">{row.player}</h3>
                        <span className="shrink-0 rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-semibold text-primary">
                          {row.carbon}
                        </span>
                      </div>
                      <dl className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <div className="flex gap-2">
                          <dt className="font-medium text-foreground">Lengte:</dt>
                          <dd>{row.length}</dd>
                        </div>
                        <div className="flex gap-2">
                          <dt className="font-medium text-foreground">Kromming:</dt>
                          <dd>{row.bow}</dd>
                        </div>
                      </dl>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 flex items-start gap-4 rounded-2xl border border-border bg-muted/40 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Lightbulb className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Leeftijd alleen bepaalt niets</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Een beginnende U16-speler is nog altijd beter geholpen met een vergevingsgezinde stick dan met een
                  extreme 95% carbon Low Bow. Omgekeerd kan een technisch sterke U14 of U16 perfect klaar zijn voor een
                  stijvere stick met een Pro of Low Bow.
                </p>
              </div>
            </div>
          </section>

          {/* Vuistregel */}
          <section id="vuistregel" className="scroll-mt-24">
            <SectionHeader eyebrow="Vuistregel" title="Onze eenvoudige vuistregel" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {rulesOfThumb.map((r) => (
                <Card key={r.title}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground">{r.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Lengte */}
          <section id="lengte" className="scroll-mt-24">
            <SectionHeader
              eyebrow="Stap 1"
              title="Kies eerst de juiste lengte"
              intro="De juiste lengte is belangrijker dan merk, kleur of carbonpercentage."
            />

            <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] items-start">
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Ruler className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-foreground">Te lang of te kort</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Een te lange stick maakt het moeilijk om laag bij de bal te komen en de stick snel rond het lichaam
                      te bewegen. Een te korte stick zorgt voor onnodig diep bukken en verlies van bereik.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-primary/30 bg-primary/5">
                  <CardContent className="p-6">
                    <div className="mb-3 inline-flex items-center rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-primary">
                      Clubadvies
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Zet de stick bij kinderen rechtop naast het lichaam. Koop hem zeker niet duidelijk te lang “om er
                      nog in te groeien” — dat hindert de hockeyhouding en balcontrole. Bij volwassenen zijn 36.5" en
                      37.5" beide heel normaal; langere spelers kunnen 38" of 38.5" overwegen.
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Twijfel je tussen twee maten? Probeer ze uit. De speler moet comfortabel laag kunnen spelen en de
                      bal dicht bij de voeten kunnen controleren.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="p-0">
                  <div className="border-b border-border/60 px-6 py-4">
                    <h3 className="font-semibold text-foreground">Richtmaat op lichaamslengte</h3>
                    <p className="text-xs text-muted-foreground">Een richtlijn, geen absolute regel.</p>
                  </div>
                  <table className="w-full text-sm">
                    <tbody>
                      {lengthGuide.map((row) => (
                        <tr key={row.body} className="border-b border-border/50 last:border-0">
                          <td className="px-6 py-3 text-muted-foreground">{row.body}</td>
                          <td className="px-6 py-3 text-right font-semibold text-foreground">{row.stick}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Kromming */}
          <section id="kromming" className="scroll-mt-24">
            <SectionHeader
              eyebrow="Stap 2"
              title="Kies daarna de kromming"
              intro="Bijna alle moderne sticks hebben een bow. Het belangrijkste verschil is niet hoeveel de stick kromt, maar waar het diepste punt van die kromming ligt. Volgens de FIH mag de kromming maximaal 25 mm zijn en mag het diepste punt niet dichter dan 200 mm bij de onderkant liggen."
            />

            <Card className="mb-6">
              <CardContent className="p-0 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/60 text-left">
                      <th className="px-6 py-4 font-semibold text-foreground">Type</th>
                      <th className="px-6 py-4 font-semibold text-foreground">Bow point</th>
                      <th className="px-6 py-4 font-semibold text-foreground">Geschikt voor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bowTypes.map((b) => (
                      <tr key={b.name} className="border-b border-border/50 last:border-0 align-top">
                        <td className="px-6 py-4 font-medium text-foreground whitespace-nowrap">{b.name}</td>
                        <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">{b.point}</td>
                        <td className="px-6 py-4 text-muted-foreground">{b.use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>

            <p className="mb-6 text-sm text-muted-foreground">
              De benaming verschilt per merk: een “Low Bow” van het ene merk kan sterk lijken op een “Pro Bow” van een
              ander merk.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: Target,
                  title: "Beginnende spelers",
                  text: "Kies een Standard of Mid Bow. Het blad staat natuurlijker achter de bal, waardoor stoppen, pushen, slaan en dribbelen makkelijker aan te leren zijn.",
                },
                {
                  icon: Zap,
                  title: "Technisch groeiende spelers",
                  text: "Mid Bow of Pro Bow is de beste allround keuze. De lagere kromming helpt bij 3D-skills, flicks en aerials zonder meteen extreem te worden.",
                },
                {
                  icon: Zap,
                  title: "Gevorderde spelers",
                  text: "Pro Bow of Low Bow, wanneer de basistechnieken goed beheerst worden en 3D-spel, lifts en aerials bewust gebruikt worden.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <Card key={title}>
                  <CardContent className="p-6">
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-foreground">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-destructive/30 bg-destructive/5">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Extreme Low Bow is een specialistische keuze</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Een bow rond 200 mm raden we vooral aan voor ervaren spelers die weten waarom ze zo'n stick willen,
                    bijvoorbeeld voor dragflicks. Koop er geen enkel omdat die er “professioneler” uitziet.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Carbon */}
          <section id="carbon" className="scroll-mt-24">
            <SectionHeader
              eyebrow="Stap 3"
              title="Kies ten slotte het carbonpercentage"
              intro="Carbon maakt een stick vooral stijver. Een stijvere stick vervormt minder bij een slag of slap en geeft een directere krachtoverdracht — maar absorbeert ook minder energie bij de balaanname."
            />

            <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] items-start">
              <Card>
                <CardContent className="p-0">
                  <div className="border-b border-border/60 px-6 py-4">
                    <h3 className="font-semibold text-foreground">Richtlijn per spelersniveau</h3>
                    <p className="text-xs text-muted-foreground">
                      Percentages zijn niet perfect vergelijkbaar tussen merken: constructie, vezelkwaliteit en hars
                      spelen ook mee.
                    </p>
                  </div>
                  <table className="w-full text-sm">
                    <tbody>
                      {carbonGuide.map((row) => (
                        <tr key={row.level} className="border-b border-border/50 last:border-0">
                          <td className="px-6 py-3 text-muted-foreground">{row.level}</td>
                          <td className="px-6 py-3 text-right font-semibold text-primary whitespace-nowrap">{row.carbon}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground">Waarom niet meteen veel carbon?</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Een kind of beginnende speler haalt weinig voordeel uit een zeer stijve 80–100% carbonstick. Die is
                      minder vergevingsgezind en vraagt meer techniek bij balaanname en controle. Een zachtere stick met
                      meer glasvezel geeft meestal meer gevoel.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground">Waarom niet altijd weinig carbon?</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Naarmate spelers sterker worden en harder slaan en slappen, geeft een stijvere stick meer directe
                      respons. Een ervaren speler kan bewust voor 70, 80, 90 of zelfs 100% carbon kiezen. Meer carbon
                      betekent echter niet automatisch beter of duurzamer — de volledige constructie blijft belangrijk.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Prijsadvies */}
          <section id="prijsadvies" className="scroll-mt-24">
            <SectionHeader
              eyebrow="Budget"
              title="Wat mag een seniorenstick kosten?"
              intro="Voor seniorensticks is er een eenvoudige vuistregel: de prijs volgt het carbonpercentage. Dit geeft je een idee van wat redelijk is, afhankelijk van hoe recent de reeks is."
            />

            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-0 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-primary/20 text-left">
                      <th className="px-6 py-4 font-semibold text-foreground">Carbon</th>
                      <th className="px-6 py-4 font-semibold text-foreground">Nieuwe reeks</th>
                      <th className="px-6 py-4 font-semibold text-foreground">Vorig seizoen</th>
                      <th className="px-6 py-4 font-semibold text-foreground">Oudere reeks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceGuide.map((row) => (
                      <tr key={row.carbon} className="border-b border-border/50 last:border-0 align-top">
                        <td className="px-6 py-4 font-semibold text-primary whitespace-nowrap">{row.carbon}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.new}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.lastSeason}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.older}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>

            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Euro className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Hoe lees je de tabel?</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Nieuwe reeks: prijs ≈ 3 × carbonpercentage. Vorig seizoen: prijs ≈ 2 × carbonpercentage. Oudere reeksen: prijs ≈ 1,5 × carbonpercentage. Een 100% carbonstick uit de nieuwste reeks komt zo rond de €300 uit.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Is duurder altijd beter?</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Niet per se. Voor een jeugdspeler of beginnende senior is een vorige seizoen of zachtere stick vaak beter besteed geld dan een topmodel van dit jaar. Koop geen extreme stick waar je nog niet klaar voor bent.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Stick nodig CTA */}
          <section id="stick-nodig" className="scroll-mt-24">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 text-primary-foreground md:p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-40" />
              <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-foreground/15 backdrop-blur-xs">
                    <ShoppingBag className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="mb-1 text-2xl font-bold md:text-3xl">Stick nodig? Probeer er een uit</h2>
                    <p className="text-primary-foreground/85 max-w-xl">
                      Twee sticks met dezelfde lengte, bow en carbonpercentage kunnen door gewicht, balans en constructie
                      toch heel anders aanvoelen. Vraag advies aan je trainer of de sportieve cel — wij helpen graag een
                      stick kiezen die bij de speler past, in plaats van de duurste of meest extreme uit het rek.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="secondary">
                    <a href="mailto:info@dmon.be" className="inline-flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Contacteer trainers
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  >
                    <Link to="/shop" className="inline-flex items-center gap-2">
                      <ShoppingBag className="h-4 w-4" />
                      Bezoek clubwinkel
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StickGuide;
