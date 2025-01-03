import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [query, setQuery] = useState("");
    const [messages, setMessages] = useState([]);

    const sendMessage = async () => {
        if (query.trim() === "") return;

        setMessages((prev) => [...prev, { sender: "user", text: query }]);

        try {
            const response = await axios.post("http://localhost:5000/api/chat", { query });
            setMessages((prev) => [...prev, { sender: "bot", text: response.data.answer }]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: "There was an error processing your request. Please try again later." },
            ]);
        }

        setQuery("");
    };

    return (
        <div className="chat-container">
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    placeholder="Ask a question..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default App;
