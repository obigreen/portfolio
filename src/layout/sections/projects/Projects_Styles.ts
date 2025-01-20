import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../styles/Container";
import {theme} from "../../../styles/Theme";
import bgImage2 from '../../../assets/img/background/bg2.webp'

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

    ${Container} {
        
        max-width: 1056px;
        
        .swiper-slide {
            width: 328px;
            display: flex;
            justify-content: center;
            align-items: center;
            //padding: 10px; /* Отступы вокруг слайда */

            //margin: 0px -10px;
            padding: 30px 1px 10px 1px;
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
    width: 328px;
    margin: 0 auto;
    
    outline: 1px solid ${theme.color.main};
    background-color: ${theme.color.backround};

    ${FlexWrapper} > img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
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
    padding: 8px;
`


export const S = {
  Projects, SliderWrapper,
  Work, InfoProjectWrapper
}