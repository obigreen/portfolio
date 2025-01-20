import React from 'react';
import Slider from 'react-slick';
import {Project} from "./project/Project";
import {Container} from "../../../styles/Container";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import {S} from "./Projects_Styles"
import {SectionTitle} from "../../../components/SectionTitle";
import {projectsData, ProjectType} from "../../../data/projectsData";
import {useModal} from "../../../hooks/useModal";
import {sliderSettings} from "../../../utils/slider/sliderSettings";
import {Modal} from "./modal/Modal";



export const Projects = () => {

    const { isModalOpen, modalContent, open, close, images } = useModal();

    const handleOpenModal = (project: ProjectType) => {
        open(project);
    };

    const handleCloseModal = () => {
        close();
    };

    return (
        <S.Projects id={'works'}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <S.SliderWrapper>
                    <Slider {...sliderSettings}>
                        {projectsData.map((project, index) => (
                            <Project
                                key={index}
                                src={project.desktopSrc}
                                technologies={project.technologies}
                                title={project.title}
                                text={project.slideText}
                                buttonText={project.buttonText}
                                onOpenModal={() => handleOpenModal(project)}
                            />
                        ))}
                    </Slider>
                </S.SliderWrapper>
            </Container>
            <Modal
                isModalOpen={isModalOpen}
                handleCloseModal={handleCloseModal}
                images={images}
                modalContent={modalContent}
            />
        </S.Projects>
    );
};




