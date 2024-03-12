import styled, {css} from "styled-components";
import {theme} from "../styles/Theme";

type CardTextMargin = {
    margin?: 'cardTextMargin'
}

export const SectionText = styled.p<CardTextMargin>`
  //font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  color: ${theme.color.main};
  
 ${props => props.margin === 'cardTextMargin'&& css<CardTextMargin>`
   margin: 16px 0;
 `}
  
`