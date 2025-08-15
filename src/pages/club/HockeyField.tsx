import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Bus, Car, Bike, AlertTriangle, FileText } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import mobilityMap from "@/assets/mobility-map.png";

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
              <CardDescription>Find our hockey field in Grembergen</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    Oud Kerkhofstraat 20<br />
                    Grembergen<br />
                    Belgium
                  </p>
                </div>
                
                <Alert className="border-amber-200 bg-amber-50 dark:bg-amber-950/20">
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                  <AlertDescription className="text-amber-800 dark:text-amber-200">
                    <strong>Construction Notice:</strong> The intersection of Mechelsesteenweg/Martelarenlaan (Scheldebrug)/Noordlaan/Leopoldlaan is under construction, affecting accessibility for pedestrians, cyclists and motorized traffic.{" "}
                    <a 
                      href="https://www.dendermonde.be/werkenmechelsepoort" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                    >
                      Check the city website for the latest information
                    </a> and allow extra travel time.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="h-5 w-5" />
                Parking & Mobility
              </CardTitle>
              <CardDescription>Important information about getting to our field</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Parking spaces are limited. To maintain peace and quiet in the area, we encourage using sustainable transport alternatives like cycling. If you come by car, please try to carpool and use the designated parking locations shown in the map below.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-medium">Parking Map & Guidelines</h4>
                  <div className="border rounded-lg overflow-hidden">
                    <img 
                      src={mobilityMap} 
                      alt="Mobility and parking map for D-mon Hockey Club" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href="https://dmon.be/wp-content/uploads/2022/11/Mobiliteit-1.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <FileText className="h-4 w-4" />
                        Download Parking Map PDF
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bus className="h-5 w-5" />
                Sustainable Transport Options
              </CardTitle>
              <CardDescription>Eco-friendly ways to reach our field</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <Bike className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Cycling (Preferred)</h4>
                    <p className="text-sm text-muted-foreground">Bike racks available on-site. Help us maintain a peaceful environment.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Car className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Carpooling</h4>
                    <p className="text-sm text-muted-foreground">Share rides with teammates to reduce parking pressure.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Bus className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Public Transport</h4>
                    <p className="text-sm text-muted-foreground">Contact us for the best public transport routes.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Field Usage Agreements</CardTitle>
              <CardDescription>Guidelines for using our hockey field responsibly</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  We want to enjoy our new field together with all our players for a long time. We're confident this will work if everyone respects these agreements:
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm">Respect the field surface - proper hockey shoes required</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm">Keep the field clean - clean up after use and return equipment properly</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm">Follow scheduled usage times and respect other users</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm">Report any maintenance issues to field management immediately</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href="https://dmon.be/wp-content/uploads/2024/01/Afspraken-hockeyterrein-uitgebreid-A4-document.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <FileText className="h-4 w-4" />
                      Download Complete Field Agreements (PDF)
                    </a>
                  </Button>
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