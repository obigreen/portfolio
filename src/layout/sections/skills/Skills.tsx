import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./Skill";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../styles/Container";
import {AccentAnimationCol} from "../../../styles/AccentAnimation";
import {theme} from "../../../styles/Theme";
import {SkillsVectors} from "./SkillsVectors";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>

                <FlexWrapper justify={'space-between'} align={'center'} margin={'0 0 12px 0'}>
                    <SectionTitle width={'150%'}>skills</SectionTitle>
                    <Link href={''}>View all ~~&gt;</Link>
                </FlexWrapper>

                <FlexWrapper align={'start'} justify={'space-between'}>
                    <SkillsVectorsWrapp>
                        <SkillsVectors/>
                    </SkillsVectorsWrapp>


                    <FlexWrapper wrap={'wrap'} justify={'end'} gap={'16px'}>
                        <Skill
                            title={'Languages'}
                            technologies={'TypeScript Lua Python JavaScript'}/>
                        <Skill
                            title={'Databases'}
                            technologies={'SQLite PostgreSQL Mongo'}/>
                        <Skill
                            title={'Tools'}
                            technologies={'VSCode Neovim Linux Figma XFCE Arch Git Font Awesome'}/>
                        <Skill
                            title={'Other'}
                            technologies={'HTML CSS EJS SCSS REST Jinja'}/>
                        <Skill
                            title={'Frameworks'}
                            technologies={'React Vue Disnake Discord.js Flask Express.js'}/>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>

        </StyledSkills>
    );
};


const StyledSkills = styled.section`
  padding-bottom: 112px;
  position: relative;

  ${Container} > ${FlexWrapper}:last-child {
    @media ${theme.media.tablet} {
      flex-direction: column;
      justify-content: center;
      gap: 30px;
    }
  }

  ${Container} > ${FlexWrapper} > ${FlexWrapper} {
    @media ${theme.media.tablet} {
      justify-content: center;
    }
  }
`


const Link = styled.a`
  display: inline-block;
  animation: ${AccentAnimationCol} 12s linear infinite alternate;
`


const SkillsVectorsWrapp = styled.div`
  max-width: 349px;
  height: 300px;
  width: 100%;
  padding: 5px;
  @media ${theme.media.tablet} {
   position: absolute;
    opacity: 0.2;
    max-width: 700px;
    left: 0;
  }
  
`