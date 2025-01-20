import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

import { Project } from "./project/Project";
import { Container } from "../../../styles/Container";
import { S } from "./Projects_Styles";
import { SectionTitle } from "../../../components/SectionTitle";
import { projectsData, ProjectType } from "../../../data/projectsData";
import { useModal } from "../../../hooks/useModal";
import { Modal } from "./modal/Modal";
import {Autoplay, Mousewheel} from "swiper/modules";

export const Projects = () => {
    const { isModalOpen, modalContent, open, close, images } = useModal();

    const handleOpenModal = (project: ProjectType) => {
        open(project);
    };

    const handleCloseModal = () => {
        close();
    };



    return (
        <S.Projects id="works">
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <S.SliderWrapper>
                    <Swiper
                        modules={[Autoplay, Mousewheel]}
                        slidesPerView={3}
                        spaceBetween={20}
                        centeredSlides={false}
                        autoplay={{
                            delay: 2400,
                            disableOnInteraction: true,
                        }}
                        loop={true}
                        mousewheel={true}
                        speed={1000}
                        breakpoints={{
                            1024: {
                                slidesPerView: "auto",
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 5,
                            },
                            480: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                        }}
                    >
                        {projectsData.map((project, index) => (
                            <SwiperSlide key={index}>
                                <Project
                                    src={project.desktopSrc}
                                    technologies={project.technologies}
                                    title={project.title}
                                    text={project.slideText}
                                    buttonText={project.buttonText}
                                    onOpenModal={() => handleOpenModal(project)}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
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





