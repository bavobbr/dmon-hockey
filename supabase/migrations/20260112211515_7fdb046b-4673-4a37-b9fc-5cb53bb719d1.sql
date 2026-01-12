-- Create table for storing Instagram tokens
CREATE TABLE public.instagram_tokens (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  access_token text NOT NULL,
  expires_at timestamp with time zone NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.instagram_tokens ENABLE ROW LEVEL SECURITY;

-- Only service role can manage tokens (edge functions use service role)
CREATE POLICY "Service role can manage instagram tokens"
ON public.instagram_tokens
FOR ALL
USING (true)
WITH CHECK (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_instagram_tokens_updated_at
BEFORE UPDATE ON public.instagram_tokens
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();