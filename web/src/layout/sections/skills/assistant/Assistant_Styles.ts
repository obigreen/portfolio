import {theme} from "../../../../styles/Theme";
import styled, {keyframes} from "styled-components";

const showFirstLoadingDot = keyframes`
    0%, 24% {
        visibility: hidden;
    }

    25%, 100% {
        visibility: visible;
    }
`;

const showSecondLoadingDot = keyframes`
    0%, 49% {
        visibility: hidden;
    }

    50%, 100% {
        visibility: visible;
    }
`;

const showThirdLoadingDot = keyframes`
    0%, 74% {
        visibility: hidden;
    }

    75%, 100% {
        visibility: visible;
    }
`;

const AssistantWrap = styled.div`
    position: relative;
    max-width: 400px;
    width: 100%;
    height: 400px;
    outline: 1px solid ${theme.color.main};
    padding: 20px;
`
const TextareaOutp = styled.textarea`
    resize: none;
    overflow: auto;
    padding: 10px;
    height: 200px;
    background: transparent;
    border: none;
    color: ${theme.color.mainFont};
    outline: 1px solid ${theme.color.main};

    &::placeholder {
        color: ${theme.color.mainFont};
    }
`
const TextareaInp = styled.textarea`
    resize: none;
    overflow: auto;
    padding: 10px 10px 35px 10px;
    height: 100px;
    border: none;
    outline: 1px solid ${theme.color.main};
    background: transparent;
    color: ${theme.color.mainFont};

    &::placeholder {
        color: ${theme.color.mainFont};
    }
`

const Aibutton = styled.div`
    position: absolute;
    bottom: 5px;
    right: 5px;
`

const CharacterCounter = styled.span`
    position: absolute;
    left: 10px;
    bottom: 10px;
    color: ${theme.color.mainFont};
    font-size: 12px;
    line-height: 1;
    opacity: 0.65;
    pointer-events: none;
`;

const LoadingDots = styled.span`
    display: inline-flex;
    width: 12px;
    text-align: left;

    span:nth-child(1) {
        animation: ${showFirstLoadingDot} 1.2s step-end infinite;
    }

    span:nth-child(2) {
        animation: ${showSecondLoadingDot} 1.2s step-end infinite;
    }

    span:nth-child(3) {
        animation: ${showThirdLoadingDot} 1.2s step-end infinite;
    }

    @media (prefers-reduced-motion: reduce) {
        span {
            visibility: visible;
            animation: none;
        }
    }
`;

// Вращающиеся шестеренки
// // Анимация вращения по часовой стрелке
// const rotateClockwise = keyframes`
//     from {
//         transform: rotate(0deg);
//     }
//     to {
//         transform: rotate(360deg);
//     }
// `;
//
// // Анимация вращения против часовой стрелки
// const rotateCounterClockwise = keyframes`
//     from {
//         transform: rotate(0deg);
//     }
//     to {
//         transform: rotate(-360deg);
//     }
// `;
//
// const GearWrap = styled.div`
//     position: absolute;
//     top: 25px;
//     right: 25px;
//     width: 100px;
//     height: 100px;
// `;
//
// const GearWrap2 = styled.div`
//     position: relative;
//     width: 100%;
//     height: 100%;
// `;
//
// const Gear = styled.div`
//     position: absolute;
//     width: 56px;
//     height: 56px;
//     transform-origin: center;
// `;
//
// const GearLeft = styled(Gear)`
//     top: 0;
//     left: 0;
//     animation: ${rotateClockwise} 5s linear infinite;
//     animation-delay: 0.30s;
//
// `;
//
// const GearRight = styled(Gear)`
//   top: 0;
//   right: 0;
//   width: 51px;
//   animation: ${rotateCounterClockwise} 5s linear infinite;
// `;
//
// const GearImage = styled.img`
//   width: 100%;
//   height: 100%;
//
// `;
// Вращающиеся шестеренки


// БЕГУЩАЯ СТРОКА С ПРЕДУПРЕЖДЕНИЕМ
// const marqueeAnimation = keyframes`
//     from {
//         transform: translateX(20%); /* Текст начинается в видимой области */
//     }
//     to {
//         transform: translateX(-100%); /* Текст уходит полностью за пределы */
//     }
// `;

// const MarqueeWrap = styled.div`
//     position: absolute;
//     bottom: 170px;
//     width: 100%;
//     overflow: hidden;
// `;

// const Marquee = styled.div`
//     display: inline-block;
//     white-space: nowrap;
//     color: ${theme.color.mainFont};
//     font-size: 18px;
//     animation: ${marqueeAnimation} 40s linear infinite;
//     padding: 5px 0;
//     min-width: 100%;
// `;
// БЕГУЩАЯ СТРОКА С ПРЕДУПРЕЖДЕНИЕМ


// Иконка ремонта
// const Repair = styled.div`
//     position: absolute;
//     bottom: -18px;
//     left: -25px;
//
// `;
// const RepairImg = styled.img`
//
// `;
// Иконка ремонта



export const S = {
    AssistantWrap, TextareaOutp, TextareaInp, Aibutton, CharacterCounter, LoadingDots
}
