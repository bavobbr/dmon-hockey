import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Info, ExternalLink } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const IndoorRegistration = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Indoor Hockey Registratie</h1>
        
        {/* Introduction */}
        <Alert className="mb-8 border-primary/20 bg-primary/5">
          <Info className="h-4 w-4" />
          <AlertDescription className="text-muted-foreground">
            Hier kan je je inschrijven voor indoor hockey. Voor meer informatie over indoor hockey, 
            trainingsschema's, prijzen en benodigdheden, bekijk de{" "}
            <Link 
              to="/sporting/indoor-hockey" 
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Indoor Hockey informatiepagina
              <ExternalLink className="h-3 w-3" />
            </Link>
          </AlertDescription>
        </Alert>

        {/* Registration Link */}
        <Card>
          <CardHeader>
            <CardTitle>Inschrijvingsformulier</CardTitle>
            <CardDescription>
              Kies je categorie en vul je gegevens in om je in te schrijven voor indoor hockey
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Klik op de knop hieronder om naar ons inschrijvingsformulier te gaan. 
              Je wordt doorgestuurd naar een nieuwe pagina waar je je categorie kan kiezen 
              en je inschrijving kan voltooien.
            </p>
            <a
              href="https://dmon.odoo.com/shop/category/indoor-5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Open inschrijvingsformulier
              <ExternalLink className="h-5 w-5" />
            </a>
            <p className="text-sm text-muted-foreground">
              Het formulier opent in een nieuwe tab
            </p>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>
            Vragen over de inschrijving? Neem contact op via onze{" "}
            <Link to="/membership/contact" className="text-primary hover:underline">
              contactpagina
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndoorRegistration;
