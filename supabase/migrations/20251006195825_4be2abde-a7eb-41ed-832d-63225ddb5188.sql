-- Add icon column to announcements table
ALTER TABLE public.announcements 
ADD COLUMN icon text DEFAULT 'Newspaper';

-- Add comment to document the column
COMMENT ON COLUMN public.announcements.icon IS 'Lucide icon name to display with the announcement';