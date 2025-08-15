-- Create storage bucket for announcement images
INSERT INTO storage.buckets (id, name, public) VALUES ('announcement-images', 'announcement-images', true);

-- Create RLS policies for announcement images
CREATE POLICY "Anyone can view announcement images" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'announcement-images');

CREATE POLICY "Authenticated users can upload announcement images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'announcement-images' AND auth.role() = 'authenticated');

CREATE POLICY "Users can update their own announcement images" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'announcement-images' AND auth.role() = 'authenticated');

CREATE POLICY "Users can delete their own announcement images" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'announcement-images' AND auth.role() = 'authenticated');