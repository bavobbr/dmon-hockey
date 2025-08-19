-- Fix security definer view issue by recreating the view with SECURITY INVOKER
-- This ensures the view respects RLS policies and runs with the querying user's permissions

-- Drop the existing view
DROP VIEW IF EXISTS public.board_members_public;

-- Recreate the view with SECURITY INVOKER to respect RLS policies
CREATE VIEW public.board_members_public 
WITH (security_invoker=on)
AS 
SELECT 
  id,
  name,
  position,
  bio,
  photo_url,
  order_index,
  created_at,
  updated_at
FROM board_members
WHERE active = true
ORDER BY order_index;

-- Grant appropriate permissions
GRANT SELECT ON public.board_members_public TO anon, authenticated;