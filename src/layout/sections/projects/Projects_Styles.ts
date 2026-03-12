import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../styles/Container";
import {theme} from "../../../styles/Theme";
import bgImage2 from '../../../assets/img/background/bg2.webp'

const PREVIEW_SCALE = 0.24;

// Projects
const Projects = styled.section`
    padding-bottom: 106px;
    padding-top: 74px;
    position: relative;
    overflow-x: hidden;
    background-image: url(${bgImage2});

    background-size: cover;
    background-position: center;
    box-shadow: inset 0 -10px 50px 50px rgb(30 31 35);

    //

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${theme.color.backround};
        opacity: 0.78; /* Прозрачность цветного слоя */
        //z-index: 0;
    }

    @media ${theme.media.mobile} {
        padding-bottom: 30px;
    }

    ${Container} {

        max-width: 1056px;

        .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            //padding: 10px; /* Отступы вокруг слайда */

            //margin: 0px -10px;
            padding: 30px 0 10px 0;
            //padding-bottom: 10px;
        }


    }

    ${Container} > ${FlexWrapper}:last-child {
        @media ${theme.media.desctop} {
            flex-wrap: wrap;
            justify-content: center;
            gap: 18px;
        }
    }
`
const SliderWrapper = styled.div`
    width: 100%;
`;

const Work = styled.div`
    width: 100%;
    max-width: 328px;
    margin: 0 auto;

    border: 1px solid ${theme.color.main};
    background-color: ${theme.color.backround};
    overflow: hidden;

    ${FlexWrapper} > img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`;

const PreviewViewport = styled.div`
    width: 100%;
    height: 100%;
    min-width: 0;
    min-height: 0;
    overflow: hidden;
    position: relative;
    contain: paint;
    isolation: isolate;
    clip-path: inset(0 1px 0 0);
    background-color: ${theme.color.backround};
`;

const PreviewFrame = styled.iframe`
    width: calc(100% / ${PREVIEW_SCALE});
    height: calc(100% / ${PREVIEW_SCALE});
    border: none;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateZ(0) scale(${PREVIEW_SCALE});
    transform-origin: top left;
    backface-visibility: hidden;
    pointer-events: none;
`;

const InfoProjectWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  font-weight: 500;
  font-size: 24px;
  color: ${theme.color.mainFont};
`
export const TechnologiesMenu = styled.h2`
    font-weight: 400;
    font-size: 16px;
    color: ${theme.color.main};
    line-height: 156%;
    border-bottom: 1px solid ${theme.color.main};
    padding: 8px 16px;
`


export const S = {
  Projects, SliderWrapper,
  Work, PreviewViewport, PreviewFrame, InfoProjectWrapper
}
