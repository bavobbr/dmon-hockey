import { PageCta, PageHero } from "@/components/layout/PageHero";
import { Card, CardContent } from "@/components/ui/card";
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
  Phone,
  Snowflake,
  ExternalLink,
  Mail,
} from "lucide-react";
import mobilityMap from "@/assets/mobility-map.png";
import ClubLocationMap from "@/components/ClubLocationMap";
import { HockeyFieldJsonLd } from "@/components/JsonLd";

const subNavLinks = [
  { href: "#locatie", label: "Locatie" },
  { href: "#indoorzalen", label: "Indoorzalen" },
  { href: "#mobiliteit", label: "Parkeren & mobiliteit" },
  { href: "#vervoer", label: "Duurzaam vervoer" },
  { href: "#afspraken", label: "Afspraken" },
];

const SectionHeader = ({ icon: Icon, title, subtitle }: { icon: typeof MapPin; title: string; subtitle: string }) => (
  <div className="mb-8 flex items-center gap-3">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
      <Icon className="h-5 w-5 text-primary" />
    </div>
    <div>
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <p className="text-muted-foreground">{subtitle}</p>
    </div>
  </div>
);

const HockeyField = () => {
  return (
    <div className="min-h-screen bg-background">
      <HockeyFieldJsonLd />

      <PageHero
        label="Onze thuisbasis"
        title="Hockeyterrein & mobiliteit"
        lead="Vind ons terrein in Grembergen, ontdek hoe je er duurzaam geraakt en lees de afspraken voor verantwoord gebruik."
        actions={
          <>
            <Button asChild size="lg" variant="secondary">
              <a href="#locatie" className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Bekijk locatie
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href="#mobiliteit" className="inline-flex items-center gap-2">
                <Navigation className="h-4 w-4" />
                Mobiliteit
              </a>
            </Button>
          </>
        }
      />

      <div className="subnav-bar z-30 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <nav className="flex gap-1 overflow-x-auto py-3 text-sm" aria-label="Snelle links">
            {subNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Locatie */}
      <section id="locatie" className="container mx-auto scroll-mt-20 px-4 py-12 lg:py-16">
        <SectionHeader
          icon={MapPin}
          title="Locatie terrein"
          subtitle="Vind ons hockeyterrein in Grembergen, vlak bij het centrum van Dendermonde"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ClubLocationMap />
          </div>
          <Card>
            <CardContent className="space-y-4 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
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
              <Alert className="border-warning/30 bg-warning/5">
                <AlertTriangle className="h-4 w-4 text-warning" />
                <AlertDescription className="text-sm text-foreground">
                  <strong>Opgelet:</strong> herinrichting kruispunt Mechelsesteenweg/
                  Martelarenlaan/Noordlaan/Leopoldlaan is gestart.{" "}
                  <a
                    href="https://www.dendermonde.be/werkenmechelsepoort"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary underline underline-offset-4"
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

      {/* Indoorzalen */}
      <section id="indoorzalen" className="container mx-auto scroll-mt-20 px-4 py-12 lg:py-16">
        <SectionHeader
          icon={Snowflake}
          title="Indoorzalen"
          subtitle="Tijdens de winterstop spelen en trainen we indoor op twee locaties"
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="space-y-4 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Snowflake className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold">GO! MIRA, Hamme</h3>
              </div>
              <p className="text-muted-foreground">
                Loystraat 70
                <br />
                9220 Hamme
              </p>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+3252499970" className="font-medium text-primary underline underline-offset-4">
                  052 49 99 70
                </a>
              </p>
              <Alert className="border-destructive/30 bg-destructive/5">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                <AlertDescription className="text-sm text-foreground">
                  <strong className="text-destructive">Opgelet met je navigatie:</strong> tik{" "}
                  <strong>niet</strong> &quot;GO MIRA&quot; in je navigatietool, dan kom je op de
                  verkeerde plaats uit. Voer het adres in: <strong>Loystraat 70, Hamme</strong>.
                </AlertDescription>
              </Alert>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Loystraat+70%2C+9220+Hamme"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="h-4 w-4" />
                  Route via Google Maps
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Snowflake className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold">Sporthal Sint-Gillis, Dendermonde</h3>
              </div>
              <p className="text-muted-foreground">
                Van Langenhovestraat 203
                <br />
                9200 Dendermonde
              </p>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+3252210612" className="font-medium text-primary underline underline-offset-4">
                  052 21 06 12
                </a>
              </p>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Van+Langenhovestraat+203%2C+9200+Dendermonde"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="h-4 w-4" />
                  Route via Google Maps
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mobiliteit */}
      <section id="mobiliteit" className="container mx-auto scroll-mt-20 px-4 py-12 lg:py-16">
        <SectionHeader
          icon={Car}
          title="Parkeren & mobiliteit"
          subtitle="Het aantal parkeerplaatsen is beperkt — kies waar mogelijk de fiets of carpool"
        />

        <Card className="overflow-hidden">
          <CardContent className="space-y-6 p-6 md:p-8">
            <p className="text-muted-foreground">
              Om de rust in de buurt te bewaren vragen we om zo veel mogelijk
              gebruik te maken van duurzame alternatieven. Kom je met de wagen,
              tracht dan te carpoolen en gebruik de parkeerlocaties op de kaart.
            </p>
            <div className="overflow-hidden rounded-xl border border-border/60">
              <img
                src={mobilityMap}
                alt="Mobiliteits- en parkeerkaart voor D-mon Hockey Club"
                loading="lazy"
                className="h-auto w-full"
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
      <section id="vervoer" className="container mx-auto scroll-mt-20 px-4 py-12 lg:py-16">
        <SectionHeader
          icon={Bike}
          title="Duurzame vervoersopties"
          subtitle="Milieuvriendelijke manieren om ons terrein te bereiken"
        />

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
              <CardContent className="space-y-3 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <opt.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{opt.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{opt.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Afspraken */}
      <section id="afspraken" className="container mx-auto scroll-mt-20 px-4 py-12 lg:py-16">
        <SectionHeader
          icon={ClipboardList}
          title="Afspraken gebruik hockeyterrein"
          subtitle="Samen zorgen we ervoor dat we lang kunnen genieten van ons terrein"
        />

        <Card>
          <CardContent className="space-y-6 p-6 md:p-8">
            <ul className="space-y-3">
              {[
                "Respecteer het terreinoppervlak — juiste hockeyschoenen verplicht.",
                "Houd het terrein schoon — ruim op na gebruik en berg materiaal goed op.",
                "Volg de geplande gebruikstijden en respecteer andere gebruikers.",
                "Meld onderhoudsproblemen onmiddellijk aan het terreinbeheer.",
              ].map((rule) => (
                <li key={rule} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
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

      <PageCta
        title="Vragen over het terrein?"
        text="Neem contact op met onze terreinverantwoordelijke voor specifieke vragen over gebruik, reservaties of onderhoud."
        actions={
          <Button asChild size="lg" variant="secondary" className="font-semibold">
            <a href="/lidmaatschap/contact" className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Contacteer ons
            </a>
          </Button>
        }
      />
    </div>
  );
};

export default HockeyField;
