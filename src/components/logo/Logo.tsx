import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "../../styles/Theme";
export const Logo = () => {
    return (
        <a href="">
            <FlexWrapper align={'center'}>
                <Icon iconId={'logo'} width={'16'} height={'16'} wiewBox={'0 0 16 16'}/>
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