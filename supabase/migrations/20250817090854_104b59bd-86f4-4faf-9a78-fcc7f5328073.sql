-- Add coach and team manager fields to teams table
ALTER TABLE public.teams 
ADD COLUMN coach TEXT,
ADD COLUMN team_manager TEXT;