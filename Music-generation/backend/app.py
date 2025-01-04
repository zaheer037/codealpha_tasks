from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from models.music_generator import create_model, generate_sequence, sequence_to_midi
import os

app = Flask(__name__)
CORS(app) 
# Initialize the AI model
model = create_model(input_dim=50, output_dim=50)

@app.route('/')
def home():
    return "Welcome to the AI Music Generator Backend!"

@app.route('/generate-music', methods=['POST'])
def generate_music():
    try:
        data = request.json
        if not data or "length" not in data:
            return jsonify({"status": "error", "message": "Invalid request. 'length' is required."}), 400

        length = data.get('length', 100)

        # Placeholder for seed sequence
        seed = [[[0.5] * 50]]  # Batch of one sequence

        # Generate music sequence
        sequence = generate_sequence(model, seed, length)

        # Save sequence as MIDI file
        file_name = "data/generated/music.mid"
        os.makedirs(os.path.dirname(file_name), exist_ok=True)
        sequence_to_midi(sequence, file_name)

        return jsonify({"status": "success", "file": file_name})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route('/download/<filename>', methods=['GET'])
def download_file(filename):
    file_path = f"data/generated/{filename}"
    if os.path.exists(file_path):
        return send_file(file_path, as_attachment=True)
    else:
        return jsonify({"status": "error", "message": "File not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)
