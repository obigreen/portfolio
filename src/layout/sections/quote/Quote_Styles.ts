import {Rotate} from "../../../styles/AccentAnimation";
import {theme} from "../../../styles/Theme";
import styled from "styled-components";
import {font} from "../../../styles/Common";
import arrow from "../../../assets/img/pseudoelements/arrows.svg"

// Quote
const Quote = styled.section`
  padding-bottom: 74px;
  padding-top: 56px;
  position: relative;
  overflow-x: hidden;
  
  &::after {
    content: '';
    position: absolute;
    width: 91px;
    height: 91px;
    border: 1px solid ${theme.color.main};
    background-color: transparent;
    right: calc(50% - 750px);
    top: 30%;
    animation: ${Rotate} 12s linear infinite;
  }
`

const StyledBlockquote = styled.blockquote`
  display: flex;
  align-items: end;
  flex-direction: column;
  ${font({weight: 500, maxW: 24, minW: 17})}
  color: ${theme.color.mainFont};
`

const QuoteText = styled.p`
  padding: 32px;
  outline: 1px solid ${theme.color.main};
  position: relative;
  
  @media ${theme.media.mobile} {
    padding: 20px;
  }

  &::before {
    content: "";
    background-image: url(${arrow});
    background-repeat: no-repeat;
    width: 42px;
    height: 29px;
    position: absolute;
    top: -15px;
    left: 11px;
  }
`

const Author = styled.footer`
  padding: 16px;
  margin-top: 1px;
  outline: 1px solid ${theme.color.main};
  position: relative;

  &::before {
    content: "";
    background-image: url(${arrow});
    background-repeat: no-repeat;
    width: 42px;
    height: 29px;
    position: absolute;
    top: -15px;
    right: 11px;
  }
`

export const S = {
    Quote, StyledBlockquote, QuoteText, Author
}