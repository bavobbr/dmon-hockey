import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'
};

interface CronJob {
  jobid: number;
  jobname: string;
  schedule: string;
  active: boolean;
  last_run?: string;
  last_status?: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Query cron jobs
    const { data: jobs, error: jobsError } = await supabase.rpc('get_cron_jobs');

    if (jobsError) {
      console.error('Error fetching cron jobs:', jobsError);
      
      // Fallback: return static info about known jobs
      const staticJobs: CronJob[] = [
        {
          jobid: 1,
          jobname: 'sync-twizzit-events-weekly',
          schedule: '0 6 * * 0',
          active: true
        },
        {
          jobid: 2,
          jobname: 'refresh-instagram-token-monthly',
          schedule: '0 3 1 * *',
          active: true
        }
      ];

      return new Response(JSON.stringify({ jobs: staticJobs, source: 'static' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ jobs, source: 'database' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error in get-cron-status:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});
