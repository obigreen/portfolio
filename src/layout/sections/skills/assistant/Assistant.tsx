import React, {useState} from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {ButtonWin98} from "../../../../components/ButtonWin98";
import {S} from "./Assistant_Styles"
import Gear from "../../../../assets/img/icons/gear.svg"
import Enclosure from "../../../../assets/img/enclosure.png"

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
        <S.AssistantWrap>
            <S.GearWrap>
                <S.GearWrap2>
                    <S.GearLeft>
                        <S.GearImage src={Gear} alt="Gear Left"/>
                    </S.GearLeft>
                    <S.GearRight>
                        <S.GearImage src={Gear} alt="Gear Right"/>
                    </S.GearRight>
                </S.GearWrap2>
            </S.GearWrap>
            <FlexWrapper direction={'column'} position={'relative'} justify={'space-between'} height={'100%'}>

                <S.MarqueeWrap>
                    <S.Marquee>
                        ⚠️ Компонент на стадии доработки. Это окно общения с ИИ, подключенным к
                        OpenAI API. В процессе настройки лимиты, оплата и рефакторинг компонента/стилей. Бот сможет
                        отвечать на вопросы о моих проектах в портфолио.
                    </S.Marquee>
                </S.MarqueeWrap>

                <S.TextareaOutp value={responseText} readOnly placeholder="Ответ..."/>
                <S.TextareaInp
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Напишите что-то... [временно не активно]"
                    disabled
                />
                <S.Aibutton>
                    <ButtonWin98 onClick={handleSubmit} disabled>
                        Enter
                    </ButtonWin98>
                </S.Aibutton>
            </FlexWrapper>
            <S.Repair>
                <S.RepairImg src={Enclosure} alt=""/>
            </S.Repair>
        </S.AssistantWrap>
    );
};


