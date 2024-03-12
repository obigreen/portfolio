import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <List key={index}>
                        <Link href="">{item}</Link>
                    </List>
                })}
            </ul>
        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 42px;
  }
`
const List = styled.li`

`
const Link = styled.a`
  font-weight: 400;
  font-size: 16px;
  color: ${theme.color.main};
  
  &:hover {
    color: ${theme.color.mainFont};
    font-weight: bold;
  }
`