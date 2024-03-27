import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../styles/Container";
import {SkillsVectors} from "./skillsVectors/SkillsVectors";
import {RoutLink} from "../../../components/routLink";

import {S} from "./Skills_Styles"


const skillData = [
    {
        title: "Languages",
        technologies: "TypeScript Lua Python JavaScript"
    },
    {
        title: "Databases",
        technologies: "SQLite PostgreSQL Mongo"
    },
    {
        title: "Tools",
        technologies: "VSCode Neovim Linux Figma XFCE Arch Git Font Awesome"
    },
    {
        title: "Other",
        technologies: "HTML CSS EJS SCSS REST Jinja"
    },
    {
        title: "Frameworks",
        technologies: "React Vue Disnake Discord.js Flask Express.js"
    }
]

export const Skills: React.FC = () => {
    return (
        <S.Skills>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'} margin={'0 0 12px 0'}>
                    <SectionTitle width={'150%'}>skills</SectionTitle>
                    <RoutLink href={''}>View all ~~&gt;</RoutLink>
                </FlexWrapper>
                <FlexWrapper align={'start'} justify={'space-between'}>
                    <S.SkillsVectorsWrapp>
                        <SkillsVectors/>
                    </S.SkillsVectorsWrapp>
                    <FlexWrapper wrap={'wrap'} justify={'end'} gap={'16px'}>
                        {skillData.map((s, index) => {
                            return <Skill
                                title={s.title}
                                technologies={s.technologies}/>
                        })}
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};

