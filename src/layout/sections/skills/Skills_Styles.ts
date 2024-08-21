import {Rotate} from "../../../styles/AccentAnimation";
import {theme} from "../../../styles/Theme";
import styled from "styled-components";
import {Skills} from "./Skills";
import {FlexWrapper} from "../../../components/FlexWrapper";

// Skills
const Skill = styled.section`
    padding-top: 74px;
    padding-bottom: 30px;
    position: relative;
    overflow-x: hidden;
    ${FlexWrapper} {
        @media ${theme.media.desctop} {
            flex-direction: column-reverse;
            gap: 80px;
        }
    }


    // &::after {
    //     content: '';
    //     position: absolute;
    //     width: 91px;
    //     height: 91px;
        //     border: 1px solid ${theme.color.main};
    //     background-color: transparent;
    //     right: calc(50% - 750px);
    //     top: 30%;
        //     animation: ${Rotate} 12s linear infinite;
    // }
`


export const S = {
    Skill
}