import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://wajnfgvynztsmpfaypsf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indham5mZ3Z5bnp0c21wZmF5cHNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzNjkwNDksImV4cCI6MjA1OTk0NTA0OX0.2sZQrkoZJch-Ni9-RKwCxYdBd-ITYNuPAPULbxsclIw";

const supabase = createClient(supabaseURL, supabaseKey);

export default supabase;
