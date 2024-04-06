from flask import Flask, request, jsonify
import supabase

# Initialize Flask app
app = Flask(__name__)

# Initialize Supabase client
supabase_url = "https://ovugrgjamsklddzoyiup.supabase.co"
supabase_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92dWdyZ2phbXNrbGRkem95aXVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzMjUzMjcsImV4cCI6MjAyNzkwMTMyN30.tPyBcmYmg1XJDZ46ZKGCuIe7GC3InblaIDDRa8UfewU"
supabase_client = supabase.create_client(supabase_url, supabase_key)

# Endpoint for user signup
@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'error': 'Email and password are required'}), 400

    # Attempt to create a new user
    response = supabase_client.auth.sign_up(email, password)

    if response.get('error'):
        return jsonify({'error': response['error']['message']}), 400
    else:
        return jsonify({'message': 'User signed up successfully'})

# Endpoint for user login
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'error': 'Email and password are required'}), 400

    # Attempt to authenticate user
    response = supabase_client.auth.sign_in_with_password(email=email, password=password)

    if response.get('error'):
        return jsonify({'error': response['error']['message']}), 401
    else:
        return jsonify({'message': 'User logged in successfully'})

if __name__ == '__main__':
    app.run(debug=True)
