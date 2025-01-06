import styled from "styled-components";
import {theme} from "../styles/Theme";


export const ButtonWin98 = styled.button`
    display: inline-block;
    font-family: 'Tahoma', sans-serif;
    font-size: 14px;
    color: ${theme.color.backround};
    background-color: #c0c0c0;
    border: 2px solid #fff;
    border-right-color: #808080;
    border-bottom-color: #808080;
    border-left-color: #dfdfdf;
    border-top-color: #dfdfdf;
    padding: 2px 6px;
    box-shadow: 1px 1px 0 #808080, inset 1px 1px 0 #fff;
    cursor: pointer;
    text-align: center;

    &:active {
        border-top-color: #808080;
        border-left-color: #808080;
        border-right-color: #dfdfdf;
        border-bottom-color: #dfdfdf;
        box-shadow: inset 1px 1px 0 #808080, 1px 1px 0 #fff;
        transform: translate(1px, 1px);
    }
`