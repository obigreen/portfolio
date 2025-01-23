import {theme} from "./Theme";

type FontPropsStyle = {
    family?: string
    weight?: number
    lineHeight?: number
    color?: string

    minW: number
    maxW: number
}

export const font = ({family, weight, color, lineHeight, minW, maxW}: FontPropsStyle) => `
font-family: ${family || "inherit"};
font-weight: ${weight || 400};
line-height: ${lineHeight || 1.2};
color: ${color || theme.color.main};
font-size: clamp(${minW}px, calc( (100vw - 360px)/(1440 - 360) * (${maxW} - ${minW}) + ${minW}px), ${maxW}px);
`
