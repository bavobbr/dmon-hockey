import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format, addDays, startOfDay } from "date-fns";
import { nl } from "date-fns/locale";
import { AlertCircle, CheckCircle, CalendarDays, Mail, Info } from "lucide-react";

interface FieldClosure {
  id: string;
  closure_date: string;
  start_time: string;
  end_time: string;
  reason: string;
  status: "closure" | "pending";
}

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

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

  const { data: lastUpdate } = useQuery({
    queryKey: ["field-closures-last-update"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("field_closures")
        .select("updated_at")
        .order("updated_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error) throw error;
      return data?.updated_at;
    },
  });

  const getDayStatus = (date: Date) => {
    const dateStr = format(date, "yyyy-MM-dd");
    return closures?.filter((c) => c.closure_date === dateStr) || [];
  };

  const days = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i));

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary-foreground/15 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20">
              Bespeelbaarheid
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Veld status
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Bekijk de aangekondigde sluitingen van ons veld voor de komende 7 dagen.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" variant="secondary" onClick={() => scrollToSection("overzicht")}>
                <CalendarDays className="h-4 w-4" />
                Bekijk overzicht
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                onClick={() => scrollToSection("info")}
              >
                <Info className="h-4 w-4" />
                Meer info
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky sub-nav */}
      <nav className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border/60">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-3">
            <button
              onClick={() => scrollToSection("overzicht")}
              className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-primary/5 hover:text-primary transition-colors whitespace-nowrap"
            >
              Overzicht 7 dagen
            </button>
            <button
              onClick={() => scrollToSection("info")}
              className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-primary/5 hover:text-primary transition-colors whitespace-nowrap"
            >
              Info & contact
            </button>
          </div>
        </div>
      </nav>

      {/* Overzicht */}
      <section id="overzicht" className="container mx-auto px-4 py-12 lg:py-16 scroll-mt-20">
        <div className="mb-8 flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              De komende 7 dagen
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Groen betekent bespeelbaar. Rood = sluiting bevestigd. Oranje = in afwachting.
            </p>
          </div>
          {lastUpdate && (
            <p className="text-xs text-muted-foreground">
              Laatste update:{" "}
              {format(new Date(lastUpdate), "EEEE d MMMM yyyy 'om' HH:mm", { locale: nl })}
            </p>
          )}
        </div>

        {isLoading ? (
          <p className="text-muted-foreground">Laden...</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {days.map((day) => {
              const dayClosures = getDayStatus(day);
              const isPlayable = dayClosures.length === 0;
              const hasClosure = dayClosures.some((c) => c.status === "closure");

              return (
                <Card key={day.toISOString()}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-lg">
                      <span className="capitalize">
                        {format(day, "EEEE d MMMM", { locale: nl })}
                      </span>
                      {isPlayable ? (
                        <CheckCircle className="h-5 w-5 text-primary" />
                      ) : hasClosure ? (
                        <AlertCircle className="h-5 w-5 text-destructive" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-orange-500" />
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {isPlayable ? (
                      <Badge
                        variant="outline"
                        className="bg-primary/5 text-primary border-primary/20"
                      >
                        Bespeelbaar
                      </Badge>
                    ) : (
                      <div className="space-y-2">
                        {dayClosures.map((closure) => (
                          <div
                            key={closure.id}
                            className={`border-l-4 pl-3 py-2 ${
                              closure.status === "closure"
                                ? "border-destructive"
                                : "border-orange-500"
                            }`}
                          >
                            <div className="font-medium text-sm">
                              {closure.start_time.substring(0, 5)} -{" "}
                              {closure.end_time.substring(0, 5)}
                            </div>
                            <Badge
                              variant={
                                closure.status === "closure" ? "destructive" : "outline"
                              }
                              className={
                                closure.status === "pending"
                                  ? "bg-orange-50 text-orange-700 border-orange-300"
                                  : ""
                              }
                            >
                              {closure.status === "closure"
                                ? closure.reason
                                : `In afwachting: ${closure.reason}`}
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
        )}
      </section>

      {/* Info CTA */}
      <section id="info" className="container mx-auto px-4 py-12 lg:py-16 scroll-mt-20">
        <Card className="bg-gradient-to-br from-primary to-primary-light text-primary-foreground border-0 overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-primary-foreground/15 flex items-center justify-center">
                  <Info className="h-6 w-6" />
                </div>
                <div className="h-12 w-12 rounded-full bg-primary-foreground/15 flex items-center justify-center">
                  <Mail className="h-6 w-6" />
                </div>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Twijfel over de bespeelbaarheid?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
                Stuur een rechtstreeks bericht naar de betreffende team manager, of neem contact
                op met ons via de contactpagina.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <a href="/lidmaatschap/contact">
                  <Mail className="h-4 w-4" />
                  Contacteer ons
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default FieldStatus;
