import React from 'react';
import {SectionText} from "../../../../components/SectionText";
import {Button} from "../../../../components/Button";
import {TechnologiesMenu} from "../../../../components/TechnologiesMenu";
import {FlexWrapper} from "../../../../components/FlexWrapper";

import {S} from "../Projects_Styles"
import {AbsoluteBox} from "../../../../components/absolute/AbsoluteBox";
import {Icon} from "../../../../components/icon/Icon";
import {AbsolutWrapp} from "../../../../components/absolute/AbsolutWrapp";


type StyledWorkPropsType = {
    title: string
    text: string
    src?: string
    technologies: string
    buttonText: string
}

export const Project = (props: StyledWorkPropsType) => {
    return (
        <S.Work>
            <AbsoluteBox height={'140px'} width={'1px'} top={'-140px'} left={'calc(50%)'}/>
            <AbsolutWrapp left={'calc(50% - 39px)'} top={'-164px'}>
                <Icon iconId={'chipslider'} width={'62'} height={'62'} viewBox={'0 0 32 32'}/>
            </AbsolutWrapp>

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

