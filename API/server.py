import json
from flask import Flask, request, jsonify
from supabase import create_client, Client


url = "https://ovugrgjamsklddzoyiup.supabase.co"
anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92dWdyZ2phbXNrbGRkem95aXVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzMjUzMjcsImV4cCI6MjAyNzkwMTMyN30.tPyBcmYmg1XJDZ46ZKGCuIe7GC3InblaIDDRa8UfewU"


supabase = create_client(url, anon_key)
app = Flask(__name__)

# Signup endpoint
@app.route("/signup", methods=["POST"])
def signup():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    try:
        user = supabase.auth
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
        
        user = auth.user.id
        print(user)
        return jsonify({"message": "Login successful","user":user}), 200
    except Exception as e:
        return jsonify({"message": str(e)}), 500


@app.route("/send",methods=["POST"])
def insert_data():
    try:
        input = request.get_json()
        userId = input.get("userId")
        tags = input.get("tags")
        priority = input.get("priority")
        link = input.get("link")
        name = input.get("name")

        data, count = supabase.table('links').insert({"name": name,"userId":userId,"link":link,"tags":tags,"priority":priority}).execute()
        return jsonify({"message": "Data inserted successfully"}), 201
    except Exception as e:
        return jsonify({"message": "Error inserting data: " + str(response.error)}), 500
    
if __name__ == "__main__":
    app.run(debug=True)
