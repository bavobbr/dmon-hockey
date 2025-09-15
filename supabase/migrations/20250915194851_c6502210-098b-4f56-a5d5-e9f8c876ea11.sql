-- Fix ON CONFLICT error: require a real unique/exclusion constraint on teams.twizzit_id
-- Drop partial unique index if it exists (PostgREST doesn't allow ON CONFLICT with partial indexes)
DROP INDEX IF EXISTS public.idx_teams_twizzit_id;

-- Add a proper unique constraint on twizzit_id (nullable is fine; Postgres allows multiple NULLs)
ALTER TABLE public.teams
  ADD CONSTRAINT teams_twizzit_id_key UNIQUE (twizzit_id);