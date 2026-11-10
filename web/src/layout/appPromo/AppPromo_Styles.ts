import styled, {css, keyframes} from "styled-components";
import {theme} from "../../styles/Theme";
import {BackgroundAnimation} from "../../styles/AccentAnimation";

const logoSpin = keyframes`
    0%, 66% {
        transform: perspective(180px) rotateY(0deg);
    }
    73% {
        transform: perspective(180px) rotateY(115deg);
    }
    80% {
        transform: perspective(180px) rotateY(245deg);
    }
    86% {
        transform: perspective(180px) rotateY(365deg);
    }
    90% {
        transform: perspective(180px) rotateY(345deg);
    }
    94% {
        transform: perspective(180px) rotateY(361deg);
    }
    97% {
        transform: perspective(180px) rotateY(356deg);
    }
    100% {
        transform: perspective(180px) rotateY(360deg);
    }
`;

const PromoCard = styled.aside<{ $expanded: boolean }>`
    position: fixed;
    z-index: 1000;
    right: 24px;
    bottom: 24px;
    width: ${({$expanded}) => $expanded ? "min(350px, calc(100vw - 40px))" : "76px"};
    height: ${({$expanded}) => $expanded ? "286px" : "76px"};
    overflow: hidden;
    background: ${theme.color.backround};
    border: 1px solid ${theme.color.main};
    transition: width 320ms ease, height 320ms ease;

    @media ${theme.media.mobile} {
        right: 12px;
        bottom: 12px;
        width: ${({$expanded}) => $expanded ? "calc(100vw - 24px)" : "72px"};
        height: ${({$expanded}) => $expanded ? "278px" : "72px"};
    }

    @media (prefers-reduced-motion: reduce) {
        transition: none;
    }
`;

const TitleBar = styled.header<{ $expanded: boolean }>`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 25px;
    padding: 3px 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #15251d;
    background: #41b883;
    animation: ${BackgroundAnimation} 12s linear infinite;
    font: 600 12px Tahoma, sans-serif;
    opacity: ${({$expanded}) => $expanded ? 1 : 0};
    visibility: ${({$expanded}) => $expanded ? "visible" : "hidden"};
    transition: opacity 160ms ease;

    @media (prefers-reduced-motion: reduce) {
        animation: none;
        transition: none;
    }
`;

const Title = styled.h2`
    margin: 0;
    font: inherit;
`;

const CollapseButton = styled.button`
    display: grid;
    width: 18px;
    height: 18px;
    place-items: center;
    color: #111;
    background: #c0c0c0;
    border: 2px solid #fff;
    border-top-color: #fff;
    border-left-color: #dfdfdf;
    border-right-color: #808080;
    border-bottom-color: #808080;
    font: 12px Tahoma, sans-serif;
    line-height: 1;
    cursor: pointer;

    &:active {
        border-top-color: #808080;
        border-left-color: #808080;
        border-right-color: #dfdfdf;
        border-bottom-color: #dfdfdf;
    }
`;

const LogoButton = styled.button<{ $expanded: boolean }>`
    position: absolute;
    top: ${({$expanded}) => $expanded ? "38px" : "50%"};
    left: ${({$expanded}) => $expanded ? "14px" : "50%"};
    display: grid;
    width: 56px;
    height: 56px;
    place-items: center;
    transform: ${({$expanded}) => $expanded ? "none" : "translate(-50%, -50%)"};
    background: #41b883;
    animation: ${BackgroundAnimation} 12s linear infinite;
    border: 2px solid #fff;
    border-top-color: #fff;
    border-left-color: #dfdfdf;
    border-right-color: #808080;
    border-bottom-color: #808080;
    box-shadow: inset 1px 1px 0 #fff, 1px 1px 0 #808080;
    cursor: pointer;
    transition: top 320ms ease, left 320ms ease, transform 320ms ease;

    &:focus-visible {
        outline: 2px solid #fff;
        outline-offset: 4px;
    }

    @media (prefers-reduced-motion: reduce) {
        transition: none;
        animation: none;
    }
`;

const LogoImage = styled.img<{ $expanded: boolean }>`
    display: block;
    width: 40px;
    height: 40px;
    object-fit: contain;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    animation: ${({$expanded}) => $expanded ? "none" : css`${logoSpin} 5s ease-in-out infinite`};

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
`;

const PromoContent = styled.div<{ $expanded: boolean }>`
    position: absolute;
    top: 108px;
    right: 14px;
    left: 14px;
    opacity: ${({$expanded}) => $expanded ? 1 : 0};
    visibility: ${({$expanded}) => $expanded ? "visible" : "hidden"};
    pointer-events: ${({$expanded}) => $expanded ? "auto" : "none"};
    transition: opacity 180ms ease 80ms;

    @media ${theme.media.mobile} {
        top: 104px;
    }

    @media (prefers-reduced-motion: reduce) {
        transition: none;
    }
`;

const Description = styled.p`
    margin-bottom: 12px;
    color: ${theme.color.main};
    font-family: "Fira Code", monospace;
    font-size: 13px;
    line-height: 1.5;
`;

const ScreenReaderText = styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
`;

const OpenLink = styled.a`
    display: inline-block;
    padding: 4px 8px;
    color: #111;
    background: #c0c0c0;
    border: 2px solid #fff;
    border-top-color: #fff;
    border-left-color: #dfdfdf;
    border-right-color: #808080;
    border-bottom-color: #808080;
    box-shadow: inset 1px 1px 0 #fff, 1px 1px 0 #808080;
    font: 13px Tahoma, sans-serif;

    &:active {
        border-top-color: #808080;
        border-left-color: #808080;
        border-right-color: #dfdfdf;
        border-bottom-color: #dfdfdf;
        box-shadow: inset 1px 1px 0 #808080;
        transform: translate(1px, 1px);
    }

    &:focus-visible {
        outline: 2px solid #41b883;
        outline-offset: 3px;
    }
`;

export const S = {
    PromoCard,
    TitleBar,
    Title,
    CollapseButton,
    LogoButton,
    LogoImage,
    PromoContent,
    Description,
    ScreenReaderText,
    OpenLink,
};
