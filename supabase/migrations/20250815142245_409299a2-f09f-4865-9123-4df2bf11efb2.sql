-- Fix the security definer view issue by removing SECURITY DEFINER
DROP VIEW IF EXISTS public.board_members_public;

-- Create the view without SECURITY DEFINER (will use invoker's rights)
CREATE VIEW public.board_members_public AS
SELECT 
  id,
  name,
  position,
  bio,
  photo_url,
  order_index,
  created_at,
  updated_at
FROM public.board_members 
WHERE active = true
ORDER BY order_index ASC;

-- Grant access to the secure view
GRANT SELECT ON public.board_members_public TO anon;
GRANT SELECT ON public.board_members_public TO authenticated;