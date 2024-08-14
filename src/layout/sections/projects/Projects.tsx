import React from 'react';
import Slider from 'react-slick';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Project} from "./project/Project";
import {Container} from "../../../styles/Container";
import {RoutLink} from "../../../components/routLink";

import projectOne from '../../../assets/img/projectOne.png'
import projectTwo from '../../../assets/img/projectTwo.png'
import projectThree from '../../../assets/img/projectThree.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import {S} from "./Projects_Styles"
import styled from "styled-components";
import {AbsoluteBox} from "../../../components/absolute/AbsoluteBox";
import {Line} from "../../../components/absolute/line";
import {AbsolutWrapp} from "../../../components/absolute/AbsolutWrapp";
import {Icon} from "../../../components/icon/Icon";


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

const settings = {
    infinite: true,
    accessibility: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    // focusOnSelect: true,
    // autoplay: true,
    // autoplaySpeed: 2400,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export const Projects: React.FC = () => {


    return (
        <S.Projects id={'works'}>
            <Line top={'224px'} height={'2px'}/>
            <Container>
                {/*для ссылки на другую страницу*/}
                <FlexWrapper justify={'space-between'} align={'center'} margin={'0 0 48px 0'}>
                    <FlexWrapper position={'relative'}>
                        <SectionTitle>projects</SectionTitle>
                        <AbsoluteBox bottom={'-109px'} left={'50%'} width={'3px'} height={'100px'}/>
                        <AbsoluteBox bottom={'45%'} right={'-60px'} width={'50px'} height={'3px'}/>
                        <AbsoluteBox bottom={'45%'} right={'-60px'} width={'3px'} height={'50px'}/>


                        <AbsolutWrapp left={'calc(50% - 19px)'} top={'126px'} index={'9'}>
                            <Icon iconId={'chipsliderMain'} width={'62'} height={'62'} viewBox={'0 0 32 32'}/>
                        </AbsolutWrapp>
                    </FlexWrapper>

                    <RoutLink href={''}>View all ~~&gt;</RoutLink>
                </FlexWrapper>
                <SliderWrapper>
                    <Slider {...settings}>
                        {infoProjectTitle.map((p, index) => (
                            <Project
                                key={index}
                                src={p.src}
                                technologies={p.technologies}
                                title={p.title}
                                text={p.text}
                                buttonText={p.buttonText}
                            />
                        ))}
                    </Slider>
                </SliderWrapper>
            </Container>
        </S.Projects>
    );
};

const SliderWrapper = styled.div`
    width: 100%;
    position: relative;
    
`;
