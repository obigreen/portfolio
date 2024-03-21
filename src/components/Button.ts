import styled from "styled-components";
import {AccentAnimationBorder} from "../styles/AccentAnimation";
import {theme} from "../styles/Theme";


export const Button = styled.button`
  font-family: "Fira Code", sans-serif;
  background: transparent;
  border: 1px solid transparent;
  animation: ${AccentAnimationBorder} 12s linear infinite alternate;
  padding: 8px 16px;
  font-weight: 500;
  font-size: 16px;
  color: ${theme.color.mainFont};
  cursor: pointer;
  max-width: max-content;

`