import { PageCta } from "@/components/layout/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/lib/router-compat";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Euro,
  ExternalLink,
  Mail,
  MapPin,
  ShieldCheck,
  Snowflake,
  Users,
} from "lucide-react";

const INDOOR_FORM_URL = "https://twizzit.com/go/dmon-indoor-2026";
const WINTERCRITERIUM_FORM_URL =
  "https://app.twizzit.com/v2/form/TEJ5MkdWTnRHM1RyamhTMi83YUppUT09?isiframe=0";
const SECOND_HAND_URL = "https://www.facebook.com/share/g/19e6icd1G4/";

const subNavLinks = [
  { href: "#overzicht", label: "Overzicht" },
  { href: "#indoor", label: "Indoor" },
  { href: "#trainingen", label: "Trainingen" },
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
              Van eind november tot eind februari schakelen de outdoortrainingen en officiële wedstrijden terug. Met indoor vanaf U9 en het wintercriterium voor U6-U8 blijven onze spelers actief.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="secondary" size="lg">
                <a href={INDOOR_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  Indoor inschrijven <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <a href={WINTERCRITERIUM_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  Wintercriterium U6-U8 <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-6">
              <div><div className="text-2xl font-bold md:text-3xl">U9+</div><div className="text-xs uppercase tracking-wider text-primary-foreground/70">Indoor</div></div>
              <div><div className="text-2xl font-bold md:text-3xl">10</div><div className="text-xs uppercase tracking-wider text-primary-foreground/70">Spelers per ploeg</div></div>
              <div><div className="text-2xl font-bold md:text-3xl">U6-U8</div><div className="text-xs uppercase tracking-wider text-primary-foreground/70">Wintercriterium</div></div>
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
              <div><h2 className="text-2xl font-bold tracking-tight">Twee opties tijdens de winterstop</h2><p className="text-muted-foreground">Voor elke jeugdcategorie een passend aanbod</p></div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary" />Indoor vanaf U9</CardTitle></CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>Indoorhockey is een snelle variant van outdoorhockey met eigen spelregels.</p>
                  <p>Door de beperkte zaalcapaciteit is er dit seizoen geen indoor voor U6-U8 of voor spelers die alleen willen trainen zonder wedstrijden te spelen.</p>
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
                <p className="leading-relaxed text-muted-foreground">De sportieve cel bepaalt na de inschrijvingen de definitieve teamindeling. Die komt niet noodzakelijk overeen met je outdoorploeg. De trainingsuren en wedstrijden verschijnen in november in Twizzit.</p>
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
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Card><CardContent className="flex gap-3 p-5"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><div><h3 className="font-semibold">GO! Mira, Hamme</h3><p className="text-sm text-muted-foreground">Loystraat 70, 9220 Hamme</p></div></CardContent></Card>
              <Card><CardContent className="flex gap-3 p-5"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><div><h3 className="font-semibold">Sporthal Sint-Gillis</h3><p className="text-sm text-muted-foreground">Van Langenhovestraat 203, 9200 Dendermonde</p></div></CardContent></Card>
            </div>
            <div className="mt-4 rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm text-foreground"><Clock3 className="mr-2 inline h-4 w-4 text-primary" />Kom 10 minuten voor de training en help mee met het klaarzetten en opruimen van de balken.</div>
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
            <Card className="border-primary/20">
              <CardContent className="space-y-6 p-6">
                <div className="rounded-lg bg-primary/5 p-4"><p className="font-semibold text-primary">Inschrijven ten laatste op 29 oktober 2026</p></div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Schrijf in voor je eigen leeftijdscategorie en geslacht, bijvoorbeeld U11B of U14G.</li>
                  <li>Je inschrijving geldt voor de indoorcompetitie met de bijbehorende trainingen en wedstrijden.</li>
                  <li>Bij meerdere ploegen bepaalt de club na de inschrijvingen de definitieve verdeling.</li>
                  <li>Bijkomende inschrijvingen komen op de wachtlijst zodra een categorie volzet is.</li>
                </ul>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-border p-4"><p className="text-sm text-muted-foreground">U9 tot U12</p><p className="text-3xl font-bold">€130</p></div>
                  <div className="rounded-lg border border-border p-4"><p className="text-sm text-muted-foreground">Vanaf U14</p><p className="text-3xl font-bold">€140</p></div>
                </div>
                <Button asChild size="lg"><a href={INDOOR_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">Schrijf in via Twizzit<ExternalLink className="h-4 w-4" /></a></Button>
              </CardContent>
            </Card>
          </section>

          <section id="wintercriterium">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"><CalendarDays className="h-5 w-5 text-primary" /></div>
              <div><h2 className="text-2xl font-bold tracking-tight">Wintercriterium U6-U8</h2><p className="text-muted-foreground">Gratis vriendschappelijke outdoorwedstrijden</p></div>
            </div>
            <Card>
              <CardContent className="space-y-5 p-6">
                <p className="leading-relaxed text-muted-foreground">Spelers van U6 tot U8 kunnen deelnemen aan twee à drie wedstrijden in december en nog eens twee à drie wedstrijden in januari of februari. De wedstrijden vinden plaats op zaterdagvoormiddag of zaterdagmiddag en dienen vooral om wedstrijdritme te behouden.</p>
                <div className="grid gap-4 sm:grid-cols-2"><div className="rounded-lg bg-muted p-4"><p className="text-sm text-muted-foreground">Deelname</p><p className="text-xl font-bold">Gratis</p></div><div className="rounded-lg bg-primary/5 p-4"><p className="text-sm text-muted-foreground">Inschrijven ten laatste</p><p className="text-xl font-bold text-primary">16 oktober 2026</p></div></div>
                <p className="text-sm text-muted-foreground">Bij de inschrijving mag je één vriendje of vriendinnetje vermelden voor de ploegindeling. In november volgt een infomoment over de indelingen.</p>
                <Button asChild size="lg"><a href={WINTERCRITERIUM_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">Schrijf in voor het wintercriterium<ExternalLink className="h-4 w-4" /></a></Button>
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
                  <PageCta title="Klaar voor de zaal?" text="Schrijf je in voor het indoorseizoen 2026-2027." actions={<Button asChild size="lg" variant="secondary" className="font-semibold"><Link to="/lidmaatschap/indoor-registratie">Schrijf je in voor indoor</Link></Button>} />
</div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default IndoorHockey;
