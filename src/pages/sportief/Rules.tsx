import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Timer, Users, Lightbulb, ExternalLink, BookOpen, ChevronRight, Bot, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FaqJsonLd } from "@/components/JsonLd";
import scheidsrechterPad from "@/assets/scheidsrechter-pad.png";
import stappen from "@/assets/stappen.png";

const ageGroups = [
  { to: "/sportief/regels/u6-u8", title: "U6 tot U8", desc: "Pictogrammen (zie spelregels U6 tot U8)" },
  { to: "/sportief/regels/u9", title: "U9", desc: "Pictogrammen en Start TO Umpire videos" },
  { to: "/sportief/regels/u10-u12", title: "U10 tot U12", desc: "Half veld met cirkel (penalty corners)" },
  { to: "/sportief/regels/u14-plus", title: "U14 en hoger", desc: "Volledige regels groot veld" },
  { to: "/sportief/regels/indoor", title: "Indoor", desc: "Regels voor indoor hockey" },
];

const subNavLinks = [
  { href: "#assistent", label: "Assistent" },
  { href: "#startplan", label: "Startplan" },
  { href: "#types", label: "Types" },
  { href: "#opbouw", label: "Opbouw" },
  { href: "#tips", label: "Tips" },
  { href: "#materiaal", label: "Materiaal" },
];

const rulesFaqs = [
  {
    question: "Welke spelregels gelden voor U6 tot U8 bij hockey?",
    answer:
      "Voor U6 tot U8 wordt gespeeld met vereenvoudigde pictogramregels op een klein veld. De focus ligt op spelplezier en basisvaardigheden, zonder penalty corners.",
  },
  {
    question: "Welke spelregels gelden voor U9 bij hockey?",
    answer:
      "Vanaf U9 wordt gefloten door scheidsrechters (altijd met twee). De regels worden uitgelegd via pictogrammen en de Start TO Umpire videos van Hockey Belgium.",
  },
  {
    question: "Welke spelregels gelden voor U10 tot U12?",
    answer:
      "U10 tot U12 spelen op een half veld met cirkel, inclusief penalty corners. Het speltempo en de tactische opbouw nemen toe ten opzichte van de jongere categorieën.",
  },
  {
    question: "Welke spelregels gelden vanaf U14?",
    answer:
      "Vanaf U14 wordt gespeeld op het volledige groot veld volgens de officiële FIH-regels, met alle standaard spelfases zoals penalty corners en strafballen.",
  },
  {
    question: "Welke regels gelden bij indoor hockey?",
    answer:
      "Indoor hockey heeft eigen regels: kleiner veld met boarden, geen hoge bal en aangepaste push- en sleeptechnieken. De regels staan onder /sportief/regels/indoor.",
  },
  {
    question: "Vanaf welke leeftijd kan je beginnen met fluiten bij D-mon?",
    answer:
      "Je kan al starten met fluiten vanaf U6. Vanaf U9 wordt altijd met twee scheidsrechters gefloten, zodat je stap voor stap meegroeit met de leeftijdscategorieën.",
  },
];

