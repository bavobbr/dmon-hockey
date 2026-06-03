import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  MapPin,
  Bus,
  Car,
  Bike,
  AlertTriangle,
  FileText,
  ClipboardList,
  Navigation,
} from "lucide-react";
import mobilityMap from "@/assets/mobility-map.png";
import ClubLocationMap from "@/components/ClubLocationMap";
import { HockeyFieldJsonLd } from "@/components/JsonLd";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const HockeyField = () => {
  return (
    <div className="min-h-screen bg-background">
      <HockeyFieldJsonLd />

      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary-foreground/15 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20">
              Onze thuisbasis
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hockeyterrein & mobiliteit
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Vind ons terrein in Grembergen, ontdek hoe je er duurzaam geraakt en
              lees de afspraken voor verantwoord gebruik.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" variant="secondary" onClick={() => scrollToSection("locatie")}>
                <MapPin className="h-4 w-4" />
                Bekijk locatie
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                onClick={() => scrollToSection("mobiliteit")}
              >
                <Navigation className="h-4 w-4" />
                Mobiliteit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky sub-nav */}
      <nav className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border/60">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-3">
            {[
              { id: "locatie", label: "Locatie" },
              { id: "mobiliteit", label: "Parkeren & mobiliteit" },
              { id: "vervoer", label: "Duurzaam vervoer" },
              { id: "afspraken", label: "Afspraken" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-primary/5 hover:text-primary transition-colors whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Locatie */}
      <section id="locatie" className="container mx-auto px-4 py-12 lg:py-16 scroll-mt-20">
        <div className="mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Locatie terrein
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Vind ons hockeyterrein in Grembergen, vlak bij het centrum van Dendermonde.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ClubLocationMap />
          </div>
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold">Adres</h3>
              </div>
              <p className="text-muted-foreground">
                Oud Kerkhofstraat 20
                <br />
                Grembergen
                <br />
                België
              </p>
              <Alert className="border-amber-200 bg-amber-50 dark:bg-amber-950/20">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                <AlertDescription className="text-amber-800 dark:text-amber-200 text-sm">
                  <strong>Opgelet:</strong> herinrichting kruispunt Mechelsesteenweg/
                  Martelarenlaan/Noordlaan/Leopoldlaan is gestart.{" "}
                  <a
                    href="https://www.dendermonde.be/werkenmechelsepoort"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:no-underline"
                  >
                    Meer info
                  </a>{" "}
                  — vertrek op tijd.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mobiliteit */}
      <section id="mobiliteit" className="container mx-auto px-4 py-12 lg:py-16 scroll-mt-20">
        <div className="mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Parkeren & mobiliteit
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Het aantal parkeerplaatsen is beperkt. Kies waar mogelijk de fiets,
            carpool of gebruik de aangeduide parkings.
          </p>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-6 md:p-8 space-y-6">
            <p className="text-muted-foreground">
              Om de rust in de buurt te bewaren vragen we om zo veel mogelijk
              gebruik te maken van duurzame alternatieven. Kom je met de wagen,
              tracht dan te carpoolen en gebruik de parkeerlocaties op de kaart.
            </p>
            <div className="border border-border/60 rounded-xl overflow-hidden">
              <img
                src={mobilityMap}
                alt="Mobiliteits- en parkeerkaart voor D-mon Hockey Club"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
            <div>
              <Button variant="outline" asChild>
                <a
                  href="https://dmon.be/wp-content/uploads/2022/11/Mobiliteit-1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="h-4 w-4" />
                  Download parkeerkaart (PDF)
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Vervoer */}
      <section id="vervoer" className="container mx-auto px-4 py-12 lg:py-16 scroll-mt-20">
        <div className="mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Duurzame vervoersopties
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Milieuvriendelijke manieren om ons terrein te bereiken.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Bike,
              title: "Fietsen (aanbevolen)",
              text: "Fietsrekken beschikbaar ter plaatse. Help mee de buurt rustig te houden.",
            },
            {
              icon: Car,
              title: "Carpoolen",
              text: "Deel ritten met teamgenoten om de parkeerdruk te verminderen.",
            },
            {
              icon: Bus,
              title: "Openbaar vervoer",
              text: "Contacteer ons voor de beste route met bus of trein.",
            },
          ].map((opt) => (
            <Card key={opt.title}>
              <CardContent className="p-6 space-y-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <opt.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{opt.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{opt.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Afspraken */}
      <section id="afspraken" className="container mx-auto px-4 py-12 lg:py-16 scroll-mt-20">
        <div className="mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Afspraken gebruik hockeyterrein
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Samen zorgen we ervoor dat we lang kunnen genieten van ons terrein.
          </p>
        </div>

        <Card>
          <CardContent className="p-6 md:p-8 space-y-6">
            <ul className="space-y-3">
              {[
                "Respecteer het terreinoppervlak — juiste hockeyschoenen verplicht.",
                "Houd het terrein schoon — ruim op na gebruik en berg materiaal goed op.",
                "Volg de geplande gebruikstijden en respecteer andere gebruikers.",
                "Meld onderhoudsproblemen onmiddellijk aan het terreinbeheer.",
              ].map((rule) => (
                <li key={rule} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm text-foreground/90">{rule}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Button variant="outline" asChild>
                <a
                  href="https://dmon.be/wp-content/uploads/2024/01/Afspraken-hockeyterrein-uitgebreid-A4-document.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ClipboardList className="h-4 w-4" />
                  Download volledige terreinafspraken (PDF)
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-12 lg:py-16">
        <Card className="bg-gradient-to-br from-primary to-primary-light text-primary-foreground border-0 overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-primary-foreground/15 flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Vragen over het terrein?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
                Neem contact op met onze terreinverantwoordelijke voor specifieke
                vragen over gebruik, reservaties of onderhoud.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <a href="/lidmaatschap/contact">Contacteer ons</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default HockeyField;
