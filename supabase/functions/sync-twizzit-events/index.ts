import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

interface TwizzitEventGroup {
  id: number;
  groupId: number;
  groupName: string;
  groupShortName: string;
  isHomeTeam: boolean;
  eventId: number;
}

interface TwizzitEvent {
  id: number;
  name: string;
  start?: string;
  end?: string;
  "meeting-time"?: string;
  description?: string | null;
  address?: string | null;
  score?: string | null;
  "score-details"?: string | null;
  series?: string | null;
  "event-groups"?: TwizzitEventGroup[] | null;
  "event-contacts"?: unknown | null;
  "event-resources"?: unknown | null;
}

interface EventRow {
  twizzit_id: number;
  name: string;
  start_at: string | null;
  end_at: string | null;
  meeting_time: string | null;
  description: string | null;
  address: string | null;
  score: string | null;
  score_details: string | null;
  series: string | null;
  home_team_name: string | null;
  away_team_name: string | null;
  is_home_game: boolean | null;
  groups: unknown | null;
  contacts: unknown | null;
  resources: unknown | null;
  raw: TwizzitEvent;
  updated_at: string;
}

const log = (msg: string, obj?: Record<string, unknown>): void =>
  console.log(
    JSON.stringify({
      level: "info",
      msg,
      ...(obj ? { data: obj } : {}),
    })
  );

const err = (msg: string, e?: unknown): void =>
  console.error(
    JSON.stringify({
      level: "error",
      msg,
      error:
        e instanceof Error
          ? { message: e.message, stack: e.stack }
          : e,
    })
  );

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

if (!supabaseUrl || !supabaseKey) {
  console.error(
    "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables"
  );
}

const supabase = createClient(supabaseUrl ?? "", supabaseKey ?? "");

const twizzitUsername = Deno.env.get("TWIZZIT_USERNAME");
const twizzitPassword = Deno.env.get("TWIZZIT_PASSWORD");
const twizzitOrgId = Deno.env.get("TWIZZIT_ORG_ID");

if (!twizzitUsername || !twizzitPassword || !twizzitOrgId) {
  console.error("Missing Twizzit environment variables");
}

const TWIZZIT_API_BASE = "https://app.twizzit.com/v2/api";

// Helper function to extract team info from event name and groups
const extractTeamInfo = (
  eventName: string,
  groups: TwizzitEventGroup[] | null | undefined
) => {
  // Default return value
  const result = {
    homeTeamName: null as string | null,
    awayTeamName: null as string | null,
    isHomeGame: null as boolean | null,
  };

  // Check if we have event-groups to determine home/away status
  if (groups && Array.isArray(groups) && groups.length > 0) {
    const ourTeam = groups[0]; // First group is our team
    result.isHomeGame = ourTeam.isHomeTeam ?? null;
  }

  // Parse team names from event name (format: "Home Team - Away Team")
  // In Twizzit, home team is ALWAYS first, away team is ALWAYS second
  const dashIndex = eventName.indexOf(" - ");
  if (dashIndex > 0) {
    const team1 = eventName.substring(0, dashIndex).trim();
    const team2 = eventName.substring(dashIndex + 3).trim();

    // Team1 is always home, Team2 is always away (Twizzit convention)
    result.homeTeamName = team1;
    result.awayTeamName = team2;
  }

  return result;
};

