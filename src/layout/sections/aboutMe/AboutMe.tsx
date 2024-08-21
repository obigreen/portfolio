import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionText} from "../../../components/SectionText";
import {FlexWrapper} from "../../../components/FlexWrapper";
import BottomFhoto from "../../../assets/img/photo-bottom.png"
import {Button} from "../../../components/Button";
import {Container} from "../../../styles/Container";

import {S} from "./AboutMe_Styles"

export const AboutMe = () => {
    return (
        <S.AboutMe id={'about-me'}>
            <Container>
                <SectionTitle width={'175%'}>about-me</SectionTitle>
                <FlexWrapper justify={'space-between'} align={'start'} gap={'15px'}>
                    <FlexWrapper direction={'column'} justify={'space-beetwen'} gap={'30px'}>
                        <SectionText>
                            Hello, i’m Elias!
                        </SectionText>
                        <SectionText>
                            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive
                            websites from
                            scratch and raise them into modern user-friendly web experiences.
                        </SectionText>
                        <SectionText>
                            Transforming my creativity and knowledge into a websites has been my passion for over a
                            year. I have
                            been helping various clients to establish their presence online. I always strive to learn
                            about the
                            newest technologies and frameworks.
                        </SectionText>
                    </FlexWrapper>
                    <S.ImageWrapper>
                        <S.Image src={BottomFhoto} alt=""/>
                    </S.ImageWrapper>
                </FlexWrapper>
            </Container>
        </S.AboutMe>
    );
};

