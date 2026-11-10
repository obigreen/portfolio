import React from 'react';
import {Container} from "../../../styles/Container";

import {S} from "./AboutMe_Styles"
import {SectionText} from "../../../components/SectionText";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {GlitchTitle} from "../../../components/GlitchTitle";
import appLogo from "../../../assets/img/logo-for-my-app.svg";

export const AboutMe = () => {
    return (
        <S.AboutMe id={'about-me'}>
            <Container>
                <GlitchTitle>About Me</GlitchTitle>
                <S.AboutMePage>
                    <S.AboutMePageHeader>
                        <FlexWrapper gap={'5px'}>
                            <S.Close>_</S.Close>
                            <S.Close>X</S.Close>
                        </FlexWrapper>
                    </S.AboutMePageHeader>

                    <S.Article>
                        <S.Tag>&lt;article&gt;</S.Tag>
                        <FlexWrapper direction={'column'}>
                            <S.Ptitle>
                                <S.Tag>&lt;h1&gt;</S.Tag>
                                <h4>Hi! My name is Sergey</h4>
                                <S.Tag>&lt;/h1&gt;</S.Tag>
                            </S.Ptitle>

                            <S.Ptext>
                                <S.Tag>&lt;p <S.Class>class=<S.Green>"intro"</S.Green></S.Class>&gt;</S.Tag>
                                <SectionText>
                                    Я frontend-разработчик с более чем трёхлетним опытом работы с коммерческими
                                    веб-проектами. Работал над внутренней системой управления задачами на React
                                    и Redux, сейчас участвую в разработке AI-сервиса на Vue.js. Frontend — моя
                                    основная специализация; параллельно расширяю опыт в full-stack-разработке.
                                </SectionText>
                                <S.Tag>&lt;/p&gt;</S.Tag>
                            </S.Ptext>

                            <S.Ptext>
                                <S.Tag>&lt;p <S.Class>class=<S.Green>"expertise"</S.Green></S.Class>&gt;</S.Tag>
                                <SectionText>
                                    В клиентской части работаю с React/Redux и Vue.js: проектирую компонентную
                                    структуру, управляю состоянием интерфейса, реализую маршрутизацию и формы
                                    с валидацией, интегрирую REST API. Обрабатываю асинхронные запросы, состояния
                                    загрузки и ошибки, поддерживаю существующий код. В проектах на React и
                                    TypeScript использую хуки и повторно используемые компоненты, покрываю ключевые
                                    сценарии тестами на Vitest и React Testing Library.
                                </SectionText>
                                <S.Tag>&lt;/p&gt;</S.Tag>
                            </S.Ptext>

                            <S.Ptext>
                                <S.Tag>&lt;p <S.Class>class=<S.Green>"development"</S.Green></S.Class>&gt;</S.Tag>
                                <SectionText>
                                    Развиваю собственное веб-приложение{" "}
                                    <S.AppLink href="https://tavelore.com/" target="_blank" rel="noopener noreferrer">
                                        <img src={appLogo} alt=""/>Tavelore
                                    </S.AppLink>{" "}
                                    для изучения иностранных языков. В нём можно собирать наборы пар слов, фраз и
                                    предложений; тот же формат подходит для терминов и других тем. Развиваю его как
                                    full-stack-проект:
                                    клиентская часть на React и TypeScript, API на Node.js и Express, база данных
                                    MongoDB. В приложении реализованы регистрация и авторизация, профили пользователей,
                                    словари и категории, поиск, локализация и режимы обучения. Самостоятельно развернул
                                    его на Ubuntu VPS и настраивал Nginx, домен и HTTPS.
                                </SectionText>
                                <S.Tag>&lt;/p&gt;</S.Tag>
                            </S.Ptext>

                            <S.Ptext>
                                <S.Tag>&lt;p <S.Class>class=<S.Green>"ai"</S.Green></S.Class>&gt;</S.Tag>
                                <SectionText>
                                    Интегрирую OpenAI API через backend: передаю модели контекст на основе данных проекта,
                                    организую потоковую передачу ответа, проверку запросов и ограничение частоты обращений.
                                    В рабочем процессе несколько лет использую AI-агентов для декомпозиции задач и
                                    автоматизации повторяющихся операций. По собственной инициативе также разрабатываю
                                    инструмент автоматизации для отдела вёрстки; проект пока в работе, сейчас изучаю
                                    процессы и определяю подходящие для автоматизации задачи.
                                </SectionText>
                                <S.Tag>&lt;/p&gt;</S.Tag>
                            </S.Ptext>

                        </FlexWrapper>
                        <S.Tag>&lt;/article&gt;</S.Tag>
                    </S.Article>
                </S.AboutMePage>
            </Container>
        </S.AboutMe>
    );
};



