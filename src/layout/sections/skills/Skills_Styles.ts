import {Rotate} from "../../../styles/AccentAnimation";
import {theme} from "../../../styles/Theme";
import styled from "styled-components";

// Skills
const Quote = styled.section`
    padding-bottom: 74px;
    padding-top: 74px;
    position: relative;
    overflow-x: hidden;

    &::after {
        content: '';
        position: absolute;
        width: 91px;
        height: 91px;
        border: 1px solid ${theme.color.main};
        background-color: transparent;
        right: calc(50% - 750px);
        top: 30%;
        animation: ${Rotate} 12s linear infinite;
    }
`


export const S = {
    Quote
}