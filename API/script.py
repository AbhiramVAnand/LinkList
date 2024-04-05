import json
from flask import Flask, request, jsonify
from supabase import create_client, Client


supabase = create_client(url, anon_key)
response = supabase.table('countries').select("*").execute()
print(response)

try:
    # Attempt using sign_up for newer versions
    user = supabase.auth.sign_in(email="test@example.com", password="your_password")
except TypeError:
    # Fallback to create_user for older versions
    user = create_user(supabase, email="test@example.com", password="your_password")
