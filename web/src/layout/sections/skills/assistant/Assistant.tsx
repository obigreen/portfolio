import {FlexWrapper} from "../../../../components/FlexWrapper";
import {ButtonWin98} from "../../../../components/ButtonWin98";
import {S} from "./Assistant_Styles"
import {useEffect, useRef, useState} from "react";
import type {ChangeEvent, KeyboardEvent} from "react";
import {isAbortError, streamAssistantResponse} from "./assistantStream";
// import Gear from "../../../../assets/img/icons/gear.svg"
// import Enclosure from "../../../../assets/img/enclosure.png"


const MAX_PROMPT_LENGTH = 500;

export const Assistant = () => {
    const [inputText, setInputText] = useState("");
    const [responseText, setResponseText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const activeRequestController = useRef<AbortController | null>(null);
    const outputTextarea = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        return () => {
            activeRequestController.current?.abort();
        };
    }, []);

    useEffect(() => {
        if (outputTextarea.current) {
            outputTextarea.current.scrollTop = outputTextarea.current.scrollHeight;
        }
    }, [responseText]);

    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(event.target.value);
    };

    const handleSubmit = async () => {
        if (activeRequestController.current) {
            return;
        }

        const prompt = inputText.trim();
        if (!prompt) {
            setResponseText("Enter your question");
            return;
        }

        const abortController = new AbortController();
        activeRequestController.current = abortController;

        setResponseText('');
        setIsLoading(true);

        try {
            await streamAssistantResponse(
                prompt,
                abortController.signal,
                (text) => {
                    setResponseText((currentText) => currentText + text);
                },
            );
            setInputText('');
        } catch (error) {
            if (isAbortError(error)) {
                return;
            }

            if (error instanceof Error) {
                setResponseText(error.message);
            } else {
                setResponseText("Unknown error");
            }
        } finally {
            if (activeRequestController.current === abortController) {
                activeRequestController.current = null;

                if (!abortController.signal.aborted) {
                    setIsLoading(false);
                }
            }
        }

    };

    const handleInputKeyDown = (
        event: KeyboardEvent<HTMLTextAreaElement>,
    ) => {
        // Enter отправляет сообщение, Shift + Enter переносит строку.
        if (event.key !== 'Enter' || event.shiftKey) {
            return;
        }

        event.preventDefault();

        if (!isLoading && inputText.trim()) {
            void handleSubmit();
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

                <S.TextareaOutp
                    id="assistant-response"
                    name="assistantResponse"
                    aria-label="Ответ ассистента"
                    autoComplete="off"
                    ref={outputTextarea}
                    value={responseText}
                    readOnly
                    placeholder="Ответ..."
                />

                <S.TextareaInp
                    id="assistant-prompt"
                    name="assistantPrompt"
                    aria-label="Вопрос ассистенту"
                    autoComplete="off"
                    value={inputText}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    maxLength={MAX_PROMPT_LENGTH}
                    placeholder="Напишите вопрос..."
                    disabled={isLoading}
                />

                <S.CharacterCounter>
                    {inputText.length} / {MAX_PROMPT_LENGTH}
                </S.CharacterCounter>

                <S.Aibutton>
                    <ButtonWin98 onClick={handleSubmit} disabled={isLoading || inputText.trim() === ""}>
                        {isLoading ? (
                            <span>
                                Loading
                                <S.LoadingDots aria-hidden="true">
                                    <span>.</span>
                                    <span>.</span>
                                    <span>.</span>
                                </S.LoadingDots>
                            </span>
                        ) : (
                            'Enter'
                        )}
                    </ButtonWin98>
                </S.Aibutton>
            </FlexWrapper>
            {/*<S.Repair>*/}
            {/*    <S.RepairImg src={Enclosure} alt=""/>*/}
            {/*</S.Repair>*/}
        </S.AssistantWrap>
    );
};


