import React from 'react';
import styled from "styled-components";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../styles/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {FixedLink} from "./fixedLinks/FixedLink";
import {MobileMenu} from "./mobileMenu/MobileMenu";

const item = ["home", "works", "about-me", "contacts"]

export const Header = () => {
    return (
        <StyledHeader>
            <FixedLink/>
            <Container>
                <FlexWrapper justify={'space-between'}>
                    <Logo/>
                    <HeaderMenu menuItems={item}/>
                    <MobileMenu menuItems={item}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
  padding: 32px 0 8px 0;
  position: fixed;
  z-index: 999;
  background-color: rgba(40, 44, 51, 0.89);
  width: 100%;
  
 
`



