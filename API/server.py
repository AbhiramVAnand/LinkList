import os
from supabase import create_client, Client

url: str = "https://ovugrgjamsklddzoyiup.supabase.co"
key: str = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92dWdyZ2phbXNrbGRkem95aXVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzMjUzMjcsImV4cCI6MjAyNzkwMTMyN30.tPyBcmYmg1XJDZ46ZKGCuIe7GC3InblaIDDRa8UfewU" #os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)


res = supabase.auth.sign_up(
  email= 'example@email.com',
  password= 'example-password',
  redirect_to= 'https://example.com/welcome'
)