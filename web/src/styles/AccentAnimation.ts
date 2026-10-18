import { keyframes, css } from "styled-components";

/*
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
        color: #01bbfe;
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
        border-color: #01bbfe;
    }
    100% {
        border-color: #07F2FF;
    }
`;
*/

export const ColorAnimation = keyframes`
    0% {
        color: #157940;
    }
    10% {
        color: #0E5B35;
    }
    20% {
        color: #083E24;
    }
    30% {
        color: #105F3A;
    }
    40% {
        color: #15794D;
    }
    50% {
        color: #269460;
    }
    60% {
        color: #3FB27B;
    }
    70% {
        color: #62C99A;
    }
    80% {
        color: #86DDB5;
    }
    90% {
        color: #4EBE88;
    }
    100% {
        color: #157940;
    }
`;

export const BorderAnimation = keyframes`
    0% {
        border-color: #157940;
    }
    10% {
        border-color: #0E5B35;
    }
    20% {
        border-color: #083E24;
    }
    30% {
        border-color: #105F3A;
    }
    40% {
        border-color: #15794D;
    }
    50% {
        border-color: #269460;
    }
    60% {
        border-color: #3FB27B;
    }
    70% {
        border-color: #62C99A;
    }
    80% {
        border-color: #86DDB5;
    }
    90% {
        border-color: #4EBE88;
    }
    100% {
        border-color: #157940;
    }
`;

export const AccentAnimationBr = css`
    animation: ${BorderAnimation} 12s linear infinite;
`;

export const AccentAnimationText = css`
    animation: ${ColorAnimation} 12s linear infinite;
`;
