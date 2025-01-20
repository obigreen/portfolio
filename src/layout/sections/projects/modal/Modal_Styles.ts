import {theme} from "../../../../styles/Theme";
import styled from "styled-components";

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    overflow-y: auto; /* Это позволит прокручивать модальное окно */
    background: ${theme.color.backround};
`;

const ModalContent = styled.div`
    position: relative;
    gap: 30px;
    padding: 120px 20px 20px 20px;
    max-width: 100%;
    width: 100%;
    z-index: 999;
    height: auto; /* Позволяет контенту определять высоту */
`;

const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    background: ${theme.color.main};
    cursor: pointer;
    display: flex;
    align-items: center;
    font-family: 'Tahoma', sans-serif;
    font-size: 14px;
    color: black;
    background-color: #c0c0c0;
    border: 2px solid #fff;
    border-right-color: #808080;
    border-bottom-color: #808080;
    border-left-color: #dfdfdf;
    border-top-color: #dfdfdf;
    padding: 2px 6px;
    box-shadow: 1px 1px 0 #808080, inset 1px 1px 0 #fff;
    text-align: center;
`;


const ProjectInfo = styled.div`
    max-width: 600px;
    position: relative;
`

const ProjectLink = styled.a`

`

export const S = {
    Modal, ModalContent, CloseButton, ProjectInfo, ProjectLink
}