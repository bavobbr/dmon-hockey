import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Users, ExternalLink, Shield } from "lucide-react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Contact</h1>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Lid worden?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Je vindt alle informatie onder 'Lid worden' (informatie – inschrijvingsformulier).
              </p>
              <div className="space-y-2">
                <Button variant="outline" className="w-full" asChild>
                  <a href="/lidmaatschap/info">
                    Lidmaatschap Informatie
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/lidmaatschap/registratie">
                    Inschrijvingsformulier
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Vrijwilliger worden?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Interesse om vrijwilliger te worden bij D-MON Hockey en zo onze club te helpen groeien?
              </p>
              <p className="text-muted-foreground mb-4">
                Wil jij ook meehelpen, op regelmatige basis of liever sporadisch? Klik op onderstaande link en maak deel uit van ons topteam vrijwilligers!
              </p>
              <Button className="w-full" asChild>
                <a 
                  href="https://app.twizzit.com/v2/public/form/0fcce442248b984b6aee0b1c9d5ba63f" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Registreer als vrijwilliger
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Aanspreekpunt Integriteit (API)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Kom je in aanraking met pesterijen, discriminatie, racisme, ongewenst seksueel gedrag … Weet dat je hiervoor bij ons terechtkan.
              </p>
              <Button variant="outline" asChild>
                <a href="/club/values">
                  Lees meer onder 'De club' (waarden)
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Andere vragen of opmerkingen?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Neem contact via:
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="mailto:info@dmon.be">
                  <Mail className="h-4 w-4 mr-2" />
                  info@dmon.be
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;