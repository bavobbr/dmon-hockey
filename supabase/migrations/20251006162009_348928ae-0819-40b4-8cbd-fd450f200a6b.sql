-- Update the sponsors tier check constraint to include diamond tier
ALTER TABLE sponsors 
DROP CONSTRAINT sponsors_tier_check;

ALTER TABLE sponsors 
ADD CONSTRAINT sponsors_tier_check 
CHECK (tier = ANY (ARRAY['diamond'::text, 'gold'::text, 'silver'::text, 'bronze'::text]));