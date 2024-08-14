import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../styles/Container";
import {theme} from "../../../styles/Theme";
import {AccentAnimationCol, Rotate} from "../../../styles/AccentAnimation";

// Projects
const Projects = styled.section`
    padding-top: 74px;
    padding-bottom: 106px;
    position: relative;
    overflow-x: hidden;

    ${Container} {
        position: relative;
        
        &::before, &::after {
            content: '';
            position: absolute;
            top: 220px;
            bottom: 0;
            width: 30px;
            z-index: 999;
        }

        &::before {
            left: -1px;
            background: linear-gradient(to right, rgb(30, 31, 35), rgba(30, 31, 35, 0));
        }

        &::after {
            right: -1px;
            background: linear-gradient(to left, rgb(30, 31, 35), rgba(30, 31, 35, 0));
        }

        .slick-slide > div {
            margin: 0 10px;
        }

        .slick-list {
            margin: 0 -10px;
            padding-top: 200px;
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

    // &::after {
    //   content: '';
    //   position: absolute;
    //   width: 155px;
    //   height: 155px;
        //   border: 1px solid ${theme.color.main};
    //   background-color: transparent;
    //   right: calc(50% - 830px);
    //   top: 40%;
        //   animation: ${Rotate} 16s linear infinite;
    // }
`

// Project
const Work = styled.div`
  max-width: 330px;
  position: relative;
  width: 100%;
  outline: 1px solid ${theme.color.main};
  
  ${FlexWrapper} > img {
    width: 100%;
  }
`

const InfoProjectWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
`

const Title = styled.h3`
  font-weight: 500;
  font-size: 24px;
  color: ${theme.color.mainFont};
`
const ProjectLink = styled.a``


export const S = {
  Projects,
  Work, InfoProjectWrapper, Title, ProjectLink
}