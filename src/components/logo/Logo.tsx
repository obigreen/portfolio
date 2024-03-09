import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
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
  margin-left: 8px;
`