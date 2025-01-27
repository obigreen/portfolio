import bomBurgerPrev from "../assets/img/portfolio-pages/boom-burger/boomBurgerPrev.webp";
import boomBurgerDesktop from "../assets/img/portfolio-pages/boom-burger/bomBurger-desktop.webp";
import boomBurgerMobile from "../assets/img/portfolio-pages/boom-burger/bomBurger-mobile.webp";
import practiceJsPrew from "../assets/img/portfolio-pages/practiceJs/practiceJsPrew.webp";
import practiceJsDesktop from "../assets/img/portfolio-pages/practiceJs/practiceJsDesktop.webp";
import practiceJsMobile from "../assets/img/portfolio-pages/practiceJs/practiceJsMobile.webp";


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
        previewImg: empty,
        desktopSrc: empty,
        mobileSrc: empty,
        technologies: 'CSS Express Node',
        title: 'Kahoot Answers Viewer',
        slideText: 'Kahoot quiz helper',
        descText: 'Инструмент для получения ответов на Kahoot-викторины. Позволяет мгновенно извлекать правильные ответы с использованием Express.js и Node.js.',
        buttonText: 'Open <~>',
        link: ''
    },


    {
        previewImg: empty,
        desktopSrc: empty,
        mobileSrc: empty,
        technologies: 'CSS Express Node.js',
        title: 'Kahoot Answers Viewer',
        slideText: 'Kahoot quiz helper',
        descText: 'Инструмент для получения ответов на Kahoot-викторины. Позволяет мгновенно извлекать правильные ответы с использованием Express.js и Node.js.',
        buttonText: 'Open <~>',
        link: ''
    },


];