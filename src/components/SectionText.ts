import styled, {css} from "styled-components";
import {theme} from "../styles/Theme";

type CardTextMargin = {
    margin?: 'cardTextMargin'
    paddingLeft?: string
}

export const SectionText = styled.p<CardTextMargin>`
  font-weight: 400;
  font-size: 16px;
  color: ${theme.colorWebstorm.text};
  
 ${props => props.margin === 'cardTextMargin'&& css<CardTextMargin>`
   margin: 16px 0;
 `}

 padding-left: ${props => props.paddingLeft};
`