import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const Lang = () => {
    return (
<LangButton href={''}>
    <FlexWrapper justify={'center'} align={'center'}>
        <LanguageMenu>
            EN
        </LanguageMenu>
        <Icon iconId={'arrow-down'}/>
    </FlexWrapper>
</LangButton>

    );
};

const LangButton = styled.a`
margin-left: 32px;
`

const LanguageMenu = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: ${theme.color.main};
  margin-right: 4px;
`

