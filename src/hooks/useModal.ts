import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store";
import {projectsData, ProjectType} from "../data/projectsData";
import {closeModal, openModal} from "../store/slices/modalSlice";

export const useModal = () => {
    const dispatch = useDispatch<AppDispatch>();
    const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
    const modalContent = useSelector((state: RootState) => state.modal.content);


    const open = (project: ProjectType) => {
        const detailedProject = projectsData.find(p => p.title === project.title);

        if (detailedProject) {
            dispatch(openModal({
                desktopSrc: project.desktopSrc,
                mobileSrc: project.mobileSrc,
                src: project.desktopSrc,
                technologies: project.technologies,
                title: project.title,
                text: project.descText,
                link: project.link,
            }));
        }
        document.body.style.overflow = 'hidden';
    };



    const close = () => {
        dispatch(closeModal());
        document.body.style.overflow = 'auto';
    };


    const images = modalContent
        ? [
            {
                src: modalContent.desktopSrc,
                label: "Desktop"
            },
            {
                src: modalContent.mobileSrc,
                label: "Mobile"
            }
        ]
        : [];

    return { isModalOpen, modalContent, open, close, images };
};

