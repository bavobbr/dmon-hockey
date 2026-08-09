-- 1. Instagram tokens: server-only
DROP POLICY IF EXISTS "Service role can manage instagram tokens" ON public.instagram_tokens;
REVOKE ALL ON public.instagram_tokens FROM anon, authenticated;
GRANT ALL ON public.instagram_tokens TO service_role;

-- 2. Twizzit events: remove always-true ALL policy (service_role bypasses RLS)
DROP POLICY IF EXISTS "Service role can manage twizzit events" ON public.twizzit_events;

-- 3. Least-privilege grants for anon (read-only on public content)
REVOKE ALL ON public.announcements, public.board_members, public.board_members_public,
  public.field_closures, public.sponsors, public.teams, public.twizzit_events,
  public.vacancies, public.profiles, public.user_roles FROM anon;
GRANT SELECT ON public.announcements, public.board_members, public.board_members_public,
  public.field_closures, public.sponsors, public.teams, public.twizzit_events,
  public.vacancies TO anon;

-- 4. authenticated keeps CRUD (still gated by RLS), no more owner-level rights
REVOKE ALL ON public.announcements, public.board_members, public.board_members_public,
  public.field_closures, public.sponsors, public.teams, public.twizzit_events,
  public.vacancies, public.profiles, public.user_roles FROM authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.announcements, public.board_members,
  public.field_closures, public.sponsors, public.teams, public.twizzit_events,
  public.vacancies, public.profiles, public.user_roles TO authenticated;
GRANT SELECT ON public.board_members_public TO authenticated;

GRANT ALL ON public.announcements, public.board_members, public.board_members_public,
  public.field_closures, public.sponsors, public.teams, public.twizzit_events,
  public.vacancies, public.profiles, public.user_roles TO service_role;

-- 5. SECURITY DEFINER functions: revoke public execute where not needed
REVOKE ALL ON FUNCTION public.call_sync_twizzit_events() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.get_cron_jobs() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.call_sync_twizzit_events() TO service_role;
GRANT EXECUTE ON FUNCTION public.get_cron_jobs() TO service_role;
-- has_role / get_current_user_role must stay callable: used inside RLS policies
REVOKE ALL ON FUNCTION public.get_current_user_role() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_current_user_role() TO authenticated, service_role;

-- 6. Public buckets: stop file listing (public URLs keep working)
DROP POLICY IF EXISTS "Anyone can view announcement images" ON storage.objects;
DROP POLICY IF EXISTS "Sponsor logos are publicly accessible" ON storage.objects;