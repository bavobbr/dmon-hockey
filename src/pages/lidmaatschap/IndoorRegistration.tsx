import { PageHero } from "@/components/layout/PageHero";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/lib/router-compat";
import { AlertCircle, ArrowRight, ExternalLink, Info, Users } from "lucide-react";

const SENIOR_FORM_URL = "https://twizzit.com/go/dmon-indoor-2026-senior";

const IndoorRegistration = () => {
  return (
    <>
      <PageHero label="Lidmaatschap" title="Indoor inschrijven 2026-2027" lead="De jeugdinschrijvingen zijn afgelopen. Seniors kunnen nog inschrijven tot 29 november 2026." />
    <div className="container mx-auto px-4 py-12 lg:py-16">
      <div className="mx-auto max-w-4xl">

        <Alert className="mb-8 border-primary/20 bg-primary/5">
          <Info className="h-4 w-4" />
          <AlertDescription>
            De inschrijvingen voor de <strong>jeugd (U9 tot U18)</strong> zijn afgelopen sinds 29 oktober 2026. Voor <strong>seniors (vanaf U19)</strong> kan het nog tot 29 november 2026. Bekijk ook de volledige{" "}
            <Link to="/sportief/indoor-hockey" className="font-medium text-primary underline underline-offset-4">winterstopinformatie</Link>
            {" "}met trainingsuren, locaties, materiaal en tarieven.
          </AlertDescription>
        </Alert>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-primary" />Jeugd: inschrijvingen afgelopen</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>De deadline was 29 oktober 2026. Per wedstrijdploeg kunnen maximaal 10 spelers deelnemen; wie te laat was, kwam op de wachtlijst terecht.</p>
              <p>De sportieve cel bepaalt nu de definitieve teamindeling. Die verschijnt in november in Twizzit.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><AlertCircle className="h-5 w-5 text-primary" />Seniors: nog tot 29 november</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>Voor spelers van U19G/B, Dames/Heren en Ladies/Gents zijn er negen indoortrainingen op zondag tussen 13u en 15u, in Hamme of Sint-Gillis.</p>
              <p>Er zijn 15 plaatsen. Vol is vol.</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 border-primary/20">
          <CardHeader><CardTitle>Inschrijven via Twizzit</CardTitle></CardHeader>
          <CardContent className="space-y-5">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-muted p-4"><p className="text-sm text-muted-foreground">Seniors, volledige reeks</p><p className="text-2xl font-bold">€45</p></div>
              <div className="rounded-lg bg-muted p-4"><p className="text-sm text-muted-foreground">Beschikbare plaatsen</p><p className="text-2xl font-bold">15</p></div>
            </div>
            <Button asChild size="lg"><a href={SENIOR_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">Open het Twizzit-formulier voor seniors<ExternalLink className="h-4 w-4" /></a></Button>
            <Button asChild variant="ghost"><Link to="/sportief/indoor-hockey" className="inline-flex items-center gap-2">Terug naar alle winterstopinformatie<ArrowRight className="h-4 w-4" /></Link></Button>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  );
};

export default IndoorRegistration;
