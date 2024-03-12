import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "../../styles/Theme";
export const Logo = () => {
    return (
        <a href="" >
            <FlexWrapper>
                <Icon iconId={'logo'}/>
                <LogoText>Elias</LogoText>
            </FlexWrapper>

        </a>
    );
};



const LogoText = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: ${theme.color.mainFont};
  margin-left: 8px;
`