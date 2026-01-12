-- Create a function to get cron job info (accessible via RPC)
CREATE OR REPLACE FUNCTION public.get_cron_jobs()
RETURNS TABLE (
  jobid bigint,
  jobname text,
  schedule text,
  active boolean
)
LANGUAGE sql
SECURITY DEFINER
SET search_path = public, cron
AS $$
  SELECT jobid, jobname, schedule, active
  FROM cron.job
  ORDER BY jobname;
$$;