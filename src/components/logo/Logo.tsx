import React from 'react';
import {Icon} from "../icon/Icon";
import {FlexWrapper} from "../FlexWrapper";
import {S} from "./Logo_Styles"



export const Logo: React.FC = () => {
    return (
        <S.LogoLinkWrapp href={''}>
            <FlexWrapper align={'center'}>
                <Icon iconId={'logo'} width={'16'} height={'16'} wiewBox={'0 0 16 16'}/>
                <S.LogoText>Elias</S.LogoText>
            </FlexWrapper>
        </S.LogoLinkWrapp>
    );
};



