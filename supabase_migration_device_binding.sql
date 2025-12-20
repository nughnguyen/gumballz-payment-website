-- Add device binding columns to existing mod_keys table
-- Run this in Supabase SQL Editor

-- Add new columns
ALTER TABLE mod_keys ADD COLUMN IF NOT EXISTS device_id TEXT;
ALTER TABLE mod_keys ADD COLUMN IF NOT EXISTS device_bound_at TIMESTAMPTZ;
ALTER TABLE mod_keys ADD COLUMN IF NOT EXISTS last_verified_at TIMESTAMPTZ;

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_mod_keys_device_id ON mod_keys(device_id);

-- Done! Table updated successfully
