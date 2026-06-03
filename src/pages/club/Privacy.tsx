import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Lock, Mail, Users, FileText, AlertTriangle, Sparkles } from "lucide-react";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-2">
    <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
    <p className="text-sm text-muted-foreground">{children}</p>
  </div>
);

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6 py-20 lg:py-28">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-6 bg-white/15 text-primary-foreground border-white/20 hover:bg-white/20">
              <Sparkles className="h-3 w-3 mr-1" /> Juridisch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Privacyverklaring
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 max-w-2xl">
              Hoe D-MON Hockey omgaat met je persoonsgegevens — transparant, veilig en conform de GDPR.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" size="lg" onClick={() => scrollToSection("algemeen")}>
                Lees verklaring
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 text-primary-foreground border-white/30 hover:bg-white/20 hover:text-primary-foreground"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky sub-nav */}
      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border/60">
        <div className="container mx-auto px-6">
          <div className="flex gap-6 overflow-x-auto py-4 text-sm font-medium">
            <button onClick={() => scrollToSection("algemeen")} className="text-foreground hover:text-primary whitespace-nowrap transition-colors">Algemeen</button>
            <button onClick={() => scrollToSection("doeleinden")} className="text-foreground hover:text-primary whitespace-nowrap transition-colors">Doeleinden</button>
            <button onClick={() => scrollToSection("gegevens")} className="text-foreground hover:text-primary whitespace-nowrap transition-colors">Gegevens</button>
            <button onClick={() => scrollToSection("derden")} className="text-foreground hover:text-primary whitespace-nowrap transition-colors">Derden</button>
            <button onClick={() => scrollToSection("beveiliging")} className="text-foreground hover:text-primary whitespace-nowrap transition-colors">Beveiliging</button>
            <button onClick={() => scrollToSection("rechten")} className="text-foreground hover:text-primary whitespace-nowrap transition-colors">Je rechten</button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary whitespace-nowrap transition-colors">Contact</button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card id="algemeen" className="scroll-mt-20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-display">
                <Shield className="h-5 w-5 text-primary" /> 1. Algemeen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Als D-MON Hockey zijn wij verantwoordelijk voor de verwerking van je persoonsgegevens.
                Indien je na het doornemen van onze privacyverklaring, of in algemenere zin, vragen hebt
                hierover of contact met ons wenst op te nemen kan dit via onderstaande contactgegevens:
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-display font-medium">D-MON Hockey</p>
                <p className="text-sm text-muted-foreground">Emanuel Hielstraat 94, 9200 Dendermonde</p>
                <p className="text-sm">
                  <a href="mailto:info@dmon.be" className="text-primary hover:underline">info@dmon.be</a>
                </p>
              </div>
              <p className="text-muted-foreground mt-4">
                Deze privacyverklaring is van toepassing op al onze huidige en vroegere leden,
                deelnemers aan activiteiten, personen die belangstelling tonen of toonden voor onze
                activiteiten, diensten of producten, klanten en prospecten, leveranciers.
              </p>
            </CardContent>
          </Card>

          <Card id="doeleinden" className="scroll-mt-20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-display">
                <FileText className="h-5 w-5 text-primary" /> 2. Waarom verwerken wij persoonsgegevens?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Je persoonsgegevens worden door D-MON Hockey verwerkt ten behoeve van de volgende doeleinden en rechtsgronden:
              </p>
              <div className="space-y-2">
                <Bullet>Het voeren van ledenadministratie en dienstverlening aan leden (contractuele grond)</Bullet>
                <Bullet>Het versturen van informatie over onze activiteiten, nieuwsbrieven en uitnodigingen (gerechtvaardigd belang)</Bullet>
                <Bullet>Het organiseren van de sportieve voorbereiding en opleiding</Bullet>
                <Bullet>Club- en Federatieadministratie (gerechtvaardigd belang)</Bullet>
                <Bullet>Het organiseren van en deelnemen aan (recreatieve) competities en tornooien</Bullet>
                <Bullet>Promotie, PR en communicatie waaronder het beheren van sociale media en de clubwebsite</Bullet>
              </div>
            </CardContent>
          </Card>

          <Card id="gegevens" className="scroll-mt-20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-display">
                <Eye className="h-5 w-5 text-primary" /> 3. Welke gegevens verwerken we?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Wij kunnen de volgende persoonsgegevens van je vragen, opslaan, verzamelen en verwerken:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Bullet>Identificatiegegevens: naam, voornaam</Bullet>
                  <Bullet>Privé-contactgegevens: telefoonnummer, e-mail, adres</Bullet>
                  <Bullet>Persoonlijke kenmerken: geslacht, geboortedatum, nationaliteit</Bullet>
                  <Bullet>Financiële bijzonderheden (betalingen, rekeningnummer)</Bullet>
                </div>
                <div className="space-y-2">
                  <Bullet>Sportieve gegevens (categorie, uitslagen, aanwezigheden)</Bullet>
                  <Bullet>Medische basisgegevens (allergieën, laatste tetanusinenting)</Bullet>
                  <Bullet>Beeldmateriaal (foto's, video's, opnames)</Bullet>
                </div>
              </div>
              <p className="text-muted-foreground mt-4 text-sm">
                We verzamelen enkel persoonsgegevens die je zelf aan ons meedeelt.
                Er wordt geen enkele categorie van personen onderworpen aan geautomatiseerde besluitvorming of profilering.
              </p>
            </CardContent>
          </Card>

          <Card id="derden" className="scroll-mt-20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-display">
                <Users className="h-5 w-5 text-primary" /> 4. Verstrekking van gegevens aan derden
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Op geen enkel moment verkopen of verhuren wij je persoonsgegevens aan derde partijen.
                  Wij geven je contactgegevens ook nooit door aan derden voor commerciële doeleinden.
                </p>
                <div>
                  <h4 className="font-display font-medium mb-2">Verwerkers</h4>
                  <p className="text-sm text-muted-foreground mb-2">Zo maken wij gebruik van derde partijen voor:</p>
                  <div className="space-y-1">
                    <Bullet>Het opslaan en verwerken van gegevens (Twizzit en Sportlink)</Bullet>
                    <Bullet>Het verzorgen van de internetomgeving (webhosting, mailhosting)</Bullet>
                    <Bullet>Het verzorgen van IT-infrastructuur</Bullet>
                    <Bullet>Het verzekeren van onze leden, deelnemers en vrijwilligers</Bullet>
                  </div>
                </div>
                <div>
                  <h4 className="font-display font-medium mb-2">Ontvangers</h4>
                  <p className="text-sm text-muted-foreground mb-2">Wij delen persoonsgegevens met:</p>
                  <div className="space-y-1">
                    <Bullet>Subsidiërende overheden (stad Dendermonde, Sport Vlaanderen)</Bullet>
                    <Bullet>De sportfederaties: Vlaamse Hockey Liga en Koninklijke Belgische Hockey Bond</Bullet>
                    <Bullet>Partners waarmee we activiteiten organiseren</Bullet>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-display">
                <AlertTriangle className="h-5 w-5 text-primary" /> 5. Minderjarigen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Wij verwerken alleen persoonsgegevens van personen jonger dan 18 jaar indien daarvoor
                toestemming is gegeven door de ouder of wettelijke vertegenwoordiger.
              </p>
            </CardContent>
          </Card>

          <Card id="beveiliging" className="scroll-mt-20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-display">
                <Lock className="h-5 w-5 text-primary" /> 6. Bewaartermijn & Beveiliging
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-display font-medium mb-2">Bewaartermijn</h4>
                  <p className="text-sm text-muted-foreground">
                    D-MON Hockey bewaart persoonsgegevens niet langer dan noodzakelijk.
                    We verbinden ons ertoe de gegevens niet langer bij te houden dan 18 maanden
                    of maximaal 5 jaar na laatste gebruik.
                  </p>
                </div>
                <div>
                  <h4 className="font-display font-medium mb-2">Beveiligingsmaatregelen</h4>
                  <div className="space-y-1">
                    <Bullet>Alle personen zijn gehouden aan geheimhouding</Bullet>
                    <Bullet>Gebruikersnaam en wachtwoordbeleid op alle systemen</Bullet>
                    <Bullet>Pseudonimisatie en encryptie van persoonsgegevens</Bullet>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card id="rechten" className="scroll-mt-20">
            <CardHeader>
              <CardTitle className="font-display">7. Je rechten omtrent je gegevens</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-3">
                <Bullet>Recht van inzage en kopie van je gegevens</Bullet>
                <Bullet>Recht op verbetering en aanvulling</Bullet>
                <Bullet>Recht op gegevenswissing (verwijdering)</Bullet>
                <Bullet>Recht op beperking van gegevensverwerking</Bullet>
                <Bullet>Recht van bezwaar tegen verwerking</Bullet>
                <Bullet>Recht op gegevensoverdracht</Bullet>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Via je Twizzit profiel kan je de bewaarde persoonsgegevens raadplegen.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <section id="contact" className="scroll-mt-20 mt-16">
          <div className="rounded-2xl bg-gradient-primary p-10 md:p-14 text-primary-foreground">
            <div className="max-w-3xl mx-auto text-center">
              <Mail className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Vragen of klachten?
              </h2>
              <p className="text-lg text-primary-foreground/85 mb-8">
                Neem contact op om je rechten uit te oefenen of bij vragen over deze privacyverklaring.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-left bg-white/10 rounded-xl p-6 mb-6">
                <div>
                  <p className="font-display font-semibold mb-2">D-MON Hockey</p>
                  <p className="text-sm text-primary-foreground/85">Emanuel Hielstraat 94, 9200 Dendermonde</p>
                  <p className="text-sm">
                    <a href="mailto:info@dmon.be" className="underline hover:opacity-80">info@dmon.be</a>
                  </p>
                </div>
                <div>
                  <p className="font-display font-semibold mb-2">Gegevensbeschermingsautoriteit (GBA)</p>
                  <p className="text-sm text-primary-foreground/85">Drukpersstraat 35, 1000 Brussel</p>
                  <p className="text-sm">
                    <a href="mailto:contact@apd-gba.be" className="underline hover:opacity-80">contact@apd-gba.be</a>
                  </p>
                </div>
              </div>
              <Button variant="secondary" size="lg" asChild>
                <a href="mailto:info@dmon.be">
                  <Mail className="h-4 w-4 mr-2" /> Mail ons
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
