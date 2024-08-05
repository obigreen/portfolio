import React from 'react';
import {Container} from "../../../styles/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from "./Quote_Styles"
import {ImageSlider} from "../../../components/slider/ImageSlider";
import {Icon} from "../../../components/icon/Icon";
import styled from 'styled-components';

export const Quote: React.FC = () => {
    return (
        <S.Quote>
            <Container>
                <FlexWrapper>
                    <WrappWrapp>
                        <Wrap>
                            <ImageSlider>
                                <a href="https://www.github.com/" target={'_blank'}>
                                    <Icon iconId={'github'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </a>
                                <a href="https://www.twitter.com/" target={'_blank'}>
                                    <Icon iconId={'twitter'} width={'62'} height={'62'} viewBox={'0 0 32 32'}/>
                                </a>
                                <a href="https://www.linkedin.com/" target={'_blank'}>
                                    <Icon iconId={'linkedin'} width={'62'} height={'62'} viewBox={'0 0 32 32'}/>
                                </a>
                                <a href="https://www.github.com/" target={'_blank'}>
                                    <Icon iconId={'github'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </a>
                                <a href="https://www.twitter.com/" target={'_blank'}>
                                    <Icon iconId={'twitter'} width={'62'} height={'62'} viewBox={'0 0 32 32'}/>
                                </a>
                            </ImageSlider>
                        </Wrap>
                        <Wrap>
                            <ImageSlider>
                                <a href="https://www.github.com/" target={'_blank'}>
                                    <Icon iconId={'github'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </a>
                                <a href="https://www.twitter.com/" target={'_blank'}>
                                    <Icon iconId={'twitter'} width={'62'} height={'62'} viewBox={'0 0 32 32'}/>
                                </a>
                                <a href="https://www.linkedin.com/" target={'_blank'}>
                                    <Icon iconId={'linkedin'} width={'62'} height={'62'} viewBox={'0 0 32 32'}/>
                                </a>
                                <a href="https://www.github.com/" target={'_blank'}>
                                    <Icon iconId={'github'} width={'60'} height={'60'} viewBox={'0 0 32 32'}/>
                                </a>
                                <a href="https://www.twitter.com/" target={'_blank'}>
                                    <Icon iconId={'twitter'} width={'62'} height={'62'} viewBox={'0 0 32 32'}/>
                                </a>
                            </ImageSlider>
                        </Wrap>
                    </WrappWrapp>


                    <S.StyledBlockquote>
                        <S.QuoteText>With great power comes great electricity bill</S.QuoteText>
                        <S.Author>- Dr. Who</S.Author>
                    </S.StyledBlockquote>

                </FlexWrapper>
            </Container>
        </S.Quote>
    );
};

const WrappWrapp = styled.div`
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;

`;


const Wrap = styled.div`
    height: 73px;
    width: 100%;
    //margin-bottom: 20px;
`;





