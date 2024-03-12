import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {SectionText} from "../../components/SectionText";
import {Media} from "./Media";
import {Container} from "../../styles/Container";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <FlexWrapper direction={'column'} >
                        <FlexWrapper gap={'24px'}>
                            <Logo/>
                            <SectionText>elias@elias-dev.ml</SectionText>
                        </FlexWrapper>
                        <Description>Web designer and front-end developer</Description>
                    </FlexWrapper>
                    <Media/>
                </FlexWrapper>
                <FlexWrapper justify={'center'}>
                    <Copiright>© Copyright 2024. Made by Elias</Copiright>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
padding: 32px 0;
  border-top: 1px solid ${theme.color.main};
`
const Copiright = styled.small`
  font-weight: 400;
  font-size: 16px;
  color: ${theme.color.main};
  margin-top: 48px;
`
const Description = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 156%;
  color: ${theme.color.main};
  margin-top: 16px;
`
