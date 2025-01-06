import React from 'react';
import { SectionText } from "../../../../components/SectionText";
import { Button } from "../../../../components/Button";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import {S, TechnologiesMenu, Title} from "../Projects_Styles";

type StyledWorkPropsType = {
    title: string;
    text: string;
    src?: string;
    technologies: string;
    buttonText: string;
    onOpenModal: (title: string, text: string) => void;
}

export const Project = ({title, text, src, technologies, buttonText, onOpenModal }: StyledWorkPropsType) => {
    const handleButtonClick = () => {
        onOpenModal(title, text);
    };

    return (
        <S.Work id={'projects'}>
            <FlexWrapper height={'200px'} overflow={'hidden'} >
                <img src={src} alt="" style={{ width: '100%', objectFit: 'cover', height: '100%', objectPosition: 'top' }}/>
            </FlexWrapper>
            <TechnologiesMenu>{technologies}</TechnologiesMenu>
            <S.InfoProjectWrapper>
                <Title>{title}</Title>
                <SectionText margin={'cardTextMargin'}>{text}</SectionText>
                <Button onClick={handleButtonClick}>{buttonText}</Button>
            </S.InfoProjectWrapper>
        </S.Work>
    );
};

