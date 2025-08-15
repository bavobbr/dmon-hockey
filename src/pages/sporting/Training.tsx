import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

const Training = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Training Schedules</h1>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Season Training Schedule
            </CardTitle>
            <CardDescription>
              Training frequency and match day information for each group
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Training schedules vary by age group and skill level. All sessions are held at our main facility.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Training;