-- Add team metadata columns to twizzit_events table
-- Run this migration in your Supabase SQL editor

-- Add columns for team information
ALTER TABLE twizzit_events
  ADD COLUMN IF NOT EXISTS home_team_name TEXT,
  ADD COLUMN IF NOT EXISTS away_team_name TEXT,
  ADD COLUMN IF NOT EXISTS is_home_game BOOLEAN;

-- Add index for filtering on home games
CREATE INDEX IF NOT EXISTS idx_twizzit_events_is_home_game
  ON twizzit_events(is_home_game)
  WHERE is_home_game IS NOT NULL;

-- Add comments to document the changes
COMMENT ON COLUMN twizzit_events.home_team_name IS 'Name of the home team (from event-groups with isHomeTeam=true)';
COMMENT ON COLUMN twizzit_events.away_team_name IS 'Name of the away team (from event-groups with isHomeTeam=false)';
COMMENT ON COLUMN twizzit_events.is_home_game IS 'True if D-mon is the home team, false if away, null if not applicable';
