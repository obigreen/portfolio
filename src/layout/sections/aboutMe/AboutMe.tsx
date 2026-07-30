import React from 'react';
import {Container} from "../../../styles/Container";

import {S} from "./AboutMe_Styles"
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionText} from "../../../components/SectionText";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {GlitchTitle} from "../../../components/GlitchTitle";

export const AboutMe = () => {
    return (
        <S.AboutMe id={'about-me'}>
            <Container>
                <GlitchTitle>About Me</GlitchTitle>
                {/*<SectionTitle>About Me</SectionTitle>*/}
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
                                <S.Tag>&lt;p <S.Class>class=<S.Green>"about-me"</S.Green></S.Class>&gt;</S.Tag>
                                <SectionText>
                                    Я junior frontend-разработчик с более чем трехлетним коммерческим опытом
                                    в HTML-верстке. Моя сильная сторона — аккуратные адаптивные лендинги
                                    и интерфейсы: работаю по готовым макетам и без них, поддерживаю
                                    существующие проекты, добавляю интерактив на JavaScript и слежу
                                    за корректным отображением на разных устройствах.
                                </SectionText>
                                <S.Tag>&lt;/p&gt;</S.Tag>
                            </S.Ptext>

                            <S.Ptext>
                                <S.Tag>&lt;p <S.Class>class=<S.Green>"experience"</S.Green></S.Class>&gt;</S.Tag>
                                <SectionText>
                                    Постепенно расширяю задачи в сторону полноценной frontend-разработки:
                                    работаю с React, Redux и TypeScript, создаю собственные приложения
                                    и глубже разбираюсь в архитектуре компонентов. В проектах также
                                    использую WordPress, PHP, REST API и внешние интеграции. Есть опыт
                                    полного цикла создания сайта — от идеи, дизайна и верстки до
                                    публикации и настройки на собственном сервере.
                                </SectionText>
                                <S.Tag>&lt;/p&gt;</S.Tag>
                            </S.Ptext>

                            <S.Ptext>
                                <S.Tag>&lt;p <S.Class>class=<S.Green>"studies"</S.Green></S.Class>&gt;</S.Tag>
                                <SectionText>
                                    Продолжаю обучение frontend-разработке и получаю высшее образование
                                    по направлению прикладной информатики. AI-агентов использую как
                                    рабочий инструмент: поручаю им рутинные задачи, исследование подходов,
                                    поиск причин ошибок и подготовку документации. При этом итоговый код
                                    всегда проверяю самостоятельно и адаптирую под конкретный проект.
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





