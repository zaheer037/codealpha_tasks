const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/", async (req, res) => {
    const { text, targetLanguage } = req.body;
    const apiKey = process.env.TRANSLATOR_API_KEY;

    try {
        const response = await axios.post(
            `https://translation.googleapis.com/language/translate/v2`,
            null,
            {
                params: {
                    q: text,
                    target: targetLanguage,
                    key: apiKey,
                },
            }
        );
        res.json(response.data.data.translations[0].translatedText);
    } catch (error) {
        res.status(500).json({ error: "Translation failed!" });
    }
});

module.exports = router;
