import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Timer, Award } from "lucide-react";

const Rules = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Rules & Refereeing</h1>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Timer className="h-5 w-5" />
              In aanmaak
            </CardTitle>
            <CardDescription>
              deze sectie is in verwerking
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              TBD
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Rules;