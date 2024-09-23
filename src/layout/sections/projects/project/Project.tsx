import React, { useState } from 'react';
import { SectionText } from "../../../../components/SectionText";
import { Button } from "../../../../components/Button";
import { TechnologiesMenu } from "../../../../components/TechnologiesMenu";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { S } from "../Projects_Styles";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

type StyledWorkPropsType = {
    title: string;
    text: string;
    src?: string;
    technologies: string;
    buttonText: string;
    onOpenModal: (title: string, text: string) => void;
}

export const Project: React.FC<StyledWorkPropsType> = (props) => {
    const handleButtonClick = () => {
        props.onOpenModal(props.title, props.text);
    };

    return (
        <S.Work id={'projects'}>
            <FlexWrapper>
                <img src={props.src} alt="" />
            </FlexWrapper>
            <TechnologiesMenu>{props.technologies}</TechnologiesMenu>
            <S.InfoProjectWrapper>
                <S.Title>{props.title}</S.Title>
                <SectionText margin={'cardTextMargin'}>{props.text}</SectionText>
                <Button onClick={handleButtonClick}>{props.buttonText}</Button>
            </S.InfoProjectWrapper>
        </S.Work>
    );
};


