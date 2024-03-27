import React from 'react';
import Photo from '../../../../assets/img/photo-top.png'
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {LogoCostruct} from "../../../../components/LogoCostruct";
import {S} from "../Main_Styles"


export const MainPhoto: React.FC = () => {
    return (
        <S.MainProtoWrapper>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.ImgWrapp>
                    <S.IconAbsolutWrapp>
                        <LogoCostruct/>
                    </S.IconAbsolutWrapp>
                    <S.Img src={Photo} alt=""/>
                </S.ImgWrapp>
                <S.ImgTitle>Currently working on <span>Portfolio</span></S.ImgTitle>
            </FlexWrapper>
        </S.MainProtoWrapper>
    );
};


