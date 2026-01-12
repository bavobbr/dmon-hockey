-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS pg_cron WITH SCHEMA pg_catalog;
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- Create a function to call the edge function
CREATE OR REPLACE FUNCTION public.call_sync_twizzit_events()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  service_role_key TEXT;
BEGIN
  -- Get the service role key from vault (you'll need to store it there)
  -- For now, we use a direct HTTP call
  PERFORM extensions.http_post(
    url := 'https://rtvcsywkkcgakfzsuxgz.supabase.co/functions/v1/sync-twizzit-events',
    body := '{"name": "Functions"}'::jsonb,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key', true)
    )
  );
END;
$$;

-- Schedule the cron job to run every Sunday at 6:00 AM UTC (weekly)
SELECT cron.schedule(
  'sync-twizzit-events-weekly',
  '0 6 * * 0',  -- Every Sunday at 6:00 AM UTC
  $$
  SELECT net.http_post(
    url := 'https://rtvcsywkkcgakfzsuxgz.supabase.co/functions/v1/sync-twizzit-events',
    body := '{"name": "Functions"}'::jsonb,
    headers := '{"Content-Type": "application/json"}'::jsonb
  );
  $$
);

-- Also schedule the Instagram token refresh (monthly, on the 1st at 3:00 AM UTC)
SELECT cron.schedule(
  'refresh-instagram-token-monthly',
  '0 3 1 * *',  -- 1st of every month at 3:00 AM UTC
  $$
  SELECT net.http_post(
    url := 'https://rtvcsywkkcgakfzsuxgz.supabase.co/functions/v1/refresh-instagram-token',
    body := '{}'::jsonb,
    headers := '{"Content-Type": "application/json"}'::jsonb
  );
  $$
);