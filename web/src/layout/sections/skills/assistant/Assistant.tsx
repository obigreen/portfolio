import {FlexWrapper} from "../../../../components/FlexWrapper";
import {ButtonWin98} from "../../../../components/ButtonWin98";
import {S} from "./Assistant_Styles"
import {useEffect, useRef, useState} from "react";
import type {ChangeEvent, KeyboardEvent} from "react";
import {isAbortError, streamAssistantResponse} from "./assistantStream";
import Gear from "../../../../assets/img/icons/gear.svg";
// import Enclosure from "../../../../assets/img/enclosure.png"


const MAX_PROMPT_LENGTH = 500;
const IS_GITHUB_PAGES_BUILD = import.meta.env.MODE === "github";

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
        if (IS_GITHUB_PAGES_BUILD) {
            setResponseText("Ассистент доступен только в основной версии портфолио: youpushka.com.");
            return;
        }

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
            {IS_GITHUB_PAGES_BUILD && (
                <S.GearWrap aria-hidden="true">
                    <S.GearWrap2>
                        <S.GearLeft>
                            <S.GearImage src={Gear} alt=""/>
                        </S.GearLeft>
                        <S.GearRight>
                            <S.GearImage src={Gear} alt=""/>
                        </S.GearRight>
                    </S.GearWrap2>
                </S.GearWrap>
            )}
            <FlexWrapper direction={'column'} position={'relative'} justify={'space-between'} height={'100%'}>

                {IS_GITHUB_PAGES_BUILD && (
                    <S.MarqueeWrap>
                        <S.Marquee>
                            ⚠️ Ассистент доступен только в основной версии портфолио:{" "}
                            <S.MarqueeLink href="https://youpushka.com/" target="_blank" rel="noopener noreferrer">
                                youpushka.com
                            </S.MarqueeLink>
                        </S.Marquee>
                    </S.MarqueeWrap>
                )}

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
                    <ButtonWin98
                        onClick={handleSubmit}
                        disabled={IS_GITHUB_PAGES_BUILD || isLoading || inputText.trim() === ""}
                    >
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


