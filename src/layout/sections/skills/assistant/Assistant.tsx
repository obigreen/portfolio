import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

export const Assistant = () => {
    return (
        <AssistantWrapp>



        </AssistantWrapp>
    );
};

const AssistantWrapp = styled.div`
    max-width: 400px;
    width: 100%;
    height: 400px;
    background-color: ${theme.color.backround};
    box-shadow: inset 0 0 3px 0 rgb(0 0 0 / 11%), 3px 4px 11px rgba(0, 0, 0, 0.1);

`
