import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Ruler, Target, Users, ShoppingBag, ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  { id: "factoren", label: "Factoren" },
  { id: "lengte", label: "Lengte" },
  { id: "samenstelling", label: "Samenstelling" },
  { id: "kromming", label: "Kromming" },
  { id: "stick-nodig", label: "Stick nodig?" },
];

const bowTypes = [
  { name: "Midbow", text: "Minimale kromming, ideaal voor sterk laag spel" },
  { name: "Probow", text: "Beetje kromming, maakt 3D spel makkelijker" },
  { name: "Lowbow", text: "Veel kromming, voor 3D spel en hoge shots" },
  { name: "Extreme Lowbow", text: "Maximale kromming, ideaal voor dragflicks bij PC" },
];

const StickGuide = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div
          className="absolute inset-0 opacity-30"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, hsl(var(--primary-glow) / 0.6) 0%, transparent 50%), radial-gradient(circle at 80% 70%, hsl(var(--accent) / 0.4) 0%, transparent 50%)",
          }}
        />
        <div className="container mx-auto px-4 py-16 lg:py-24 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm mb-6">
              Materiaalgids
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">De juiste stick kiezen</h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 max-w-2xl">
              Lengte, samenstelling en kromming bepalen samen of een stick bij jou past. Een korte gids om bewust te kiezen — voor jezelf of je kind.
            </p>
            <div className="mt-8 h-1 w-24 rounded-full bg-accent" />
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="secondary">
                <a href="#stick-nodig">Stick kopen</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href="#factoren">
                  Bekijk de gids <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-bold md:text-3xl">3</div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/70">Factoren</div>
              </div>
              <div>
                <div className="text-2xl font-bold md:text-3xl">25mm</div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/70">Max kromming (FIH)</div>
              </div>
              <div>
                <div className="text-2xl font-bold md:text-3xl">36.5″</div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/70">Standaard volwassen</div>
              </div>
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

          {/* Factoren */}
          <section id="factoren" className="scroll-mt-24">
            <div className="mb-8">
              <div className="mb-2 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                Overzicht
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Drie belangrijke factoren</h2>
              <p className="mt-2 text-muted-foreground">Hockey sticks komen in vele maten en soorten. Let bij je keuze vooral op deze drie:</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: Ruler, title: "De lengte", text: "Bepaalt houding en bereik" },
                { icon: Target, title: "De samenstelling", text: "Carbon, fiberglass of aramide" },
                { icon: Zap, title: "De kromming", text: "Vorm bepaalt speelstijl" },
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
          </section>

          {/* Lengte */}
          <section id="lengte" className="scroll-mt-24">
            <div className="mb-8">
              <div className="mb-2 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                Lengte
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Welke lengte past?</h2>
              <p className="mt-2 text-muted-foreground">Sticks worden qua lengte uitgedrukt in inch.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">Volwassenen (vanaf U16)</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong className="text-foreground">Standaard:</strong> 36.5 inch</li>
                    <li>• <strong className="text-foreground">Langere spelers:</strong> 37.5 inch</li>
                    <li>• Makkelijker tot aan de grond reiken</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">Kinderen</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong className="text-foreground">Richtlijn:</strong> Heup- of navelhoogte</li>
                    <li>• Stick van grond tot heup/navel</li>
                    <li>• Helpt juiste houding aan te leren</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="p-6">
                  <div className="mb-3 inline-flex items-center rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-primary">
                    Clubadvies
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Een stick tot aan de navel, met een overstap naar de volgende maat om de twee jaar ongeveer.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Samenstelling */}
          <section id="samenstelling" className="scroll-mt-24">
            <div className="mb-8">
              <div className="mb-2 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                Samenstelling
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Waar is jouw stick van gemaakt?</h2>
              <p className="mt-2 text-muted-foreground">Hedendaagse sticks zijn van kunststof — duurzamer en lichter dan vroeger.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { name: "Fiberglass / Composiet", text: "Een betaalbare kunststofvezel" },
                { name: "Carbon", text: "Erg stevige en lichte kunststof" },
                { name: "Aramide", text: "Een schokdempende kunststof" },
              ].map((m) => (
                <Card key={m.name}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground">{m.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{m.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">Carbonpercentage als gids</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Het carbonpercentage bepaalt de basiskost van de stick. Hoe meer carbon, hoe stijver — en hoe meer techniek vereist is voor goede balcontrole.
                  </p>
                  <div className="space-y-1 text-sm">
                    <p><strong className="text-foreground">Kinderen:</strong> 0% tot 40% carbon</p>
                    <p><strong className="text-foreground">Volwassenen:</strong> 40% tot 70% carbon</p>
                  </div>
                  <div className="mt-4 space-y-1 text-sm text-muted-foreground border-t pt-4">
                    <p>✓ Meer carbon = meer <em>power</em></p>
                    <p>✗ Meer carbon = moeilijker <em>trapping/dribbling</em></p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="p-6">
                  <div className="mb-3 inline-flex items-center rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-primary">
                    Clubadvies
                  </div>
                  <div className="space-y-2 text-sm">
                    <p>• <strong className="text-foreground">Onderbouw:</strong> 0 tot 30% carbon</p>
                    <p>• <strong className="text-foreground">Middenbouw:</strong> 30 tot 70% carbon</p>
                    <p>• <strong className="text-foreground">Bovenbouw:</strong> 40 tot 100% carbon</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Kromming */}
          <section id="kromming" className="scroll-mt-24">
            <div className="mb-8">
              <div className="mb-2 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                Kromming
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Vorm bepaalt speelstijl</h2>
              <p className="mt-2 max-w-3xl text-muted-foreground">
                Een hockeystick heeft een kromming van maximum 25 mm (FIH-regel). De kromming maakt balcontrole makkelijker — locatie en hoogte bepalen je speeleigenschappen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">Locatie (200–300 mm)</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong className="text-foreground">Mid-bow:</strong> Kromming in het midden (300 mm)</li>
                    <li>• <strong className="text-foreground">Low-bow:</strong> Dichter bij de krul (200–250 mm)</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">Effect van lage kromming</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>✓ Makkelijker bal liften voor 3D skills</p>
                    <p>✓ Betere hoge shots mogelijk</p>
                    <p>✗ Moeilijker bal laag houden voor passes</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h3 className="font-semibold mb-3">Standaard types</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              {bowTypes.map((b) => (
                <Card key={b.name}>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-sm">{b.name}</h4>
                    <p className="mt-1 text-xs text-muted-foreground">{b.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-6">
                <div className="mb-3 inline-flex items-center rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-primary">
                  Clubadvies
                </div>
                <div className="space-y-1 text-sm">
                  <p>• <strong className="text-foreground">Onderbouw:</strong> Standard / midbow types</p>
                  <p>• <strong className="text-foreground">Midden/bovenbouw:</strong> Midbow tot lowbow afhankelijk van speelstijl</p>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Hoog spel is altijd leuk om te zien, maar in matchen moet het spaarzaam worden toegepast totdat behendigheid en inzicht groot genoeg zijn om gevaarlijke fouten te vermijden.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Stick nodig CTA */}
          <section id="stick-nodig" className="scroll-mt-24">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 text-primary-foreground md:p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-40" />
              <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-foreground/15 backdrop-blur-sm">
                    <ShoppingBag className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="mb-1 text-2xl font-bold md:text-3xl">Stick nodig?</h2>
                    <p className="text-primary-foreground/85 max-w-xl">
                      Vraag de trainers of sportieve cel om advies. We bieden sticks aan uit voorraad (Thurso) die perfect bij de speler passen.
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
