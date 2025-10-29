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

        {/* Embedded Shop */}
        <Card>
          <CardHeader>
            <CardTitle>Inschrijvingsformulier</CardTitle>
            <CardDescription>
              Kies hieronder je categorie en vul je gegevens in om je in te schrijven voor indoor hockey
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="w-full" style={{ height: "800px" }}>
              <iframe
                src="https://dmon.odoo.com/shop/category/indoor-5"
                className="w-full h-full border-0"
                title="Indoor Hockey Registratie"
                loading="lazy"
              />
            </div>
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
