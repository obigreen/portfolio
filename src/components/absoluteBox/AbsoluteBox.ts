import styled from 'styled-components';
import {AccentAnimationBg} from "../../styles/AccentAnimation";

type AbsoluteBoxPropsType = {
    width?: string;
    height?: string;
    color?: string;
    bottom?: string;
    right?: string;
    top?: string;
    left?: string;
}

export const AbsoluteBox = styled.div<AbsoluteBoxPropsType>`
    width: ${props => props.width || '100px'};
    height: ${props => props.height || '100px'};
    animation: ${AccentAnimationBg} 12s linear infinite alternate;
    position: absolute;
    bottom: ${props => props.bottom || 'auto'};
    right: ${props => props.right || 'auto'};
    top: ${props => props.top || 'auto'};
    left: ${props => props.left || 'auto'};
    z-index: -1;
`;