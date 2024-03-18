import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";


export const Lang = () => {
    return (
        <LangButton href={''}>
            <FlexWrapper justify={'center'} align={'center'} gap={'4px'}>
                <LanguageMenu>
                    EN
                </LanguageMenu>
                <Icon iconId={'arrow-down'} width={'30'} height={'30'} wiewBox={'0 -7 30 30'}/>
            </FlexWrapper>
        </LangButton>


    );
};

const LangButton = styled.a`

`

const LanguageMenu = styled.p`

`

