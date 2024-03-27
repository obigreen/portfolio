import styled from "styled-components";
import {Container} from "../../../styles/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {AccentAnimationCol} from "../../../styles/AccentAnimation";
import {TechnologiesMenu} from "../../../components/TechnologiesMenu";

type IconWrapperProps = {
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  width?: string
  height?: string
}

// Skills
const Skills = styled.section`
  padding-bottom: 112px;
  position: relative;

  ${Container} > ${FlexWrapper}:last-child {
    @media ${theme.media.tablet} {
      flex-direction: column;
      justify-content: center;
      gap: 30px;
    }
  }

  ${Container} > ${FlexWrapper} > ${FlexWrapper} {
    @media ${theme.media.tablet} {
      justify-content: center;
    }
  }
`

const SkillsVectorsWrapp = styled.div`
  max-width: 349px;
  height: 300px;
  width: 100%;
  padding: 5px;
  @media ${theme.media.tablet} {
    position: absolute;
    opacity: 0.2;
    max-width: 700px;
    left: 0;
  }
`

//Skill
const Skill = styled.div`
  max-width: 200px;
  width: 100%;
  outline: 1px solid ${theme.color.main};
  ${TechnologiesMenu} {
    border-bottom: none;
  }
`

const Title = styled.h4`
  font-weight: 600;
  font-size: 16px;
  color: ${theme.color.mainFont};
  padding: 8px;
  outline: 1px solid ${theme.color.main};
`


//Vectors
const Vectors = styled.div`
  max-width: 349px;
  height: 300px;
  width: 100%;

  position: relative;

  @media ${theme.media.tablet} {
    max-width: 100%;
    height:400px;
  }
`

const IconWrapper = styled.div<IconWrapperProps>`
  position: absolute;
  top: ${props => props.top || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  right: ${props => props.right || 'auto'};
  left: ${props => props.left || 'auto'};
  animation: ${AccentAnimationCol} 12s linear infinite alternate;
`

const Border = styled.div<IconWrapperProps>`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  border: 1px solid ${theme.color.main};
  background-color: transparent;
`

export const S = {
  Skills, SkillsVectorsWrapp,
  Skill, Title,
  Vectors, IconWrapper, Border
}