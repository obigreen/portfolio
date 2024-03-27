import React from 'react';
import {Icon} from "../icon/Icon";
import {S} from "./MediaLinks_Styled"

export const MediaLinks: React.FC = () => {
    return (
        <S.MediaLinksWrapp>
            <a href="">
                <Icon iconId={'github'} width={'32'} height={'32'} wiewBox={'0 0 32 32'}/>
            </a>
            <a href="">
                <Icon iconId={'figma'} width={'32'} height={'32'} wiewBox={'0 0 32 32'}/>
            </a>
            <a href="">
                <Icon iconId={'discord'} width={'32'} height={'32'} wiewBox={'0 0 32 32'}/>
            </a>
        </S.MediaLinksWrapp>
    );
};