import React from 'react';
import {Container} from "../../../styles/Container";

import {S} from "./AboutMe_Styles"
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {SectionText} from "../../../components/SectionText";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const AboutMe = () => {
    return (
        <S.AboutMe id={'about-me'}>
            <Container>
                <SectionTitle>About Me</SectionTitle>
                <AboutMePage>
                    <AboutMePageHeader>
                        <FlexWrapper gap={'5px'}>
                            <Close>_</Close>
                            <Close>X</Close>
                        </FlexWrapper>
                    </AboutMePageHeader>

                    <Article>
                        <Tag>&lt;Article&gt;</Tag>
                        <FlexWrapper padding={'0 0 0 35px'} direction={'column'}>
                            <Ptitle><Tag>&lt;h1&gt;</Tag><h4>Привет, я Сергей</h4><Tag>&lt;/h1&gt;</Tag></Ptitle>

                            <Ptext>
                                <Tag>&lt;p <Class>class=<Green>"Как я попал в профессию"</Green></Class>&gt;</Tag>
                                <SectionText paddingLeft={'35px'}>
                                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum
                                    является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий
                                    безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem
                                    Ipsum
                                    для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений
                                    пять
                                    веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили
                                    публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее
                                    время,
                                    программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется
                                    Lorem
                                    Ipsum.
                                </SectionText>
                                <Tag>&lt;/p&gt;</Tag>
                            </Ptext>

                            <Ptext>
                                <Tag>&lt;p <Class>class=<Green>"Как я попал в профессию"</Green></Class>&gt;</Tag>
                                <SectionText paddingLeft={'35px'}>
                                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum
                                    является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий
                                    безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem
                                    Ipsum
                                    для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений
                                    пять
                                    веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили
                                    публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее
                                    время,
                                    программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется
                                    Lorem
                                    Ipsum.
                                </SectionText>
                                <Tag>&lt;/p&gt;</Tag>
                            </Ptext>
                        </FlexWrapper>

                        <Tag>&lt;/Article&gt;</Tag>
                    </Article>

                </AboutMePage>
            </Container>
        </S.AboutMe>
    );
};

const AboutMePage = styled.div`
    outline: 1px solid ${theme.color.main};
    color: ${theme.colorWebstorm.text};
`
const Article = styled.div`
    padding: 30px 15px;
`

const AboutMePageHeader = styled.div`
    padding: 15px;
    outline: 1px solid ${theme.color.main};
    display: flex;
    align-items: center;
    justify-content: end;
`

const Close = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Tahoma', sans-serif;
    font-size: 14px;
    color: black;
    background-color: #c0c0c0;
    border: 2px solid #fff;
    border-right-color: #808080;
    border-bottom-color: #808080;
    border-left-color: #dfdfdf;
    border-top-color: #dfdfdf;
    padding: 2px 6px;
    box-shadow: 1px 1px 0 #808080, inset 1px 1px 0 #fff;
    text-align: center;
`;

const Tag = styled.div`
    color: ${theme.colorWebstorm.htmltag};
    letter-spacing: 1px;
`
const Ptitle = styled.div`
    display: flex;
    margin-bottom: 30px;
    margin-top: 20px;

    h4 {
        font-weight: 400;
        font-size: 16px;
        color: ${theme.colorWebstorm.text};
    }
`
const Ptext = styled.div`
    margin-bottom: 20px;
`;
const Class = styled.span`
    letter-spacing: 0.5px;
`
const Green = styled.span`
    color: ${theme.colorWebstorm.green};
`




