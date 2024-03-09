import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionText} from "../../../components/SectionText";
import {FlexWrapper} from "../../../components/FlexWrapper";
import BottomFhoto from "../../../assets/img/photo-bottom.png"
import {Button} from "../../../components/Button";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <SectionTitle>about-me</SectionTitle>
            <FlexWrapper align={'center'}>
                <FlexWrapper direction={'column'} justify={'space-beetwen'} gap={'30px'}>
                    <SectionText>
                        Hello, i’m Elias!
                    </SectionText>
                    <SectionText>
                        I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from
                        scratch and raise them into modern user-friendly web experiences.
                    </SectionText>
                    <SectionText>
                        Transforming my creativity and knowledge into a websites has been my passion for over a year. I have
                        been helping various clients to establish their presence online. I always strive to learn about the
                        newest technologies and frameworks.
                    </SectionText>
                    <Button type={"submit"} width={'buttonWidth'}>Read more</Button>
                </FlexWrapper>
                <img src={BottomFhoto} alt=""/>
            </FlexWrapper>



        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`

`
