import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {theme} from "../../../styles/Theme";
import {AccentAnimationBg, Rotate} from "../../../styles/AccentAnimation";

import after from "../../../assets/img/pseudoelements/dots.svg"
import dotsbg from "../../../assets/img/pseudoelements/dotsbg.svg"


const AboutMe = styled.section`
  padding-bottom: 112px;
  position: relative;
  overflow-x: hidden;

  ${FlexWrapper} > ${FlexWrapper} {
    max-width: 515px;
    width: 100%;
  }

  ${SectionTitle} {
    margin-bottom: 23px;
  }

  ${FlexWrapper} {
    @media ${theme.media.tablet} {
      flex-direction: column;
    }
  }

  &::before {
    content: '';
    border: 1px solid ${theme.color.main};
    position: absolute;
    width: 155px;
    height: 155px;
    background-color: transparent;
    left: calc(50% - 820px);
    top: 30%;
    animation: ${Rotate} 16s linear infinite;
  }

  &::after {
    content: '';
    background-image: url("${dotsbg}");
    position: absolute;
    width: 103px;
    height: 103px;
    background-color: transparent;
    right: calc(50% - 730px);
    top: 55%;
  }
`

const ImageWrapper = styled.div`
  position: relative;

  &:after {
    content: '';
    background-image: url("${after}");
    background-repeat: no-repeat;
    position: absolute;
    top: 60px;
    left: 0;
    width: 327px;
    height: 276px;
  }

  &::before {
    content: '';
    width: 271px;
    height: 1px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    animation: ${AccentAnimationBg} 12s linear infinite alternate;
  }

  @media ${theme.media.tablet} {
    position: absolute;
    bottom: 30px;
    right: 0;
    z-index: -1;
    opacity: 0.3;
  }
`
const Image = styled.img`
  display: flex;
`

export const S = {
    AboutMe, ImageWrapper, Image
}