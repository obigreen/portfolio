import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../styles/Container";
import {theme} from "../../../styles/Theme";
import {AccentAnimationCol, Rotate} from "../../../styles/AccentAnimation";

// Projects
const Projects = styled.section`
  padding-bottom: 106px;
  position: relative;
  overflow-x: hidden;

  ${Container} > ${FlexWrapper}:last-child {
    @media ${theme.media.desctop} {
      flex-wrap: wrap;
      justify-content: center;
      gap: 18px;
    }
  }

  &::after {
    content: '';
    position: absolute;
    width: 155px;
    height: 155px;
    border: 1px solid ${theme.color.main};
    background-color: transparent;
    right: calc(50% - 830px);
    top: 40%;
    animation: ${Rotate} 16s linear infinite;
  }
`

// Project
const Work = styled.div`
  max-width: 330px;
  width: 100%;
  outline: 1px solid ${theme.color.main};
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