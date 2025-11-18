-- Update sponsors policies to include moderators
DROP POLICY IF EXISTS "Admins can manage sponsors" ON public.sponsors;
CREATE POLICY "Admins and moderators can manage sponsors" 
ON public.sponsors 
FOR ALL 
USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'moderator'::app_role));

-- Update field_closures policies to include moderators
DROP POLICY IF EXISTS "Admins can manage field closures" ON public.field_closures;
CREATE POLICY "Admins and moderators can manage field closures" 
ON public.field_closures 
FOR ALL 
USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'moderator'::app_role));

-- Update teams policies to include moderators
DROP POLICY IF EXISTS "Admins can manage teams" ON public.teams;
CREATE POLICY "Admins and moderators can manage teams" 
ON public.teams 
FOR ALL 
USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'moderator'::app_role));