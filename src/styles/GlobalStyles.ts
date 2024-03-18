import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";
import {AccentAnimationBorder} from "../components/AccentAnimation";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${theme.color.backround};
    font-family: "Fira Code", sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
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
  }

`

