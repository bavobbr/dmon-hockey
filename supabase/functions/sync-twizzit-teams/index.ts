/* eslint-env deno */ import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const log = (msg, obj) => console.log(JSON.stringify({
  level: "info",
  msg,
  ...obj ? { data: obj } : {}
}));

const err = (msg, e) => console.error(JSON.stringify({
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
      has_TWIZZIT_ORG_ID: !!twizzitOrgId
    }
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
      headers: {
        "x-ratelimit-remaining": authRes.headers.get("x-ratelimit-remaining"),
        "x-ratelimit-limit": authRes.headers.get("x-ratelimit-limit")
      }
    });

    if (!authRes.ok) {
      const bodyPreview = await authRes.text().catch(() => "<unreadable>");
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

    // FETCH TEAMS - Add pagination parameters to ensure we get all teams
    const teamsUrl = `${TWIZZIT_API_BASE}/groups?organization-ids[]=${twizzitOrgId}&season-id=51270&group-type=1&limit=100&page=1`;
    log("teams.request", {
      rid,
      url: teamsUrl
    });

    const teamsRes = await fetch(teamsUrl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    log("teams.response", {
      rid,
      status: teamsRes.status,
      ok: teamsRes.ok,
      headers: {
        "x-ratelimit-remaining": teamsRes.headers.get("x-ratelimit-remaining"),
        "x-ratelimit-limit": teamsRes.headers.get("x-ratelimit-limit")
      }
    });

    if (!teamsRes.ok) {
      const bodyPreview = await teamsRes.text().catch(() => "<unreadable>");
      err("teams.failed", {
        rid,
        status: teamsRes.status,
        bodyPreview: bodyPreview?.slice(0, 1000)
      });
      throw new Error(`Failed to fetch teams: ${teamsRes.status}`);
    }

    const teamsData = await teamsRes.json();
    const teams = Array.isArray(teamsData) ? teamsData : teamsData.teams || [];
    
    log("teams.parsed", {
      rid,
      count: teams.length,
      sample_ids: teams.slice(0, 5).map((t) => t?.id ?? null)
    });

    // Helper function to extract age group from team name
    const extractAgeGroup = (teamName) => {
      const ageGroupMatch = teamName.match(/U(\d+)/i);
      return ageGroupMatch ? `U${ageGroupMatch[1]}` : null;
    };

    // MAP ROWS
    const now = new Date().toISOString();
    const rows = teams.map((team) => ({
      twizzit_id: team.id,
      name: team.name,
      description: team['short-name'] ? `Short name: ${team['short-name']}` : null,
      age_group: extractAgeGroup(team.name),
      season: team.season?.name || null,
      image_url: team.image,
      active: true,
      raw: team,
      updated_at: now
    }));

    log("rows.mapped", {
      rid,
      count: rows.length,
      sample_names: rows.slice(0, 5).map((r) => r.name)
    });

    // UPSERT
    log("db.upsert.begin", {
      rid,
      table: "teams",
      onConflict: "twizzit_id",
      count: rows.length
    });

    const { error } = await supabase
      .from("teams")
      .upsert(rows, {
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
      count: rows.length,
      message: `Successfully synced ${rows.length} teams`
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
  } finally {
    const t2 = performance.now();
    log("invoke.end", {
      rid,
      ms: Math.round(t2 - t0)
    });
  }
});