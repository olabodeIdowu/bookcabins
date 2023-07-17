import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://gvqzqvpkbazaxbyvhbmi.supabase.co';

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2cXpxdnBrYmF6YXhieXZoYm1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg0Nzk5NzYsImV4cCI6MjAwNDA1NTk3Nn0.OCJ0wtC2oDAqAX7dD-o0JJ76UJuDJEcMYTarUxC2R3s';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
