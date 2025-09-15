-- Add new fields to teams table for Twizzit integration
ALTER TABLE public.teams 
ADD COLUMN twizzit_id bigint,
ADD COLUMN image_url text,
ADD COLUMN raw jsonb;

-- Create unique index on twizzit_id for upsert operations
CREATE UNIQUE INDEX idx_teams_twizzit_id ON public.teams(twizzit_id) WHERE twizzit_id IS NOT NULL;