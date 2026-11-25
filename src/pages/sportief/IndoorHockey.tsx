import { PageCta } from "@/components/layout/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/lib/router-compat";
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Euro,
  ExternalLink,
  Mail,
  MapPin,
  Navigation,
  Phone,
  ShieldCheck,
  Snowflake,
  Users,
} from "lucide-react";

const SENIOR_FORM_URL = "https://twizzit.com/go/dmon-indoor-2026-senior";
const SECOND_HAND_URL = "https://www.facebook.com/share/g/19e6icd1G4/";

const subNavLinks = [
  { href: "#overzicht", label: "Overzicht" },
  { href: "#indoor", label: "Indoor" },
  { href: "#trainingen", label: "Trainingen" },
  { href: "#locaties", label: "Zalen" },
  { href: "#senioren", label: "Senioren" },
  { href: "#inschrijven", label: "Inschrijven" },
  { href: "#wintercriterium", label: "U6-U8" },
  { href: "#contact", label: "Contact" },
];

const trainingSchedule = [
  { day: "Maandag", time: "17u45-18u45", location: "Hamme", teams: "U11G (°2016 + °2017), 2 ploegen" },
  { day: "Woensdag", time: "13u30-14u30", location: "Sint-Gillis", teams: "U10G (°2018)" },
  { day: "Vrijdag", time: "20u-21u", location: "Hamme", teams: "U14B, 2 ploegen" },
  { day: "Vrijdag", time: "21u-22u", location: "Hamme", teams: "U16B" },
  { day: "Zaterdag", time: "8u30-9u30", location: "Hamme", teams: "U9B (°2018)" },
  { day: "Zaterdag", time: "9u30-10u30", location: "Hamme", teams: "U11B (°2016 + °2017), 2 ploegen" },
  { day: "Zaterdag", time: "10u30-11u30", location: "Hamme", teams: "U14G" },
  { day: "Zaterdag", time: "11u30-12u30", location: "Hamme", teams: "U16G" },
];

const seniorSchedule = [
  { date: "29 november", location: "Sint-Gillis" },
  { date: "6 december", location: "Sint-Gillis" },
  { date: "13 december", location: "Hamme" },
  { date: "20 december", location: "Hamme" },
  { date: "10 januari", location: "Sint-Gillis" },
  { date: "17 januari", location: "Sint-Gillis" },
  { date: "31 januari", location: "Hamme" },
  { date: "7 februari", location: "Hamme" },
  { date: "14 februari", location: "Sint-Gillis" },
];

