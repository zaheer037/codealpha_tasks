
# FAQ Chatbot  

A full-stack, NLP-powered chatbot that answers frequently asked questions about a product or topic. The backend is built with **Flask** and **SpaCy**, while the frontend is built with **React** to provide an interactive user interface.

---

## Features  

- ✅ **Natural Language Processing (NLP)**: Uses SpaCy to process and match user queries with FAQ data.  
- ✅ **Frontend Interface**: React-based UI for users to interact with the chatbot.  
- ✅ **Customizable FAQs**: Easily modify or extend the predefined FAQs.  
- ✅ **Simple API Integration**: Backend REST API to handle chatbot queries.  

---

## Prerequisites  

- Python 3.7 or higher  
- Node.js and npm  
- pip (Python package manager)  

---

## Installation  

### Backend  

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/zaheer037/codealpha_tasks.git
   cd ChatBot-FAQ
   cd backend
   ```

2. **Install Dependencies**  
   ```bash
   pip install flask flask-cors spacy  
   python -m spacy download en_core_web_sm  
   ```

3. **Run the Backend**  
   ```bash
   python app.py  
   ```

   The backend server will start at `http://127.0.0.1:5000`.

---

### Frontend  

1. **Navigate to the `frontend` Directory**  
   ```bash
   cd frontend
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Run the Frontend**  
   ```bash
   npm start
   ```

   The frontend will run at `http://localhost:3000`.

---

## Usage  

### Interacting with the Chatbot  

1. Open your browser and navigate to `http://localhost:3000`.  
2. Type a query in the chatbot interface (e.g., "What is your return policy?").  
3. The chatbot will respond with the most relevant answer or provide a fallback response.  

---

## API Details  

The backend provides a single endpoint:  

### `/chat`  

- **Method**: `POST`  
- **Body**:  
  ```json
  {
    "query": "Your question here"
  }
  ```  
- **Response**:  
  ```json
  {
    "response": "Chatbot's answer here"
  }
  ```

---

## FAQ Data  

The chatbot includes the following sample FAQs:  

| Question                                 | Answer                                                                                  |  
|------------------------------------------|----------------------------------------------------------------------------------------|  
| What is your return policy?              | Our return policy allows returns within 30 days of purchase.                           |  
| How can I track my order?                | You can track your order using the tracking link provided in your confirmation email.  |  
| Do you offer international shipping?     | Yes, we ship to most countries worldwide. Shipping fees may apply.                     |  
| What payment methods do you accept?      | We accept Visa, MasterCard, PayPal, and more.                                          |  

You can update these by modifying the `faq_data` array in `app.py`.

---

## Project Structure  

```
faq-chatbot/  
├── backend/  
│   ├── app.py          # Flask application  
│   └── requirements.txt # Backend dependencies (optional)  
├── frontend/  
│   ├── src/            # React source files  
│   ├── public/         # Static files for the React app  
│   └── package.json    # Frontend dependencies  
└── README.md           # Project documentation  
```

---

## Future Enhancements  

- 🔹 **Database Integration**: Store FAQs in a database.  
- 🔹 **Enhanced UI**: Add more animations and interactivity to the React frontend.  
- 🔹 **Advanced NLP**: Implement transformer models for better query understanding.  

---

## License  

This project is licensed under the [MIT License](LICENSE).  

---

## Contact  

For questions or suggestions, contact me:  
- **Email**: jaheermaseed@gmail.com
- **GitHub**: [Zaheer](https://github.com/zaheer037)
