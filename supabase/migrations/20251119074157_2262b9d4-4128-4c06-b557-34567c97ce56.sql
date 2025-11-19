-- Ensure each user has at most one role row and support ON CONFLICT (user_id)

-- 1) Deduplicate any existing rows by user_id, keeping the most recent one
DELETE FROM public.user_roles a
USING public.user_roles b
WHERE a.user_id = b.user_id
  AND a.id < b.id;

-- 2) Add a unique constraint on user_id so ON CONFLICT (user_id) works
ALTER TABLE public.user_roles
  ADD CONSTRAINT user_roles_user_id_unique UNIQUE (user_id);