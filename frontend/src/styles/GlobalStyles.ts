import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

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
        cursor: pointer;
    }

    button {
        background-color: unset;
        border: none;
        cursor: pointer;
    }

`

