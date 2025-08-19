-- Add RLS policy to board_members_public view to allow public read access
-- The view already filters out sensitive data (email, phone), so it's safe for public access

ALTER TABLE public.board_members_public ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view active board members from the public view
CREATE POLICY "Anyone can view public board member information" 
ON public.board_members_public 
FOR SELECT 
USING (true);

-- Note: The board_members_public view already excludes sensitive contact information
-- (email and phone), so public access to this filtered view is safe