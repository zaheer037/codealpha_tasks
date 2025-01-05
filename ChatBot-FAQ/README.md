
# FAQ Chatbot  

## Description  
The FAQ Chatbot is a simple, NLP-powered chatbot designed to answer frequently asked questions about a product or topic. It uses **SpaCy** for natural language processing and **Flask** to handle backend communication.  

## Features  
- Processes user queries and finds the best matching FAQ.  
- Returns predefined answers or a fallback response.  
- Easy to extend with additional FAQs.  

## Prerequisites  
- Python 3.7 or later  
- pip package manager  

## Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-repo/faq-chatbot.git  
   cd faq-chatbot  
   ```

2. Install required Python packages:  
   ```bash
   pip install flask flask-cors spacy  
   python -m spacy download en_core_web_sm  
   ```

## Running the Application  

1. Start the Flask server:  
   ```bash
   python app.py  
   ```  

2. The server will run at `http://127.0.0.1:5000`.  

## Usage  

Send a POST request to the `/chat` endpoint with a JSON body:  
- Example request:  
  ```json
  { "query": "How can I track my order?" }
  ```  

- Example response:  
  ```json
  { "response": "You can track your order using the tracking link provided in your confirmation email." }
  ```

Use tools like **Postman** or **cURL** for testing.  

## Sample FAQ Data  
The chatbot includes the following sample FAQs:  
- **What is your return policy?**  
- **How can I track my order?**  
- **Do you offer international shipping?**  
- **What payment methods do you accept?**

## Customization  

To add more FAQs, update the `faq_data` variable in `app.py` with new questions and answers:  
```python
faq_data = [
    {"question": "New question?", "answer": "New answer."},
]
```

## Future Improvements  
- Integrate a database to store FAQs.  
- Add a frontend for user interaction.  
- Improve query matching with advanced NLP models like BERT.

## License  
This project is licensed under the MIT License.  

