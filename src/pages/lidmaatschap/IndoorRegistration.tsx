import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/lib/router-compat";
import { AlertCircle, ArrowRight, ExternalLink, Info, Users } from "lucide-react";

const INDOOR_FORM_URL = "https://twizzit.com/go/dmon-indoor-2026";

const IndoorRegistration = () => {
  return (
    <div className="container mx-auto px-4 py-12 lg:py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-3 text-4xl font-bold text-foreground">Indoor inschrijven 2026-2027</h1>
        <p className="mb-8 text-lg text-muted-foreground">Voor spelers vanaf U9 die deelnemen aan trainingen én wedstrijden.</p>

        <Alert className="mb-8 border-primary/20 bg-primary/5">
          <Info className="h-4 w-4" />
          <AlertDescription>
            Inschrijven kan tot <strong>29 oktober 2026</strong>. Bekijk eerst de volledige{" "}
            <Link to="/sportief/indoor-hockey" className="font-medium text-primary underline underline-offset-4">winterstopinformatie</Link>
            {" "}met trainingsuren, locaties, materiaal en tarieven.
          </AlertDescription>
        </Alert>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-primary" />Beperkte plaatsen</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>Per wedstrijdploeg kunnen maximaal 10 spelers deelnemen. Categorieën met twee ploegen hebben maximaal 20 plaatsen.</p>
              <p>Is je categorie volzet, dan kom je op de wachtlijst. De sportieve cel bepaalt de definitieve teamindeling.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><AlertCircle className="h-5 w-5 text-primary" />Goed om te weten</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>Schrijf in voor je eigen leeftijdscategorie en geslacht.</p>
              <p>Je inschrijving geldt voor de competitie en de bijbehorende trainingen en wedstrijden. Alleen trainen is dit seizoen niet mogelijk.</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 border-primary/20">
          <CardHeader><CardTitle>Inschrijven via Twizzit</CardTitle></CardHeader>
          <CardContent className="space-y-5">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-muted p-4"><p className="text-sm text-muted-foreground">U9 tot U12</p><p className="text-2xl font-bold">€130</p></div>
              <div className="rounded-lg bg-muted p-4"><p className="text-sm text-muted-foreground">Vanaf U14</p><p className="text-2xl font-bold">€140</p></div>
            </div>
            <Button asChild size="lg"><a href={INDOOR_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">Open het Twizzit-formulier<ExternalLink className="h-4 w-4" /></a></Button>
            <Button asChild variant="ghost"><Link to="/sportief/indoor-hockey" className="inline-flex items-center gap-2">Terug naar alle winterstopinformatie<ArrowRight className="h-4 w-4" /></Link></Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default IndoorRegistration;
