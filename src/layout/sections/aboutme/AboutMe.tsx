import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionText} from "../../../components/SectionText";
import {FlexWrapper} from "../../../components/FlexWrapper";
import BottomFhoto from "../../../assets/img/photo-bottom.png"
import {Button} from "../../../components/Button";
import {Container} from "../../../styles/Container";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                <FlexWrapper justify={'space-between'}>
                    <FlexWrapper direction={'column'} justify={'space-beetwen'} gap={'30px'}>
                        <SectionTitle>about-me</SectionTitle>
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
                        <Button><Link href={''}>Read more -&gt;</Link></Button>
                    </FlexWrapper>
                    <img src={BottomFhoto} alt=""/>
                </FlexWrapper>
            </Container>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
  ${FlexWrapper} > ${FlexWrapper} {
    max-width: 515px;
    width: 100%;
  }

  ${SectionTitle} {
    margin-bottom: -7px;
  }

  padding-bottom: 112px;
`
const Link = styled.a`

`
