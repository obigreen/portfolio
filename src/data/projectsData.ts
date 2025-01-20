import bomBurgerdesctop from "../assets/img/portfolio-pages/boom-burger/bomBurger-desctop.webp";
import bomBurgermobile from "../assets/img/portfolio-pages/boom-burger/bomBurger-mobile.webp";
import projectTwo from "../assets/img/projectTwo.png";
import projectThree from "../assets/img/projectThree.png";


export type ProjectType = {
    desktopSrc: string;
    mobileSrc: string;
    src?: string;
    technologies: string;
    title: string;
    slideText: string;
    descText: string;
    buttonText: string;
};


export const projectsData: ProjectType[] = [
    {
        desktopSrc: bomBurgerdesctop,
        mobileSrc: bomBurgermobile,
        technologies: 'HTML SCSS JS GULP',
        title: 'Boom Burger',
        slideText: 'Landing page',
        descText: 'Разработал интерактивный лендинг для BoomBurger с акцентом на пользовательский опыт и современные технологии. Среди ключевых элементов: слайдер категорий, анимация прокрутки, валидация форм, и разделы отзывов и акций. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.',
        buttonText: 'Open <~>',
    },
    {
        desktopSrc: projectTwo,
        mobileSrc: projectTwo,
        technologies: 'React Express Discord.js Node.js HTML SCSS Python Flask',
        title: 'ProtectX',
        slideText: 'Discord anti-crash bot',
        descText: 'Полное описание ProtectX: Discord бот для предотвращения крашей серверов. Использует Node.js и Python для анализа логов и управления действиями пользователей.',
        buttonText: 'Live <~>',
    },
    {
        desktopSrc: projectThree,
        mobileSrc: projectThree,
        technologies: 'CSS Express Node.js',
        title: 'Kahoot Answers Viewer',
        slideText: 'Kahoot quiz helper',
        descText: 'Инструмент для получения ответов на Kahoot-викторины. Позволяет мгновенно извлекать правильные ответы с использованием Express.js и Node.js.',
        buttonText: 'Live <~>',
    },
];