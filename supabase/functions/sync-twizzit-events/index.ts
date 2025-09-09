/* eslint-env deno */
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables");
}

const supabase = createClient(supabaseUrl!, supabaseKey!);

interface TwizzitEvent {
  id: number;
  name: string;
  start?: string;
  end?: string;
  "meeting-time"?: string;
  description?: string;
  address?: string;
  score?: string;
  "score-details"?: string;
  series?: number;
  "event-groups"?: unknown;
  "event-contacts"?: unknown;
  "event-resources"?: unknown;
  [key: string]: unknown;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const events: TwizzitEvent[] = body.events || [];
    const now = new Date().toISOString();

    const rows = events.map((event) => ({
      twizzit_id: event.id,
      name: event.name,
      start_at: event.start ? new Date(event.start).toISOString() : null,
      end_at: event.end ? new Date(event.end).toISOString() : null,
      meeting_time: event["meeting-time"]
        ? new Date(`1970-01-01T${event["meeting-time"]}Z`).toISOString().slice(11, 19)
        : null,
      description: event.description ?? null,
      address: event.address ?? null,
      score: event.score ?? null,
      score_details: event["score-details"] ?? null,
      series: event.series ?? null,
      groups: event["event-groups"] ?? null,
      contacts: event["event-contacts"] ?? null,
      resources: event["event-resources"] ?? null,
      raw: event,
      updated_at: now,
    }));

    const { error } = await supabase
      .from("twizzit_events")
      .upsert(rows, { onConflict: "twizzit_id" });

    if (error) {
      throw error;
    }

    return new Response(
      JSON.stringify({ success: true, count: rows.length }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: (error as Error).message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

