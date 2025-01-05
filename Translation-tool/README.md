
# **Language Translation Tool**

A simple yet powerful language translation tool built using **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. This project uses the **Google Translate API** to translate text into multiple major languages with a user-friendly interface.

---

## **Features**

- 🌍 Translate text between major global languages.  
- 🖋️ Input text in any language and get the translation instantly.  
- 🔀 Support for multiple target languages.  
- ⚡ Real-time translation using Google Translate API.  
- 🖌️ Modern and responsive UI for seamless user experience.

---

## **Technologies Used**

- **Frontend**: React.js  
- **Backend**: Node.js, Express.js  
- **Translation API**: Google Translate API  
- **Styling**: CSS  

---

## **Getting Started**

### **Prerequisites**

Ensure the following are installed on your system:  
- **Node.js**: [Download](https://nodejs.org/)  
- **Google Cloud Account**: [Sign up](https://cloud.google.com/)  
- **API Key for Google Translate**: Set up via [Google Cloud Console](https://console.cloud.google.com/).  

---

### **Setup Instructions**

#### **1. Clone the Repository**

```bash
git clone https://github.com/zaheer037/codealpha_tasks.git
cd Translation-tool
```

#### **2. Install Dependencies**

**For the Backend:**  
```bash
cd backend
npm install
```

**For the Frontend:**  
```bash
cd frontend
npm install
```

---

#### **3. Configure the API Key**

1. Go to the **backend folder**.
2. Create a `.env` file and add your Google Translate API key:  
   ```
   GOOGLE_API_KEY=your-google-translate-api-key
   ```

---

#### **4. Run the Project**

**Start the Backend:**  
```bash
cd backend
node index.js
```

**Start the Frontend:**  
```bash
cd frontend
npm start
```

Access the application in your browser at `http://localhost:3000`.

---

## **Project Structure**

```plaintext
translation-tool/
├── backend/             # Backend code
│   ├── server.js         # Node.js server
│   └── .env             # API key configuration
│   └── package.json     # Backend dependencies
├── frontend/            # Frontend code
│   ├── src/
│   │   ├── App.js       # Main React component
│   │   └── styles.css   # Styling for the translation tool
│   └── package.json     # Frontend dependencies
└── README.md            # Project documentation
```

---

## **Usage**

1. Open the application in your browser.  
2. Enter the text you want to translate in the input box.  
3. Select the target language from the dropdown menu.  
4. Click the **"Translate"** button to get the translated text instantly.  

---

## **Supported Languages**

The tool supports translations to and from popular languages, including:  
- English  
- Spanish  
- French  
- German  
- Chinese  
- Hindi  
- Arabic  
- Japanese  
- Russian  

---

## **Customization**

- **Add More Languages**:  
  Modify the `languages` array in the frontend to add or remove supported languages.  

- **Change API Integration**:  
  Update the backend to integrate other translation APIs if required.  

---

## **License**

This project is licensed under the [MIT License](LICENSE).

---

## **Contributing**

Contributions are welcome! Feel free to fork the repository, make changes, and submit a pull request.

---

## **Contact**

For questions or feedback, please reach out:  
- **Developer**: Zaheer  
- **Email**: [jahermaseed@gmail.com](mailto:jahermaseed@gmail.com)  

--- 
