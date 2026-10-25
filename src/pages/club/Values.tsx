import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield, Heart, Users, AlertTriangle, Mail, ExternalLink, Sparkles, FileText, Download,
  Smile, Flame, CheckCircle2, User, UsersRound, Megaphone, HandHeart, BookOpen,
} from "lucide-react";
import { CHARTER_PDF_URL, BELEID_PDF_URL, CHARTER_VERSION } from "@/config/sportiefCharter";

const values = [
  { icon: Heart, title: "Respect", text: "Wij tonen respect voor elkaar en voor onszelf, fysiek en mentaal, en evengoed voor de tegenstander, de scheidsrechter, onze begeleiders en het materiaal van de club." },
  { icon: Smile, title: "Fun", text: "Plezier is de kern van jeugdsport, en bij ons de voorwaarde voor goed spel." },
  { icon: Shield, title: "Fair Play", text: "Hockey is een ploegsport waarin we samen leren omgaan met winst en verlies. Fair play staat voorop; winnen komt daarna." },
  { icon: Flame, title: "Enthousiasme", text: "Wij hebben sportieve ambitie en streven naar de beste versie van onszelf." },
  { icon: Users, title: "Community", text: "Wij maken deel uit van Dendermonde, geven terug aan onze gemeenschap en bouwen onze club van binnenuit: spelers, scheidsrechters, trainers en coaches leiden wij veelal zelf op." },
];

const expectations = [
  "Een opleiding volgens een uitgeschreven leerlijn, met leerdoelen per leeftijdsfase.",
  "Gelijkwaardige speeltijd tot en met U12 in elke ploeg, en speeltijd voor elke speler op het wedstrijdblad. Je leert niets op de bank.",
  "Uitleg bij sportieve beslissingen wanneer je erom vraagt, en een duidelijke weg wanneer je het er niet mee eens bent.",
  "Een veilige club, met een aanspreekpunt integriteit dat losstaat van de sportieve lijn.",
  "Een democratisch lidgeld, mogelijk doordat wij als familieclub uitsluitend met vrijwilligers werken.",
];

const engagements = [
  {
    icon: User, title: "Als speler engageer ik mij",
    items: [
      "Ik kom op tijd en neem actief deel; als ik niet kan, verwittig ik tijdig.",
      "Ik speel eerlijk, ken de spelregels en speel volgens hun geest.",
      "Ik heb respect voor mijn medespelers, de tegenstander, de scheidsrechter, mijn begeleiders en het materiaal van de club.",
      "Ik ga moedig om met verlies en blijf bescheiden bij winst.",
      "Ik zet me in om te groeien en haal het beste uit mezelf.",
    ],
  },
  {
    icon: HandHeart, title: "Als ouder of zorgfiguur engageer ik mij",
    items: [
      "Ik moedig aan en laat het coachen aan de trainer en de coach.",
      "Ik heb respect voor de arbitrage, ook bij een vergissing, en geef het goede voorbeeld aan mijn kind en aan andere supporters.",
      "Na de wedstrijd vraag ik eerst \"heb je plezier gehad?\" en \"wat heb je geleerd?\", en pas daarna naar de uitslag.",
      "Ik draag bij aan de club met minstens één engagement per seizoenshelft: rijden, bardienst, helpen bij een activiteit, coachen of fluiten.",
      "Ben ik het ergens niet mee eens, dan spreek ik de coach rechtstreeks en persoonlijk aan, op een rustig moment.",
    ],
  },
  {
    icon: Megaphone, title: "Als trainer, coach of teammanager engageer ik mij",
    items: [
      "Ik geef het goede voorbeeld in gedrag en communicatie, want die hebben impact op de leden van mijn team.",
      "Ik coach positief en spreek spelers, ouders en collega's aan op ongepast gedrag.",
      "Ik aanvaard de beslissing van de scheidsrechter en bespreek ze, als dat nodig is, in de rust of na de wedstrijd.",
      "Tot en met U12 geef ik elke speler gelijkwaardige speeltijd; vanaf U14 wissel ik elke speler minstens één keer, en wie op het wedstrijdblad staat, speelt. Mijn keuzes over speeltijd en opstelling passen binnen dit charter, en dat kan ik uitleggen.",
      "Ik leid breed op: tot en met U12 speelt iedereen minstens eens in elke lijn.",
    ],
  },
  {
    icon: UsersRound, title: "Wij allemaal",
    items: [
      "De winnaar is wie ook tegen zijn verlies kan.",
      "Sport is er voor iedereen, van beginner tot uitblinker.",
      "Afspraak is afspraak.",
      "Veiligheid gaat voor: mondstuk en scheenbeschermers zijn verplicht, ook op training.",
    ],
  },
];

