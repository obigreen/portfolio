import React, {useState} from 'react';
import Slider from 'react-slick';
import {Project} from "./project/Project";
import {Container} from "../../../styles/Container";

import bomBurgerdesctop from '../../../assets/img/portfolio-pages/boom-burger/bomBurger-desctop.webp'
import bomBurgermobile from '../../../assets/img/portfolio-pages/boom-burger/bomBurger-mobile.webp'
import projectTwo from '../../../assets/img/projectTwo.png'
import projectThree from '../../../assets/img/projectThree.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import {S} from "./Projects_Styles"
import {SectionTitle} from "../../../components/SectionTitle";
import {ModalOverlayComponent} from "./modalOverlay/ModalOverlay";

type ProjectType = {
    src: string;
    technologies: string;
    title: string;
    text: string;
    buttonText: string;
};


const infoProjectTitle = [
    {
        src: bomBurgerdesctop,
        technologies: "HTML SCSS JS GULP",
        title: "Boom Burger",
        text: "Landing page",
        buttonText: "Open <~>"
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
        desktopSrc: bomBurgerdesctop,
        mobileSrc: bomBurgermobile,
        technologies: "HTML SCSS JS GULP",
        title: "Boom Burger",
        text: "Разработал интерактивный лендинг для BoomBurger с акцентом на пользовательский опыт и современные технологии. Среди ключевых функциональных элементов, реализованных на странице:\n" +
            "\n" +
            "Слайдер для категорий бургеров: Использовал библиотеку Slick.js для создания интерактивного слайдера, который демонстрирует различные категории бургеров (например, с курицей, говядиной и др.) с возможностью листать меню.\n" +
            "\n" +
            "Анимация с использованием WOW.js: Внедрена анимация при прокрутке страницы, которая оживляет элементы, улучшая восприятие и делая дизайн более динамичным.\n" +
            "\n" +
            "Валидация форм и Input Mask: Добавил валидацию для форм бронирования столов, используя Inputmask.js для маски ввода телефонного номера, что обеспечивает корректность ввода данных пользователями.\n" +
            "\n" +
            "Подключение JQuery для интерактивных элементов: Использовал jQuery для работы с DOM и взаимодействия с пользователем, а также для облегчения внедрения всех вышеупомянутых библиотек.\n" +
            "\n" +
            "Акции и отзывы: Реализованы разделы для отзывов клиентов и текущих акций, которые динамически подстраиваются под контент и позволяют пользователю взаимодействовать с ними.\n" +
            "\n" +
            "Данный проект ориентирован на плавный и интуитивно понятный UX/UI с использованием актуальных front-end технологий.",
    },
    {
        desktopSrc: projectTwo,
        mobileSrc: projectTwo,
        technologies: "React Express Discord.js Node.js HTML SCSS Python Flask",
        title: "ProtectX",
        text: "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
    },
    {
        desktopSrc: projectThree,
        mobileSrc: projectThree,
        technologies: "CSS Express Node.js",
        title: "Kahoot Answers Viewer",
        text: "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
    }
]


export const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<{
        desktopSrc: string;
        mobileSrc: string;
        src?: string;
        technologies: string;
        title: string;
        text: string
    } | null>(null);

    const [currentIndex, setCurrentIndex] = useState(0);

    // Функция для блокировки скролла на основном контенте
    const lockScroll = () => {
        document.body.style.overflow = 'hidden';
    };

    // Функция для разблокировки скролла на основном контенте
    const unlockScroll = () => {
        document.body.style.overflow = 'auto';
    };

    const handleOpenModal = (project: ProjectType) => {
        const detailedProject = infoProjectDescription.find(p => p.title === project.title);
        if (detailedProject) {
            setModalContent({
                desktopSrc: detailedProject.desktopSrc,
                mobileSrc: detailedProject.mobileSrc,
                src: detailedProject.desktopSrc, // можно задать начальное значение для src
                technologies: detailedProject.technologies,
                title: detailedProject.title,
                text: detailedProject.text
            });
            setIsModalOpen(true);
            lockScroll();
        }
    };

    // функция для закрытия модального окна
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
        unlockScroll();
    };

    // Ваш массив изображений (вместо этого может быть modalContent.src и modalContent.mobileSrc)
    const images = modalContent
        ? [
            {
                src: modalContent.desktopSrc,   // Десктопная версия
                label: "Desktop"
            },
            {
                src: modalContent.mobileSrc,    // Мобильная версия
                label: "Mobile"
            }
        ]
        :
        []
    ;


    const mSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
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
                <S.SliderWrapper>
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
                </S.SliderWrapper>
            </Container>
            <ModalOverlayComponent
                isModalOpen={isModalOpen}
                handleCloseModal={handleCloseModal}
                currentIndex={currentIndex}
                mSlide={mSlide}
                images={images}
                modalContent={modalContent}
            />
        </S.Projects>
    );
};




