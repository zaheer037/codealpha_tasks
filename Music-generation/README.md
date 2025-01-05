
# **AI Music Generator 🎵**

An AI-powered application that generates original music using deep learning techniques like LSTM (Long Short-Term Memory) networks. The project includes both a backend (Flask) for generating music and a frontend (React.js) for interacting with the system.

---

## **Features**
- 🎼 Generate original music sequences in MIDI format.
- 📄 Set desired music length using a simple web interface.
- 🎧 Download generated music for playback.
- 🛠 Built with Python, Flask, React.js, and TensorFlow.

---

## **Tech Stack**
- **Backend**: Python, Flask, TensorFlow, flask-cors
- **Frontend**: React.js, Axios
- **Music File Format**: MIDI

---

## **Screenshots**
### **1. Home Page**
![Home Page](https://via.placeholder.com/800x400?text=Home+Page)

### **2. Generated Music**
![Generated Music](https://via.placeholder.com/800x400?text=Generated+Music)

---

## **Getting Started**

### **Prerequisites**
1. Python 3.8 or above
2. Node.js (for the frontend)
3. Flask and TensorFlow for the backend
4. MIDI playback software (optional for playing generated music)

---

### **Backend Setup**
1. Clone the repository:
   ```bash
   git clone https://github.com/zaheer037/codealpha_tasks.git
   cd Music-generation/backend
   ```
2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # For Linux/Mac
   venv\Scripts\activate     # For Windows
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the backend server:
   ```bash
   python app.py
   ```
5. The backend server will run at: `http://127.0.0.1:5000`

---

### **Frontend Setup**
1. Navigate to the `frontend` directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open the React app in your browser at: `http://localhost:3000`

---

## **How to Use**
1. Open the web app at `http://localhost:3000`.
2. Enter the desired **music length** in steps (e.g., 200).
3. Click **Generate** to generate music.
4. Download the generated MIDI file and play it using a MIDI player.

---

## **Folder Structure**
```
Music-generator/
├── backend/
│   ├── app.py              # Flask backend code
│   ├── model.py            # LSTM music generation model
│   ├── generated/          # Directory for storing generated files
│   ├── requirements.txt    # Backend dependencies
├── frontend/
│   ├── public/
│   │   ├── index.html      # Main HTML file
│   ├── src/
│   │   ├── App.js          # Main React component
│   │   ├── components/
│   │   │   ├── MusicForm.js
│   │   │   ├── Result.js
│   ├── index.css           # App styles
│   ├── index.js            # React entry point
│   ├── package.json        # Frontend dependencies
```

---

## **API Endpoints**

### **1. Generate Music**
**Endpoint**: `POST /generate-music`  
**Request Body**:
```json
{
  "length": 200
}
```
**Response**:
- Success: `{ "status": "success", "message": "Music generated!" }`
- Error: `{ "status": "error", "message": "Error message" }`

### **2. Download Music**
**Endpoint**: `GET /download/music.mid`  
- Downloads the generated MIDI file.

---

## **Known Issues**
- CORS issues: Ensure `flask-cors` is installed and enabled in the backend.
- MIDI playback: Use a compatible MIDI player to play the generated music.

---

## **Future Enhancements**
- 🎶 Add a feature to customize instruments and tempo.
- 🌐 Deploy the app to the cloud using platforms like AWS, Heroku, or Vercel.
- 📈 Train the model with more diverse datasets to improve music quality.
- 🎵 Add real-time playback functionality in the frontend.

---

## **Contributing**
Contributions are welcome! Feel free to fork the repository and submit a pull request.

---

## **License**
This project is licensed under the [MIT License](LICENSE).

---

## **Contact**
For any questions or feedback, feel free to reach out:
- **Name**: Zaheer
- **Email**: jaheermaseed@gmail.com
- **GitHub**: [https://github.com/zaheer037](https://github.com/zaheer037)
