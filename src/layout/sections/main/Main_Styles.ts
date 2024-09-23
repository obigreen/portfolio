import styled from "styled-components";
import {font} from "../../../styles/Common";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../styles/Container";
import bgImage from '../../../assets/img/bg.webp';

// Main
const Main = styled.section`
    padding-top: 123px;
    position: relative;
    background-image: url(${bgImage});
    background-size: cover;
    background-position: center;
    z-index: 1;
    box-shadow: inset 3px -2px 20px 20px rgb(30 31 35);

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${theme.color.backround};
        opacity: 0.78; /* Прозрачность цветного слоя */
        z-index: -1;
    }

    ${Container} > ${FlexWrapper} {
        @media ${theme.media.desctop} {
            flex-direction: column;
            gap: 60px;
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
        width: 350px;
    }
`

const ImgTitle = styled.div`
    position: relative;
    padding: 8px 8px 8px 34px;
    color: ${theme.color.main};
    outline: 1px solid ${theme.color.main};
    max-width: 400px;
    width: 100%;
    background-color: ${theme.color.backround};


    @media ${theme.media.mobile} {
        width: 330px;
        margin-right: 0;
    }

    span {
        color: ${theme.color.mainFont};
        font-weight: bold;
    }

    &:before {
        content: '';
        width: 16px;
        height: 16px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 8px;
        background-color: ${theme.color.main};
    }
`

export const S = {
    Main, Title, Description,
    MainProtoWrapper, ImgWrapp, Img, ImgTitle
}