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
                        <S.Tag>&lt;Article&gt;</S.Tag>
                        <FlexWrapper direction={'column'}>
                            <S.Ptitle>
                                <S.Tag>&lt;h1&gt;</S.Tag>
                                <h4>Hi! My name Sergey</h4>
                                <S.Tag>&lt;/h1&gt;</S.Tag>
                            </S.Ptitle>

                            <S.Ptext>
                                <S.Tag>&lt;p <S.Class>class=<S.Green>"about-me"</S.Green></S.Class>&gt;</S.Tag>
                                <SectionText>
                                    Я начинающий frontend-разработчик. Увлекаюсь созданием сайтов и приложений, изучаю современные технологии и стараюсь развиваться каждый день.
                                    В основном работаю с HTML/CSS/JavaScript, а также активно изучаю React/Redux/TypeScript и не только. Иногда экспериментирую с нативной логикой. Это помогает мне лучше понять базовые принципы программирования.
                                    Сейчас я работаю HTML-верстальщиком, создаю адаптивные лендинги и помогаю улучшать интерфейсы.
                                </SectionText>
                                <S.Tag>&lt;/p&gt;</S.Tag>
                            </S.Ptext>

                            <S.Ptext>
                                <S.Tag>&lt;p <S.Class>class=<S.Green>"studies"</S.Green></S.Class>&gt;</S.Tag>
                                <SectionText>
                                    В настоящее время прохожу обучение в IT-Incubator, где углубляюсь в frontend-разработку и осваиваю современные подходы к созданию приложений. Сейчас применяю полученные знания на практике, работая над дипломным проектом в институте и развивая свои пет-проекты.
                                    Также использую нейросети, чтобы ускорять рутинные задачи и решать интересные кейсы.
                                </SectionText>
                                <S.Tag>&lt;/p&gt;</S.Tag>
                            </S.Ptext>

                        </FlexWrapper>
                        <S.Tag>&lt;/Article&gt;</S.Tag>
                    </S.Article>
                </S.AboutMePage>
            </Container>
        </S.AboutMe>
    );
};






