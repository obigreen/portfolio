import boomBurgerDesctop from "../assets/img/portfolio-pages/boom-burger/bomBurger-desctop.webp";
import boomBurgerMobile from "../assets/img/portfolio-pages/boom-burger/bomBurger-mobile.webp";
import bomBurgerPrev from "../assets/img/portfolio-pages/boom-burger/boomBurgerPrev.webp";
import projectTwo from "../assets/img/portfolio-pages/projectTwo.png";
import projectThree from "../assets/img/portfolio-pages/projectThree.png";


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
        desktopSrc: boomBurgerDesctop,
        mobileSrc: boomBurgerMobile,
        technologies: 'HTML SCSS JS Gulp jQuery Slick WOW Inputmask',
        title: 'Boom Burger',
        slideText: 'Landing page',
        descText: 'Данный проект представляет собой одностраничное приложение (landing page) с адаптивной версткой и интерактивными элементами, созданное с использованием современных веб-технологий для оптимизации разработки и улучшения пользовательского опыта. В проекте используется HTML для структуры страницы, SCSS для оформления с применением переменных, вложенности и миксинов, а также JavaScript (Vanilla и jQuery) для реализации динамических элементов, таких как мобильное меню, таймеры, формы и плавный скролл. Сборка и оптимизация проекта выполнены с использованием Gulp, который позволяет компилировать SCSS в CSS, минифицировать и объединять файлы. Для реализации адаптивных слайдеров применена библиотека Slick, а WOW.js добавляет анимации при прокрутке страницы. Inputmask используется для форматирования ввода телефонного номера в форме заказа. Проект структурирован для удобной работы, а также обеспечивает поддержку анимации, интерактивных интерфейсов и адаптивности. [study-pet]',
        buttonText: 'Open <~>',
        link: 'https://obigreen.github.io/boom-burger/'
    },
    {
        previewImg: projectTwo,
        desktopSrc: projectTwo,
        mobileSrc: projectTwo,
        technologies: 'React Express Discord.js Node.js HTML SCSS Python Flask',
        title: 'ProtectX',
        slideText: 'Discord anti-crash bot',
        descText: 'Полное описание ProtectX: Discord бот для предотвращения крашей серверов. Использует Node.js и Python для анализа логов и управления действиями пользователей.',
        buttonText: 'Open <~>',
        link: ''
    },
    {
        previewImg: projectThree,
        desktopSrc: projectThree,
        mobileSrc: projectThree,
        technologies: 'CSS Express Node.js',
        title: 'Kahoot Answers Viewer',
        slideText: 'Kahoot quiz helper',
        descText: 'Инструмент для получения ответов на Kahoot-викторины. Позволяет мгновенно извлекать правильные ответы с использованием Express.js и Node.js.',
        buttonText: 'Open <~>',
        link: ''
    },


    {
        previewImg: projectThree,
        desktopSrc: projectThree,
        mobileSrc: projectThree,
        technologies: 'CSS Express Node.js',
        title: 'Kahoot Answers Viewer',
        slideText: 'Kahoot quiz helper',
        descText: 'Инструмент для получения ответов на Kahoot-викторины. Позволяет мгновенно извлекать правильные ответы с использованием Express.js и Node.js.',
        buttonText: 'Open <~>',
        link: ''
    },


];