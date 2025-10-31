-- Remove any existing check constraint on sponsors.tier
ALTER TABLE public.sponsors DROP CONSTRAINT IF EXISTS sponsors_tier_check;

-- Add updated check constraint with woodstick tier
ALTER TABLE public.sponsors 
ADD CONSTRAINT sponsors_tier_check 
CHECK (tier IN ('diamond', 'gold', 'silver', 'bronze', 'woodstick'));