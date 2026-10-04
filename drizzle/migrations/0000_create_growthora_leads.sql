CREATE TABLE public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  business_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  business_type TEXT NOT NULL,
  service_interest TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.leads TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.leads TO service_role;

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an audit request"
ON public.leads
FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(name) BETWEEN 2 AND 100
  AND char_length(business_name) BETWEEN 2 AND 150
  AND char_length(email) BETWEEN 5 AND 254
  AND char_length(phone) BETWEEN 7 AND 40
  AND char_length(business_type) BETWEEN 2 AND 100
  AND char_length(service_interest) BETWEEN 2 AND 100
  AND (message IS NULL OR char_length(message) <= 2000)
);