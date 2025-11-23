import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shirt, ShoppingCart, ExternalLink } from "lucide-react";

const Shop = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Club Shop</h1>
        
        <div className="space-y-6">
          {/* Topsport Shop */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shirt className="h-5 w-5" />
                Topsport Kledijwinkel
              </CardTitle>
              <CardDescription>
                Bestel officiële clubkleding en uitrusting
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Bezoek onze officiële webshop bij Topsport om D-mon Hockey Club uniforms, 
                trainingskleding en accessoires te bestellen.
              </p>
              <Button size="lg" asChild>
                <a 
                  href="https://topsport-clubs.be/collections/d-mon-hockey" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Shirt className="h-5 w-5" />
                  Bezoek Topsport Kledijwinkel
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h3 className="font-medium mb-2">Wat kun je bestellen?</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Officiële wedstrijdshirts</li>
                  <li>• Trainingskleding</li>
                  <li>• Clubaccessoires</li>
                  <li>• Sportuitrusting</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Odoo Clubshop */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                Clubshop
              </CardTitle>
              <CardDescription>
                Lidmaatschappen, activiteiten en meer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                In onze clubshop vind je inschrijvingen voor activiteiten, lidmaatschappen en andere clubgerelateerde producten.
              </p>
              <Button size="lg" asChild>
                <a 
                  href="https://dmon.odoo.com/shop" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Bezoek Clubshop
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Shop;