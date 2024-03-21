import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionText} from "../../../components/SectionText";
import {FlexWrapper} from "../../../components/FlexWrapper";
import BottomFhoto from "../../../assets/img/photo-bottom.png"
import {Button} from "../../../components/Button";
import {Container} from "../../../styles/Container";
import {AccentAnimationBg, Rotate} from "../../../styles/AccentAnimation";
import after from "../../../assets/img/pseudoelements/dots.svg"
import {theme} from "../../../styles/Theme";
import dotsbg from "../../../assets/img/pseudoelements/dotsbg.svg"

export const AboutMe = () => {
    return (
        <StyledAboutMe>
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
                        <Button><Link href={''}>Read more -&gt;</Link></Button>
                    </FlexWrapper>
                    <ImageWrapper>
                        <Image src={BottomFhoto} alt=""/>
                    </ImageWrapper>
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
    margin-bottom: 23px;
  }

  padding-bottom: 112px;
  
  position: relative;
  overflow-x: hidden;
  
  
  ${FlexWrapper} {
    @media ${theme.media.tablet} {
      flex-direction: column;
    }
  }

  &::before {
    content: '';
    border: 1px solid ${theme.color.main};
    position: absolute;
    width: 155px;
    height: 155px;
    background-color: transparent;
    left: calc(50% - 820px);
    top: 30%;
    animation: ${Rotate} 16s linear infinite;
  }
  
  &::after {
    content: '';
    background-image: url("${dotsbg}");
    position: absolute;
    width: 103px;
    height: 103px;
    background-color: transparent;
    right: calc(50% - 730px);
    top: 55%;
  }
  
  
`
const Link = styled.a`

`
const ImageWrapper = styled.div`
  position: relative;
  
  &:after {
    content: '';
    background-image: url("${after}");
    background-repeat: no-repeat;
    position: absolute;
    top: 60px;
    left: 0;
    width: 327px;
    height: 276px;
  }

  &::before {
    content: '';
    width: 271px;
    height: 1px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    animation: ${AccentAnimationBg} 12s linear infinite alternate;
  }
  
  @media ${theme.media.tablet} {
    position: absolute;
    bottom: 30px;
    right: 0;
    z-index: -1;
    opacity: 0.3;
  }
`
const Image = styled.img`
    display: flex;
`
