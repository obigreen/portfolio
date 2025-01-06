import React, {useState} from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {ButtonWin98} from "../../../../components/ButtonWin98";
import {S} from "./Assistant_Styles"


// Функция для получения ответа от GPT
async function getGPTResponse(prompt: string) {
    const response = await fetch('http://localhost:5001/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({prompt}),
    });

    const data = await response.json();
    return data.message;
}

export const Assistant = () => {
    const [inputText, setInputText] = useState("");
    const [responseText, setResponseText] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(event.target.value);
    };

    const handleSubmit = async () => {
        const response = await getGPTResponse(inputText);
        setResponseText(response);
    };
    return (
        <S.AssistantWrapp>
            <FlexWrapper direction={'column'} position={'relative'} justify={'space-between'} height={'100%'}>
                <S.TextariaOutp value={responseText} readOnly placeholder="Ответ..."/>
                <S.TextariaInp
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Напишите что-то..."
                />
                <S.Aibutton>
                    <ButtonWin98 onClick={handleSubmit}>
                        Enter
                    </ButtonWin98>
                </S.Aibutton>
            </FlexWrapper>
        </S.AssistantWrapp>
    );
};


