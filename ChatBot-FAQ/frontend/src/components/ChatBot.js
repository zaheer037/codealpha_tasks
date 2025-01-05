import React, { useState } from 'react';
import axios from 'axios';
import './ChatBot.css'; // Optional CSS for styling

const ChatBot = () => {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');

    const handleQuerySubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://127.0.0.1:5000/chat', { query });
            setResponse(res.data.response);
        } catch (error) {
            setResponse('Error fetching response. Please try again.');
        }
    };

    return (
        <div className="chatbot-container">
            <h1>FAQ Chatbot</h1>
            <form onSubmit={handleQuerySubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ask a question..."
                />
                <button type="submit">Submit</button>
            </form>
            {response && <p className="response">{response}</p>}
        </div>
    );
};

export default ChatBot;
