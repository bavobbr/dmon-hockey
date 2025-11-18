-- Create field_closures table
CREATE TABLE public.field_closures (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  closure_date date NOT NULL,
  start_time time NOT NULL,
  end_time time NOT NULL,
  reason text NOT NULL,
  created_by uuid NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.field_closures ENABLE ROW LEVEL SECURITY;

-- Anyone can view field closures
CREATE POLICY "Anyone can view field closures"
ON public.field_closures
FOR SELECT
USING (true);

-- Only admins can manage field closures
CREATE POLICY "Admins can manage field closures"
ON public.field_closures
FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role));

-- Add trigger for updated_at
CREATE TRIGGER update_field_closures_updated_at
BEFORE UPDATE ON public.field_closures
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();