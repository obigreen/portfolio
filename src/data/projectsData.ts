import bomBurgerPrev from "../assets/img/portfolio-pages/boom-burger/boomBurgerPrev.webp";
import boomBurgerDesktop from "../assets/img/portfolio-pages/boom-burger/bomBurger-desktop.webp";
import boomBurgerMobile from "../assets/img/portfolio-pages/boom-burger/bomBurger-mobile.webp";

import practiceJsPrew from "../assets/img/portfolio-pages/practiceJs/practiceJsPrew.webp";
import practiceJsDesktop from "../assets/img/portfolio-pages/practiceJs/practiceJsDesktop.webp";
import practiceJsMobile from "../assets/img/portfolio-pages/practiceJs/practiceJsMobile.webp";

import promoQuizPrev from "../assets/img/portfolio-pages/promo-quiz/promo-quiz-prew.webp";
import promoQuizDesktop from "../assets/img/portfolio-pages/promo-quiz/promo-quiz-desktop.webp";
import promoQuizMobile from "../assets/img/portfolio-pages/promo-quiz/promo-quiz-mobile.webp";

import samurai from "../assets/img/portfolio-pages/react-utils-hub/smaurai.webp";


//=========
import empty from "../assets/img/portfolio-pages/forEmptyCard.jpg";




export type ProjectType = {
    desktopSrc: string;
    mobileSrc: string;
    previewImg: string
    src?: string;
    technologies: string;
    title: string;
    slideText: string;
    descText: string;
    buttonText: string;
    link?: string;
};


export const projectsData: ProjectType[] = [
    {
        previewImg: bomBurgerPrev,
        desktopSrc: boomBurgerDesktop,
        mobileSrc: boomBurgerMobile,
        technologies: 'HTML5 SCSS JS Gulp jQuery Slick WOW Inputmask',
        title: 'Boom Burger',
        slideText: 'Landing page',
        descText: 'Данный проект представляет собой одностраничное приложение (landing page) с адаптивной версткой и интерактивными элементами, созданное с использованием современных веб-технологий для оптимизации разработки и улучшения пользовательского опыта. В проекте используется HTML для структуры страницы, SCSS для оформления с применением переменных, вложенности и миксинов, а также JavaScript (Vanilla и jQuery) для реализации динамических элементов, таких как мобильное меню, таймеры, формы и плавный скролл. Сборка и оптимизация проекта выполнены с использованием Gulp, который позволяет компилировать SCSS в CSS, минифицировать и объединять файлы. Для реализации адаптивных слайдеров применена библиотека Slick, а WOW.js добавляет анимации при прокрутке страницы. Inputmask используется для форматирования ввода телефонного номера в форме заказа. Проект структурирован для удобной работы, а также обеспечивает поддержку анимации, интерактивных интерфейсов и адаптивности. [study-pet]',
        buttonText: 'Open <~>',
        link: 'https://obigreen.github.io/boom-burger/'
    },
    {
        previewImg: practiceJsPrew,
        desktopSrc: practiceJsDesktop,
        mobileSrc: practiceJsMobile,
        technologies: 'HTML5 CSS3 JS jQuery Swiper Canvas',
        title: 'Games Platform',
        slideText: 'Interactive Practice Platform for Games',
        descText: 'Данный проект представляет собой платформу для практики JavaScript, которая включает различные интерактивные игры. Он реализован с использованием HTML, CSS и JavaScript, а также применяет современные веб-технологии и API. Платформа уже содержит несколько игр с возможностью добавления новых. Проект имеет адаптивный интерфейс, обеспечивающий совместимость с разными устройствами, и структурирован таким образом, чтобы легко расширяться в будущем. Планируется дальнейшее добавление новых игр и решений, доработка существующих (новые игровые механики, исправление багов), улучшение дизайна и перенос платформы с базовой структуры на фреймворк/библиотеку React. [pet]',
        buttonText: 'Open <~>',
        link: 'https://obigreen.github.io/practiceJs/'
    },
    {
        previewImg: samurai,
        desktopSrc: samurai,
        mobileSrc: samurai,
        technologies: 'React JS TS Router Styled-components',
        title: 'React utils hub',
        slideText: 'Interactive Practice Platform for Utils [ONLY DESKTOP VERSION]',
        descText: 'Это React-приложение, представляющее собой dashboard, в котором собрано множество решений для практики написания кода. В отличие от другого моего проекта, посвященного мини-играм, этот проект ориентирован на различные интерактивные виджеты и утилиты. Здесь можно найти и протестировать разные реализации полезных компонентов, доступных через удобную навигацию.',
        buttonText: 'Open <~>',
        link: 'https://obigreen.github.io/react-utils-hub/'
    },

    {
        previewImg: promoQuizPrev,
        desktopSrc: promoQuizDesktop,
        mobileSrc: promoQuizMobile,
        technologies: 'В процессе написания',
        title: 'В процессе написания',
        slideText: 'В процессе написания',
        descText: 'В процессе написания',
        buttonText: 'Open <~>',
        link: 'https://obigreen.github.io/promo-quiz-converter/'
    },


];