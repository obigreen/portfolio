import { keyframes, css } from "styled-components";

export const ColorAnimation = keyframes`
    0% {
        color: #07F2FF;
    }
    10% {
        color: #0DF3A8;
    }
    20% {
        color: #01F35B;
    }
    30% {
        color: #F3D35C;
    }
    40% {
        color: #FF7C70;
    }
    50% {
        color: #FC6771;
    }
    60% {
        color: #FF4FC2;
    }
    70% {
        color: #C862FA;
    }
    80% {
        color: #6BA5FF;
    }
    90% {
        color: #01EFFE;
    }
    100% {
        color: #07F2FF;
    }
`;



export const BorderAnimation = keyframes`
    0% {
        border-color: #07F2FF;
    }
    10% {
        border-color: #0DF3A8;
    }
    20% {
        border-color: #01F35B;
    }
    30% {
        border-color: #F3D35C;
    }
    40% {
        border-color: #FF7C70;
    }
    50% {
        border-color: #FC6771;
    }
    60% {
        border-color: #FF4FC2;
    }
    70% {
        border-color: #C862FA;
    }
    80% {
        border-color: #6BA5FF;
    }
    90% {
        border-color: #01EFFE;
    }
    100% {
        border-color: #07F2FF;
    }
`;

export const AccentAnimationBr = css`
    animation: ${BorderAnimation} 12s linear infinite alternate;
`;

