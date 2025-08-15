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
              Become a Referee
            </CardTitle>
            <CardDescription>
              Rules progression by age group and referee training opportunities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Learn about the rules for different age groups from U6 to adult levels, 
              and discover how to become a certified referee.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Rules;