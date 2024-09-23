import React, {useState} from 'react';
import Slider from 'react-slick';
import {Project} from "./project/Project";
import {Container} from "../../../styles/Container";

import projectOne from '../../../assets/img/projectOne.png'
import projectTwo from '../../../assets/img/projectTwo.png'
import projectThree from '../../../assets/img/projectThree.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import {S} from "./Projects_Styles"
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";

type ProjectType = {
    src: string;
    technologies: string;
    title: string;
    text: string;
    buttonText: string;
};


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

const infoProjectDescription = [
    {
        src: projectOne,
        technologies: "HTML SCSS Python Flask",
        title: "ChertNodes",
        text: "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
    },
    {
        src: projectTwo,
        technologies: "React Express Discord.js Node.js HTML SCSS Python Flask",
        title: "ProtectX",
        text: "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
    },
    {
        src: projectThree,
        technologies: "CSS Express Node.js",
        title: "Kahoot Answers Viewer",
        text: "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
    }
]


export const Projects = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<{ src: string; technologies: string; title: string; text: string } | null>(null);

    // функция для открытия модального окна
    const handleOpenModal = (project: ProjectType) => {
        const detailedProject = infoProjectDescription.find(p => p.title === project.title);
        if (detailedProject) {
            setModalContent(detailedProject);
            setIsModalOpen(true);
        }
    };

    // функция для закрытия модального окна
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };


    // настройки слайдера
    const settings = {
        infinite: true,
        accessibility: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2400,
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

    return (
        <S.Projects id={'works'}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
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
                                onOpenModal={() => handleOpenModal(p)}
                            />
                        ))}
                    </Slider>
                </SliderWrapper>
            </Container>
            {isModalOpen && modalContent && (
                <ModalOverlay onClick={handleCloseModal}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <FlexWrapper justify={'center'} gap={'30px'}>
                            <div>
                                <img src={modalContent.src} alt="" style={{ width: '100%' }} />
                            </div>
                            <ProjectInfo>
                                <div>{modalContent.title}</div>
                                <div>{modalContent.technologies}</div>
                                <div>{modalContent.text}</div>
                            </ProjectInfo>
                        </FlexWrapper>
                        <CloseButton onClick={handleCloseModal}>Закрыть</CloseButton>
                    </ModalContent>
                </ModalOverlay>
            )}
        </S.Projects>
    );
};

const SliderWrapper = styled.div`
    width: 100%;
    position: relative;
`;


const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
`;

const ModalContent = styled.div`
    background: ${theme.color.backround};
    position: relative;
    gap: 30px;
    padding: 120px 20px 20px 20px;
    max-width: 100%;
    width: 100%;
    height: 100%;
    z-index: 999;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 120px;
    right: 50px;
    background: ${theme.color.main};
    border: none;
    padding: 10px 20px;
    cursor: pointer;
`;


const ProjectInfo = styled.div`
max-width: 500px;
`