const Rules = () => {
  return (
    <div className="min-h-screen bg-background">
      <FaqJsonLd faqs={rulesFaqs} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-30" />
        <div className="container relative mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
              Word scheidsrechter
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Regels & Scheidsrechters
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-primary-foreground/85 md:text-xl">
              Vaak aan de zijlijn en zin om de club mee te dragen? Fluiten is een van de leukste, zinvolste taken die je kan opnemen — en je groeit stap voor stap mee met de leeftijdscategorieën.
            </p>
            <div className="mt-8 h-1 w-24 rounded-full bg-accent" />
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="secondary" size="lg">
                <Link to="/sportief/regels-assistent" className="inline-flex items-center gap-2">
                  <Bot className="h-4 w-4" />
                  Vraag het de Regels Assistent
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href="#startplan">Bekijk startplan</a>
              </Button>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-6">
              <div>
                <div className="text-2xl font-bold md:text-3xl">Vanaf U9</div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/70">Altijd met twee</div>
              </div>
              <div>
                <div className="text-2xl font-bold md:text-3xl">U6+</div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/70">Starten kan al</div>
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
                className="whitespace-nowrap rounded-full px-4 py-1.5 font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="mx-auto max-w-5xl space-y-16">
          {/* Regels Assistent CTA */}
          <section id="assistent">
            <Link to="/sportief/regels-assistent" className="block group">
              <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6 transition-all hover:border-primary/50 hover:shadow-elegant md:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/15 group-hover:bg-primary/25 transition-colors">
                    <Bot className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="mb-1 text-xl font-bold text-foreground">Vraag het aan onze Regels Assistent</h2>
                    <p className="text-sm text-muted-foreground md:text-base">
                      Krijg meteen antwoord op je vraag, op basis van de officiële FIH regelgeving.
                    </p>
                  </div>
                  <ChevronRight className="h-6 w-6 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              </div>
            </Link>
          </section>

          {/* Startplan */}
          <section id="startplan">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <div className="mb-2 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                  Startplan
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Kies je leeftijdscategorie</h2>
                <p className="mt-2 text-muted-foreground">Per categorie zie je de regels en signalen waar je op moet letten.</p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {ageGroups.map((g) => (
                <Link key={g.to} to={g.to} className="group">
                  <Card className="h-full transition-all hover:border-primary/40">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Users className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-foreground">{g.title}</h3>
                          <ChevronRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">{g.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}

              {/* Registreren card */}
              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Timer className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">Registreer je</h3>
                  <p className="mb-4 flex-1 text-sm text-muted-foreground">
                    Toegang tot Drillster en op het wedstrijdblad? Schrijf je in via Twizzit.
                  </p>
                  <Button asChild size="sm" className="w-full">
                    <a
                      href="https://app.twizzit.com/go/dmon-fluitjes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Inschrijven via Twizzit
                    </a>
                  </Button>

                </CardContent>
              </Card>
            </div>
          </section>

          {/* Types scheidsrechter */}
          <section id="types">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mb-2 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                  Types
                </div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Welke types scheidsrechter kennen we?</h2>
                <p className="mb-4 text-muted-foreground">
                  De regels worden ingedeeld per leeftijdscategorie tot U14. Nadien zijn er drie competitieniveaus die elk hun specifiek type scheidsrechter hebben.
                </p>
                <p className="text-sm text-muted-foreground">
                  Een scheidsrechter bij een U8-ploeg hoeft dus geen hockey-technische regels te kennen die pas vanaf U9 gelden. En als U10-scheidsrechter wordt niet verwacht dat je alle regels voor groot veld vanaf U14 kent — de basisfouten herkennen volstaat helemaal.
                </p>
              </div>
              <div className="rounded-2xl border bg-card p-6 shadow-card">
                <img
                  src={scheidsrechterPad}
                  alt="Scheidsrechter pad overzicht per leeftijdscategorie"
                  loading="lazy"
                  className="mx-auto w-full max-w-md rounded-xl"
                />
              </div>
            </div>
          </section>

          {/* Opbouw */}
          <section id="opbouw">
            <div className="mb-8">
              <div className="mb-2 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                Opbouw
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Geleidelijk meegroeien</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Jeugd: stap voor stap
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Vanaf U6 kan je al meehelpen met minimale kennis. Vanaf U9 wordt het spel iets uitgebreider, van U10 tot U12 spelen we half veld met cirkel (penalty corners), en vanaf U14 starten we met de volledige regels. Elke leeftijdscategorie voegt nieuwe elementen toe zodat kinderen — en ouders — meegroeien.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Volwassenen: meteen aan de slag
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Stap je in bij <em>Trimmers</em>, <em>Gents</em>, <em>Ladies</em> of <em>Heren/Dames</em>? Dan is het iets uitdagender, maar op lagere niveaus staat spelplezier en sportiviteit boven regels. Een extra scheidsrechter wordt altijd erg geapprecieerd — anders is er geen spel.
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Tips */}
          <section id="tips">
            <div className="mb-8">
              <div className="mb-2 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                Tips
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Belangrijke tips</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-semibold">Voor beginners</h3>
                  <p className="text-sm text-muted-foreground">
                    Helemaal geen erg als een beslissing eens juist of onjuist is — dit is een fase van leren voor iedereen. Zolang het ter goeder trouw is, in het belang van veiligheid en spelplezier.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-semibold">Overleg is de sleutel</h3>
                  <p className="text-sm text-muted-foreground">
                    Wees niet bang in overleg te gaan. Je kan altijd de tijd stilleggen. Overleg is bij twijfel altijd de juiste keuze.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Materiaal */}
          <section id="materiaal">
            <div className="mb-8">
              <div className="mb-2 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                Materiaal
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Materiaal per categorie</h2>
              <p className="mt-2 max-w-3xl text-muted-foreground">
                Op regionaal niveau volstaat het om theoretische regelkennis te hebben aangetoond — geen verplichte praktische examens. Dat komt pas later in de nationale competitie.
              </p>
            </div>

            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="mb-6 flex justify-center">
                  <img
                    src={stappen}
                    alt="Aangeraden materiaal per categorie"
                    loading="lazy"
                    className="w-full max-w-2xl rounded-xl"
                  />
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  Hierboven zie je wat je best bekijkt vóór je een match fluit. Alles hangt af van het niveau en of je in rol van <em>assistent</em> staat (iemand helpt jou) of <em>lead</em> bent (jij begeleidt iemand). Fluiten doe je vanaf U9 steeds met twee — dat helpt enorm bij het leren.
                </p>
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <p className="text-sm text-foreground">
                    <strong className="text-primary">Tip:</strong> Ideaal zijn beide scheidsrechters even ervaren en fluit elk op je eigen kant van het veld. De aanpak van een assistent en lead maakt aanleren al doende makkelijker.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Final CTA */}
          <section>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 text-primary-foreground md:p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-40" />
              <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-foreground/15 backdrop-blur-sm">
                    <ExternalLink className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="mb-1 text-2xl font-bold md:text-3xl">Zin om te fluiten?</h2>
                    <p className="text-primary-foreground/85">Schrijf je in via Twizzit — we helpen je graag op weg.</p>
                  </div>
                </div>
                <Button asChild size="lg" variant="secondary">
                  <a href="https://app.twizzit.com/go/dmon-fluitjes" target="_blank" rel="noopener noreferrer">Inschrijven</a>
                </Button>

              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Rules;
