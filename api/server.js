const express = require('express');
const OpenAI = require('openai');
const cors = require('cors');
const projectsData = require('../shared/projects.json');

const app = express();
const port = process.env.PORT || 5001;
const apiKey = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
    apiKey: apiKey
});

const projectsContext = projectsData.map((project) => {
    return `Название: ${project.title}, Технологии: ${project.technologies}, Краткое описание: ${project.slideText}, Подробное описание: ${project.descText}, Ссылка: ${project.link}`;
}).join('\n\n');


app.use(cors());
app.use(express.json());


app.get('/api/health', (_request, response) => {
    response.status(200).json({
        status: 'OK',
        projectsLoaded: projectsData.length,
        contextCharacters: projectsContext.length,
    });
});


app.post('/api/chat', async (request, response) => {
    const {prompt} = request.body;

    if (typeof prompt !== 'string' || prompt.trim() === '') {
        return response.status(400).json({
            error: 'Prompt must be a non-empty string'
        });
    }

    const message = prompt.trim();


    try {
        const apiResponse = await openai.responses.create({
            model: 'gpt-6-luna',

            instructions: `Ты ассистент портфолио Сергея.
                Отвечай на вопросы о его проектах на русском языке.
                Используй только предоставленные ниже данные.
                Если в данных нет ответа, честно сообщи, что такой информации нет.
                Не выдумывай проекты, технологии, ссылки или факты.

                Проекты: ${projectsContext}`,

            input: message,
        });

        return response.status(200).json({
            message: apiResponse.output_text,
        });
    } catch (error) {
        console.error('OpenAI request failed:', error);

        return response.status(500).json({
            error: 'Failed to get AI response'
        })
    }

});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});