import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "../../styles/Theme";



export const Logo = () => {
    return (
        <LogoLinkWrapp href={''}>

            <FlexWrapper align={'center'}>
                <Icon iconId={'logo'} width={'16'} height={'16'} wiewBox={'0 0 16 16'}/>
                <LogoText>Elias</LogoText>
            </FlexWrapper>

        </LogoLinkWrapp>


    );
};

const LogoLinkWrapp = styled.a`
  position: relative;
  z-index: 9999;
  display: flex;
  align-items: center;
  height: 30px;
`

const LogoText = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: ${theme.color.mainFont};
  margin-left: 8px;
`


