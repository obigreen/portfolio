import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {AccentAnimationCol} from "../AccentAnimation";
import {Lang} from "../../layout/header/lang/Lang";

export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <List key={index}>
                        <Link href="">{item}</Link>
                    </List>
                })}
                <List>
                    <Lang/>
                </List>

            </ul>
        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 42px;
  }
`
const List = styled.li`
  font-weight: 400;
  font-size: 16px;
  color: ${theme.color.main};
`
const Link = styled.a`
  &:hover {
    color: ${theme.color.mainFont};
    font-weight: bold;
  }

  &::before {
    content: '#';
    animation: ${AccentAnimationCol} 12s linear infinite alternate;
  }
`