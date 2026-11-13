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
    <section aria-labelledby="home-field-status-title" className="border-b border-border bg-muted/40 px-4 py-7 md:px-6 md:py-10">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <ThermometerSnowflake className="h-7 w-7 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <h2 id="home-field-status-title" className="font-display text-2xl font-bold text-primary">Terreinstatus</h2>
              <p className="text-sm text-muted-foreground">Vorst op komst? Check het veld voor je vertrekt.</p>
            </div>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link to="/club/veld-status">Volledig overzicht <ArrowRight aria-hidden="true" /></Link>
          </Button>
        </div>
        {isError ? (
          <div role="alert" className="flex flex-wrap items-center gap-3 text-sm text-destructive">
            <AlertCircle className="h-5 w-5" />
            <p>De terreinstatus kon niet geladen worden. Neem bij twijfel contact op met je team manager.</p>
            <Button variant="outline" size="sm" onClick={() => refetch()}>Opnieuw proberen</Button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4" aria-busy={isPending}>
            {days.map((day, index) => {
              const { status, items } = getFieldDayStatus(data ?? [], day.key);
              const Icon = status === "closure" ? AlertCircle : status === "pending" ? Clock : CheckCircle;
              const tone = status === "closure" ? "text-destructive border-destructive/30 bg-destructive/5"
                : status === "pending" ? "text-warning border-warning/30 bg-warning/5"
                : "text-primary border-border bg-background";
              return (
                <article key={day.key} className={`min-w-0 rounded-lg border p-3 md:p-4 ${isPending ? "border-border bg-background" : tone}`}>
                  <p className="font-display text-sm font-bold capitalize text-foreground">{index === 0 ? "Vandaag" : index === 1 ? "Morgen" : format(day.date, "EEEE", { locale: nl })}</p>
                  <p className="mb-3 text-xs text-muted-foreground">{format(day.date, "d MMMM", { locale: nl })}</p>
                  {isPending ? <p className="text-sm text-muted-foreground">Status laden…</p> : <>
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>{status === "closure" ? "Sluiting" : status === "pending" ? "In beraad" : "Bespeelbaar"}</span>
                    </div>
                    {items.map((item) => <p key={item.id} className="mt-2 break-words text-xs leading-relaxed text-foreground">
                      <span className="font-semibold">{item.start_time.slice(0, 5)} – {item.end_time.slice(0, 5)}</span><br />
                      {item.status === "pending" ? "In beraad: " : ""}{item.reason}
                    </p>)}
                  </>}
                </article>
              );
            })}
          </div>
        )}
        <p className="mt-3 text-xs text-muted-foreground">Aangekondigde sluitingen door de club, geen weersvoorspelling. Bij twijfel: spreek je team manager aan.</p>
      </div>
    </section>
  );
}