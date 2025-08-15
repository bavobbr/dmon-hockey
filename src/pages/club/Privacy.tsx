import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Mail, Users, FileText, AlertTriangle } from "lucide-react";

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Privacyverklaring</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              1. Algemeen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Als D-MON Hockey zijn wij verantwoordelijk voor de verwerking van je persoonsgegevens. 
              Indien je na het doornemen van onze privacyverklaring, of in algemenere zin, vragen hebt 
              hierover of contact met ons wenst op te nemen kan dit via onderstaande contactgegevens:
            </p>
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="font-medium">D-MON Hockey</p>
              <p className="text-sm text-muted-foreground">Emanuel Hielstraat 94, 9200 Dendermonde</p>
              <p className="text-sm text-muted-foreground">
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

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                2. Waarom verwerken wij persoonsgegevens?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Je persoonsgegevens worden door D-MON Hockey verwerkt ten behoeve van de volgende doeleinden en rechtsgronden:
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm text-muted-foreground">
                    Het voeren van ledenadministratie en dienstverlening aan leden (contractuele grond)
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm text-muted-foreground">
                    Het versturen van informatie over onze activiteiten, nieuwsbrieven en uitnodigingen (gerechtvaardigd belang)
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm text-muted-foreground">
                    Het organiseren van de sportieve voorbereiding en opleiding
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm text-muted-foreground">
                    Club- en Federatieadministratie (gerechtvaardigd belang)
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm text-muted-foreground">
                    Het organiseren van en deelnemen aan (recreatieve) competities en tornooien
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm text-muted-foreground">
                    Promotie, PR en communicatie waaronder het beheren van sociale media en de clubwebsite
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                3. Welke gegevens verwerken we?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Wij kunnen de volgende persoonsgegevens van je vragen, opslaan, verzamelen en verwerken:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm text-muted-foreground">Identificatiegegevens: naam, voornaam</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm text-muted-foreground">Privé-contactgegevens: telefoonnummer, e-mail, adres</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm text-muted-foreground">Persoonlijke kenmerken: geslacht, geboortedatum, nationaliteit</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm text-muted-foreground">Financiële bijzonderheden (betalingen, rekeningnummer)</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm text-muted-foreground">Sportieve gegevens (categorie, uitslagen, aanwezigheden)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm text-muted-foreground">Medische basisgegevens (allergieën, laatste tetanusinenting)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm text-muted-foreground">Beeldmateriaal (foto's, video's, opnames)</p>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mt-4 text-sm">
                We verzamelen enkel persoonsgegevens die je zelf aan ons meedeelt. 
                Er wordt geen enkele categorie van personen onderworpen aan geautomatiseerde besluitvorming of profilering.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                4. Verstrekking van gegevens aan derden
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Op geen enkel moment verkopen of verhuren wij je persoonsgegevens aan derde partijen. 
                  Wij geven je contactgegevens ook nooit door aan derden voor commerciële doeleinden.
                </p>
                
                <div>
                  <h4 className="font-medium mb-2">Verwerkers</h4>
                  <p className="text-sm text-muted-foreground mb-2">Zo maken wij gebruik van derde partijen voor:</p>
                  <div className="space-y-1">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p className="text-sm text-muted-foreground">Het opslaan en verwerken van gegevens (Twizzit en Sportlink)</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p className="text-sm text-muted-foreground">Het verzorgen van de internetomgeving (webhosting, mailhosting)</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p className="text-sm text-muted-foreground">Het verzorgen van IT-infrastructuur</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p className="text-sm text-muted-foreground">Het verzekeren van onze leden, deelnemers en vrijwilligers</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Ontvangers</h4>
                  <p className="text-sm text-muted-foreground mb-2">Wij delen persoonsgegevens met:</p>
                  <div className="space-y-1">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p className="text-sm text-muted-foreground">Subsidiërende overheden (stad Dendermonde, Sport Vlaanderen)</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p className="text-sm text-muted-foreground">De sportfederaties: Vlaamse Hockey Liga en Koninklijke Belgische Hockey Bond</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p className="text-sm text-muted-foreground">Partners waarmee we activiteiten organiseren</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                5. Minderjarigen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Wij verwerken alleen persoonsgegevens van personen jonger dan 18 jaar indien daarvoor 
                toestemming is gegeven door de ouder of wettelijke vertegenwoordiger.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                6. Bewaartermijn & Beveiliging
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Bewaartermijn</h4>
                  <p className="text-sm text-muted-foreground">
                    D-MON Hockey bewaart persoonsgegevens niet langer dan noodzakelijk. 
                    We verbinden ons ertoe de gegevens niet langer bij te houden dan 18 maanden 
                    of maximaal 5 jaar na laatste gebruik.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Beveiligingsmaatregelen</h4>
                  <div className="space-y-1">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p className="text-sm text-muted-foreground">Alle personen zijn gehouden aan geheimhouding</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p className="text-sm text-muted-foreground">Gebruikersnaam en wachtwoordbeleid op alle systemen</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p className="text-sm text-muted-foreground">Pseudonimisatie en encryptie van persoonsgegevens</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Je rechten omtrent je gegevens</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm text-muted-foreground">Recht van inzage en kopie van je gegevens</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm text-muted-foreground">Recht op verbetering en aanvulling</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm text-muted-foreground">Recht op gegevenswissing (verwijdering)</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm text-muted-foreground">Recht op beperking van gegevensverwerking</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm text-muted-foreground">Recht van bezwaar tegen verwerking</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm text-muted-foreground">Recht op gegevensoverdracht</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Via je Twizzit profiel kan je de bewaarde persoonsgegevens raadplegen.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Contact & Klachten
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                Voor vragen over deze privacyverklaring of om je rechten uit te oefenen:
              </p>
              <div className="space-y-2 text-sm mb-4">
                <p><strong>D-MON Hockey</strong></p>
                <p>Emanuel Hielstraat 94, 9200 Dendermonde</p>
                <p>
                  <a href="mailto:info@dmon.be" className="text-primary hover:underline">
                    info@dmon.be
                  </a>
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                Je hebt altijd het recht een klacht in te dienen bij de Gegevensbeschermingsautoriteit (GBA):
              </p>
              <div className="text-sm mt-2">
                <p>Drukpersstraat 35, 1000 Brussel</p>
                <p>
                  <a href="mailto:contact@apd-gba.be" className="text-primary hover:underline">
                    contact@apd-gba.be
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Privacy;