serve(async (req) => {
  const rid = crypto.randomUUID();
  const t0 = performance.now();

  log("invoke.start", {
    rid,
    method: req.method,
    url: new URL(req.url).pathname,
    env_check: {
      has_SUPABASE_URL: !!supabaseUrl,
      has_SUPABASE_SERVICE_ROLE_KEY: !!supabaseKey,
      has_TWIZZIT_USERNAME: !!twizzitUsername,
      has_TWIZZIT_PASSWORD: !!twizzitPassword,
      has_TWIZZIT_ORG_ID: !!twizzitOrgId,
    },
  });

  if (req.method === "OPTIONS") {
    log("invoke.cors_preflight", { rid });
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    if (!twizzitUsername || !twizzitPassword || !twizzitOrgId) {
      throw new Error("Missing Twizzit configuration");
    }

    // AUTHENTICATE
    const authUrl = `${TWIZZIT_API_BASE}/authenticate`;
    log("auth.request", { rid, url: authUrl });

    const authRes = await fetch(authUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: twizzitUsername,
        password: twizzitPassword,
      }),
    });

    log("auth.response", {
      rid,
      status: authRes.status,
      ok: authRes.ok,
      headers: {
        "x-ratelimit-remaining": authRes.headers.get("x-ratelimit-remaining"),
        "x-ratelimit-limit": authRes.headers.get("x-ratelimit-limit"),
      },
    });

    if (!authRes.ok) {
      const bodyPreview = await authRes.text().catch(() => "<unreadable>");
      err("auth.failed", {
        rid,
        status: authRes.status,
        bodyPreview: bodyPreview?.slice(0, 500),
      });
      throw new Error(`Authentication failed: ${authRes.status}`);
    }

    const { token } = await authRes.json();
    log("auth.token_parsed", { rid, hasToken: !!token });

    if (!token) {
      throw new Error("No authentication token returned");
    }

    // DATES - Fetch from 1 week ago to 4 weeks ahead
    const today = new Date();
    const startDate = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0];
    const endDate = new Date(today.getTime() + 28 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0];

    log("events.date_window", { rid, startDate, endDate });

    // FETCH EVENTS (with event-groups included)
    // Include all relevant event types:
    // Type 1 = Events (meetings, club events)
    // Type 3 = Trainings (training, stage, keeper training)
    // Type 4 = Games (matches, friendly games)
    // Type 5 = Work shifts (wintercriterium, volunteer shifts)
    const eventsUrl =
      `${TWIZZIT_API_BASE}/events?` +
      `organization-ids[]=${twizzitOrgId}` +
      `&start-date=${startDate}&end-date=${endDate}` +
      `&event-types[]=1&event-types[]=3&event-types[]=4&event-types[]=5` +
      `&limit=100` +
      `&includes[]=event-groups`;

    log("events.request", { rid, url: eventsUrl });

    const eventsRes = await fetch(eventsUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });

    log("events.response", {
      rid,
      status: eventsRes.status,
      ok: eventsRes.ok,
      headers: {
        "x-ratelimit-remaining": eventsRes.headers.get("x-ratelimit-remaining"),
        "x-ratelimit-limit": eventsRes.headers.get("x-ratelimit-limit"),
      },
    });

    if (!eventsRes.ok) {
      const bodyPreview = await eventsRes.text().catch(() => "<unreadable>");
      err("events.failed", {
        rid,
        status: eventsRes.status,
        bodyPreview: bodyPreview?.slice(0, 1000),
      });
      throw new Error(`Failed to fetch events: ${eventsRes.status}`);
    }

    const eventsData = await eventsRes.json();
    const events: TwizzitEvent[] = Array.isArray(eventsData)
      ? eventsData
      : eventsData.events || [];

    log("events.parsed", {
      rid,
      count: events.length,
      sample_ids: events.slice(0, 5).map((e) => e?.id ?? null),
    });

    // MAP ROWS
    const now = new Date().toISOString();
    const rows: EventRow[] = events
      .filter((event) => event.name && event.name.trim() !== "")
      .map((event) => {
        const teamInfo = extractTeamInfo(event.name, event["event-groups"]);

        return {
          twizzit_id: event.id,
          name: event.name,
          start_at: event.start ? new Date(event.start).toISOString() : null,
          end_at: event.end ? new Date(event.end).toISOString() : null,
          meeting_time: event["meeting-time"]
            ? new Date(`1970-01-01T${event["meeting-time"]}Z`)
                .toISOString()
                .slice(11, 19)
            : null,
          description: event.description ?? null,
          address: event.address ?? null,
          score: event.score ?? null,
          score_details: event["score-details"] ?? null,
          series: event.series ?? null,
          home_team_name: teamInfo.homeTeamName,
          away_team_name: teamInfo.awayTeamName,
          is_home_game: teamInfo.isHomeGame,
          groups: event["event-groups"] ?? null,
          contacts: event["event-contacts"] ?? null,
          resources: event["event-resources"] ?? null,
          raw: event,
          updated_at: now,
        };
      });

    // Quick data-quality counters
    const dq = {
      null_start_at: rows.filter((r) => r.start_at === null).length,
      null_end_at: rows.filter((r) => r.end_at === null).length,
      null_meeting_time: rows.filter((r) => r.meeting_time === null).length,
    };

    log("rows.mapped", { rid, count: rows.length, dq });

    // UPSERT
    log("db.upsert.begin", {
      rid,
      table: "twizzit_events",
      onConflict: "twizzit_id",
      count: rows.length,
    });

    const { error } = await supabase
      .from("twizzit_events")
      .upsert(rows, { onConflict: "twizzit_id" });

    if (error) {
      err("db.upsert.error", {
        rid,
        code: error.code,
        message: error.message,
        details: error.details,
      });
      throw error;
    }

    log("db.upsert.success", { rid, count: rows.length });

    const t1 = performance.now();
    log("invoke.success", { rid, ms: Math.round(t1 - t0) });

    return new Response(
      JSON.stringify({ success: true, count: rows.length }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    err("invoke.error", {
      rid,
      error: error instanceof Error ? error.message : String(error),
    });
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : String(error),
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } finally {
    const t2 = performance.now();
    log("invoke.end", { rid, ms: Math.round(t2 - t0) });
  }
});
