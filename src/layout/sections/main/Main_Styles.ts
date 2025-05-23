import styled from "styled-components";
import {font} from "../../../styles/Common";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../styles/Container";
import bgImage from '../../../assets/img/background/bg1.webp';

// Main
const Main = styled.section`
    padding-top: 123px;
    position: relative;
    background-image: url(${bgImage});
    background-size: cover;
    background-position: center;
    z-index: 1;
    box-shadow: inset 0 -10px 50px 50px rgb(30 31 35);

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${theme.color.backround};
        opacity: 0.78;
        z-index: -1;
    }

    ${Container} > ${FlexWrapper} {
        @media ${theme.media.desctop} {
            flex-direction: column;
            gap: 60px;
        }
        
        
    }

    ${Container} > ${FlexWrapper} > ${FlexWrapper}{
        @media ${theme.media.desctop} {
      margin: 0 auto;
        }
    }
    
`

const Title = styled.h1`
    max-width: 500px;
    ${font({weight: 600, maxW: 32, minW: 25})};
    color: ${theme.color.mainFont};
`

const Description = styled.h2`
    font-weight: 400;
    max-width: 400px;
    font-size: 16px;
    line-height: 156%;
    color: ${theme.color.main};
    margin: 32px 0 24px 0;
`

// MainPhoto
const MainProtoWrapper = styled.div`
    box-shadow: inset 0 -19px 10px -10px rgb(30, 31, 35);
`

const ImgWrapp = styled.div`
    display: flex;
    z-index: -1;
    position: relative;
    max-width: 550px;
`


const Img = styled.img`
    width: 100%;
    @media ${theme.media.mobile} {
        max-width: 350px;
    }
`



export const S = {
    Main, Title, Description,
    MainProtoWrapper, ImgWrapp, Img
}