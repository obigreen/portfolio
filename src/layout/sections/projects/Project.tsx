import React from 'react';
import styled from "styled-components";
import {SectionText} from "../../../components/SectionText";
import {Button} from "../../../components/Button";
import {TechnologiesMenu} from "../../../components/TechnologiesMenu";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";

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
            <FlexWrapper>
                <img src={props.src} alt=""/>
            </FlexWrapper>

            <TechnologiesMenu>{props.technologies}</TechnologiesMenu>
            <InfoProjectWrapper>
                <Title>{props.title}</Title>
                <SectionText margin={'cardTextMargin'}>{props.text}</SectionText>
                <Button>{props.buttonText}</Button>
            </InfoProjectWrapper>

        </SyledWork>
    );
};

const InfoProjectWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
`

const SyledWork = styled.div`
  max-width: 330px;
  width: 100%;
  outline: 1px solid ${theme.color.main};
`

const Title = styled.h3`
  font-weight: 500;
  font-size: 24px;
  color: ${theme.color.mainFont};
`