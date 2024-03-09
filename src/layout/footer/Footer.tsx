import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {SectionText} from "../../components/SectionText";
import {Media} from "./Media";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper  align={'center'} justify={'space-between'}>
                <FlexWrapper>
                    <Logo/>
                    <SectionText>elias@elias-dev.ml</SectionText>
                </FlexWrapper>
                <Media/>
            </FlexWrapper>
            <FlexWrapper justify={'center'}>
                <Copiright>© Copyright 2024. Made by Elias</Copiright>
            </FlexWrapper>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`

`
const Copiright = styled.small`
    
`
