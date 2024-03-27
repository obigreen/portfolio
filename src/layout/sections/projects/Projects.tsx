import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Project} from "./project/Project";
import {Container} from "../../../styles/Container";
import {RoutLink} from "../../../components/routLink";

import projectOne from '../../../assets/img/projectOne.png'
import projectTwo from '../../../assets/img/projectTwo.png'
import projectThree from '../../../assets/img/projectThree.png'

import {S} from "./Projects_Styles"


const infoProjectTitle = [
    {
        src: projectOne,
        technologies: "HTML SCSS Python Flask",
        title: "ChertNodes",
        text: "Minecraft servers hosting",
        buttonText: "Live <~>"
    },

    {
        src: projectTwo,
        technologies: "React Express Discord.js Node.js HTML SCSS Python Flask",
        title: "ProtectX",
        text: "Discord anti-crash bot",
        buttonText: "Live <~>"
    },

    {
        src: projectThree,
        technologies: "CSS Express Node.js",
        title: "Kahoot Answers Viewer",
        text: "Get answers to your kahoot quiz",
        buttonText: "Live <~>"
    },
]

export const Projects: React.FC = () => {
    return (
        <S.Projects id={'works'}>
            <Container>
                {/*для ссылки на другую страницу*/}
                <FlexWrapper justify={'space-between'} align={'center'} margin={'0 0 48px 0'}>
                    <SectionTitle width={'285%'}>projects</SectionTitle>
                    <RoutLink href={''}>View all ~~&gt;</RoutLink>
                </FlexWrapper>
                <FlexWrapper align={'start'} justify={'space-between'}>
                    {infoProjectTitle.map((p, index) => {
                        return <Project key={index}
                                        src={p.src}
                                        technologies={p.technologies}
                                        title={p.title}
                                        text={p.text}
                                        buttonText={p.buttonText}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};

