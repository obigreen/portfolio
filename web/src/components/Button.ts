import styled from "styled-components";
import {AccentAnimationBr} from "../styles/AccentAnimation";
import {theme} from "../styles/Theme";


export const Button = styled.button`
  font-family: "Fira Code", sans-serif;
  background: transparent;
  border: 1px solid transparent;
  ${AccentAnimationBr};
  padding: 8px 16px;
  font-weight: 500;
  font-size: 16px;
  color: ${theme.color.mainFont};
  cursor: pointer;
  max-width: max-content;
`