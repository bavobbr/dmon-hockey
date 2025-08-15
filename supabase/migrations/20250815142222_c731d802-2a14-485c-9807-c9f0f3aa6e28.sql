-- Remove the overly permissive policy
DROP POLICY IF EXISTS "Anyone can view active board members" ON public.board_members;

-- Create a secure view for public board member information (no contact details)
CREATE OR REPLACE VIEW public.board_members_public AS
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

-- Create restrictive policies for the main table
CREATE POLICY "Admins can manage all board members" ON public.board_members FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- No public access to the main table anymore
-- Public access will go through the secure view only

-- Grant access to the secure view
GRANT SELECT ON public.board_members_public TO anon;
GRANT SELECT ON public.board_members_public TO authenticated;