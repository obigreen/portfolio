const express = require('express');
const OpenAI = require('openai');
const cors = require('cors'); // Импортируй пакет cors

const app = express();
const port = process.env.PORT || 5001;

const openai = new OpenAI({
    apiKey: '',
});

app.use(cors());
app.use(express.json());


app.get('/api/health', (_request, response) => {
    response.status(200).json({status: 'OK'});
});


app.post('/api/chat', (request, response) => {
    const {prompt} = request.body;

    if (typeof prompt !== 'string' || prompt.trim() === '') {
        return response.status(400).json({
            error: 'Prompt must be a non-empty string'
        });
    }

    const message = prompt.trim();
    response.status(200).json({message});
});



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});