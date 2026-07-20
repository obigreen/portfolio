// import bomBurgerPrev from "../assets/img/portfolio-pages/boom-burger/boomBurgerPrev.webp";
// import boomBurgerDesktop from "../assets/img/portfolio-pages/boom-burger/bomBurger-desktop.webp";
// import boomBurgerMobile from "../assets/img/portfolio-pages/boom-burger/bomBurger-mobile.webp";


type ProjectImages = {
    desktopSrc: string;
    mobileSrc: string;
    previewImg: string
}



export type ProjectType = {
    previewType?: "image" | "live";
    src?: string;
    technologies: string;
    title: string;
    slideText: string;
    descText: string;
    buttonText: string;
    link?: string;
    images?: ProjectImages;
};


export const projectsData: ProjectType[] = [
    {
        previewType: "live",
        technologies: "HTML5 CSS3 JavaScript PHP Swiper Telegram Bot API",
        title: "VitaCall",
        slideText: "Adaptive recruiting landing page for a call-center team",
        descText: "VitaCall — коммерческий адаптивный лендинг для набора операторов в международный call-центр. Проект создавался без готового макета и без референсов: на входе были только текстовые блоки и задача собрать рабочую структуру страницы. Я реализовал верстку, адаптив под desktop/mobile, sticky header с burger-menu, CTA pop-up, плавную навигацию по секциям, Swiper-слайдер отзывов, анимацию карьерного блока, многошаговую анкету с прогрессом, валидацией и сбором ответов, а также отправку заявок в Telegram-бот через PHP endpoint. На текущей рабочей версии сайта дополнительно присутствует переключение языка RU/UZ; эту языковую доработку реализовывал не я. Также на текущей версии сайта отсутствует favicon. [commercial], Сссылка на гит деплой для корректного отображению live превью. real link - [https://vitacall.ru/]",
        buttonText: "Open <~>",
        link: "https://obigreen.github.io/portfolio-hub/projects/landings/vitaCall/"
    },
    {
        previewType: "live",
        technologies: 'HTML5 SCSS JS Gulp jQuery Slick WOW Inputmask',
        title: 'Boom Burger',
        slideText: 'Landing page',
        descText: 'Данный проект представляет собой одностраничное приложение (landing page) с адаптивной версткой и интерактивными элементами, созданное с использованием современных веб-технологий для оптимизации разработки и улучшения пользовательского опыта. В проекте используется HTML для структуры страницы, SCSS для оформления с применением переменных, вложенности и миксинов, а также JavaScript (Vanilla и jQuery) для реализации динамических элементов, таких как мобильное меню, таймеры, формы и плавный скролл. Сборка и оптимизация проекта выполнены с использованием Gulp, который позволяет компилировать SCSS в CSS, минифицировать и объединять файлы. Для реализации адаптивных слайдеров применена библиотека Slick, а WOW.js добавляет анимации при прокрутке страницы. Inputmask используется для форматирования ввода телефонного номера в форме заказа. Проект структурирован для удобной работы, а также обеспечивает поддержку анимации, интерактивных интерфейсов и адаптивности. [study-pet]',
        buttonText: 'Open <~>',
        link: 'https://obigreen.github.io/boom-burger/'
    },
    {
        previewType: "live",
        technologies: 'HTML5 CSS3 JS jQuery Swiper Canvas',
        title: 'Games Platform',
        slideText: 'Interactive Practice Platform for Games',
        descText: 'Данный проект представляет собой платформу для практики JavaScript, которая включает различные интерактивные игры. Он реализован с использованием HTML, CSS и JavaScript, а также применяет современные веб-технологии и API. Платформа уже содержит несколько игр с возможностью добавления новых. Проект имеет адаптивный интерфейс, обеспечивающий совместимость с разными устройствами, и структурирован таким образом, чтобы легко расширяться в будущем. Планируется дальнейшее добавление новых игр и решений, доработка существующих (новые игровые механики, исправление багов), улучшение дизайна и перенос платформы с базовой структуры на фреймворк/библиотеку React. [pet]',
        buttonText: 'Open <~>',
        link: 'https://obigreen.github.io/practiceJs/'
    },
    {
        previewType: "live",
        technologies: 'React JS TS Router Styled-components',
        title: 'React utils hub',
        slideText: 'Interactive Practice Platform for Utils [ONLY DESKTOP VERSION]',
        descText: 'Это React-приложение, представляющее собой dashboard, в котором собрано множество решений для практики написания кода. В отличие от другого моего проекта, посвященного мини-играм, этот проект ориентирован на различные интерактивные виджеты и утилиты. Здесь можно найти и протестировать разные реализации полезных компонентов, доступных через удобную навигацию.',
        buttonText: 'Open <~>',
        link: 'https://obigreen.github.io/react-utils-hub/'
    },

    {
        previewType: "live",
        technologies: 'В процессе написания',
        title: 'В процессе написания',
        slideText: 'В процессе написания',
        descText: 'В процессе написания',
        buttonText: 'Open <~>',
        link: 'https://obigreen.github.io/promo-quiz-converter/'
    },

    {
        previewType: "live",
        technologies: "HTML5 CSS3 JS",
        title: "Mini JavaScript Hub",
        slideText: "A set of mini-practices and utilities in JavaScript",
        descText: "Mini JavaScript Hub — это хаб с мини-приложениями и практиками на чистом JavaScript. Проект построен на модульной структуре: есть главная страница с карточками инструментов и отдельные компоненты, каждый со своими HTML/CSS/JS файлами и общей дизайн-системой через common.css. Реализованы интерактивные проверки в реальном времени, адаптивная сетка, переиспользуемые UI-блоки и аккуратная организация для дальнейшего масштабирования новыми мини-инструментами. [pet]",
        buttonText: "Open <~>",
        link: "https://obigreen.github.io/mini-js-hub/"
    },


    {
        previewType: "live",
        technologies: "Photoshop HTML5 CSS3 JS Swiper WordPress PHP ACF REST API",
        title: "Transmission Driving School",
        slideText: "Full-cycle WordPress landing page for a driving school",
        descText: "Transmission — учебный full-cycle проект сайта автошколы, реализованный от идеи и визуальной концепции до публикации на собственном сервере. Тематика, структура страницы и пользовательские сценарии были разработаны с нуля, дизайн подготовлен в Photoshop, после чего выполнена адаптивная верстка на HTML5, CSS3 и Vanilla JavaScript. В интерфейсе реализованы Swiper-слайдеры, интерактивный выбор категорий обучения, кастомная прокрутка этапов, анимированный блок преимуществ, модальное окно записи и клиентская валидация формы. Статический лендинг был преобразован в собственную WordPress-тему без Elementor и других конструкторов: настроены PHP-шаблоны, подключение ресурсов через WordPress API, навигационное меню, ACF-поля и динамическое управление инструкторами и отзывами через админку. Для обработки заявок разработан отдельный PHP-плагин Transmission Leads с собственным REST API endpoint, серверной валидацией и очисткой данных, honeypot-защитой, rate limiting и сохранением лидов как приватных записей WordPress с отдельным интерфейсом в админке. Локальная разработка выполнялась в LocalWP, а production-версия развернута на собственном VPS DigitalOcean под Ubuntu с использованием Nginx, PHP-FPM и MySQL. Выполнены перенос файлов и базы данных через rsync и WP-CLI, настройка прав доступа, HTTPS-сертификатов Let’s Encrypt и автоматического продления. Во время запуска была диагностирована выборочная деградация маршрутов российских провайдеров к зарубежной инфраструктуре, поэтому публичная демонстрация временно работает через поддомен DuckDNS [ https://transmission-school.duckdns.org/ ], направленный на тот же VPS, но иногда открывается и через [ https://transmission-school.ru/ ]. Сссылка на гит деплой для корректного отображению live превью. ‼Проект доступен для коммерческой адаптации под действующую автошколу: возможны ребрендинг, замена контента, настройка форм, подключение домена и развёртывание на инфраструктуре заказчика. Возможна передача готового решения с последующим техническим сопровождением.",
        buttonText: "Open <~>",
        link: "https://obigreen.github.io/portfolio-hub/projects/landings/carSchool/",
    },




];
