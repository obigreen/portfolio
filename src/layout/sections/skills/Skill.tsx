import React from 'react';
import styled from "styled-components";
import {TechnologiesMenu} from "../../../components/TechnologiesMenu";

type StyledSkillPropsType = {
    title: string
    technologies: string
}

export const Skill = (props: StyledSkillPropsType) => {
    return (
        <StyledSkill>
            <Title>{props.title}</Title>
            <TechnologiesMenu>{props.technologies}</TechnologiesMenu>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  max-width: 178px;
  width: 100%;
`

const Title = styled.h4`

`
