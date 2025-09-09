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
CREATE INDEX IF NOT EXISTS idx_twizzit_events_start_at ON public.twizzit_events(start_at);
CREATE INDEX IF NOT EXISTS idx_twizzit_events_twizzit_id ON public.twizzit_events(twizzit_id);