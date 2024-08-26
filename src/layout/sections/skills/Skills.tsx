import React from 'react';
import {Container} from "../../../styles/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from "./Skills_Styles"
import {ImageSlider} from "../../../components/slider/ImageSlider";
import {Icon} from "../../../components/icon/Icon";
import styled from 'styled-components';


import nodeJs from '../../../assets/img/icons/nodeJs.svg'
import telegram from '../../../assets/img/icons/telegram.svg'
import webstorm from '../../../assets/img/icons/webstorm.svg'
import {Assistant} from "./assistant/Assistant";
import {theme} from "../../../styles/Theme";

export const Skills = () => {
    return (
        <S.Skill>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <WrappWrapp>
                        {/*tehnologies*/}
                        <Wrap>
                            <ImageSlider>
                                <IconLink href="https://developer.mozilla.org/en-US/docs/Web/HTML" target={'_blank'}>
                                    <Icon iconId={'html'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href="https://developer.mozilla.org/en-US/docs/Web/CSS" target={'_blank'}>
                                    <Icon iconId={'css'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target={'_blank'}>
                                    <Icon iconId={'js'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href="https://www.typescriptlang.org/docs/" target={'_blank'}>
                                    <Icon iconId={'ts'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href="https://api.jquery.com/" target={'_blank'}>
                                    <Icon iconId={'jquery'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href="https://react.dev/" target={'_blank'}>
                                    <Icon iconId={'react'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href="https://nextjs.org/docs" target={'_blank'}>
                                    <Icon iconId={'nextJs'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href="https://git-scm.com/doc" target={'_blank'}>
                                    <Icon iconId={'git'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href="https://www.npmjs.com/package/documentation" target={'_blank'}>
                                    <Icon iconId={'npm'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href="https://nodejs.org/docs/latest/api/" target={'_blank'}>
                                    <Img src={nodeJs} alt=""/>
                                </IconLink>
                            </ImageSlider>
                        </Wrap>
                        {/*tools*/}
                        <Wrap>
                            <ImageSlider>
                                <IconLink href="https://code.visualstudio.com/" target={'_blank'}>
                                    <Icon iconId={'vscode'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href="https://www.jetbrains.com/webstorm/" target={'_blank'}>
                                    <Img src={webstorm} alt=""/>
                                </IconLink>
                                <IconLink href="" target={'_blank'}>
                                    <Icon iconId={'figma'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href="" target={'_blank'}>
                                    <Icon iconId={'photoshop'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href="" target={'_blank'}>
                                    <Icon iconId={'premerePro'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                            </ImageSlider>
                        </Wrap>
                        {/*socials*/}
                        <Wrap>
                            <ImageSlider>
                                <IconLink href="https://github.com/obigreen" target={'_blank'}>
                                    <Icon iconId={'gitHub'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href="mailto:https://youshtuchka@gmail.com" target={'_blank'}>
                                    <Icon iconId={'gmail'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href="https://t.me/Youpushka" target={'_blank'}>
                                    <Img src={telegram} alt=""/>
                                </IconLink>
                                <IconLink href="" target={'_blank'}>
                                    <Icon iconId={'whatsapp'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                            </ImageSlider>
                        </Wrap>
                    </WrappWrapp>

                    <Assistant></Assistant>

                </FlexWrapper>
            </Container>
        </S.Skill>
    );
};

const WrappWrapp = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;


const Wrap = styled.div`
    width: 100%;

    &:not(:last-child) {
        margin-bottom: 50px;
    }

`;

const IconLink = styled.a`

    display: flex;
    margin-top: 2px;
`


const Img = styled.img`
    width: 60px;
    height: 60px;
`;







