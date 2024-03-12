import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../styles/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Lang} from "./lang/Lang";

const item = ["home", "works", "about-me", "contacts"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <FlexWrapper>
                        <Menu menuItems={item}/>
                        <Lang/>
                    </FlexWrapper>
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



