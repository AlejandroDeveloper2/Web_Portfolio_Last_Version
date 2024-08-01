import { createClient } from "@supabase/supabase-js";

//supabase pass=WJU70wUviNUWs1gV

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_API_KEY
);
