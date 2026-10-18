import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-scroll";
import {ColorAnimation} from "../../../styles/AccentAnimation";


//Menu
const MenuItem = styled.li`
    font-weight: 400;
    font-size: 16px;
    color: ${theme.color.mainFont};

    @media ${theme.media.tablet} {
        font-size: 32px;
    }
`

const NavLink = styled(Link)`
    &:hover {
        color: ${theme.color.mainFont};
        font-weight: bold;
    }

    &::before {
        content: '#';
        animation: ${ColorAnimation} 12s linear infinite alternate;
    }
`

//Desctop
const DesctopMenu = styled.nav`
    ul {
        display: flex;
        align-items: center;
        gap: 42px;
    }
`

//Mobile
const MobileMenu = styled.nav`

`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: 14px;
    right: 10px;
    width: 30px;
    height: 30px;
    z-index: 9999;

    span {
        display: block;
        width: 30px;
        height: 2px;
        position: absolute;
        transition: ${theme.animations.transition};
        background-color: rgba(255, 255, 255, 0);


        &::before {
            content: '';
            display: block;
            width: 30px;
            height: 2px;
            background-color: ${theme.color.mainFont};
            background-color: ${theme.color.mainFont};
            position: absolute;
            transition: ${theme.animations.transition};
            transform: translateY(-5px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: translateY(0) rotate(45deg);
            `}
        }

        &::after {
            content: '';
            display: block;
            width: 30px;
            height: 2px;
            background-color: ${theme.color.mainFont};
            background-color: ${theme.color.mainFont};
            position: absolute;
            transition: ${theme.animations.transition};
            transform: translateY(5px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: translateY(0) rotate(-45deg);
            `}
        }
    }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 999;
    background-color: ${theme.color.backround};
    transform: translateX(-100%);
    transition: ${theme.animations.transition};
    padding: 100px 16px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        flex-direction: column;
        align-items: start;
        transform: translateX(0);
    `}
    ul {
        display: flex;
        gap: 42px;
        flex-direction: column;
        align-items: start;
    }
`

// Lang
const LangButton = styled.button`
    font-weight: 600;
    font-size: 16px;
    @media ${theme.media.tablet} {
        font-size: 32px;
    }
`

const LanguageMenu = styled.p`
    color: ${theme.color.main}
`

// FixedLink
export const FixedLink = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 17px;
    top: -32px;
    background-color: rgba(40, 44, 51, 0.89);
    padding: 0 5px 5px 5px;

    @media ${theme.media.fixedLinks} {
        display: none;
    }
`

const Line = styled.div`
    width: 1px;
    height: 190px;
    background-color: ${theme.color.main};
    margin-bottom: 8px;
`


export const S = {
    MenuItem, NavLink, DesctopMenu, MobileMenu, BurgerButton, MobileMenuPopup,
    LangButton, LanguageMenu,
    FixedLink, Line
}
