import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Trophy } from "lucide-react";

const HowToPlay = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">How to Play Hockey</h1>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Introduction to Field Hockey
            </CardTitle>
            <CardDescription>
              Learn the basics of this exciting sport
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Field hockey is a team sport where players use sticks to move a ball and score goals. 
              Discover the rules, positions, equipment, and why it's such an amazing sport to play!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HowToPlay;