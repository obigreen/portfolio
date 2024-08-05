import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";
import {S} from "../HeaderMenu_Styles"

export const Lang: React.FC = () => {
    return (
        <S.LangButton>
            <FlexWrapper justify={'center'} align={'center'} gap={'4px'}>
                <S.LanguageMenu>
                    EN
                </S.LanguageMenu>
                <Icon iconId={'arrow-down'} width={'30'} height={'30'} viewBox={'0 -7 30 30'}/>
            </FlexWrapper>
        </S.LangButton>
    );
};


