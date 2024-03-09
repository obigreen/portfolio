import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: #282c33;
  }
  
  ul {
    list-style: none;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`

