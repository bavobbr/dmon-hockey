import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Bus, Car, Bike } from "lucide-react";

const HockeyField = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Hockey Field & Mobility</h1>
        
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Field Location
              </CardTitle>
              <CardDescription>Find our hockey field and get directions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    [Hockey Field Address]<br />
                    [City, Postal Code]<br />
                    Belgium
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-4 h-64 flex items-center justify-center">
                  <p className="text-muted-foreground">Interactive map will be integrated here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bus className="h-5 w-5" />
                Sustainable Transport
              </CardTitle>
              <CardDescription>Eco-friendly ways to reach our field</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <Bus className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Public Transport</h4>
                    <p className="text-sm text-muted-foreground">Bus lines [X, Y] stop nearby</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Bike className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Cycling</h4>
                    <p className="text-sm text-muted-foreground">Bike racks available on-site</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Car className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Carpooling</h4>
                    <p className="text-sm text-muted-foreground">Share rides with teammates</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Field Usage Rules</CardTitle>
              <CardDescription>Guidelines for using our hockey field</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm">Field is available for training during scheduled club hours</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm">Proper hockey shoes required - no outdoor shoes on the field</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm">Clean up after use - return equipment to designated areas</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm">Report any maintenance issues to field management</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HockeyField;