const chapters = [
  "Ons charter: missie, waarden en doelgroepen",
  "Hoe wij ons gedragen en veilig blijven",
  "Hoe wij opleiden: leerlijn en training",
  "Hoe wij ploegen maken: trajecten, teamindeling, selectie",
  "Hoe wij spelen: speeltijd, scheidsrechters, indoor",
  "Hoe wij georganiseerd zijn: rollen, communicatie en bezwaar",
];

const subnav = [
  ["waarden", "Waarden"],
  ["verwachten", "Wat je mag verwachten"],
  ["engagementen", "Engagementen"],
  ["documenten", "Documenten"],
  ["integriteit", "Integriteit"],
] as const;

const ClubValues = () => {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="hero-decor" aria-hidden />
        <div className="hero-rule" aria-hidden />
        <div className="container relative mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur-xs">
              <Sparkles className="h-3.5 w-3.5" />
              Sportief charter
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight lg:text-6xl">
              Hier groei je, op en naast het veld.
            </h1>
            <p className="mt-4 max-w-2xl text-base lg:text-lg text-primary-foreground/85">
              Hockey is een teamsport, en bij D-mon ook een familiesport. Wij stellen ontwikkeling
              boven resultaat: in lijn met Hockey 4 Life kiezen wij voor "willen winnen" in plaats
              van "moeten winnen".
            </p>
          </div>
        </div>
      </section>

      <nav className="subnav-bar relative z-30 border-b border-border/60 bg-background/95">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-3">
            {subnav.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="whitespace-nowrap rounded-full border border-border/60 px-4 py-1.5 text-sm font-medium text-foreground/80 hover:border-primary hover:text-primary">
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="waarden" className="container mx-auto scroll-mt-20 px-4 py-16 lg:py-20">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Ons DNA</span>
        <h2 className="mt-2 font-display text-3xl font-bold lg:text-4xl">Onze vijf waarden</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v) => (
            <Card key={v.title} className="relative overflow-hidden border-border/60">
              <div className="absolute left-0 top-0 h-1 w-full bg-primary" />
              <CardContent className="p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">{v.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="verwachten" className="scroll-mt-20 bg-muted/40 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Onze belofte</span>
          <h2 className="mt-2 font-display text-3xl font-bold lg:text-4xl">Wat je van D-mon mag verwachten</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {expectations.map((e) => (
              <li key={e} className="flex gap-3 rounded-xl border border-border/60 bg-card p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-foreground/85">{e}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="engagementen" className="container mx-auto scroll-mt-20 px-4 py-16 lg:py-20">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Samen</span>
        <h2 className="mt-2 font-display text-3xl font-bold lg:text-4xl">Wat wij van elkaar verwachten</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {engagements.map((g) => (
            <Card key={g.title} className="border-border/60">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    <g.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold">{g.title}</h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {g.items.map((i) => (
                    <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-foreground/85">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {i}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-5 text-foreground/85">
          <strong>Bij de inschrijving bij D-mon Hockey bevestig je dat je dit charter gelezen hebt en
          onderschrijft.</strong> Een handtekening is niet nodig. Bij een sportieve discussie is dit
          charter de maatstaf: elke mening wordt gehoord, de sportieve cel beslist.
        </p>
      </section>

      <section id="documenten" className="scroll-mt-20 bg-muted/40 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Documenten</span>
          <h2 className="mt-2 font-display text-3xl font-bold lg:text-4xl">Charter en volledig beleid</h2>
          <p className="mt-2 text-sm text-muted-foreground">{CHARTER_VERSION}</p>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <Card className="border-border/60">
              <CardContent className="flex h-full flex-col p-6 lg:p-8">
                <FileText className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-display text-xl font-bold">Sportief charter</h3>
                <p className="mt-2 flex-1 text-foreground/80">
                  De korte versie op 2 pagina's: onze waarden en de engagementen van spelers,
                  ouders en begeleiders. Ideaal om af te drukken of door te sturen.
                </p>
                <Button asChild size="lg" className="mt-6 self-start">
                  <a href={CHARTER_PDF_URL} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" /> Download charter (PDF)
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border/60">
              <CardContent className="flex h-full flex-col p-6 lg:p-8">
                <BookOpen className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-display text-xl font-bold">Volledig sportief beleid</h3>
                <p className="mt-2 text-foreground/80">
                  35 pagina's die het charter uitwerken, uitgebreider maar nooit anders:
                </p>
                <ol className="mt-3 flex-1 list-decimal space-y-1 pl-5 text-sm text-foreground/80">
                  {chapters.map((c) => <li key={c}>{c}</li>)}
                </ol>
                <Button asChild size="lg" variant="outline" className="mt-6 self-start">
                  <a href={BELEID_PDF_URL} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" /> Download beleid (PDF, 6 MB)
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="integriteit" className="container mx-auto scroll-mt-20 px-4 py-16 lg:py-24">
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
                  <a href="https://app.trustan.io/report/65b1137a7413f40088e747eb" target="_blank" rel="noopener noreferrer">
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
