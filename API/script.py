import json
from flask import Flask, request, jsonify
from supabase import create_client, Client


url = "https://ovugrgjamsklddzoyiup.supabase.co"
anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92dWdyZ2phbXNrbGRkem95aXVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzMjUzMjcsImV4cCI6MjAyNzkwMTMyN30.tPyBcmYmg1XJDZ46ZKGCuIe7GC3InblaIDDRa8UfewU"


supabase = create_client(url, anon_key)
response = supabase.table('countries').select("*").execute()
print(response)

try:
    # Attempt using sign_up for newer versions
    user = supabase.auth.sign_in(email="test@example.com", password="your_password")
except TypeError:
    # Fallback to create_user for older versions
    user = create_user(supabase, email="test@example.com", password="your_password")
