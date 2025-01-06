import React from 'react';
import { Container } from "../../../styles/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./Skills_Styles";
import { ImageSlider } from "./slider/ImageSlider";
import { Icon } from "../../../components/icon/Icon";

import nodeJs from '../../../assets/img/icons/nodeJs.svg';
import telegram from '../../../assets/img/icons/telegram.svg';
import webstorm from '../../../assets/img/icons/webstorm.svg';
import { Assistant } from "./assistant/Assistant";
import {SectionTitle} from "../../../components/SectionTitle";

export const Skills = () => {
    const technologies = [
        { href: "https://developer.mozilla.org/en-US/docs/Web/HTML", iconId: "html" },
        { href: "https://developer.mozilla.org/en-US/docs/Web/CSS", iconId: "css" },
        { href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", iconId: "js" },
        { href: "https://www.typescriptlang.org/docs/", iconId: "ts" },
        { href: "https://api.jquery.com/", iconId: "jquery" },
        { href: "https://react.dev/", iconId: "react" },
        { href: "https://nextjs.org/docs", iconId: "nextJs" },
        { href: "https://git-scm.com/doc", iconId: "git" },
        { href: "https://www.npmjs.com/package/documentation", iconId: "npm" },
        { href: "https://nodejs.org/docs/latest/api/", imgSrc: nodeJs }
    ];

    const tools = [
        { href: "https://code.visualstudio.com/", iconId: "vscode" },
        { href: "https://www.jetbrains.com/webstorm/", imgSrc: webstorm },
        { href: "https://www.figma.com/", iconId: "figma" },
        { href: "https://www.adobe.com/products/photoshop.html", iconId: "photoshop" },
        { href: "https://www.adobe.com/products/premiere.html", iconId: "premerePro" }
    ];

    const socials = [
        { href: "https://github.com/obigreen", iconId: "gitHub" },
        { href: "mailto:youshtuchka@gmail.com", iconId: "gmail" },
        { href: "https://t.me/Youpushka", imgSrc: telegram },
        { href: "https://www.whatsapp.com/", iconId: "whatsapp" }
    ];

    return (
        <S.Skill id={'skills'}>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <S.WrappWrapp>
                        {[technologies, tools, socials].map((items, index) => (
                            <S.Wrap key={index}>
                                <ImageSlider>
                                    {items.map((item, idx) => (
                                        <S.IconLink key={idx} href={item.href} target={'_blank'}>
                                            {item.iconId ? (
                                                <Icon iconId={item.iconId} width={'60'} height={'60'} viewBox={'0 0 32 32'} />
                                            ) : (
                                                <S.Img src={item.imgSrc} alt="" />
                                            )}
                                        </S.IconLink>
                                    ))}
                                </ImageSlider>
                            </S.Wrap>
                        ))}
                    </S.WrappWrapp>

                    <Assistant />
                </FlexWrapper>
            </Container>
        </S.Skill>
    );
};










