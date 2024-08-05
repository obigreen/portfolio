import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {LogoCostruct} from "../../../../components/logoConstruct/LogoCostruct";

import {S} from "../Skills_Styles"

export const SkillsVectors: React.FC = () => {
    return (
        <S.Vectors>
            <S.IconWrapper top="38px" left="0">
                <Icon iconId={'dots'} width={'63'} height={'63'} viewBox={'0 0 84 84'}/>
            </S.IconWrapper>
            <S.IconWrapper top="0" right="36px">
                <S.Border width={'86px'} height={'86px'}/>
            </S.IconWrapper>
            <S.IconWrapper bottom="37px" right="0">
                <S.Border width={'52px'} height={'52px'}/>
            </S.IconWrapper>
            <S.IconWrapper bottom="0" left="0">
                <LogoCostruct/>
            </S.IconWrapper>
        </S.Vectors>
    );
};


