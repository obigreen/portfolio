import React from 'react';
import Photo from '../../../../assets/img/photo-top.png'
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from "../Main_Styles"



export const MainPhoto = () => {
    return (
        <S.MainProtoWrapper>
            <FlexWrapper direction={'column'} align={'end'}>
                <S.ImgWrapp>
                    <S.Img src={Photo} alt=""/>
                </S.ImgWrapp>
            </FlexWrapper>
        </S.MainProtoWrapper>
    );
};


