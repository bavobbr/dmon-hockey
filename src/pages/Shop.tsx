import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, ExternalLink } from "lucide-react";

const Shop = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Club Shop</h1>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              External Shop for Uniforms & Clothing
            </CardTitle>
            <CardDescription>
              Purchase official club gear and equipment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Visit our external shop to browse and purchase official D-mon Hockey Club uniforms, 
              training gear, and accessories.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Club Shop
              <ExternalLink className="h-4 w-4" />
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Shop;