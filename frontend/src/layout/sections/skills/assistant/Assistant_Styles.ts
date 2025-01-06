import {theme} from "../../../../styles/Theme";
import styled from "styled-components";

const AssistantWrapp = styled.div`
    position: relative;
    max-width: 400px;
    width: 100%;
    height: 400px;
    outline: 1px solid ${theme.color.main};
    padding: 20px;
`
const TextariaOutp = styled.textarea`
    resize: none;
    overflow: auto;
    padding: 10px;
    height: 200px;
    background: transparent;
    border: none;
    color: ${theme.color.mainFont};
    outline: 1px solid ${theme.color.main};

    &::placeholder {
        color: ${theme.color.mainFont};
    }
`
const TextariaInp = styled.textarea`
    resize: none;
    overflow: auto;
    padding: 10px 10px 35px 10px;
    height: 100px;
    border: none;
    outline: 1px solid ${theme.color.main};
    background: transparent;
    color: ${theme.color.mainFont};

    &::placeholder {
        color: ${theme.color.mainFont};
    }
`

const Aibutton = styled.div`
    position: absolute;
    bottom: 5px;
    right: 5px;
`

export const S = {
    AssistantWrapp, TextariaOutp, TextariaInp, Aibutton
}