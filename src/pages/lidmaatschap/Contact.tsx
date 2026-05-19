import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Users, ExternalLink, Shield, MessageCircle } from "lucide-react";
import { ContactPageJsonLd } from "@/components/JsonLd";

const Contact = () => {
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
              Samenwerken
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Contact
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/85 md:text-xl max-w-2xl">
              Wil je lid worden, vrijwilliger, scheidsrechter of heb je een vraag?
              Hieronder vind je alle wegen om met ons in contact te komen.
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
                <a href="/lidmaatschap/info">
                  <Users className="mr-2 h-5 w-5" />
                  Lid worden
                </a>
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
              { label: "Lid worden", id: "lid" },
              { label: "Vrijwilliger", id: "vrijwilliger" },
              { label: "Scheidsrechter", id: "scheidsrechter" },
              { label: "Integriteit", id: "api" },
              { label: "Overige", id: "overige" },
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

      {/* ===== Lid worden / Vrijwilliger ===== */}
      <section id="lid" className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Meedoen</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Word deel van D-MON</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Of je nu als speler, vrijwilliger of begeleider wilt meedoen — er is altijd een plek voor jou.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Lid worden?</CardTitle>
                <CardDescription>Alle info over lidmaatschap en inschrijving</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Je vindt alle informatie over lidmaatschap, tarieven en het inschrijvingsformulier op onze lidmaatschapspagina's.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href="/lidmaatschap/info">
                      Lidmaatschap Informatie
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/lidmaatschap/registratie">
                      Inschrijvingsformulier
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Vrijwilliger worden?</CardTitle>
                <CardDescription>Help onze club groeien</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Interesse om vrijwilliger te worden bij D-MON Hockey? Op regelmatige basis of sporadisch — iedereen is welkom!
                </p>
                <Button asChild>
                  <a
                    href="https://app.twizzit.com/v2/public/form/0fcce442248b984b6aee0b1c9d5ba63f"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Registreer als vrijwilliger
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== Scheidsrechter / API ===== */}
      <section id="scheidsrechter" className="bg-muted/30 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Ondersteuning</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Scheidsrechter & Integriteit</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Helpen als begeleider of scheidsrechter, of een melding doen rond integriteit.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Scheidsrechter / Begeleider worden?</CardTitle>
                <CardDescription>U7 tot U19</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Interesse om als begeleider (U7/U8/U9) of scheidsrechter (U10 tot U19) te helpen? We voorzien een VHL/Twizzit account en begeleiding.
                </p>
                <Button asChild>
                  <a
                    href="https://app.twizzit.com/v2/public/form/cea9e8831bead08352918535621cd399"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Registreer als scheidsrechter/begeleider
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Aanspreekpunt Integriteit (API)</CardTitle>
                <CardDescription>Veilig sportklimaat</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Kom je in aanraking met pesterijen, discriminatie, racisme of ongewenst seksueel gedrag? Je kunt hiermee bij ons terecht.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="/club/values">
                    Lees meer onder 'De club'
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== Overige vragen ===== */}
      <section id="overige" className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Vragen?</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Andere vragen of opmerkingen?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Voor alle andere vragen, opmerkingen of suggesties kan je ons bereiken via e-mail.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>E-mail</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:info@dmon.be" className="text-sm font-medium text-primary hover:underline">
                  info@dmon.be
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  Algemene vragen en opmerkingen
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Clubhuis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Sportcomplex De Schorre<br />
                  Sint-Gillis-Dendermonde
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Social media</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Volg ons voor het laatste nieuws en updates.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="/socials">
                    Bekijk onze kanalen
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Mail className="mx-auto h-10 w-10 text-primary-foreground" />
            <h2 className="mt-4 text-3xl font-bold text-primary-foreground md:text-4xl">
              Nog vragen?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/85">
              Aarzel niet om contact op te nemen. We helpen je graag verder.
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
                <a href="/lidmaatschap/info">
                  <Users className="mr-2 h-5 w-5" />
                  Lidmaatschap info
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactPageJsonLd />
    </div>
  );
};

export default Contact;
