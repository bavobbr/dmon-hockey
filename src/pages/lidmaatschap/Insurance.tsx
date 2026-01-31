import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileText, Phone, AlertTriangle, Download, ExternalLink } from "lucide-react";

const Insurance = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Verzekering</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Jouw Veiligheid is Onze Prioriteit
            </CardTitle>
            <CardDescription>
              Uitgebreide verzekeringsdekking voor alle clubleden
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Een deel van je lidgeld bij D-MON Hockey gaat naar aansluiting bij de Vlaamse Hockey Liga. 
              Op die manier ben je <strong>verzekerd voor lichamelijke ongevallen en burgerlijke aansprakelijkheid</strong>. 
              Wat houdt dat concreet in?
            </p>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Lichamelijke Ongevallen</CardTitle>
              <CardDescription>Bescherming tijdens hockeyactiviteiten</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground mb-3">
                  De verzekering lichamelijke ongevallen geldt voor:
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-sm text-muted-foreground">Trainingen, stages, wedstrijden, sportkampen</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-sm text-muted-foreground">In binnen- en buitenland</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-sm text-muted-foreground">En voor de bijhorende verplaatsingen</p>
                  </div>
                </div>
                
                <div className="bg-muted/50 p-3 rounded-lg mt-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Franchise:</strong> Per ongeval geldt een franchise van €25
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Burgerlijke Aansprakelijkheid</CardTitle>
              <CardDescription>Bescherming tegen claims van derden</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  De verzekering burgerlijke aansprakelijkheid vergoedt de schade die een lid berokkent 
                  aan iemand anders (een derde). Er dient schade te zijn, veroorzaakt door de fout van een lid 
                  en er dient een duidelijk verband te zijn tussen de schade en de 'dader'.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-orange-200 bg-orange-50/50 mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-700">
              <AlertTriangle className="h-5 w-5" />
              Wat te doen bij een lichamelijk ongeval?
            </CardTitle>
            <CardDescription className="text-orange-600">
              Volg deze stappen bij een ongeval tijdens hockeyactiviteiten
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="flex items-start gap-3 p-4 border border-orange-200 rounded-lg bg-white">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-medium text-orange-800 mb-1">Gebruik het aangifteformulier</h4>
                    <p className="text-sm text-orange-600">Download en vul het officiële aangifteformulier in</p>
                    <Button variant="outline" size="sm" className="mt-2 border-orange-300 text-orange-700 hover:bg-orange-100" asChild>
                      <a 
                        href="https://hockey.be/wp-content/uploads/2022/06/Aangifteformulier-Lichamelijke-Ongevallen_Vlaamse-Hockey-Liga_update-06-2022.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Aangifteformulier
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 border border-orange-200 rounded-lg bg-white">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-medium text-orange-800 mb-1">Geneeskundig getuigschrift</h4>
                    <p className="text-sm text-orange-600">Laat het geneeskundig getuigschrift zo snel als mogelijk invullen door een arts</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 border border-orange-200 rounded-lg bg-white">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-medium text-orange-800 mb-1">Bezorg het formulier</h4>
                    <p className="text-sm text-orange-600 mb-2">
                      Bezorg het ingevulde aangifteformulier aan onze secretaris zodat het tijdig kan worden bezorgd aan Belfius
                    </p>
                    <p className="text-xs text-orange-600 font-medium">
                      ⚠️ Opgelet: Belfius dient uiterlijk 8 dagen na het ongeval te beschikken over de aangifte en het volledig ingevulde medische getuigschrift
                    </p>
                    <Button variant="outline" size="sm" className="mt-2 border-orange-300 text-orange-700 hover:bg-orange-100" asChild>
                      <a href="mailto:secretaris@dmon.be">
                        <Phone className="h-4 w-4 mr-2" />
                        secretaris@dmon.be
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 border border-orange-200 rounded-lg bg-white">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-medium text-orange-800 mb-1">Afhandeling door Belfius</h4>
                    <p className="text-sm text-orange-600">
                      Vanaf dan gebeurt de afhandeling van het dossier rechtstreeks met Belfius. De verzekering 
                      lichamelijke ongevallen zal de medische kosten vergoeden na tussenkomst van andere 
                      verzekeringsorganismen, zoals het ziekenfonds en de hospitalisatieverzekering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50/50 mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Shield className="h-5 w-5" />
              Wat te doen bij een burgerlijk ongeval?
            </CardTitle>
            <CardDescription className="text-blue-600">
              Procedure voor schade aan derden
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="flex items-start gap-3 p-4 border border-blue-200 rounded-lg bg-white">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-medium text-blue-800 mb-1">Vul het aangifteformulier in</h4>
                    <p className="text-sm text-blue-600">Gebruik hetzelfde aangifteformulier als voor lichamelijke ongevallen</p>
                    <Button variant="outline" size="sm" className="mt-2 border-blue-300 text-blue-700 hover:bg-blue-100" asChild>
                      <a 
                        href="https://hockey.be/wp-content/uploads/2022/06/Aangifteformulier-Lichamelijke-Ongevallen_Vlaamse-Hockey-Liga_update-06-2022.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Aangifteformulier
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 border border-blue-200 rounded-lg bg-white">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-medium text-blue-800 mb-1">Neem contact op</h4>
                    <p className="text-sm text-blue-600 mb-2">Contacteer onze secretaris voor verdere begeleiding</p>
                    <Button variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-100" asChild>
                      <a href="mailto:secretaris@dmon.be">
                        <Phone className="h-4 w-4 mr-2" />
                        secretaris@dmon.be
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Verzekeringsgegevens</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Verzekeraar</h4>
                <p className="text-sm text-muted-foreground mb-1">Vlaamse Hockey Liga via Belfius</p>
                <p className="text-sm text-muted-foreground">Voor lichamelijke ongevallen en burgerlijke aansprakelijkheid</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Contact bij vragen</h4>
                <p className="text-sm text-muted-foreground mb-1">
                  <a href="mailto:secretaris@dmon.be" className="text-primary hover:underline">
                    secretaris@dmon.be
                  </a>
                </p>
                <p className="text-sm text-muted-foreground">Voor alle verzekeringsgerelateerde vragen</p>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t">
              <p className="text-xs text-muted-foreground">
                Voor gedetailleerde polisvoorwaarden, neem contact op met de clubadministratie.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Insurance;