import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./Skill";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../styles/Container";
import {AccentAnimationCol} from "../../../components/AccentAnimation";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>

                <FlexWrapper justify={'space-between'} align={'center'} margin={'0 0 12px 0'}>
                    <SectionTitle width={'150%'}>skills</SectionTitle>
                    <Link href={''}>View all ~~&gt;</Link>
                </FlexWrapper>

                <FlexWrapper align={'start'} justify={'space-between'}>

                    <StyledVectors>
                        <Icon iconId={'skillsSvg'} width={"349"} height={"282"} wiewBox={"0 0 349 282"}/>
                    </StyledVectors>

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
`
const StyledVectors = styled.section`
  width: 349px;
  height: 282px;
`
const Link = styled.a`
display: inline-block;
  animation: ${AccentAnimationCol} 12s linear infinite alternate;
`