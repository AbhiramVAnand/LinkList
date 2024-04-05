//Masood@2001#01


import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uycbwukdvkknguwcrfns.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5Y2J3dWtkdmtrbmd1d2NyZm5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzNDMxOTIsImV4cCI6MjAyNzkxOTE5Mn0.pA6XZQ8KGy6qlHRIHLSmbyv6GfGn92LO5waaR7vytfs'
export const supabase = createClient(supabaseUrl, supabaseKey)