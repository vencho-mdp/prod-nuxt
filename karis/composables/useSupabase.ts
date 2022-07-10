import { createClient } from '@supabase/supabase-js'
const SUPABASE_URL = 'https://uxfzlncbslqthjwbeoad.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4ZnpsbmNic2xxdGhqd2Jlb2FkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1NDM4MTYxMywiZXhwIjoxOTY5OTU3NjEzfQ.4XtrbxWq7TblWwmoZ9C7SdQX4AFD2n_GiU17RM7U5YQ';

// console.log(data.value.config)

const options = {
  schema: 'public',
  headers: { 'x-my-custom-header': 'my-app-name' },
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, options);



const useSupabase = () => {

  return {
    supabase,
  }
}


export default useSupabase