import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Project} from "./Project";

import projectOne from '../../../assets/img/projectOne.png'
import projectTwo from '../../../assets/img/projectTwo.png'
import projectThree from '../../../assets/img/projectThree.png'
import {Container} from "../../../styles/Container";


export const Projects = () => {
    return (
        <StyledProjects>

            <Container>
                {/*для ссылки на другую страницу*/}
                <FlexWrapper>
                    <SectionTitle>projects</SectionTitle>
                </FlexWrapper>



                <FlexWrapper align={'start'} justify={'space-between'}>
                    <Project
                        src={projectOne}
                        technologies={'HTML SCSS Python Flask'}
                        title={'ChertNodes'}
                        text={'Minecraft servers hosting'}
                        buttonText={'Live <~>'}/>
                    <Project
                        src={projectTwo}
                        technologies={'React Express Discord.js Node.js HTML SCSS Python Flask'}
                        title={'ProtectX'}
                        text={'Discord anti-crash bot'}
                        buttonText={'Live <~>'}/>
                    <Project
                        src={projectThree}
                        technologies={'CSS Express Node.js'}
                        title={'Kahoot Answers Viewer'}
                        text={'Get answers to your kahoot quiz'}
                        buttonText={'Live <~>'}/>
                </FlexWrapper>
            </Container>


        </StyledProjects>
    );
};

const StyledProjects = styled.section`
${SectionTitle} {
  margin-bottom: 48px;
}
`
