import React from 'react';
import {Container} from "../../../styles/Container";

import {S} from "./AboutMe_Styles"
import {SectionText} from "../../../components/SectionText";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {GlitchTitle} from "../../../components/GlitchTitle";

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
                                    Более трёх лет я разрабатываю, дорабатываю и запускаю веб-проекты
                                    в коммерческой среде. За это время работал как с созданием страниц
                                    с нуля, так и с большим потоком существующих лендингов: разбирался
                                    в чужом коде, восстанавливал нарушенную логику, адаптировал проекты
                                    под разные устройства, языки и рынки, подключал формы, аналитику
                                    и внешние сервисы.
                                </SectionText>
                                <S.Tag>&lt;/p&gt;</S.Tag>
                            </S.Ptext>

                            <S.Ptext>
                                <S.Tag>&lt;p <S.Class>class=<S.Green>"expertise"</S.Green></S.Class>&gt;</S.Tag>
                                <SectionText>
                                    Сильная база в HTML, CSS и JavaScript позволяет мне не ограничиваться
                                    переносом макета в браузер. Я реализую интерактивные сценарии,
                                    квизы и многошаговые формы, обрабатываю данные, URL-параметры
                                    и состояние интерфейса,
                                    интегрирую API, поддерживаю legacy-код и довожу проект до рабочего
                                    состояния в реальном окружении. При необходимости могу пройти весь
                                    путь от исходной идеи и интерфейса до интеграции с WordPress,
                                    настройки сервера и публикации на домене.
                                </SectionText>
                                <S.Tag>&lt;/p&gt;</S.Tag>
                            </S.Ptext>

                            <S.Ptext>
                                <S.Tag>&lt;p <S.Class>class=<S.Green>"development"</S.Green></S.Class>&gt;</S.Tag>
                                <SectionText>
                                    Сейчас продолжаю развиваться во frontend-разработке:
                                    углубляюсь в JavaScript и TypeScript, работаю с React и Redux,
                                    проектирую компоненты и создаю собственные приложения. Меня привлекают
                                    задачи, в которых важны не только внешний вид, но и архитектура,
                                    состояние интерфейса, обработка данных и поведение системы.
                                </SectionText>
                                <S.Tag>&lt;/p&gt;</S.Tag>
                            </S.Ptext>

                            <S.Ptext>
                                <S.Tag>&lt;p <S.Class>class=<S.Green>"approach"</S.Green></S.Class>&gt;</S.Tag>
                                <SectionText>
                                    Быстро погружаюсь в незнакомые проекты, умею находить причины ошибок
                                    и самостоятельно доводить задачу до результата. Не привязываюсь
                                    к одному набору технологий: выбираю и осваиваю инструменты,
                                    которые действительно нужны проекту.
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



