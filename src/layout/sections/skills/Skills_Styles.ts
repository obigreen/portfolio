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
            flex-direction: column;
            gap: 80px;
        }
    }
`
//Wrapp for sliders with skills
const WrappWrapp = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Wrap = styled.div`
    width: 100%;

    &:not(:last-child) {
        margin-bottom: 50px;
    }
`;

const IconLink = styled.a`
    display: flex;
    margin-top: 2px;
`;

const Img = styled.img`
    width: 60px;
    height: 60px;
`;

export const S = {
    Skill,
    WrappWrapp, Wrap, IconLink, Img
}