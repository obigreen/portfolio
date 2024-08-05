import React from 'react';
import Photo from '../../../../assets/img/photo-top.png'
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {LogoCostruct} from "../../../../components/logoConstruct/LogoCostruct";
import {S} from "../Main_Styles"


export const MainPhoto: React.FC = () => {
    return (
        <S.MainProtoWrapper>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.ImgWrapp>
                    <S.Img src={Photo} alt=""/>
                </S.ImgWrapp>
                <S.ImgTitle>Sergey</S.ImgTitle>
            </FlexWrapper>
        </S.MainProtoWrapper>
    );
};


