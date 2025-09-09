-- Create twizzit_events table
CREATE TABLE public.twizzit_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  twizzit_id bigint UNIQUE NOT NULL,
  name text NOT NULL,
  start_at timestamptz NOT NULL,
  end_at timestamptz NOT NULL,
  meeting_time time,
  description text,
  address text,
  score text,
  score_details text,
  series text,
  groups jsonb,
  contacts jsonb,
  resources jsonb,
  raw jsonb,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

-- Index for start_at to query upcoming events
CREATE INDEX twizzit_events_start_at_idx ON public.twizzit_events (start_at);

-- Enable Row Level Security on twizzit_events table
ALTER TABLE public.twizzit_events ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access to events
CREATE POLICY "Anyone can view twizzit events" 
ON public.twizzit_events 
FOR SELECT 
USING (true);

-- Create policy to allow service role to insert/update events (for the sync function)
CREATE POLICY "Service role can manage twizzit events" 
ON public.twizzit_events 
FOR ALL 
USING (true)
WITH CHECK (true);

-- Enable realtime for the table
ALTER PUBLICATION supabase_realtime ADD TABLE public.twizzit_events;

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_twizzit_events_twizzit_id ON public.twizzit_events(twizzit_id);