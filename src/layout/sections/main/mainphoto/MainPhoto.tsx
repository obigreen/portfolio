import React from 'react';
import Photo from '../../../../assets/img/photo-top.png'
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from "../Main_Styles"
import {AbsolutWrapp} from "../../../../components/absolute/AbsolutWrapp";
import {Icon} from "../../../../components/icon/Icon";
import {AbsoluteBox} from "../../../../components/absolute/AbsoluteBox";


export const MainPhoto: React.FC = () => {
    return (
        <S.MainProtoWrapper>
            <FlexWrapper direction={'column'} align={'end'}>
                <S.ImgWrapp>
                    <S.Img src={Photo} alt=""/>
                </S.ImgWrapp>
                <S.ImgTitle>
                    <AbsolutWrapp bottom={'-60px'} left={'20px'} index={'-1'} rotate={'180deg'}>
                        <AbsoluteBox bottom={'31px'} left={'calc(50% - 3px)'} width={'6px'} height={'50px'}/>
                        <Icon iconId={'chipUp'} width={'62'} height={'62'} viewBox={'0 0 32 32'}/>
                    </AbsolutWrapp>
                    Sergey
                </S.ImgTitle>
            </FlexWrapper>
        </S.MainProtoWrapper>
    );
};


