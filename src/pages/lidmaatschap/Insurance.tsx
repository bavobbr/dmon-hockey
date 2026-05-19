import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileText, Phone, AlertTriangle, Download, ExternalLink, ChevronRight, HeartPulse, Scale } from "lucide-react";

const Insurance = () => {
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
              Bescherming
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Verzekering
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/85 md:text-xl max-w-2xl">
              Een deel van je lidgeld gaat naar aansluiting bij de Vlaamse Hockey Liga. 
              Je bent verzekerd voor lichamelijke ongevallen en burgerlijke aansprakelijkheid tijdens alle hockeyactiviteiten.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="secondary" size="lg" asChild>
                <a href="#ongeval">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  Bij een ongeval
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                asChild
              >
                <a href="mailto:secretaris@dmon.be">
                  <Phone className="mr-2 h-5 w-5" />
                  Contacteer secretaris
                </a>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-primary-foreground/10 p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold">2</div>
                <div className="text-sm text-primary-foreground/75">Soorten dekking</div>
              </div>
              <div className="rounded-xl bg-primary-foreground/10 p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold">€25</div>
                <div className="text-sm text-primary-foreground/75">Franchise per ongeval</div>
              </div>
              <div className="rounded-xl bg-primary-foreground/10 p-4 backdrop-blur-sm col-span-2 sm:col-span-1">
                <div className="text-2xl font-bold">8 dgn</div>
                <div className="text-sm text-primary-foreground/75">Aangifte-termijn</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Sticky Sub-Nav ===== */}
      <div className="sticky top-14 z-30 border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-1 overflow-x-auto py-2 no-scrollbar">
            {[
              { label: "Dekking", id: "dekking" },
              { label: "Ongeval", id: "ongeval" },
              { label: "Burgerlijk", id: "burgerlijk" },
              { label: "Contact", id: "contact" },
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

      {/* ===== Dekking ===== */}
      <section id="dekking" className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Dekking</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Jouw veiligheid is onze prioriteit</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Via de Vlaamse Hockey Liga geniet je van een uitgebreide verzekeringsdekking. 
              Hieronder zie je waar je precies voor verzekerd bent.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <HeartPulse className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Lichamelijke Ongevallen</CardTitle>
                <CardDescription>Bescherming tijdens hockeyactiviteiten</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    De verzekering lichamelijke ongevallen geldt voor:
                  </p>
                  <div className="space-y-2">
                    {[
                      "Trainingen, stages, wedstrijden, sportkampen",
                      "In binnen- en buitenland",
                      "En voor de bijhorende verplaatsingen",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <p className="text-sm text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-lg bg-muted/50 p-3">
                    <p className="text-sm text-muted-foreground">
                      <strong>Franchise:</strong> Per ongeval geldt een franchise van €25
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Scale className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Burgerlijke Aansprakelijkheid</CardTitle>
                <CardDescription>Bescherming tegen claims van derden</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  De verzekering burgerlijke aansprakelijkheid vergoedt de schade die een lid berokkent 
                  aan iemand anders (een derde). Er dient schade te zijn, veroorzaakt door de fout van een lid 
                  en er dient een duidelijk verband te zijn tussen de schade en de "dader".
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== Ongeval ===== */}
      <section id="ongeval" className="bg-muted/30 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Stappenplan</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Wat te doen bij een lichamelijk ongeval?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Volg deze vier stappen om je aangifte correct en tijdig te laten verlopen.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                nr: "1",
                title: "Gebruik het aangifteformulier",
                text: "Download en vul het officiële aangifteformulier in.",
                cta: {
                  label: "Download Aangifteformulier",
                  href: "https://hockey.be/wp-content/uploads/2022/06/Aangifteformulier-Lichamelijke-Ongevallen_Vlaamse-Hockey-Liga_update-06-2022.pdf",
                  icon: Download,
                },
              },
              {
                nr: "2",
                title: "Geneeskundig getuigschrift",
                text: "Laat het geneeskundig getuigschrift zo snel als mogelijk invullen door een arts.",
              },
              {
                nr: "3",
                title: "Bezorg het formulier",
                text: "Bezorg het ingevulde aangifteformulier aan onze secretaris zodat het tijdig kan worden bezorgd aan Belfius.",
                warning: "Belfius dient uiterlijk 8 dagen na het ongeval te beschikken over de aangifte en het volledig ingevulde medische getuigschrift.",
                cta: {
                  label: "secretaris@dmon.be",
                  href: "mailto:secretaris@dmon.be",
                  icon: Phone,
                },
              },
              {
                nr: "4",
                title: "Afhandeling door Belfius",
                text: "Vanaf dan gebeurt de afhandeling van het dossier rechtstreeks met Belfius. De verzekering lichamelijke ongevallen zal de medische kosten vergoeden na tussenkomst van andere verzekeringsorganismen, zoals het ziekenfonds en de hospitalisatieverzekering.",
              },
            ].map((step) => (
              <Card key={step.nr}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      {step.nr}
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.text}</p>
                      {step.warning && (
                        <p className="rounded-lg bg-amber-50 p-3 text-xs font-medium text-amber-700">
                          <AlertTriangle className="mr-1 inline h-3.5 w-3.5" />
                          {step.warning}
                        </p>
                      )}
                      {step.cta && (
                        <Button variant="outline" size="sm" className="mt-1" asChild>
                          <a href={step.cta.href} target={step.cta.href.startsWith("http") ? "_blank" : undefined} rel={step.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                            <step.cta.icon className="mr-2 h-4 w-4" />
                            {step.cta.label}
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Burgerlijk ===== */}
      <section id="burgerlijk" className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Procedure</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Wat te doen bij een burgerlijk ongeval?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Procedure voor schade aan derden — eenvoudig en snel af te handelen.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    1
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Vul het aangifteformulier in</h3>
                    <p className="text-sm text-muted-foreground">Gebruik hetzelfde aangifteformulier als voor lichamelijke ongevallen.</p>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://hockey.be/wp-content/uploads/2022/06/Aangifteformulier-Lichamelijke-Ongevallen_Vlaamse-Hockey-Liga_update-06-2022.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download Aangifteformulier
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    2
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Neem contact op</h3>
                    <p className="text-sm text-muted-foreground">Contacteer onze secretaris voor verdere begeleiding.</p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="mailto:secretaris@dmon.be">
                        <Phone className="mr-2 h-4 w-4" />
                        secretaris@dmon.be
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="bg-muted/30 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Gegevens</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Verzekeringsgegevens</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Alle praktische info over de verzekeraar en contactpersoon bij vragen.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Verzekeraar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Vlaamse Hockey Liga via Belfius</p>
                <p className="text-sm text-muted-foreground mt-1">Voor lichamelijke ongevallen en burgerlijke aansprakelijkheid</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Contact bij vragen</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:secretaris@dmon.be" className="text-sm font-medium text-primary hover:underline">
                  secretaris@dmon.be
                </a>
                <p className="text-sm text-muted-foreground mt-1">Voor alle verzekeringsgerelateerde vragen</p>
              </CardContent>
            </Card>
          </div>

          <p className="mt-8 text-xs text-muted-foreground max-w-3xl">
            Voor gedetailleerde polisvoorwaarden, neem contact op met de clubadministratie.
          </p>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Shield className="mx-auto h-10 w-10 text-primary-foreground" />
            <h2 className="mt-4 text-3xl font-bold text-primary-foreground md:text-4xl">
              Vragen over je verzekering?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/85">
              Onze secretaris helpt je graag verder bij alle verzekeringsvragen of bij het indienen van een aangifte.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" asChild>
                <a href="mailto:secretaris@dmon.be">
                  <Phone className="mr-2 h-5 w-5" />
                  Mail de secretaris
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="https://hockey.be/wp-content/uploads/2022/06/Aangifteformulier-Lichamelijke-Ongevallen_Vlaamse-Hockey-Liga_update-06-2022.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Aangifteformulier
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insurance;
