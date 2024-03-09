import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {Logo} from "../../components/logo/Logo";

const item = ["home", "works", "about-me", "contacts"]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={item}/>
            {/*<FlexWrapper>*/}
            {/*    <LanguageMenu>*/}
            {/*        EN*/}
            {/*    </LanguageMenu>*/}
            {/*    <Icon iconId={'arrow-down'}/>*/}
            {/*</FlexWrapper>*/}
        </StyledHeader>
    );
};


// const LanguageMenu = styled.span`
//   //font-family: var(--font-family);
//   font-weight: 600;
//   font-size: 16px;
//   color: #abb2bf;
//   margin-right: 4px;
// `


const StyledHeader = styled.header`
  padding: 32px 0 8px 0;
  display: flex;
  justify-content: space-between;
`



