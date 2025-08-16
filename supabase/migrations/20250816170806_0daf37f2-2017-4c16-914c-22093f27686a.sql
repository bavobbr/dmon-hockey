-- Remove logo_url column and add logo_path for file uploads
ALTER TABLE public.sponsors DROP COLUMN IF EXISTS logo_url;
ALTER TABLE public.sponsors ADD COLUMN logo_path text;

-- Create storage bucket for sponsor logos
INSERT INTO storage.buckets (id, name, public) VALUES ('sponsor-logos', 'sponsor-logos', true);

-- Create storage policies for sponsor logos
CREATE POLICY "Sponsor logos are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'sponsor-logos');

CREATE POLICY "Admins can upload sponsor logos" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'sponsor-logos' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update sponsor logos" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'sponsor-logos' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete sponsor logos" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'sponsor-logos' AND has_role(auth.uid(), 'admin'::app_role));