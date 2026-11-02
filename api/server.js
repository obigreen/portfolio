const express = require('express');
const OpenAI = require('openai');
const cors = require('cors');
const projectsData = require('../shared/projects.json');

const app = express();
const port = process.env.PORT || 5001;
const apiKey = process.env.OPENAI_API_KEY;
const MAX_PROMPT_LENGTH = 500;
const MAX_OUTPUT_TOKENS = 500;

const openai = new OpenAI({
    apiKey: apiKey,
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

    if (message.length > MAX_PROMPT_LENGTH) {
        return response.status(400).json({
            error: `Вопрос должен содержать не более ${MAX_PROMPT_LENGTH} символов.`
        })
    }


    try {
        const apiResponse = await openai.responses.create({
            model: 'gpt-6-luna',
            max_output_tokens: MAX_OUTPUT_TOKENS,
            instructions: `Ты ассистент портфолио.
                Отвечай на вопросы о его проектах на том языке на котором к тебе обратились.
                Используй только предоставленные ниже данные.
                Если в данных нет ответа, честно сообщи, что такой информации нет.
                Не выдумывай проекты, технологии, ссылки или факты.
                Ответ не должен превышать ${MAX_OUTPUT_TOKENS} токенов.
                Отвечай кратко и по существу: обычно достаточно 2–4 предложений.
                Не превышать на 1 ответ 1500 символов.

                Проекты: ${projectsContext}`,

            input: message,
        });


        if (apiResponse.status === 'incomplete' && apiResponse.incomplete_details?.reason === 'max_output_tokens') {
            return response.status(502).json({
                error: 'Ответ получился слишком длинным. Попробуйте задать более конкретный вопрос.',
            })
        }

        return response.status(200).json({
            message: apiResponse.output_text,
        });
    } catch (error) {
        console.error('OpenAI request failed:', error);

        if (
            error instanceof OpenAI.APIError && error.code === 'credit_balance_exhausted'
        ) {
            return response.status(503).json({
                error: 'Ассистент временно недоступен. Попробуйте позже.'
            })
        }

        return response.status(500).json({
            error: 'Не удалось получить ответ ассистента.'
        })
    }

});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});