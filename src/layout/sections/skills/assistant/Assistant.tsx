import React, {useState} from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {ButtonWin98} from "../../../../components/ButtonWin98";


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
        <AssistantWrapp>

            <FlexWrapper direction={'column'} position={'relative'} justify={'space-between'} height={'100%'}>
                <TextariaOutp value={responseText} readOnly placeholder="Ответ..."/>
                <TextariaInp
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Напишите что-то..."
                />
                <Aibutton>
                    <ButtonWin98 onClick={handleSubmit}>
                        Enter
                    </ButtonWin98>
                </Aibutton>
            </FlexWrapper>


        </AssistantWrapp>
    );
};

const AssistantWrapp = styled.div`
    position: relative;
    max-width: 400px;
    width: 100%;
    height: 400px;
    outline: 1px solid ${theme.color.main};
    padding: 20px;
`
const TextariaOutp = styled.textarea`
    resize: none;
    overflow: auto;
    padding: 10px;
    margin-bottom: 20px;
    height: 200px;
    background: transparent;
    border: none;
    color: ${theme.color.mainFont};
    outline: 1px solid ${theme.color.main};

    &::placeholder {
        color: ${theme.color.mainFont};
    }
`
const TextariaInp = styled.textarea`
    resize: none;
    overflow: auto;
    padding: 10px 10px 35px 10px;
    height: 100px;
    border: none;
    outline: 1px solid ${theme.color.main};
    background: transparent;
    color: ${theme.color.mainFont};

    &::placeholder {
        color: ${theme.color.mainFont};
    }
`

const Aibutton = styled.div`
    position: absolute;
    bottom: 5px;
    right: 5px;
`
