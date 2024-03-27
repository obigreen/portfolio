import React from 'react';
import {FlexWrapper} from "../FlexWrapper";
import {S} from "./LogoConstruct_Styles"

export const LogoCostruct: React.FC = () => {
    return (
        <S.LogoCostructWrapp>
            <FlexWrapper justify={'end'} align={'center'}>
                <S.Interior/>
            </FlexWrapper>
            <FlexWrapper justify={'start'} align={'center'}>
                <S.Interior/>
            </FlexWrapper>
        </S.LogoCostructWrapp>
    );
};


