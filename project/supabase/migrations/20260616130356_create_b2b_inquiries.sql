CREATE TABLE IF NOT EXISTS b2b_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  email text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE b2b_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_b2b_inquiries" ON b2b_inquiries FOR INSERT
  TO anon WITH CHECK (true);

CREATE POLICY "select_b2b_inquiries" ON b2b_inquiries FOR SELECT
  TO anon USING (false);

CREATE POLICY "update_b2b_inquiries" ON b2b_inquiries FOR UPDATE
  TO anon USING (false) WITH CHECK (false);

CREATE POLICY "delete_b2b_inquiries" ON b2b_inquiries FOR DELETE
  TO anon USING (false);
