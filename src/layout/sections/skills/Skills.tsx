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

export const Skills: React.FC = () => {
    return (
        <S.Quote>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <WrappWrapp>
                        {/*tehnologies*/}
                        <Wrap>
                            <ImageSlider>
                                <IconLink href="https://github.com/obigreen" target={'_blank'}>
                                    <Icon iconId={'html'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href="https://www.github.com/" target={'_blank'}>
                                    <Icon iconId={'css'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href="https://www.github.com/" target={'_blank'}>
                                    <Icon iconId={'js'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href="https://www.github.com/" target={'_blank'}>
                                    <Icon iconId={'ts'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href="https://www.github.com/" target={'_blank'}>
                                    <Icon iconId={'jquery'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href="https://www.github.com/" target={'_blank'}>
                                    <Icon iconId={'react'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href="https://www.github.com/" target={'_blank'}>
                                    <Icon iconId={'nextJs'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href="https://www.github.com/" target={'_blank'}>
                                    <Icon iconId={'git'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href="https://www.github.com/" target={'_blank'}>
                                    <Icon iconId={'npm'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href="" target={'_blank'}>
                                    <Img src={nodeJs} alt=""/>
                                </IconLink>
                            </ImageSlider>
                        </Wrap>
                        {/*tools*/}
                        <Wrap>
                            <ImageSlider>
                                <IconLink href="https://www.twitter.com/" target={'_blank'}>
                                    <Icon iconId={'vscode'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href="https://www.github.com/" target={'_blank'}>
                                    <Icon iconId={'figma'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href="https://www.github.com/" target={'_blank'}>
                                    <Icon iconId={'photoshop'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href="https://www.github.com/" target={'_blank'}>
                                    <Icon iconId={'premerePro'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href="" target={'_blank'}>
                                    <Img src={webstorm} alt=""/>
                                </IconLink>
                            </ImageSlider>
                        </Wrap>
                        {/*socials*/}
                        <Wrap>
                            <ImageSlider>
                                <IconLink href="https://github.com/obigreen" target={'_blank'}>
                                    <Icon iconId={'gitHub'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href="https://youshtuchka@gmail.com" target={'_blank'}>
                                    <Icon iconId={'gmail'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href="" target={'_blank'}>
                                    <Img src={telegram} alt=""/>
                                </IconLink>
                            </ImageSlider>
                        </Wrap>
                    </WrappWrapp>

                    <Assistant></Assistant>

                </FlexWrapper>
            </Container>
        </S.Quote>
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







