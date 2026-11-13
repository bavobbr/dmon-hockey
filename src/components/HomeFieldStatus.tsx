import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { AlertCircle, ArrowRight, CheckCircle, Clock, ThermometerSnowflake } from "lucide-react";
import { format } from "date-fns";
import { nl } from "date-fns/locale";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { getFieldDays, getFieldDayStatus } from "@/lib/fieldStatus";

export default function HomeFieldStatus() {
  const days = getFieldDays(new Date(), 4);
  const firstDay = days[0];
  const lastDay = days[days.length - 1];
  const { data, isPending, isError, refetch } = useQuery({
    queryKey: ["home-field-closures", firstDay?.key],
    queryFn: async () => {
      if (!firstDay || !lastDay) throw new Error("Geen datumbereik beschikbaar");
      const { data, error } = await supabase.from("field_closures")
        .select("id, closure_date, start_time, end_time, reason, status")
        .gte("closure_date", firstDay.key)
        .lte("closure_date", lastDay.key)
        .order("closure_date").order("start_time");
      if (error) throw error;
      return data;
    },
    staleTime: 30_000,
    refetchInterval: 60_000,
  });

  return (
    <section aria-labelledby="home-field-status-title" className="border-b border-border bg-muted/40 px-4 py-3 md:px-6 md:py-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-2 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ThermometerSnowflake className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <h2 id="home-field-status-title" className="font-display text-base font-bold text-primary md:text-lg">Terreinstatus</h2>
          </div>
          <Button asChild variant="link" size="sm" className="h-8 px-0 text-xs">
            <Link to="/club/veld-status">Alle dagen <ArrowRight aria-hidden="true" /></Link>
          </Button>
        </div>
        {isError ? (
          <div role="alert" className="flex flex-wrap items-center gap-3 text-sm text-destructive">
            <AlertCircle className="h-5 w-5" />
            <p>De terreinstatus kon niet geladen worden. Neem bij twijfel contact op met je team manager.</p>
            <Button variant="outline" size="sm" onClick={() => refetch()}>Opnieuw proberen</Button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4" aria-busy={isPending}>
            {days.map((day, index) => {
              const { status, items } = getFieldDayStatus(data ?? [], day.key);
              const Icon = status === "closure" ? AlertCircle : status === "pending" ? Clock : CheckCircle;
              const tone = status === "closure" ? "text-destructive border-destructive/30 bg-destructive/5"
                : status === "pending" ? "text-warning border-warning/30 bg-warning/5"
                : "text-primary border-border bg-background";
              return (
                <article key={day.key} className={`min-w-0 rounded-md border px-2.5 py-2 ${isPending ? "border-border bg-background" : tone}`}>
                  <div className="mb-1 flex flex-wrap items-baseline gap-x-2">
                    <p className="font-display text-xs font-bold capitalize text-foreground">{index === 0 ? "Vandaag" : index === 1 ? "Morgen" : format(day.date, "EEEE", { locale: nl })}</p>
                    <p className="text-xs text-muted-foreground">{format(day.date, "d/M", { locale: nl })}</p>
                  </div>
                  {isPending ? <p className="text-xs text-muted-foreground">Status laden…</p> : <>
                    <div className="flex items-center gap-1.5 text-xs font-semibold">
                      <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>{status === "closure" ? "Sluiting" : status === "pending" ? "In beraad" : "Bespeelbaar"}</span>
                    </div>
                    {items.map((item) => <p key={item.id} className="mt-1 break-words text-xs leading-snug text-foreground">
                      <span className="font-semibold">{item.start_time.slice(0, 5)}–{item.end_time.slice(0, 5)}</span>{" · "}{item.reason}
                    </p>)}
                  </>}
                </article>
              );
            })}
          </div>
        )}
        <p className="mt-2 text-xs text-muted-foreground">Bij twijfel: spreek je team manager aan.</p>
      </div>
    </section>
  );
}