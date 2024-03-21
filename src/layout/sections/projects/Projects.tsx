import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Project} from "./Project";

import projectOne from '../../../assets/img/projectOne.png'
import projectTwo from '../../../assets/img/projectTwo.png'
import projectThree from '../../../assets/img/projectThree.png'
import {Container} from "../../../styles/Container";
import {AccentAnimationCol, Rotate} from "../../../styles/AccentAnimation";
import {theme} from "../../../styles/Theme";


export const Projects = () => {
    return (
        <StyledProjects>

            <Container>
                {/*для ссылки на другую страницу*/}
                <FlexWrapper justify={'space-between'} align={'center'} margin={'0 0 48px 0'}>
                    <SectionTitle width={'285%'}>projects</SectionTitle>
                    <Link href={''}>View all ~~&gt;</Link>
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
  padding-bottom: 106px;
  position: relative;
  overflow-x: hidden;
  
  ${Container}>${FlexWrapper}:last-child {
    @media ${theme.media.desctop} {
      flex-wrap: wrap;
      justify-content: center;
      gap: 18px;
    }
  }
  
  

  &::after {
    content: '';
    position: absolute;
    width: 155px;
    height: 155px;
    border: 1px solid ${theme.color.main};
    background-color: transparent;
    right: calc(50% - 830px);
    top: 40%;
    animation: ${Rotate} 16s linear infinite;
  }
  
`

const Link = styled.a`
display: inline-block;
  animation: ${AccentAnimationCol} 12s linear infinite alternate;
`
