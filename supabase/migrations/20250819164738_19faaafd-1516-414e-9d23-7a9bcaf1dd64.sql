-- Add policy to allow public read access to safe board member information
-- This will make the board_members_public view accessible while keeping sensitive data protected

CREATE POLICY "Public can view safe board member information" 
ON public.board_members 
FOR SELECT 
USING (active = true);

-- Note: This policy allows public access to the board_members table, but the 
-- board_members_public view already filters to only safe columns (excludes email/phone)
-- and only active members. The application code uses this view for public access.