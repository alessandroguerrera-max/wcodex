-- THE WARRIOR'S CODEX — Database Setup
-- Run this in Supabase SQL Editor (https://supabase.com/dashboard → SQL Editor)

-- Single table: stores all user data as JSON blobs per key
-- Simple, flexible, no schema changes needed when we add features
CREATE TABLE IF NOT EXISTS warrior_data (
    id SERIAL PRIMARY KEY,
    device_id TEXT NOT NULL,
    data_key TEXT NOT NULL,
    data_value JSONB NOT NULL DEFAULT '{}',
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(device_id, data_key)
);

-- Enable Row Level Security
ALTER TABLE warrior_data ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read/write (no login, device_id is the identifier)
CREATE POLICY "Allow all access" ON warrior_data
    FOR ALL
    USING (true)
    WITH CHECK (true);

-- Index for fast lookups
CREATE INDEX IF NOT EXISTS idx_warrior_data_device ON warrior_data(device_id);
CREATE INDEX IF NOT EXISTS idx_warrior_data_key ON warrior_data(device_id, data_key);

-- Function to upsert data (insert or update)
CREATE OR REPLACE FUNCTION upsert_warrior_data(
    p_device_id TEXT,
    p_data_key TEXT,
    p_data_value JSONB
) RETURNS VOID AS $$
BEGIN
    INSERT INTO warrior_data (device_id, data_key, data_value, updated_at)
    VALUES (p_device_id, p_data_key, p_data_value, NOW())
    ON CONFLICT (device_id, data_key)
    DO UPDATE SET data_value = p_data_value, updated_at = NOW();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
