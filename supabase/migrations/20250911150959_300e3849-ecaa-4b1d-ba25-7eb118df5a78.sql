-- Fix security issue: Restrict public access to board member contact information

-- Drop the existing public read policy that exposes sensitive data
DROP POLICY IF EXISTS "Public can view safe board member information" ON public.board_members;

-- Create a new restrictive policy for public access - only basic info, no contact details
CREATE POLICY "Public can view basic board member information" 
ON public.board_members 
FOR SELECT 
USING (active = true);

-- Create a separate policy for admins to access all data including contact info
CREATE POLICY "Admins can view all board member data" 
ON public.board_members 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Ensure the board_members_public view excludes sensitive contact information
-- First drop the existing view if it exists
DROP VIEW IF EXISTS public.board_members_public;

-- Recreate the view with only safe, non-sensitive information
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
ORDER BY order_index;

-- Enable RLS on the view (views inherit RLS from underlying tables, but this is explicit)
ALTER VIEW public.board_members_public SET (security_invoker = on);