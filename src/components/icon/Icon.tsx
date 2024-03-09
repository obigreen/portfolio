import React from 'react';
import iconSprite from '../../assets/img/icons-sprite.svg'


type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    wiewBox?: string
}
export const Icon = (props: IconPropsType) =>  {
    return (
        <svg width={props.width || "16"} height={props.height || "17"} viewBox={props.wiewBox || "0 0 16 17"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${props.iconId}`}></use>
        </svg>
    );
};
