import React, { useState } from "react";
import "./App.css";

function App() {
    const [text, setText] = useState("");
    const [targetLanguage, setTargetLanguage] = useState("es");
    const [translatedText, setTranslatedText] = useState("");

    const translateText = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/translate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ text, targetLanguage }),
            });
            const result = await response.json();
            setTranslatedText(result);
        } catch (error) {
            console.error("Translation failed!", error);
        }
    };

    return (
        <div className="app-container">
            <header>
                <h1>🌐 Language Translator</h1>
                <p>Instantly translate your text into different languages.</p>
            </header>
            <main>
                <textarea
                    className="input-box"
                    placeholder="Enter text to translate"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <div className="controls">
                    <select
                        className="language-select"
                        value={targetLanguage}
                        onChange={(e) => setTargetLanguage(e.target.value)}
                    >
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="zh">Chinese (Simplified)</option>
                        <option value="hi">Hindi</option>
                        <option value="ar">Arabic</option>
                        <option value="ru">Russian</option>
                        <option value="ja">Japanese</option>
                        <option value="ko">Korean</option>
                        <option value="pt">Portuguese</option>
                        <option value="it">Italian</option>
                        <option value="nl">Dutch</option>
                        <option value="sv">Swedish</option>
                        <option value="tr">Turkish</option>
                        <option value="pl">Polish</option>
                        <option value="th">Thai</option>
                        <option value="vi">Vietnamese</option>
                        <option value="uk">Ukrainian</option>
                    </select>
                    <button className="translate-button" onClick={translateText}>
                        Translate
                    </button>
                </div>
                <div className="output-section">
                    <h2>Translated Text:</h2>
                    <div className="translated-text">{translatedText}</div>
                </div>
            </main>
        </div>
    );
}

export default App;
