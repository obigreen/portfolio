import React, {useState} from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {AbsolutWrapp} from "../../../../components/absolute/AbsolutWrapp";
import {Icon} from "../../../../components/icon/Icon";
import {AbsoluteBox} from "../../../../components/absolute/AbsoluteBox";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {AccentAnimationCol} from "../../../../styles/AccentAnimation";
// import OpenAI from "openai"; // Импортируем основной класс OpenAI

// // Создание экземпляра OpenAI API с использованием API ключа
// const openai = new OpenAI({
//     apiKey: "твой_API_ключ_здесь", // Замени на свой API ключ
// });

// Функция для получения ответа от GPT
async function getGPTResponse(prompt: string) {
    const response = await fetch('http://localhost:5001/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
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

            <AbsolutWrapp top={'-60px'} left={'20px'} index={'-1'}>
                <AbsoluteBox bottom={'31px'} left={'calc(50% - 3px)'} width={'6px'} height={'50px'}/>
                <Icon iconId={'chipUp'} width={'62'} height={'62'} viewBox={'0 0 32 32'}/>
            </AbsolutWrapp>

            <AbsolutWrapp top={'50px'} left={'-60px'} index={'-1'}>
                <AbsoluteBox bottom={'calc(50% - 0px)'} left={'-45px'} width={'50px'} height={'5px'}/>
                <Icon iconId={'chipMain'} width={'62'} height={'62'} viewBox={'0 0 32 32'}/>
            </AbsolutWrapp>


            <AbsolutWrapp top={'calc(50% - 30px)'} left={'-60px'} index={'-1'}>
                <AbsoluteBox bottom={'calc(50% - 0px)'} left={'-45px'} width={'50px'} height={'5px'}/>
                <Icon iconId={'chipMain'} width={'62'} height={'62'} viewBox={'0 0 32 32'}/>
            </AbsolutWrapp>

            <AbsolutWrapp bottom={'43px'} left={'-60px'} index={'-1'}>
                <AbsoluteBox bottom={'calc(50% - 0px)'} left={'-45px'} width={'50px'} height={'5px'}/>
                <Icon iconId={'chipMain'} width={'62'} height={'62'} viewBox={'0 0 32 32'}/>
            </AbsolutWrapp>

            <FlexWrapper direction={'column'} position={'relative'} justify={'space-between'} height={'100%'}>
                <TextariaOutp value={responseText} readOnly placeholder="Ответ..."/>
                <TextariaInp
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Напишите что-то..."
                />
                <Aibutton onClick={handleSubmit}>+</Aibutton>
            </FlexWrapper>


        </AssistantWrapp>
    );
};

const AssistantWrapp = styled.div`
    position: relative;
    max-width: 400px;
    width: 100%;
    height: 400px;
    background-color: ${theme.color.backround};
    box-shadow: inset 1px 1px 0px 0 rgb(0 0 0 / 11%), 2px 2px 3px rgba(0, 0, 0, 0.1);
    padding: 20px;

`
const TextariaOutp = styled.textarea`
    resize: none;
    overflow: auto;
    padding: 10px;
    margin-bottom: 20px;
    height: 200px;
    background-color: ${theme.color.backround};
    border: none;
    box-shadow: inset 1px 3px 6px 0 rgb(0 0 0 / 11%);
    &::placeholder {
        color: ${theme.color.mainFont};
    }
`
const TextariaInp = styled.textarea`
    resize: none;
    overflow: auto;
    padding: 10px 10px 35px 10px;
    height: 100px;
    background-color: ${theme.color.backround};
    border: none;
    box-shadow: inset 1px 3px 6px 0 rgb(0 0 0 / 11%);
    color: ${theme.color.mainFont};

    &::placeholder {
        color: ${theme.color.mainFont};
    }
`

const Aibutton = styled.button`
    background-color: #1e1f23;
    width: 50px;
    border: none;
    padding: 10px 10px;
    cursor: pointer;
    box-shadow: 2px 1px 5px 0 rgb(0 0 0 / 11%);
    position: absolute;
    bottom: 5px;
    right: 5px;
    animation: ${AccentAnimationCol} 12s linear infinite alternate;

`
