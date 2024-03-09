import React from 'react';
import styled from "styled-components";
import {SectionText} from "../../../components/SectionText";
import {Button} from "../../../components/Button";
import {TechnologiesMenu} from "../../../components/TechnologiesMenu";

type StyledWorkPropsType = {
    title: string
    text: string
    src?: string
    technologies: string
    buttonText: string
}


export const Project = (props: StyledWorkPropsType) => {
    return (
        <SyledWork>
            <img src={props.src} alt=""/>
            <TechnologiesMenu>{props.technologies}</TechnologiesMenu>
            <Title>{props.title}</Title>
            <SectionText>{props.text}</SectionText>
            <Button>{props.buttonText}</Button>
        </SyledWork>
    );
};


const SyledWork = styled.div`
  max-width: 330px;
  width: 100%;
`

const Title = styled.h3`

`