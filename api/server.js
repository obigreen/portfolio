const express = require('express');
const OpenAI = require('openai');
const cors = require('cors'); // Импортируй пакет cors

const app = express();
const port = process.env.PORT || 5001;

const openai = new OpenAI({
    apiKey: '',
});

app.use(cors()); // Используй cors middleware
app.use(express.json());

app.post('/api/chat', async (req, res) => {
    try {
        const { prompt } = req.body;

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [],
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            response_format: {
                "type": "text"
            },
        });

        const message = response.choices[0]?.message?.content.trim() || '';
        res.json({ message });
    } catch (error) {
        console.error('Error with OpenAI API:', error);
        res.status(500).json({ error: 'An error occurred with OpenAI API' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});