-- Fix security issue: Restrict profiles SELECT policy to only allow users to view their own profiles
-- This prevents unauthorized access to personal information like names and display_names

-- Drop the existing overly permissive policy
DROP POLICY IF EXISTS "Users can view all profiles" ON public.profiles;

-- Create a more restrictive policy that only allows users to view their own profile
CREATE POLICY "Users can view own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);

-- For cases where we need to display public information (like board members),
-- we should use the existing board_members_public view or similar public views
-- rather than exposing all profile data