import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Heart, Users, AlertTriangle, Mail } from "lucide-react";

const ClubValues = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Club Values</h1>
        
        <div className="grid gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                Respect
              </CardTitle>
              <CardDescription>The foundation of our club community</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We treat all players, coaches, officials, and supporters with respect regardless of age, 
                skill level, background, or experience. Respect creates an environment where everyone 
                can enjoy hockey and develop their potential.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-500" />
                Fair Play
              </CardTitle>
              <CardDescription>Playing by the rules, in spirit and letter</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Fair play means more than following the rules. It's about playing with integrity, 
                accepting decisions gracefully, and celebrating success with humility. We compete 
                hard but always with sportsmanship and honor.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-500" />
                Inclusivity
              </CardTitle>
              <CardDescription>Hockey for everyone</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our club welcomes players of all backgrounds, abilities, and experience levels. 
                We believe diversity strengthens our community and makes hockey more enjoyable 
                for everyone involved.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-orange-200 bg-orange-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-700">
              <AlertTriangle className="h-5 w-5" />
              Integrity Contact Point
            </CardTitle>
            <CardDescription className="text-orange-600">
              Report misconduct or inappropriate behavior
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-orange-700">
                If you witness or experience behavior that goes against our club values, 
                please don't hesitate to report it. All reports are handled confidentially 
                and with care.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-100">
                  <Mail className="h-4 w-4 mr-2" />
                  integrity@dmonhockey.be
                </Button>
                <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-100">
                  Anonymous Report Form
                </Button>
              </div>
              
              <p className="text-sm text-orange-600">
                You can also speak to any board member or coach you trust. 
                We're committed to maintaining a safe and respectful environment for all.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClubValues;