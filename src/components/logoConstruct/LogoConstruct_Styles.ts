import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {AccentAnimationBorder} from "../../styles/AccentAnimation";


export const LogoCostructWrapp = styled.div`
  width: max-content;
  height: max-content;
  display: flex;

  ${FlexWrapper} {
    height: 112px;
    width: 76px;
    outline: 1px solid;
    animation: ${AccentAnimationBorder} 12s linear infinite alternate;
  }

  ${FlexWrapper}:first-child {
    margin-top: 38px;
  }

  ${FlexWrapper}:last-child {
    margin-left: 1px;

  }
`

const Interior = styled.div`
  width: 38px;
  height: 37px;
  outline: 1px solid;
  animation: ${AccentAnimationBorder} 12s linear infinite alternate;
`

export const S = {
    LogoCostructWrapp, Interior
}