const IndoorHockey = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="hero-decor" aria-hidden />
        <div className="hero-rule" aria-hidden />
        <div className="container relative mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur-xs">
              Winterstop 2026-2027
            </div>
            <h1 className="hero-title mb-6">Hockey tijdens de winterstop</h1>
            <p className="mb-8 max-w-2xl text-lg text-primary-foreground/85 md:text-xl">
              Van eind november tot eind februari schakelen de outdoortrainingen en officiële wedstrijden terug. Met indoor vanaf U9, indoortrainingen voor seniors en het wintercriterium voor U6-U8 blijven onze spelers actief.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="secondary" size="lg">
                <a href={SENIOR_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  Indoor seniors inschrijven <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <a href="#senioren" className="inline-flex items-center gap-2">
                  Bekijk het seniorenaanbod <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link to="/sportief/regels/indoor" className="inline-flex items-center gap-2">
                  <BookOpen className="h-4 w-4" /> Indoor spelregels
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="subnav-bar z-30 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <nav className="flex gap-1 overflow-x-auto py-3 text-sm" aria-label="Snelle links">
            {subNavLinks.map((link) => <a key={link.href} href={link.href} className="whitespace-nowrap rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">{link.label}</a>)}
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="mx-auto max-w-5xl space-y-16">
          <section id="overzicht">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"><Snowflake className="h-5 w-5 text-primary" /></div>
              <div><h2 className="text-2xl font-bold tracking-tight">Drie opties tijdens de winterstop</h2><p className="text-muted-foreground">Voor elke categorie een passend aanbod</p></div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary" />Indoor vanaf U9</CardTitle></CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>Indoorhockey is een snelle variant van outdoorhockey met eigen spelregels.</p>
                  <p>Door de beperkte zaalcapaciteit is er dit seizoen geen indoor voor U6-U8 of voor spelers die alleen willen trainen zonder wedstrijden te spelen.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-primary" />Indoor seniors</CardTitle></CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>Negen indoortrainingen op zondagmiddag voor spelers van U19, Dames/Heren en Ladies/Gents.</p>
                  <p>Er zijn 15 plaatsen. Inschrijven kan tot 29 november 2026.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-primary" />Wintercriterium U6-U8</CardTitle></CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>Vriendschappelijke outdoorwedstrijden op zaterdagvoormiddag of zaterdagmiddag.</p>
                  <p>Deelname is gratis en helpt jonge spelers hun wedstrijdritme en geleerde vaardigheden te behouden.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="indoor">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"><Users className="h-5 w-5 text-primary" /></div>
              <div><h2 className="text-2xl font-bold tracking-tight">Indoorcompetitie</h2><p className="text-muted-foreground">Beperkte plaatsen om de trainingskwaliteit te bewaken</p></div>
            </div>
            <Card>
              <CardContent className="space-y-5 p-6">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-lg bg-muted p-4"><div className="text-2xl font-bold text-primary">10</div><p className="text-sm text-muted-foreground">spelers maximaal per wedstrijdploeg</p></div>
                  <div className="rounded-lg bg-muted p-4"><div className="text-2xl font-bold text-primary">20</div><p className="text-sm text-muted-foreground">plaatsen bij categorieën met twee ploegen</p></div>
                  <div className="rounded-lg bg-muted p-4"><div className="text-2xl font-bold text-primary">Wachtlijst</div><p className="text-sm text-muted-foreground">zodra een categorie volzet is</p></div>
                </div>
                <div className="rounded-lg border border-border bg-muted p-4 text-sm"><p className="font-semibold">De inschrijvingen voor de jeugd zijn afgelopen</p><p className="mt-1 text-muted-foreground">De deadline was 29 oktober 2026. De sportieve cel bepaalt nu de definitieve teamindeling. Die komt niet noodzakelijk overeen met je outdoorploeg. De trainingsuren en wedstrijden verschijnen in november in Twizzit.</p></div>
                <Button asChild variant="outline"><Link to="/sportief/regels/indoor" className="inline-flex items-center gap-2"><BookOpen className="h-4 w-4" />Bekijk de indoor spelregels<ArrowRight className="h-4 w-4" /></Link></Button>
              </CardContent>
            </Card>
          </section>

          <section id="trainingen">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"><CalendarDays className="h-5 w-5 text-primary" /></div>
              <div><h2 className="text-2xl font-bold tracking-tight">Trainingsuren indoor</h2><p className="text-muted-foreground">Seizoen 2026-2027</p></div>
            </div>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[42rem] border-collapse text-sm">
                    <thead className="bg-muted"><tr><th className="p-4 text-left font-semibold">Dag</th><th className="p-4 text-left font-semibold">Uur</th><th className="p-4 text-left font-semibold">Locatie</th><th className="p-4 text-left font-semibold">Ploegen</th></tr></thead>
                    <tbody>{trainingSchedule.map((item, index) => <tr key={`${item.day}-${item.time}`} className={index < trainingSchedule.length - 1 ? "border-b border-border" : undefined}><td className="p-4 font-medium">{item.day}</td><td className="p-4 whitespace-nowrap text-muted-foreground">{item.time}</td><td className="p-4 text-muted-foreground">{item.location}</td><td className="p-4 text-muted-foreground">{item.teams}</td></tr>)}</tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            <div className="mt-4 rounded-lg border border-border bg-muted p-4 text-sm text-muted-foreground">
              <MapPin className="mr-2 inline h-4 w-4 text-primary" />De trainingen gaan door in twee zalen: GO! MIRA in Hamme en Sporthal Sint-Gillis in Dendermonde. <a href="#locaties" className="font-medium text-primary underline underline-offset-4">Bekijk adressen en route-info</a>
            </div>
            <div className="mt-4 rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm text-foreground"><Clock3 className="mr-2 inline h-4 w-4 text-primary" />Kom 10 minuten voor de training en help mee met het klaarzetten en opruimen van de balken.</div>
          </section>

          <section id="locaties">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"><MapPin className="h-5 w-5 text-primary" /></div>
              <div><h2 className="text-2xl font-bold tracking-tight">Zalen en route</h2><p className="text-muted-foreground">Indoor speelt en traint op twee locaties</p></div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-primary" />GO! MIRA, Hamme</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Loystraat 70, 9220 Hamme</p>
                    <p className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0 text-primary" /><a href="tel:+3252499970" className="font-medium text-primary underline underline-offset-4">052 49 99 70</a></p>
                  </div>
                  <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm">
                    <p className="flex items-center gap-2 font-semibold text-destructive"><AlertTriangle className="h-4 w-4 shrink-0" />Opgelet met je navigatie</p>
                    <p className="mt-1 text-muted-foreground">Tik <span className="font-semibold text-foreground">niet</span> &quot;GO MIRA&quot; in je navigatietool, dan kom je op de verkeerde plaats uit. Voer het adres in: <span className="font-semibold text-foreground">Loystraat 70, Hamme</span>.</p>
                  </div>
                  <Button asChild variant="outline" size="sm"><a href="https://www.google.com/maps/search/?api=1&query=Loystraat+70%2C+9220+Hamme" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2"><Navigation className="h-4 w-4" />Route via Google Maps<ExternalLink className="h-3.5 w-3.5" /></a></Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-primary" />Sporthal Sint-Gillis, Dendermonde</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Van Langenhovestraat 203, 9200 Dendermonde</p>
                    <p className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0 text-primary" /><a href="tel:+3252210612" className="font-medium text-primary underline underline-offset-4">052 21 06 12</a></p>
                  </div>
                  <Button asChild variant="outline" size="sm"><a href="https://www.google.com/maps/search/?api=1&query=Van+Langenhovestraat+203%2C+9200+Dendermonde" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2"><Navigation className="h-4 w-4" />Route via Google Maps<ExternalLink className="h-3.5 w-3.5" /></a></Button>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="senioren">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"><Users className="h-5 w-5 text-primary" /></div>
              <div><h2 className="text-2xl font-bold tracking-tight">Indoor voor seniors</h2><p className="text-muted-foreground">U19, Dames/Heren en Ladies/Gents</p></div>
            </div>
            <Card className="border-primary/20">
              <CardContent className="space-y-6 p-6">
                <p className="leading-relaxed text-muted-foreground">Ook voor de spelers van de U19G/B, Dames/Heren en Ladies/Gents is er dit seizoen een indoortraining. Die vindt plaats in Hamme of Sint-Gillis, telkens op zondag tussen 13u en 15u.</p>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-lg bg-muted p-4"><div className="text-2xl font-bold text-primary">9</div><p className="text-sm text-muted-foreground">trainingen op zondagmiddag</p></div>
                  <div className="rounded-lg bg-muted p-4"><div className="text-2xl font-bold text-primary">€45</div><p className="text-sm text-muted-foreground">voor de volledige reeks</p></div>
                  <div className="rounded-lg bg-muted p-4"><div className="text-2xl font-bold text-primary">15</div><p className="text-sm text-muted-foreground">beschikbare plaatsen</p></div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[24rem] border-collapse text-sm">
                    <thead className="bg-muted"><tr><th className="p-3 text-left font-semibold">Datum</th><th className="p-3 text-left font-semibold">Locatie</th></tr></thead>
                    <tbody>{seniorSchedule.map((item, index) => <tr key={item.date} className={index < seniorSchedule.length - 1 ? "border-b border-border" : undefined}><td className="p-3 font-medium">Zondag {item.date}</td><td className="p-3 text-muted-foreground">{item.location}</td></tr>)}</tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground">Alle trainingen lopen van 13u tot 15u. Op 20 december kan het uur afwijken.</p>
                <div className="rounded-lg bg-primary/5 p-4"><p className="font-semibold text-primary">Inschrijven ten laatste op 29 november 2026</p></div>
                <Button asChild size="lg"><a href={SENIOR_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">Schrijf in via Twizzit<ExternalLink className="h-4 w-4" /></a></Button>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"><ShieldCheck className="h-5 w-5 text-primary" /></div>
              <div><h2 className="text-2xl font-bold tracking-tight">Verplicht indoormateriaal</h2><p className="text-muted-foreground">Voor elke speler die indoor deelneemt</p></div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Indoorstick", "Handschoen links", "Zaalsportschoenen"].map((item) => <Card key={item}><CardContent className="flex items-center gap-3 p-5"><CheckCircle2 className="h-5 w-5 shrink-0 text-primary" /><span className="font-medium">{item}</span></CardContent></Card>)}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Tweedehands materiaal vind je in onze <a href={SECOND_HAND_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline underline-offset-4">Facebookgroep</a> of in de tweedehandsshop tijdens de spaghetti-avond.</p>
          </section>

          <section id="inschrijven">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"><Euro className="h-5 w-5 text-primary" /></div>
              <div><h2 className="text-2xl font-bold tracking-tight">Inschrijven voor indoor</h2><p className="text-muted-foreground">Verplicht voor deelname aan trainingen en competitie</p></div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader><CardTitle>Jeugd (U9 tot U18)</CardTitle></CardHeader>
                <CardContent className="space-y-5">
                  <div className="rounded-lg border border-border bg-muted p-4"><p className="font-semibold">Inschrijvingen afgelopen</p><p className="mt-1 text-sm text-muted-foreground">De deadline was 29 oktober 2026. Wie nog wilde inschrijven, kwam op de wachtlijst terecht.</p></div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Je inschrijving geldt voor de indoorcompetitie met de bijbehorende trainingen en wedstrijden.</li>
                    <li>Bij meerdere ploegen bepaalt de club na de inschrijvingen de definitieve verdeling.</li>
                  </ul>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border border-border p-4"><p className="text-sm text-muted-foreground">U9 tot U12</p><p className="text-3xl font-bold">€130</p></div>
                    <div className="rounded-lg border border-border p-4"><p className="text-sm text-muted-foreground">Vanaf U14</p><p className="text-3xl font-bold">€140</p></div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardHeader><CardTitle>Seniors (vanaf U19)</CardTitle></CardHeader>
                <CardContent className="space-y-5">
                  <div className="rounded-lg bg-primary/5 p-4"><p className="font-semibold text-primary">Inschrijven ten laatste op 29 november 2026</p></div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Voor spelers van U19G/B, Dames/Heren en Ladies/Gents.</li>
                    <li>Negen trainingen op zondag tussen 13u en 15u, in Hamme of Sint-Gillis.</li>
                    <li>Er zijn 15 plaatsen. Vol is vol.</li>
                  </ul>
                  <div className="rounded-lg border border-border p-4"><p className="text-sm text-muted-foreground">Volledige reeks</p><p className="text-3xl font-bold">€45</p></div>
                  <Button asChild size="lg"><a href={SENIOR_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">Schrijf in via Twizzit<ExternalLink className="h-4 w-4" /></a></Button>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="wintercriterium">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"><CalendarDays className="h-5 w-5 text-primary" /></div>
              <div><h2 className="text-2xl font-bold tracking-tight">Wintercriterium U6-U8</h2><p className="text-muted-foreground">Gratis vriendschappelijke outdoorwedstrijden</p></div>
            </div>
            <Card>
              <CardContent className="space-y-5 p-6">
                <p className="leading-relaxed text-muted-foreground">Spelers van U6 tot U8 kunnen deelnemen aan twee à drie wedstrijden in december en nog eens twee à drie wedstrijden in januari of februari. De wedstrijden vinden plaats op zaterdagvoormiddag of zaterdagmiddag en dienen vooral om wedstrijdritme te behouden.</p>
                <div className="grid gap-4 sm:grid-cols-2"><div className="rounded-lg bg-muted p-4"><p className="text-sm text-muted-foreground">Deelname</p><p className="text-xl font-bold">Gratis</p></div><div className="rounded-lg border border-border bg-muted p-4"><p className="text-sm text-muted-foreground">Inschrijven ten laatste</p><p className="text-xl font-bold">16 oktober 2026</p></div></div>
                <div className="rounded-lg border border-border bg-muted p-4 text-sm"><p className="font-semibold">De inschrijvingen zijn afgelopen</p><p className="mt-1 text-muted-foreground">De deadline was 16 oktober 2026. In november volgt een infomoment over de indelingen.</p></div>
              </CardContent>
            </Card>
          </section>

          <section id="contact" className="rounded-2xl bg-gradient-to-br from-primary to-accent p-8 text-primary-foreground md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div><h2 className="text-2xl font-bold">Vragen over de winterstop?</h2><p className="mt-2 max-w-xl text-primary-foreground/85">Neem rechtstreeks contact op met de juiste sportieve cel.</p></div>
              <div className="grid gap-3 sm:grid-cols-2">
                <Button asChild variant="secondary"><a href="mailto:onderbouw@dmon.be" className="inline-flex items-center gap-2"><Mail className="h-4 w-4" />U6-U12</a></Button>
                <Button asChild variant="secondary"><a href="mailto:bovenbouw@dmon.be" className="inline-flex items-center gap-2"><Mail className="h-4 w-4" />Vanaf U14</a></Button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <PageCta title="Klaar voor de zaal?" text="Seniors kunnen nog inschrijven tot 29 november 2026." actions={<Button asChild size="lg" variant="secondary" className="font-semibold"><a href={SENIOR_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">Schrijf je in voor indoor seniors<ExternalLink className="h-4 w-4" /></a></Button>} />
    </div>
  );
};

export default IndoorHockey;
