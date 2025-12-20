-- Create mod_keys table for storing key access to mod menu
CREATE TABLE IF NOT EXISTS mod_keys (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    key_value TEXT UNIQUE NOT NULL,
    key_type TEXT NOT NULL CHECK (key_type IN ('FREE', 'PREMIUM')),
    created_date DATE,
    duration_days INTEGER,
    price_vnd INTEGER,
    short_link TEXT,
    destination_url TEXT,
    expires_at TIMESTAMPTZ NOT NULL,
    is_active BOOLEAN DEFAULT false,
    usage_count INTEGER DEFAULT 0,
    last_used_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_mod_keys_key_value ON mod_keys(key_value);
CREATE INDEX IF NOT EXISTS idx_mod_keys_key_type ON mod_keys(key_type);
CREATE INDEX IF NOT EXISTS idx_mod_keys_created_date ON mod_keys(created_date);
CREATE INDEX IF NOT EXISTS idx_mod_keys_is_active ON mod_keys(is_active);

-- Add updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_mod_keys_updated_at BEFORE UPDATE ON mod_keys
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE mod_keys ENABLE ROW LEVEL SECURITY;

-- Policy: Allow all operations for authenticated service role
CREATE POLICY "Service role has full access to mod_keys" ON mod_keys
FOR ALL USING (true) WITH CHECK (true);

COMMENT ON TABLE mod_keys IS 'Stores mod menu access keys (free daily and premium)';
COMMENT ON COLUMN mod_keys.key_value IS 'The actual key string that users will enter';
COMMENT ON COLUMN mod_keys.key_type IS 'Type of key: FREE or PREMIUM';
COMMENT ON COLUMN mod_keys.created_date IS 'Date when key was created (for FREE keys, used to check daily reset)';
COMMENT ON COLUMN mod_keys.duration_days IS 'Number of days the key is valid for (only for PREMIUM)';
COMMENT ON COLUMN mod_keys.price_vnd IS 'Price in VND (only for PREMIUM keys)';
COMMENT ON COLUMN mod_keys.short_link IS 'Yeumoney short link URL (only for PREMIUM)';
COMMENT ON COLUMN mod_keys.destination_url IS 'Destination URL after clicking short link (only for PREMIUM)';
COMMENT ON COLUMN mod_keys.expires_at IS 'Timestamp when the key expires';
COMMENT ON COLUMN mod_keys.is_active IS 'Whether the key is currently active and can be used';
COMMENT ON COLUMN mod_keys.usage_count IS 'Number of times this key has been used';
COMMENT ON COLUMN mod_keys.last_used_at IS 'Last time this key was verified and used';
