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
const TRAINER_FUNCTION_ID = 242098;
const COACH_FUNCTION_ID = 242093;

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
    const requestUrl = new URL(req.url);
    const limitParam = requestUrl.searchParams.get("limit");
    const limit = limitParam === null || limitParam === "" ? undefined : Number.parseInt(limitParam, 10);
    if (limit !== undefined && (Number.isNaN(limit) || limit < 0)) {
      return new Response(JSON.stringify({
        success: false,
        error: "Invalid limit parameter"
      }), {
        status: 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json"
        }
      });
    }

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
    // FETCH TEAMS - Add pagination parameters to ensure we get all teams
    const teamLimit = limit !== undefined ? Math.min(Math.max(limit, 1), 100) : 100;
    const teamsUrl = `${TWIZZIT_API_BASE}/groups?organization-ids[]=${twizzitOrgId}&season-id=51270&group-type=1&limit=${teamLimit}&page=1`;
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
      const bodyPreview = await teamsRes.text().catch(()=>"<unreadable>");
      err("teams.failed", {
        rid,
        status: teamsRes.status,
        bodyPreview: bodyPreview?.slice(0, 1000)
      });
      throw new Error(`Failed to fetch teams: ${teamsRes.status}`);
    }
    const teamsData = await teamsRes.json();
    let teams = Array.isArray(teamsData) ? teamsData : teamsData.teams || [];
    if (limit !== undefined) {
      teams = teams.slice(0, limit);
    }
    log("teams.parsed", {
      rid,
      count: teams.length,
      sample_ids: teams.slice(0, 5).map((t)=>t?.id ?? null)
    });
    // Helper function to extract age group from team name
    const extractAgeGroup = (teamName)=>{
      const ageGroupMatch = teamName.match(/U(\d+)/i);
      return ageGroupMatch ? `U${ageGroupMatch[1]}` : null;
    };
    // MAP ROWS
    const contactNameCache = new Map<number, string | null>();
    const resolveContactName = async (contactId: number | null | undefined)=>{
      if (!contactId) {
        return null;
      }
      if (contactNameCache.has(contactId)) {
        return contactNameCache.get(contactId) ?? null;
      }
      const contactsUrl = `${TWIZZIT_API_BASE}/contacts?organization-ids[]=${twizzitOrgId}&contact-ids[]=${contactId}`;
      log("contacts.request", {
        rid,
        url: contactsUrl,
        contactId
      });
      const contactsRes = await fetch(contactsUrl, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      log("contacts.response", {
        rid,
        contactId,
        status: contactsRes.status,
        ok: contactsRes.ok
      });
      if (!contactsRes.ok) {
        const preview = await contactsRes.text().catch(()=>"<unreadable>");
        err("contacts.failed", {
          rid,
          contactId,
          status: contactsRes.status,
          bodyPreview: preview?.slice(0, 500)
        });
        contactNameCache.set(contactId, null);
        return null;
      }
      const contactsData = await contactsRes.json();
      const name = Array.isArray(contactsData) && contactsData.length > 0 ? contactsData[0]?.name ?? null : null;
      contactNameCache.set(contactId, name ?? null);
      return name ?? null;
    };

    const mappedRows = [];
    for (const team of teams) {
      const groupContactsUrl = `${TWIZZIT_API_BASE}/group-contacts?organization-ids[]=${twizzitOrgId}&group-ids[]=${team.id}`;
      log("group_contacts.request", {
        rid,
        url: groupContactsUrl,
        teamId: team.id
      });
      const groupContactsRes = await fetch(groupContactsUrl, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      log("group_contacts.response", {
        rid,
        teamId: team.id,
        status: groupContactsRes.status,
        ok: groupContactsRes.ok
      });
      let groupContacts: Array<{ groupId: number; contactId: number; contactFunctionId: number }> = [];
      if (groupContactsRes.ok) {
        groupContacts = await groupContactsRes.json();
      } else {
        const preview = await groupContactsRes.text().catch(()=>"<unreadable>");
        err("group_contacts.failed", {
          rid,
          teamId: team.id,
          status: groupContactsRes.status,
          bodyPreview: preview?.slice(0, 500)
        });
      }

      const trainerContact = groupContacts.find((contact)=>contact.contactFunctionId === TRAINER_FUNCTION_ID);
      const coachContact = groupContacts.find((contact)=>contact.contactFunctionId === COACH_FUNCTION_ID);

      const [trainerName, coachName] = await Promise.all([
        resolveContactName(trainerContact?.contactId),
        resolveContactName(coachContact?.contactId)
      ]);

      const now = new Date().toISOString();
      const row = {
        twizzit_id: team.id,
        name: team.name,
        description: team["short-name"] ? `Short name: ${team["short-name"]}` : null,
        age_group: extractAgeGroup(team.name),
        season: team.season?.name || null,
        image_url: team.image,
        active: true,
        raw: team,
        updated_at: now,
        team_manager: trainerName,
        coach: coachName
      };

      const { data: existingTeam, error: selectError } = await supabase.from("teams").select("id").eq("name", row.name).maybeSingle();
      if (selectError) {
        err("db.select.error", {
          rid,
          teamName: row.name,
          code: selectError.code,
          message: selectError.message,
          details: selectError.details
        });
        throw selectError;
      }

      if (existingTeam) {
        log("db.update.begin", {
          rid,
          teamName: row.name,
          teamId: existingTeam.id
        });
        const { error: updateError } = await supabase.from("teams").update(row).eq("id", existingTeam.id);
        if (updateError) {
          err("db.update.error", {
            rid,
            teamName: row.name,
            code: updateError.code,
            message: updateError.message,
            details: updateError.details
          });
          throw updateError;
        }
        log("db.update.success", {
          rid,
          teamName: row.name
        });
      } else {
        log("db.insert.begin", {
          rid,
          teamName: row.name
        });
        const insertRow = {
          ...row,
          created_at: now
        };
        const { error: insertError } = await supabase.from("teams").insert(insertRow);
        if (insertError) {
          err("db.insert.error", {
            rid,
            teamName: row.name,
            code: insertError.code,
            message: insertError.message,
            details: insertError.details
          });
          throw insertError;
        }
        log("db.insert.success", {
          rid,
          teamName: row.name
        });
      }

      mappedRows.push(row);
    }

    log("rows.mapped", {
      rid,
      count: mappedRows.length,
      sample_names: mappedRows.slice(0, 5).map((r)=>r.name)
    });
    const t1 = performance.now();
    log("invoke.success", {
      rid,
      ms: Math.round(t1 - t0)
    });
    return new Response(JSON.stringify({
      success: true,
      count: mappedRows.length,
      message: `Successfully synced ${mappedRows.length} teams`
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
