import styled from "styled-components";
import {theme} from "../styles/Theme";
import {AccentAnimationBg, AccentAnimationCol} from "../styles/AccentAnimation";


type SectionTitleAfterWidthType = {
    width?: string
}

export const SectionTitle = styled.h3<SectionTitleAfterWidthType>`
  font-weight: 500;
  font-size: 32px;
  color: ${theme.color.mainFont};
  display: inline-block;
  position: relative;
  
  &::before {
    content: '#';
    animation: ${AccentAnimationCol} 12s linear infinite alternate;
  }
  
  // &::after {
  //   content: '';
  //   position: absolute;
  //   animation: ${AccentAnimationBg} 12s linear infinite alternate;
  //   top: 50%;
  //   left: 120%;
  //   transform: translateY(-50%);
  //   width: ${props => props.width || "100%"};
  //   height: 1px;
  //  
  //   @media ${theme.media.desctop} {
  //     width: 100%;
  //   }
  //   @media ${theme.media.mobile} {
  //     display: none;
  //   }
  // }
`
