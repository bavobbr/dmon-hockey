-- Update sponsors tier check constraint to allow all configured tiers
ALTER TABLE public.sponsors
  DROP CONSTRAINT IF EXISTS sponsors_tier_check;

ALTER TABLE public.sponsors
  ADD CONSTRAINT sponsors_tier_check
  CHECK (tier = ANY (ARRAY[
    'diamond'::text,
    'gold'::text,
    'silver'::text,
    'bronze'::text,
    'materiaal_kledij'::text,
    'woodstick'::text,
    'sympathie'::text
  ]));