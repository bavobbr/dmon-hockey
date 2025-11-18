import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format, addDays, startOfDay } from "date-fns";
import { nl } from "date-fns/locale";
import { AlertCircle, CheckCircle } from "lucide-react";

interface FieldClosure {
  id: string;
  closure_date: string;
  start_time: string;
  end_time: string;
  reason: string;
}

const FieldStatus = () => {
  const { data: closures, isLoading } = useQuery({
    queryKey: ["field-closures"],
    queryFn: async () => {
      const today = startOfDay(new Date());
      const endDate = addDays(today, 6);
      
      const { data, error } = await supabase
        .from("field_closures")
        .select("*")
        .gte("closure_date", format(today, "yyyy-MM-dd"))
        .lte("closure_date", format(endDate, "yyyy-MM-dd"))
        .order("closure_date", { ascending: true })
        .order("start_time", { ascending: true });

      if (error) throw error;
      return data as FieldClosure[];
    },
  });

  const getDayStatus = (date: Date) => {
    const dateStr = format(date, "yyyy-MM-dd");
    return closures?.filter((c) => c.closure_date === dateStr) || [];
  };

  const days = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i));

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Terrein Status</h1>
        <p className="text-muted-foreground">Laden...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Terrein Status</h1>
      <p className="text-muted-foreground mb-6">Bespeelbaarheid van het veld</p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {days.map((day) => {
          const dayClosures = getDayStatus(day);
          const isPlayable = dayClosures.length === 0;

          return (
            <Card key={day.toISOString()}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{format(day, "EEEE d MMMM", { locale: nl })}</span>
                  {isPlayable ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-destructive" />
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isPlayable ? (
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Bespeelbaar
                  </Badge>
                ) : (
                  <div className="space-y-2">
                    {dayClosures.map((closure) => (
                      <div key={closure.id} className="border-l-4 border-destructive pl-3 py-2">
                        <div className="font-medium text-sm">
                          {closure.start_time.substring(0, 5)} - {closure.end_time.substring(0, 5)}
                        </div>
                        <Badge variant="destructive" className="mt-1">
                          {closure.reason}
                        </Badge>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default FieldStatus;
