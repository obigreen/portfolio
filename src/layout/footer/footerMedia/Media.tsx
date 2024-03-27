import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";

import {S} from "../Footer_Styles"

export const Media: React.FC = () => {
    return (
        <S.Media>
            <S.Title>Media</S.Title>
            <FlexWrapper gap={'8px'}>
                <a href="">
                    <Icon iconId={'github'} width={'32'} height={'32'} wiewBox={'0 0 32 32'}/>
                </a>
                <a href="">
                    <Icon iconId={'figma'} width={'32'} height={'32'} wiewBox={'0 0 32 32'}/>
                </a>
                <a href="">
                    <Icon iconId={'discord'} width={'32'} height={'32'} wiewBox={'0 0 32 32'}/>
                </a>
            </FlexWrapper>
        </S.Media>
    );
};

