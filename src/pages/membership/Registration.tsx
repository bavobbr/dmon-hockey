import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Registration = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Registratieformulier</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5" />
              Officiële Registratie via Sportfederatie
            </CardTitle>
            <CardDescription>
              Dit formulier wordt beheerd door onze sportfederatie partner voor officiële registratie
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full h-[800px] border rounded-lg overflow-hidden">
              <iframe
                src="https://app.twizzit.com/v2/public/form/652bbc45caee1b7560ad9b0746c86550"
                className="w-full h-full border-0"
                title="D-mon Hockey Club Registratieformulier"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Heb je problemen met het formulier? Neem contact op via{" "}
              <a href="mailto:info@dmon.be" className="text-primary hover:underline">
                info@dmon.be
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Registration;