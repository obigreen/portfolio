import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../styles/Container";
import {theme} from "../../../styles/Theme";
import bgImage2 from '../../../assets/img/bg2.png'

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
        .slick-slide > div {
            margin: 0 10px;
        }

        .slick-list {
            margin: 0 -10px;
            padding-top: 30px;
            padding-bottom: 10px;
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

// Project
const Work = styled.div`
  max-width: 330px;
  position: relative;
  width: 100%;
  outline: 1px solid ${theme.color.main};
    background-color: ${theme.color.backround};
  
  ${FlexWrapper} > img {
    width: 100%;
  }
`

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