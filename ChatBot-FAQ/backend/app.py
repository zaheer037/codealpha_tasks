from flask import Flask, request, jsonify
from flask_cors import CORS
import spacy

# Load SpaCy NLP model
nlp = spacy.load("en_core_web_sm")

# Sample FAQ data
faq_data = [
    {"question": "What is your return policy?", "answer": "Our return policy allows returns within 30 days of purchase."},
    {"question": "How can I track my order?", "answer": "You can track your order using the tracking link provided in your confirmation email."},
    {"question": "Do you offer international shipping?", "answer": "Yes, we ship to most countries worldwide. Shipping fees may apply."},
    {"question": "What payment methods do you accept?", "answer": "We accept Visa, MasterCard, PayPal, and more."},
]

def find_best_match(user_query):
    user_doc = nlp(user_query)
    best_match = None
    highest_similarity = 0

    for faq in faq_data:
        faq_doc = nlp(faq["question"])
        similarity = user_doc.similarity(faq_doc)
        if similarity > highest_similarity:
            highest_similarity = similarity
            best_match = faq

    return best_match if highest_similarity > 0.6 else None

# Flask app for chatbot
app = Flask(__name__)
CORS(app)  # Enable CORS

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get("query")
    if not user_input:
        return jsonify({"error": "No query provided"}), 400

    best_match = find_best_match(user_input)

    if best_match:
        return jsonify({"response": best_match["answer"]})
    else:
        return jsonify({"response": "I'm sorry, I couldn't find an answer to your question. Please contact our support team."})

if __name__ == '__main__':
    app.run(debug=True)
