import React from 'react';
import {Icon} from "../icon/Icon";
import {FlexWrapper} from "../FlexWrapper";
import {S} from "./Logo_Styles"



export const Logo = () => {
    return (
        <S.LogoLinkWrapp href={''}>
            <FlexWrapper align={'center'}>
                <Icon iconId={'logo'} width={'32'} height={'32'} viewBox={'0 0 32 32'}/>
            </FlexWrapper>
        </S.LogoLinkWrapp>
    );
};



