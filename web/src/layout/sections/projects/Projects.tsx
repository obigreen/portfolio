import React, {useCallback, useEffect, useRef, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

import { Project } from "./project/Project";
import { Container } from "../../../styles/Container";
import { S } from "./Projects_Styles";
import { projectsData, ProjectType } from "../../../data/projectsData";
import { useModal } from "../../../hooks/useModal";
import { Modal } from "./modal/Modal";
import {Autoplay, Mousewheel} from "swiper/modules";
import type { Swiper as SwiperCore } from "swiper";
import {GlitchTitle} from "../../../components/GlitchTitle";

const PREVIEW_BUFFER = 1;
const DEFAULT_VISIBLE_SLIDES = 3;
const PROJECTS_PRELOAD_MARGIN = "400px 0px";

const getPreviewIndexes = (activeIndex: number, visibleSlides: number) => {
    const indexes = new Set<number>();
    const projectsCount = projectsData.length;

    if (projectsCount === 0) {
        return indexes;
    }

    for (let offset = -PREVIEW_BUFFER; offset < visibleSlides + PREVIEW_BUFFER; offset += 1) {
        indexes.add((activeIndex + offset + projectsCount) % projectsCount);
    }

    return indexes;
};

const getVisibleSlidesCount = (swiper: SwiperCore) => {
    const {slidesPerView} = swiper.params;

    if (typeof slidesPerView === "number") {
        return Math.max(1, Math.ceil(slidesPerView));
    }

    return Math.max(1, Math.ceil(swiper.slidesPerViewDynamic()));
};

const areIndexSetsEqual = (first: Set<number>, second: Set<number>) => (
    first.size === second.size && [...first].every((index) => second.has(index))
);

export const Projects = () => {
    const { isModalOpen, modalContent, open, close, images } = useModal();
    const projectsSection = useRef<HTMLElement | null>(null);
    const projectsSwiper = useRef<SwiperCore | null>(null);
    const [isProjectsNearViewport, setIsProjectsNearViewport] = useState(false);
    const [activePreviewIndexes, setActivePreviewIndexes] = useState(() => (
        getPreviewIndexes(0, DEFAULT_VISIBLE_SLIDES)
    ));

    useEffect(() => {
        const section = projectsSection.current;

        if (!section || !("IntersectionObserver" in window)) {
            setIsProjectsNearViewport(true);
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            setIsProjectsNearViewport(entry.isIntersecting);
        }, {
            rootMargin: PROJECTS_PRELOAD_MARGIN,
        });

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    const updatePreviewWindow = useCallback((swiper: SwiperCore) => {
        const nextIndexes = getPreviewIndexes(
            swiper.realIndex,
            getVisibleSlidesCount(swiper),
        );

        setActivePreviewIndexes((currentIndexes) => (
            areIndexSetsEqual(currentIndexes, nextIndexes) ? currentIndexes : nextIndexes
        ));
    }, []);

    const handleSwiper = useCallback((swiper: SwiperCore) => {
        projectsSwiper.current = swiper;
        updatePreviewWindow(swiper);

        if (!isProjectsNearViewport) {
            swiper.autoplay.stop();
        }
    }, [isProjectsNearViewport, updatePreviewWindow]);

    useEffect(() => {
        const swiper = projectsSwiper.current;

        if (!swiper || swiper.destroyed) {
            return;
        }

        if (isProjectsNearViewport) {
            swiper.autoplay.start();
        } else {
            swiper.autoplay.stop();
        }
    }, [isProjectsNearViewport]);

    const handleOpenModal = (project: ProjectType) => {
        open(project);
    };

    const handleCloseModal = () => {
        close();
    };


    const handleSlideChange = (swiper: SwiperCore) => {
        if (!isProjectsNearViewport) {
            swiper.autoplay.stop();
            return;
        }

        const userSwipedForward = swiper.activeIndex > swiper.previousIndex;
        const autoplayParams = swiper.params.autoplay;

        if (typeof autoplayParams === "object") {
            autoplayParams.reverseDirection = !userSwipedForward;
        }

        swiper.autoplay.stop();
        swiper.autoplay.start();
    };




    return (
        <S.Projects ref={projectsSection} id="works">
            <Container>
                <GlitchTitle>Projects</GlitchTitle>
                {/*<SectionTitle>Projects</SectionTitle>*/}
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
                        onSwiper={handleSwiper}
                        onBreakpoint={updatePreviewWindow}
                        onResize={updatePreviewWindow}
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
                        onSlideChangeTransitionStart={handleSlideChange}
                        onSlideChangeTransitionEnd={updatePreviewWindow}>
                        {projectsData.map((project, index) => (
                            <SwiperSlide key={index}>
                                <Project
                                    src={project.images?.previewImg}
                                    previewType={project.previewType}
                                    technologies={project.technologies}
                                    title={project.title}
                                    text={project.slideText}
                                    buttonText={project.buttonText}
                                    link={project.link}
                                    shouldRenderPreview={
                                        isProjectsNearViewport && activePreviewIndexes.has(index)
                                    }
                                    onOpenModal={() => handleOpenModal(project)}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </S.SliderWrapper>
            </Container>
            {isModalOpen && (
                <Modal
                    handleCloseModal={handleCloseModal}
                    images={images}
                    modalContent={modalContent}
                />
            )}
        </S.Projects>
    );
};

