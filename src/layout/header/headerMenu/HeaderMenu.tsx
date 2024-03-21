import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {AccentAnimationCol} from "../../../styles/AccentAnimation";
import {Lang} from "../lang/Lang";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
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

  @media ${theme.media.tablet} {
    display: none;
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