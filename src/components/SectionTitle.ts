import styled from "styled-components";
import {theme} from "../styles/Theme";
import {ColorAnimation} from "../styles/AccentAnimation";


type SectionTitleAfterWidthType = {
    width?: string
}

export const SectionTitle = styled.h3<SectionTitleAfterWidthType>`
    font-weight: 500;
    font-size: 32px;
    color: ${theme.color.mainFont};
    display: inline-block;
    position: relative;

    &::before {
        content: '#';
        animation: ${ColorAnimation} 12s linear infinite alternate;
    }
`
