import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";

export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <FlexWrapper>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <li key={index}><a href="">{item}</a></li>
                    })}
                </ul>
            </FlexWrapper>
        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 32px;
  }


`