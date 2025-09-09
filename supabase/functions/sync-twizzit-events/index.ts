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

const twizzitUsername = Deno.env.get("TWIZZIT_USERNAME");
const twizzitPassword = Deno.env.get("TWIZZIT_PASSWORD");
const twizzitOrgId = Deno.env.get("TWIZZIT_ORG_ID");

if (!twizzitUsername || !twizzitPassword || !twizzitOrgId) {
  console.error("Missing Twizzit environment variables");
}

const TWIZZIT_API_BASE = "https://api.twizzit.com";

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
    if (!twizzitUsername || !twizzitPassword || !twizzitOrgId) {
      throw new Error("Missing Twizzit configuration");
    }

    const authRes = await fetch(`${TWIZZIT_API_BASE}/authenticate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: twizzitUsername,
        password: twizzitPassword,
      }),
    });

    if (!authRes.ok) {
      throw new Error(`Authentication failed: ${authRes.status}`);
    }

    const { token } = (await authRes.json()) as { token: string };

    if (!token) {
      throw new Error("No authentication token returned");
    }

    const today = new Date();
    const startDate = today.toISOString().split("T")[0];
    const endDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0];

    const eventsRes = await fetch(
      `${TWIZZIT_API_BASE}/events?organization=${twizzitOrgId}&start=${startDate}&end=${endDate}`,
      { headers: { Authorization: `Bearer ${token}` } },
    );

    if (!eventsRes.ok) {
      throw new Error(`Failed to fetch events: ${eventsRes.status}`);
    }

    const eventsData = await eventsRes.json();
    const events: TwizzitEvent[] = Array.isArray(eventsData)
      ? eventsData
      : eventsData.events || [];

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
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: (error as Error).message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});

