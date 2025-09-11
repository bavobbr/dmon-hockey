/* eslint-env deno */ import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
const log = (msg, obj)=>console.log(JSON.stringify({
    level: "info",
    msg,
    ...obj ? {
      data: obj
    } : {}
  }));
const err = (msg, e)=>console.error(JSON.stringify({
    level: "error",
    msg,
    error: e instanceof Error ? {
      message: e.message,
      stack: e.stack
    } : e
  }));
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"
};
const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
if (!supabaseUrl || !supabaseKey) {
  console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables");
}
const supabase = createClient(supabaseUrl, supabaseKey);
const twizzitUsername = Deno.env.get("TWIZZIT_USERNAME");
const twizzitPassword = Deno.env.get("TWIZZIT_PASSWORD");
const twizzitOrgId = Deno.env.get("TWIZZIT_ORG_ID");
if (!twizzitUsername || !twizzitPassword || !twizzitOrgId) {
  console.error("Missing Twizzit environment variables");
}
const TWIZZIT_API_BASE = "https://app.twizzit.com/v2/api";
serve(async (req)=>{
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
      has_TWIZZIT_ORG_ID: !!twizzitOrgId
    }
  });
  if (req.method === "OPTIONS") {
    log("invoke.cors_preflight", {
      rid
    });
    return new Response("ok", {
      headers: corsHeaders
    });
  }
  try {
    if (!twizzitUsername || !twizzitPassword || !twizzitOrgId) {
      throw new Error("Missing Twizzit configuration");
    }
    // AUTHENTICATE
    const authUrl = `${TWIZZIT_API_BASE}/authenticate`;
    log("auth.request", {
      rid,
      url: authUrl
    });
    const authRes = await fetch(authUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: twizzitUsername,
        password: twizzitPassword
      })
    });
    log("auth.response", {
      rid,
      status: authRes.status,
      ok: authRes.ok,
      // helpful debugging: show notable headers if present
      headers: {
        "x-ratelimit-remaining": authRes.headers.get("x-ratelimit-remaining"),
        "x-ratelimit-limit": authRes.headers.get("x-ratelimit-limit")
      }
    });
    if (!authRes.ok) {
      const bodyPreview = await authRes.text().catch(()=>"<unreadable>");
      err("auth.failed", {
        rid,
        status: authRes.status,
        bodyPreview: bodyPreview?.slice(0, 500)
      });
      throw new Error(`Authentication failed: ${authRes.status}`);
    }
    const { token } = await authRes.json();
    log("auth.token_parsed", {
      rid,
      hasToken: !!token
    });
    if (!token) {
      throw new Error("No authentication token returned");
    }
    // DATES
    const today = new Date();
    const startDate = today.toISOString().split("T")[0];
    const endDate = new Date(today.getTime() + 28 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];
    log("events.date_window", {
      rid,
      startDate,
      endDate
    });
    // FETCH EVENTS
    // safest if API expects a single JSON array param
    const ids = [
      Number(twizzitOrgId)
    ];
    const eventsUrl = `${TWIZZIT_API_BASE}/events?` + `organization-ids[]=${twizzitOrgId}` + `&start-date=${startDate}&end-date=${endDate}`;
    log("events.request", {
      rid,
      url: eventsUrl
    });
    const eventsRes = await fetch(eventsUrl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    log("events.response", {
      rid,
      status: eventsRes.status,
      ok: eventsRes.ok,
      headers: {
        "x-ratelimit-remaining": eventsRes.headers.get("x-ratelimit-remaining"),
        "x-ratelimit-limit": eventsRes.headers.get("x-ratelimit-limit")
      }
    });
    if (!eventsRes.ok) {
      const bodyPreview = await eventsRes.text().catch(()=>"<unreadable>");
      err("events.failed", {
        rid,
        status: eventsRes.status,
        bodyPreview: bodyPreview?.slice(0, 1000)
      });
      throw new Error(`Failed to fetch events: ${eventsRes.status}`);
    }
    const eventsData = await eventsRes.json();
    const events = Array.isArray(eventsData) ? eventsData : eventsData.events || [];
    log("events.parsed", {
      rid,
      count: events.length,
      sample_ids: events.slice(0, 5).map((e)=>e?.id ?? null)
    });
    // MAP ROWS
    const now = new Date().toISOString();
    const rows = events.map((event)=>({
        twizzit_id: event.id,
        name: event.name,
        start_at: event.start ? new Date(event.start).toISOString() : null,
        end_at: event.end ? new Date(event.end).toISOString() : null,
        meeting_time: event["meeting-time"] ? new Date(`1970-01-01T${event["meeting-time"]}Z`).toISOString().slice(11, 19) : null,
        description: event.description ?? null,
        address: event.address ?? null,
        score: event.score ?? null,
        score_details: event["score-details"] ?? null,
        series: event.series ?? null,
        groups: event["event-groups"] ?? null,
        contacts: event["event-contacts"] ?? null,
        resources: event["event-resources"] ?? null,
        raw: event,
        updated_at: now
      }));
    // quick data-quality counters
    const dq = {
      null_start_at: rows.filter((r)=>r.start_at === null).length,
      null_end_at: rows.filter((r)=>r.end_at === null).length,
      null_meeting_time: rows.filter((r)=>r.meeting_time === null).length
    };
    log("rows.mapped", {
      rid,
      count: rows.length,
      dq
    });
    // UPSERT
    log("db.upsert.begin", {
      rid,
      table: "twizzit_events",
      onConflict: "twizzit_id",
      count: rows.length
    });
    const { error } = await supabase.from("twizzit_events").upsert(rows, {
      onConflict: "twizzit_id"
    });
    if (error) {
      err("db.upsert.error", {
        rid,
        code: error.code,
        message: error.message,
        details: error.details
      });
      throw error;
    }
    log("db.upsert.success", {
      rid,
      count: rows.length
    });
    const t1 = performance.now();
    log("invoke.success", {
      rid,
      ms: Math.round(t1 - t0)
    });
    return new Response(JSON.stringify({
      success: true,
      count: rows.length
    }), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    err("invoke.error", {
      rid,
      error: error instanceof Error ? error.message : String(error)
    });
    return new Response(JSON.stringify({
      error: error.message
    }), {
      status: 500,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json"
      }
    });
  } finally{
    const t2 = performance.now();
    log("invoke.end", {
      rid,
      ms: Math.round(t2 - t0)
    });
  }
});
