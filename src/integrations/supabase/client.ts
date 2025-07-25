// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://mnxredqsbruhklhgrvnn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ueHJlZHFzYnJ1aGtsaGdydm5uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzMjU5MDEsImV4cCI6MjA2ODkwMTkwMX0.5eZeEXYBX-VkMbsveOFxEiB1lv10G02ylWz9znqVFAw";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});