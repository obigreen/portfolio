import React from 'react';
import {TechnologiesMenu} from "../../../../components/TechnologiesMenu";

import {S} from "../Skills_Styles"

type StyledSkillPropsType = {
    title: string
    technologies: string
}

export const Skill: React.FC<StyledSkillPropsType> = (props: StyledSkillPropsType) => {
    return (
        <S.Skill>
            <S.Title>{props.title}</S.Title>
            <TechnologiesMenu>{props.technologies}</TechnologiesMenu>
        </S.Skill>
    );
};

