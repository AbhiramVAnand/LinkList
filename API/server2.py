import os
import json
from flask import Flask, request, jsonify
from supabase import create_client, Client


url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)

app = Flask(__name__)


# Login
@app.route("/login")
def login():
    email = request.args.get('email')
    password = request.args.get('password')

    if email is None:
        return "Error: Enter Email", 400
    if password is None:
        return "Error: Enter Password", 400
    user = supabase.auth.sign_in_with_password(email,password)


if __name__ == "__main__":
    app.run(debug=True)
