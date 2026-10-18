import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

const Wrapp = styled.div`
    position: relative;
    height: 70px;
`;

const ImageContainer = styled.div`
    width: 10px;
    height: 10px;
    transform-style: preserve-3d;
    transform: perspective(1000px) rotateY(0deg);
    transition: transform 0.7s;
    position: relative;
    margin: 0 auto;
`;


const Cylinder = styled.div`
    position: absolute;
    top: calc(-50% - -39px);
    left: 50%;
    width: 100px;
    height: 70px;
    transform-style: preserve-3d;
    transform: translate(-50%, -50%);

    .side {
        position: absolute;
        background-size: cover;
        background-color: ${theme.color.backround};
    }

    .front {
        width: 100px;
        height: 70px;
        transform: translateZ(50px);
    }

    .back {
        width: 100px;
        height: 70px;
        transform: translateZ(-50px) rotateY(180deg);
    }

    .left {
        width: 100px;
        height: 70px;
        transform: rotateY(-90deg) translateX(-50px);
        transform-origin: left center;
    }

    .right {
        width: 100px;
        height: 70px;
        transform: rotateY(90deg) translateX(50px);
        transform-origin: right center;
    }
`;



const ImageSpan = styled.span<{ index: number, length: number }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: ${({ index, length }) => `rotateY(calc(${index} * 360deg / ${length})) translateZ(120px)`};
`;

const StyledContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ButtonContainer = styled.div`
    position: absolute;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    
    @media ${theme.media.desctop} {
        top: 130%;
        right: calc(50% - 40px);
    }
`;

export const S = {
    Wrapp, ImageContainer, Cylinder, ImageSpan, StyledContent, ButtonContainer
}