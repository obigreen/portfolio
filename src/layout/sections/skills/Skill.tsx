import React from 'react';
import styled from "styled-components";
import {TechnologiesMenu} from "../../../components/TechnologiesMenu";
import {theme} from "../../../styles/Theme";

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
  max-width: 200px;
  width: 100%;
  outline: 1px solid ${theme.color.main};
  ${TechnologiesMenu} {
    border-bottom: none;
  }
`

const Title = styled.h4`
  font-weight: 600;
  font-size: 16px;
  color: ${theme.color.mainFont};
  padding: 8px;
  outline: 1px solid ${theme.color.main};
`
