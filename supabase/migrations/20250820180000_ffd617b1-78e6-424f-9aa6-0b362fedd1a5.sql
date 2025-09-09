-- Create twizzit_events table
CREATE TABLE public.twizzit_events (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  twizzit_id bigint UNIQUE NOT NULL,
  name text NOT NULL,
  start_at timestamptz NOT NULL,
  end_at timestamptz NOT NULL,
  meeting_time time,
  description text,
  address text,
  score text,
  score_details text,
  series bigint,
  groups jsonb,
  contacts jsonb,
  resources jsonb,
  raw jsonb,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

-- Index for start_at to query upcoming events
CREATE INDEX twizzit_events_start_at_idx ON public.twizzit_events (start_at);
