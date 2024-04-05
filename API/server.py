import json
from flask import Flask, request, jsonify
from supabase import create_client, Client



supabase = create_client(url, anon_key)

app = Flask(__name__)

# Signup endpoint
@app.route("/signup", methods=["POST"])
def signup():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    try:
        user = supa
        return jsonify({"message": "Signup successful!", "user": user})
    except Exception as e:
        return jsonify({"error": str(e)}), 400  # Bad request


# Login
@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"message": "Missing email or password"}), 400

    try:
        auth = supabase.auth.sign_in_with_password({"email" : email, "password" : password})
        return jsonify({"message": "Login successful"}), 200
    except Exception as e:
        return jsonify({"message": str(e)}), 500

@app.route("/send",methods=["POST"])
def upsert():
    data = request.get_json()
    link = data.get("link")
    name = data.get("name")
    data, count = supabase.table('countries').upsert({'id':1,'link':link,'name':name}).execute()


if __name__ == "__main__":
    app.run(debug=True)
