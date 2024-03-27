import React from 'react';
import {MediaLinks} from "../../../../components/mediaLinks/MediaLinks";
import {S} from "../HeaderMenu_Styles"

export const FixedLink:React.FC = () => {
    return (
        <S.FixedLink>
            <S.Line/>
            <MediaLinks/>
        </S.FixedLink>
    );
};
