import React from 'react';
import { SectionText } from "../../../../components/SectionText";
import { Button } from "../../../../components/Button";
import { TechnologiesMenu } from "../../../../components/TechnologiesMenu";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { S } from "../Projects_Styles";

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
            <FlexWrapper height={'200px'} overflow={'hidden'} >
                <img src={props.src} alt="" style={{ width: '100%', objectFit: 'cover', height: '100%', objectPosition: 'top' }}/>
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


