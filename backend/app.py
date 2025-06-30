# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from recommender import get_recommendations

# app = Flask(__name__)
# CORS(app)

# @app.route("/")
# def home():
#     return "This is aman .SmartCart Ai Recommendation backend is working !"
# @app.route("/recommend")
# def recommend():
#     cart = request.args.get("cart", "[]")
#     cart_ids = list(map(int, cart.strip("[]").split(",")))
#     result = get_recommendations(cart_ids)
#     return jsonify(result)

# if __name__ == "__main__":
#     app.run(debug=True)



# 📁 backend/app.py

from flask import Flask, request, jsonify
from flask_cors import CORS
from recommender import get_recommendations

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "🛒 This is Aman — SmartCart AI Recommendation backend is running!"

@app.route("/recommend")
def recommend():
    cart = request.args.get("cart", "[]").strip("[]")
    try:
        cart_ids = list(map(int, cart.split(","))) if cart else []
    except ValueError:
        return jsonify({"error": "Invalid cart input"}), 400

    result = get_recommendations(cart_ids)
    return jsonify(result)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=10000, debug=True)

