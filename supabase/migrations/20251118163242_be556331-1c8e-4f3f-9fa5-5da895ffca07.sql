-- Create enum for field closure status
CREATE TYPE public.field_closure_status AS ENUM ('closure', 'pending');

-- Add status column to field_closures table
ALTER TABLE public.field_closures 
ADD COLUMN status field_closure_status NOT NULL DEFAULT 'closure';