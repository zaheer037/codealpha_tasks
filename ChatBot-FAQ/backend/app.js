const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const natural = require("natural");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Mock FAQ data
const faqData = [
    { question: "What is your return policy?", answer: "Our return policy allows returns within 30 days of purchase." },
    { question: "How do I track my order?", answer: "You can track your order through the tracking link sent to your email." },
    { question: "Do you offer international shipping?", answer: "Yes, we offer international shipping to selected countries." },
    { question: "What payment methods do you accept?", answer: "We accept credit cards, debit cards, and PayPal." },
    { question: "How can I contact customer support?", answer: "You can contact our support team via email or phone." },
];

// Tokenizer and similarity
const tokenizer = new natural.WordTokenizer();
const stringSimilarity = natural.JaroWinklerDistance;

app.post("/api/chat", (req, res) => {
    const userQuery = req.body.query.toLowerCase();

    let bestMatch = null;
    let bestScore = 0;

    faqData.forEach((faq) => {
        const score = stringSimilarity(userQuery, faq.question.toLowerCase());
        if (score > bestScore) {
            bestScore = score;
            bestMatch = faq;
        }
    });

    if (bestScore > 0.7) {
        res.json({ answer: bestMatch.answer });
    } else {
        res.json({ answer: "I'm sorry, I couldn't find a relevant answer. Can you rephrase your question?" });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
