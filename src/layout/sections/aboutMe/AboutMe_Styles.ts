import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionText} from "../../../components/SectionText";

const AboutMe = styled.section`
    padding-bottom: 74px;
    padding-top: 74px;
    position: relative;

    ${SectionTitle} {
        margin-bottom: 23px;
    }

`

const AboutMePage = styled.div`
    outline: 1px solid ${theme.color.main};
    color: ${theme.colorWebstorm.text};
`
const Article = styled.div`
    padding: 30px 15px;
    
    
    ${FlexWrapper} {
        padding: 0 0 0 35px;

        @media ${theme.media.tablet} {
            padding: 0 0 0 15px;
        }
    }
`

const AboutMePageHeader = styled.div`
    padding: 15px;
    outline: 1px solid ${theme.color.main};
    display: flex;
    align-items: center;
    justify-content: end;
`

const Close = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Tahoma', sans-serif;
    font-size: 14px;
    color: black;
    background-color: #c0c0c0;
    border: 2px solid #fff;
    border-right-color: #808080;
    border-bottom-color: #808080;
    border-left-color: #dfdfdf;
    border-top-color: #dfdfdf;
    padding: 2px 6px;
    box-shadow: 1px 1px 0 #808080, inset 1px 1px 0 #fff;
    text-align: center;
`;

const Tag = styled.div`
    color: ${theme.colorWebstorm.htmltag};
    letter-spacing: 1px;
`
const Ptitle = styled.div`
    display: flex;
    margin-bottom: 30px;
    margin-top: 20px;

    h4 {
        font-weight: 400;
        font-size: 16px;
        color: ${theme.colorWebstorm.text};
    }
`
const Ptext = styled.div`
    margin-bottom: 20px;
    max-width: 800px;
    
    ${SectionText} {
        padding-left: 35px;


        @media ${theme.media.tablet} {
            padding-left: 20px;
            font-size: 14px;
        }
    }
`;
const Class = styled.span`
    letter-spacing: 0.5px;
`
const Green = styled.span`
    color: ${theme.colorWebstorm.green};
`

export const S = {
    AboutMe, AboutMePage, Article, AboutMePageHeader, Close, Tag, Ptitle, Ptext, Class, Green
}