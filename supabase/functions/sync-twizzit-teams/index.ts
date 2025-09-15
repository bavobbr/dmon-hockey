import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const log = (message: string, data?: any) => {
  console.log(`[sync-twizzit-teams] ${message}`, data ? JSON.stringify(data) : '');
};

const err = (message: string, error?: any) => {
  console.error(`[sync-twizzit-teams] ERROR: ${message}`, error);
};

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  log('Starting Twizzit teams sync process');

  try {
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get Twizzit credentials
    const twizzitUsername = Deno.env.get('TWIZZIT_USERNAME');
    const twizzitPassword = Deno.env.get('TWIZZIT_PASSWORD');
    const twizzitOrgId = Deno.env.get('TWIZZIT_ORG_ID');

    if (!twizzitUsername || !twizzitPassword || !twizzitOrgId) {
      err('Missing Twizzit credentials');
      return new Response(
        JSON.stringify({ error: 'Missing Twizzit credentials' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    log('Authenticating with Twizzit API');

    // Authenticate with Twizzit
    const authResponse = await fetch('https://app.twizzit.com/v2/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: twizzitUsername,
        password: twizzitPassword,
      }),
    });

    if (!authResponse.ok) {
      err('Twizzit authentication failed', await authResponse.text());
      return new Response(
        JSON.stringify({ error: 'Twizzit authentication failed' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const authData = await authResponse.json();
    const token = authData.token;
    log('Twizzit authentication successful');

    // Fetch teams data
    log('Fetching teams from Twizzit API');
    const teamsUrl = `https://app.twizzit.com/v2/api/groups?organization-ids%5B%5D=${twizzitOrgId}&season-id=51270&group-type=1`;
    
    const teamsResponse = await fetch(teamsUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!teamsResponse.ok) {
      err('Failed to fetch teams from Twizzit', await teamsResponse.text());
      return new Response(
        JSON.stringify({ error: 'Failed to fetch teams from Twizzit' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const teamsData = await teamsResponse.json();
    log(`Fetched ${teamsData.length} teams from Twizzit`);

    // Helper function to extract age group from team name
    const extractAgeGroup = (teamName: string): string | null => {
      const ageGroupMatch = teamName.match(/U(\d+)/i);
      return ageGroupMatch ? `U${ageGroupMatch[1]}` : null;
    };

    // Transform and upsert teams
    const transformedTeams = teamsData.map((team: any) => {
      const ageGroup = extractAgeGroup(team.name);
      
      return {
        twizzit_id: team.id,
        name: team.name,
        description: team['short-name'] ? `Short name: ${team['short-name']}` : null,
        age_group: ageGroup,
        season: team.season?.name || null,
        image_url: team.image,
        active: true,
        raw: team,
      };
    });

    log(`Transformed ${transformedTeams.length} teams for database insertion`);

    // Upsert teams into database
    for (const team of transformedTeams) {
      log(`Upserting team: ${team.name} (Twizzit ID: ${team.twizzit_id})`);
      
      const { error: upsertError } = await supabase
        .from('teams')
        .upsert(team, {
          onConflict: 'twizzit_id',
          ignoreDuplicates: false,
        });

      if (upsertError) {
        err(`Failed to upsert team ${team.name}`, upsertError);
      } else {
        log(`Successfully upserted team: ${team.name}`);
      }
    }

    log('Teams sync completed successfully');

    return new Response(
      JSON.stringify({
        success: true,
        message: `Successfully synced ${transformedTeams.length} teams`,
        teamsProcessed: transformedTeams.length,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    err('Unexpected error during teams sync', error);
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        details: error.message,
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});