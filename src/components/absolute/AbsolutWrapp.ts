import styled from 'styled-components';

type AbsoluteBoxPropsType = {
    bottom?: string;
    right?: string;
    top?: string;
    left?: string;
    index?: string;
    rotate?: string;
}

export const AbsolutWrapp = styled.div<AbsoluteBoxPropsType>`
    position: absolute;
    bottom: ${props => props.bottom || 'auto'};
    right: ${props => props.right || 'auto'};
    top: ${props => props.top || 'auto'};
    left: ${props => props.left || 'auto'};
    z-index: ${props => props.index || '0'};;
    rotate: ${props => props.rotate || '0deg'};
`;
