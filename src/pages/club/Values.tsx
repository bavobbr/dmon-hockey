import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Heart, Users, AlertTriangle, Mail, ExternalLink, Sparkles, FileText, Download } from "lucide-react";
import clubValuesImage from "@/assets/club-values.png";

const values = [
  {
    icon: Heart,
    number: "01",
    title: "Respect",
    tagline: "De basis van onze clubgemeenschap",
    description:
      "Wij behandelen alle spelers, coaches, officials en supporters met respect, ongeacht leeftijd, vaardigheidsniveau, achtergrond of ervaring. Respect creëert een omgeving waar iedereen kan genieten van hockey en zijn potentieel kan ontwikkelen.",
    accent: "secondary",
  },
  {
    icon: Shield,
    number: "02",
    title: "Fair Play",
    tagline: "Spelen volgens de regels, in geest en letter",
    description:
      "Fair play betekent meer dan het volgen van de regels. Het gaat over spelen met integriteit, beslissingen waardig accepteren en succesvol zijn met nederigheid. We strijden hard maar altijd met sportiviteit en eer.",
    accent: "primary",
  },
  {
    icon: Users,
    number: "03",
    title: "Inclusiviteit",
    tagline: "Hockey voor iedereen",
    description:
      "Onze club verwelkomt spelers van alle achtergronden, vaardigheden en ervaringsniveaus. We geloven dat diversiteit onze gemeenschap versterkt en hockey leuker maakt voor iedereen die betrokken is.",
    accent: "accent",
  },
] as const;

const accentClasses = {
  primary: {
    bar: "bg-primary",
    iconBg: "bg-primary/10 text-primary",
    number: "text-primary/20",
    glow: "group-hover:shadow-[0_20px_50px_-20px_hsl(var(--primary)/0.45)]",
  },
  secondary: {
    bar: "bg-secondary",
    iconBg: "bg-secondary/10 text-secondary",
    number: "text-secondary/20",
    glow: "group-hover:shadow-[0_20px_50px_-20px_hsl(var(--secondary)/0.45)]",
  },
  accent: {
    bar: "bg-accent",
    iconBg: "bg-accent/15 text-accent-foreground",
    number: "text-accent/30",
    glow: "group-hover:shadow-[0_20px_50px_-20px_hsl(var(--accent)/0.45)]",
  },
} as const;

const ClubValues = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, hsl(var(--primary-glow) / 0.6) 0%, transparent 50%), radial-gradient(circle at 80% 70%, hsl(var(--accent) / 0.4) 0%, transparent 50%)",
          }}
        />
        <div className="container relative mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Wie we zijn
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight lg:text-6xl">
              Onze clubwaarden
            </h1>
            <p className="mt-4 max-w-2xl text-base lg:text-lg text-primary-foreground/85">
              Drie principes die elke training, elke wedstrijd en elk moment langs de lijn vormgeven.
              Samen maken ze D-mon Hockey Club tot wat het is.
            </p>
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {values.map((value) => {
            const a = accentClasses[value.accent];
            const Icon = value.icon;
            return (
              <Card
                key={value.title}
                className={`group relative overflow-hidden border-border/60 transition-all duration-500 ${a.glow}`}
              >
                <div className={`absolute left-0 top-0 h-full w-1.5 ${a.bar}`} />
                <span
                  className={`pointer-events-none absolute -right-2 -top-6 font-display text-[7rem] font-bold leading-none ${a.number}`}
                >
                  {value.number}
                </span>
                <CardContent className="relative p-8 pt-10">
                  <div
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${a.iconBg} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon className="h-7 w-7" strokeWidth={2.25} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    {value.tagline}
                  </p>
                  <p className="mt-5 text-base leading-relaxed text-foreground/80">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Infographic + intro */}
      <section className="bg-muted/40 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Afspraken in de club
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold lg:text-4xl">
                Onze club, die bouwen we samen
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
                Van de allerjongste U6 tot onze ervaren coaches — iedereen draagt bij. We hebben de
                belangrijkste afspraken samengebracht in één overzicht, zodat je altijd weet waar we
                voor staan.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="rounded-lg border border-border/60 bg-card px-4 py-3 text-sm">
                  <span className="font-semibold text-primary">Veilig</span>
                  <span className="text-muted-foreground"> · voor iedereen</span>
                </div>
                <div className="rounded-lg border border-border/60 bg-card px-4 py-3 text-sm">
                  <span className="font-semibold text-secondary">Aanwezig</span>
                  <span className="text-muted-foreground"> · elke training telt</span>
                </div>
                <div className="rounded-lg border border-border/60 bg-card px-4 py-3 text-sm">
                  <span className="font-semibold text-accent-foreground">Respectvol</span>
                  <span className="text-muted-foreground"> · in alles wat we doen</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-2xl" />
              <img
                src={clubValuesImage}
                alt="D-mon Hockey Club Waarden - Respect en Afspraken"
                loading="lazy"
                className="relative w-full rounded-2xl border border-border/60 shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sportief Beleid - Charter download */}
      <section className="container mx-auto px-4 pb-4 pt-0 lg:pb-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5 p-8 lg:p-12">
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-10">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg lg:h-20 lg:w-20">
              <FileText className="h-8 w-8 lg:h-10 lg:w-10" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Charter
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold lg:text-3xl">
                Sportief Beleid
              </h2>
              <p className="mt-3 max-w-2xl text-foreground/80">
                Onze sportieve missie, visie en waarden, de gedragscode, organisatie van de club,
                opleiding van trainers en scheidsrechters en het opleidingsplan voor spelers —
                allemaal samengebracht in één document.
              </p>
            </div>
            <Button asChild size="lg" className="lg:self-center">
              <a
                href="/docs/sportief-beleid-dmon.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* API section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="relative overflow-hidden rounded-3xl border-2 border-secondary/30 bg-gradient-to-br from-secondary/5 via-background to-background p-8 lg:p-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground shadow-lg lg:h-20 lg:w-20">
              <AlertTriangle className="h-8 w-8 lg:h-10 lg:w-10" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
                Aanspreekpunt Integriteit
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold lg:text-3xl">
                Meld grensoverschrijdend gedrag
              </h2>
              <div className="mt-5 space-y-4 text-foreground/85">
                <p>
                  Grensoverschrijdend gedrag is elke vorm van ongewenst gedrag van anderen dat
                  persoonlijke grenzen overschrijdt. Kom je in aanraking met pesterijen,
                  discriminatie, racisme, ongewenst seksueel gedrag... Weet dat je hiervoor bij ons
                  terechtkan.
                </p>
                <p>
                  Onze club tolereert geen enkele vorm van grensoverschrijdend gedrag. Alle
                  meldingen worden steeds ernstig genomen en behandeld in alle discretie en
                  objectiviteit. Er worden geen stappen ondernomen zonder uitdrukkelijke toestemming
                  van de melder.
                </p>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary-light">
                  <a href="mailto:api@dmon.be">
                    <Mail className="mr-2 h-4 w-4" />
                    api@dmon.be
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-secondary/40 text-secondary hover:bg-secondary/10">
                  <a
                    href="https://app.trustan.io/report/65b1137a7413f40088e747eb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Anonieme melding via Trustan
                  </a>
                </Button>
              </div>

              <p className="mt-5 text-sm text-muted-foreground">
                Contacteer je liever iemand van de Vlaamse Hockey Liga of verkies je om een anonieme
                melding te maken? Het Trustan platform zet een veilige en anonieme dialoog in gang
                met de neutrale vertrouwenspersoon van uw keuze.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClubValues;
