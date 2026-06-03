import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { History as HistoryIcon, Calendar, Users, Trophy, Building, ArrowRight, Mail } from "lucide-react";
import historyStoryImage from "@/assets/history-story.png";

const History = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const milestones = [
    {
      year: "2018",
      title: "Oprichting van de Club",
      description: "D-MON Hockey Club werd opgericht door een groep gepassioneerde hockeyliefhebbers in Dendermonde.",
      icon: Users
    },
    {
      year: "2019-2021",
      title: "Groei en Ontwikkeling",
      description: "Uitbreiding van het aantal leden en teams, deelname aan lokale competities.",
      icon: Calendar
    },
    {
      year: "2021",
      title: "Zoektocht naar Eigen Terrein",
      description: "Start van de intensieve zoektocht en planning voor een eigen hockeyterrein.",
      icon: Building
    },
    {
      year: "2022",
      title: "Terrein Gerealiseerd",
      description: "Na juridische procedures en hard werk werd het nieuwe kunstgrasveld eindelijk geopend.",
      icon: Trophy
    },
    {
      year: "2023-2024",
      title: "Verdere Uitbreiding",
      description: "Voortzetting van de groei met nieuwe jeugdprogramma's en verdere faciliteiten.",
      icon: HistoryIcon
    }
  ];

  return (
    <div>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-30" />
        <div className="container relative mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
              Onze club
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Geschiedenis
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/85 md:text-xl max-w-2xl">
              Van een kleine groep enthousiastelingen tot een bloeiende hockeyclub in hartje Dendermonde.
              Ontdek het verhaal van D-MON Hockey Club.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="secondary" size="lg" onClick={() => scrollToSection("verhaal")}>
                <ArrowRight className="mr-2 h-5 w-5" />
                Ons verhaal
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                onClick={() => scrollToSection("mijlpalen")}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Mijlpalen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Sticky Sub-Nav ===== */}
      <div className="sticky top-14 z-30 border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-1 overflow-x-auto py-2 no-scrollbar">
            {[
              { label: "Ons verhaal", id: "verhaal" },
              { label: "Mijlpalen", id: "mijlpalen" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ===== Ons Verhaal ===== */}
      <section id="verhaal" className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Verhaal</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Ons Verhaal</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              De reis van D-MON Hockey Club — van een idee tot een gemeenschap.
            </p>
          </div>

          <Card>
            <CardContent className="p-6 lg:p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    D-MON Hockey Club ontstond uit een gedeelde passie voor veldhockey en een visie om een
                    gastvrije gemeenschap te creëren voor spelers van alle leeftijden en vaardigheidsniveaus.
                    Wat begon als een kleine groep enthousiastelingen is uitgegroeid tot een bloeiende club
                    die het beste van de Belgische hockeycultuur vertegenwoordigt.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Onze club legt de nadruk op niet alleen competitieve excellentie, maar ook op de waarden
                    van respect, fair play en gemeenschapsgevoel. We geloven dat hockey meer is dan een sport—
                    het is een manier om levenslange vriendschappen op te bouwen, karakter te ontwikkelen en
                    bij te dragen aan onze lokale gemeenschap.
                  </p>
                </div>

                <div className="flex justify-center">
                  <div className="max-w-sm">
                    <img
                      src={historyStoryImage}
                      alt="Verhaal D-MON Hockey - Geschiedenis van de Club"
                      loading="lazy"
                      className="w-full h-auto rounded-xl shadow-lg border"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===== Mijlpalen ===== */}
      <section id="mijlpalen" className="bg-muted/30 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Tijdlijn</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Belangrijke Mijlpalen</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              De belangrijkste momenten die D-MON Hockey Club hebben gevormd.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl">
            {milestones.map((milestone) => (
              <Card key={milestone.year}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <milestone.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                        <h3 className="text-lg font-semibold text-foreground">{milestone.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Users className="mx-auto h-10 w-10 text-primary-foreground" />
            <h2 className="mt-4 text-3xl font-bold text-primary-foreground md:text-4xl">
              Word deel van ons verhaal
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/85">
              Onze geschiedenis blijft zich ontvouwen met elke trainingsessie, wedstrijd en nieuw lid dat zich bij onze clubfamilie voegt.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" asChild>
                <a href="mailto:info@dmon.be">
                  <Mail className="mr-2 h-5 w-5" />
                  Mail info@dmon.be
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                asChild
              >
                <a href="/club/teams">
                  <Users className="mr-2 h-5 w-5" />
                  Ontdek onze teams
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
