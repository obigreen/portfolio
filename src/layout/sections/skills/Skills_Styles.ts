import {theme} from "../../../styles/Theme";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";



// Skills
const Skill = styled.section`
    padding: 74px 0;
    position: relative;
    overflow-x: hidden;

    ${FlexWrapper} {
        @media ${theme.media.desctop} {
            flex-direction: column-reverse;
            gap: 80px;
        }
    }
`


export const S = {
    Skill
}