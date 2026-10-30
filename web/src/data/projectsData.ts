// import bomBurgerPrev from "../assets/img/portfolio-pages/boom-burger/boomBurgerPrev.webp";
// import boomBurgerDesktop from "../assets/img/portfolio-pages/boom-burger/bomBurger-desktop.webp";
// import boomBurgerMobile from "../assets/img/portfolio-pages/boom-burger/bomBurger-mobile.webp";
import projects from "../../../shared/projects.json";

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


export const projectsData: ProjectType[] = projects.map((project) => {
    if (project.previewType !== "image" && project.previewType !== "live") {
        throw new Error(`Unsupported preview type: ${project.previewType}`)
    }

    return {
        ...project, previewType: project.previewType,
    };
});
