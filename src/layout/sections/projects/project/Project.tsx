import React from 'react';
import {SectionText} from "../../../../components/SectionText";
import {Button} from "../../../../components/Button";
import {TechnologiesMenu} from "../../../../components/TechnologiesMenu";
import {FlexWrapper} from "../../../../components/FlexWrapper";

import {S} from "../Projects_Styles"


type StyledWorkPropsType = {
    title: string
    text: string
    src?: string
    technologies: string
    buttonText: string
}

export const Project: React.FC<StyledWorkPropsType> = (props: StyledWorkPropsType) => {
    return (
        <S.Work>
            <FlexWrapper>
                <img src={props.src} alt=""/>
            </FlexWrapper>
            <TechnologiesMenu>{props.technologies}</TechnologiesMenu>
            <S.InfoProjectWrapper>
                <S.Title>{props.title}</S.Title>
                <SectionText margin={'cardTextMargin'}>{props.text}</SectionText>
                <Button>
                    <S.ProjectLink href={''}>{props.buttonText}</S.ProjectLink>
                </Button>
            </S.InfoProjectWrapper>
        </S.Work>
    );
};
