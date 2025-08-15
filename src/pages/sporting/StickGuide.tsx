import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Ruler } from "lucide-react";
const StickGuide = () => {
  return <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Choosing the Right Stick</h1>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Stick Selection Guide
            </CardTitle>
            <CardDescription>
              Advice on stick size, material, curvature, and age-specific recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-inherit text-base">Picking the right hockey stick is crucial for performance and enjoyment. Learn about different sizes, materials, and features to find the perfect stick for your needs.</p>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default StickGuide;