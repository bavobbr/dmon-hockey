import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ClipboardList,
  ExternalLink,
  Mail,
  UserPlus,
  CheckCircle2,
  CreditCard,
  Info,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";

const Registration = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-30" />
        <div className="container relative mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
              Word lid
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Registratie
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/85 md:text-xl max-w-2xl">
              Welkom bij D-mon Hockey Club! Vul het officiële registratieformulier in en wij nemen
              zo snel mogelijk contact met je op om je inschrijving af te ronden.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="secondary" size="lg" asChild>
                <a href="#formulier">
                  <ClipboardList className="mr-2 h-5 w-5" />
                  Naar het formulier
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                asChild
              >
                <a href="/lidmaatschap/info">
                  <Info className="mr-2 h-5 w-5" />
                  Lidmaatschap info
                </a>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-primary-foreground/10 p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold">3</div>
                <div className="text-sm text-primary-foreground/75">Eenvoudige stappen</div>
              </div>
              <div className="rounded-xl bg-primary-foreground/10 p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold">~5 min</div>
                <div className="text-sm text-primary-foreground/75">Invultijd</div>
              </div>
              <div className="rounded-xl bg-primary-foreground/10 p-4 backdrop-blur-sm col-span-2 sm:col-span-1">
                <div className="text-2xl font-bold">VHL</div>
                <div className="text-sm text-primary-foreground/75">Aansluiting inbegrepen</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Sticky sub-navigation ===== */}
      <nav className="sticky top-16 z-30 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-3 text-sm">
            {[
              { id: "stappen", label: "Hoe werkt het" },
              { id: "formulier", label: "Formulier" },
              { id: "na", label: "Wat daarna" },
              { id: "hulp", label: "Hulp nodig" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="whitespace-nowrap rounded-full px-4 py-2 font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ===== Stappen ===== */}
      <section id="stappen" className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Hoe werkt het
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              In drie stappen lid
            </h2>
            <p className="mt-4 text-muted-foreground">
              Van aanmelding tot je eerste training: zo eenvoudig is het om bij D-mon te starten.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: ClipboardList,
                step: "01",
                title: "Vul het formulier in",
                desc: "Geef je gegevens door via het officiële Twizzit-formulier hieronder.",
              },
              {
                icon: CreditCard,
                step: "02",
                title: "Betaling lidgeld",
                desc: "Na bevestiging ontvang je instructies om het lidgeld te betalen.",
              },
              {
                icon: CheckCircle2,
                step: "03",
                title: "Welkom op het veld",
                desc: "Je wordt ingedeeld in een team en kan starten met de trainingen.",
              },
            ].map((s) => (
              <Card key={s.step} className="border-border/60">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <span className="text-2xl font-bold text-muted-foreground/40">{s.step}</span>
                  </div>
                  <CardTitle className="mt-4">{s.title}</CardTitle>
                  <CardDescription>{s.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Formulier ===== */}
      <section id="formulier" className="bg-muted/30 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Officiële inschrijving
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              Registratieformulier
            </h2>
            <p className="mt-4 text-muted-foreground">
              Dit formulier wordt beheerd via Twizzit, ons sportadministratieplatform. Je gegevens
              worden veilig verwerkt en gebruikt voor je aansluiting bij de Vlaamse Hockey Liga.
            </p>
          </div>

          <Card className="border-border/60 overflow-hidden">
            <CardContent className="p-0">
              <div className="w-full h-[800px] overflow-hidden">
                <iframe
                  src="https://app.twizzit.com/v2/public/form/652bbc45caee1b7560ad9b0746c86550"
                  className="w-full h-full border-0"
                  title="D-mon Hockey Club Registratieformulier"
                  loading="lazy"
                />
              </div>
            </CardContent>
          </Card>

          <p className="mt-4 text-sm text-muted-foreground">
            Heb je problemen met het formulier? Neem contact op via{" "}
            <a href="mailto:info@dmon.be" className="text-primary hover:underline font-medium">
              info@dmon.be
            </a>
            .
          </p>
        </div>
      </section>

      {/* ===== Wat daarna ===== */}
      <section id="na" className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Wat daarna
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              Na je inschrijving
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-border/60">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4">Bevestigingsmail</CardTitle>
                <CardDescription>
                  Je ontvangt binnen enkele dagen een bevestigingsmail met de betaalinstructies en
                  meer informatie over je team.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border/60">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4">Verzekering &amp; aansluiting</CardTitle>
                <CardDescription>
                  Na betaling ben je officieel aangesloten bij de VHL en verzekerd voor alle
                  hockeyactiviteiten.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== Hulp nodig ===== */}
      <section id="hulp" className="bg-muted/30 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Hulp nodig
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              Veelgestelde vragen
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border/60">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4">Eerst proberen?</CardTitle>
                <CardDescription>
                  Nieuwe spelers mogen 2 trainingen gratis proberen voor ze beslissen om lid te
                  worden.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border/60">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <UserPlus className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4">Indoor hockey?</CardTitle>
                <CardDescription>
                  Voor het indoorseizoen is er een aparte inschrijving via de clubshop.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border/60">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ExternalLink className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4">Twizzit account</CardTitle>
                <CardDescription>
                  Na inschrijving krijg je toegang tot je persoonlijke Twizzit-account voor planning
                  en communicatie.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 md:p-16 text-primary-foreground">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-30" />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Nog twijfels of vragen?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/85">
                Ons secretariaat helpt je graag verder met al je vragen over inschrijving,
                lidgeld of teamindeling.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="secondary" size="lg" asChild>
                  <a href="mailto:info@dmon.be">
                    <Mail className="mr-2 h-5 w-5" />
                    Mail ons
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  asChild
                >
                  <a href="/lidmaatschap/contact">
                    <Info className="mr-2 h-5 w-5" />
                    Contactpagina
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
