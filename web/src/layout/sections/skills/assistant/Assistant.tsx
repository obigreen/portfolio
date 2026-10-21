import {FlexWrapper} from "../../../../components/FlexWrapper";
import {ButtonWin98} from "../../../../components/ButtonWin98";
import {S} from "./Assistant_Styles"
import {ChangeEvent, useState} from "react";
// import Gear from "../../../../assets/img/icons/gear.svg"
// import Enclosure from "../../../../assets/img/enclosure.png"


const API_URL: string = import.meta.env.VITE_API_URL;

// Функция для получения ответа от GPT
async function getGPTResponse(prompt: string) {
    const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({prompt}),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || 'Request failed');
    }
    return data.message;
}

export const Assistant = () => {
    const [inputText, setInputText] = useState("");
    const [responseText, setResponseText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(event.target.value);
    };

    const handleSubmit = async () => {
        const prompt = inputText.trim();
        if (!prompt) {
            setResponseText("Enter your question");
            return;
        }

        // после проверки наличия запроса блокируем поле и кнопку
        setIsLoading(true);

        try {
            const message = await getGPTResponse(prompt);
            setResponseText(message);
            setInputText("");
        } catch (error) {
            // error instanceof Error проверяет, является ли пойманное значение объектом класса Error
            if (error instanceof Error) {
                setResponseText(error.message);
            } else {
                setResponseText("Unknown error");
            }
        } finally {
            setIsLoading(false);
        }

    };

    return (
        <S.AssistantWrap>
            {/*<S.GearWrap>*/}
            {/*    <S.GearWrap2>*/}
            {/*        <S.GearLeft>*/}
            {/*            <S.GearImage src={Gear} alt="Gear Left"/>*/}
            {/*        </S.GearLeft>*/}
            {/*        <S.GearRight>*/}
            {/*            <S.GearImage src={Gear} alt="Gear Right"/>*/}
            {/*        </S.GearRight>*/}
            {/*    </S.GearWrap2>*/}
            {/*</S.GearWrap>*/}
            <FlexWrapper direction={'column'} position={'relative'} justify={'space-between'} height={'100%'}>

                {/*<S.MarqueeWrap>*/}
                {/*    <S.Marquee>*/}
                {/*        ⚠️ Компонент на стадии доработки. Это окно общения с ИИ, подключенным к*/}
                {/*        OpenAI API. В процессе настройки лимиты, оплата и рефакторинг компонента/стилей. Бот сможет*/}
                {/*        отвечать на вопросы о моих проектах в портфолио.*/}
                {/*    </S.Marquee>*/}
                {/*</S.MarqueeWrap>*/}

                <S.TextareaOutp value={responseText} readOnly placeholder="Ответ..."/>
                <S.TextareaInp
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Напишите вопрос..."
                    disabled={isLoading}
                />
                <S.Aibutton>
                    <ButtonWin98 onClick={handleSubmit} disabled={isLoading || inputText.trim() === ""}>
                        {isLoading ? 'Loading...' : 'Enter'}
                    </ButtonWin98>
                </S.Aibutton>
            </FlexWrapper>
            {/*<S.Repair>*/}
            {/*    <S.RepairImg src={Enclosure} alt=""/>*/}
            {/*</S.Repair>*/}
        </S.AssistantWrap>
    );
};


