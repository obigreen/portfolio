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
import type { Swiper as SwiperCore } from "swiper";

export const Projects = () => {
    const { isModalOpen, modalContent, open, close, images } = useModal();

    const handleOpenModal = (project: ProjectType) => {
        open(project);
    };

    const handleCloseModal = () => {
        close();
    };


    const handleSlideChange = (swiper: SwiperCore) => {
        const userSwipedForward = swiper.activeIndex > swiper.previousIndex;
        swiper.params.autoplay.reverseDirection = !userSwipedForward;
        swiper.autoplay.stop();
        swiper.autoplay.start();
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
                            delay: 4500,
                            disableOnInteraction: true,
                            pauseOnMouseEnter: true,
                        }}
                        loop={true}
                        mousewheel={true}
                        speed={1000}
                        breakpoints={{
                            1024: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
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
                        onSlideChangeTransitionStart={handleSlideChange}>
                        {projectsData.map((project, index) => (
                            <SwiperSlide key={index}>
                                <Project
                                    src={project.previewImg}
                                    technologies={project.technologies}
                                    title={project.title}
                                    text={project.slideText}
                                    buttonText={project.buttonText}
                                    link={project.link}
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





