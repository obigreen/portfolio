import React, {useState} from 'react';
import {FlexWrapper} from '../../../../components/FlexWrapper';
import {SectionText} from '../../../../components/SectionText';
import {ButtonWin98} from '../../../../components/ButtonWin98';
import {S} from "./Modal_Styles";
import {TechnologiesMenu, Title} from "../Projects_Styles";

type ViewMode = "desktop" | "mobile";
type PreviewViewport = {
    width: number;
    height: number;
}

const PREVIEW_VIEWPORTS: Record<ViewMode, PreviewViewport> = {
    desktop: {
        width: 1200,
        height: 750,
    },
    mobile: {
        width: 425,
        height: 800,
    }
};


type ModalOverlayProps = {
    handleCloseModal: () => void;
    images: { src: string; label: string }[];
    modalContent: {
        title: string;
        technologies: string;
        text: string;
        link?: string
    } | null;
};

export const Modal = (
    {
        handleCloseModal,
        images,
        modalContent,
    }: ModalOverlayProps) => {


    const [viewMode, setViewMode] = useState<ViewMode>('desktop');

    const toggleViewMode = () => {
        setViewMode(viewMode === 'desktop' ? 'mobile' : 'desktop');
    };
    const currentImageIndex = viewMode === 'desktop' ? 0 : 1;
    const currentViewport = PREVIEW_VIEWPORTS[viewMode];

    if (!modalContent) return null;

    return (
        <S.Modal onClick={handleCloseModal}>
            <S.ModalContent onClick={(e) => e.stopPropagation()}>
                <FlexWrapper justify={'center'} direction={'column-reverse'} align={'center'} gap={'30px'}>
                    <S.PreviewContainer $maxWidth={currentViewport.width}>
                        <S.PreviewToggle>
                            <ButtonWin98 onClick={toggleViewMode}>
                                {viewMode === 'desktop' ? 'Mobile' : 'Desktop'}
                            </ButtonWin98>
                        </S.PreviewToggle>

                        {modalContent.link ? (
                            <S.LivePreviewFrame $height={currentViewport.height}
                                src={modalContent.link}
                                title={`${modalContent.title} ${viewMode} live preview`}

                            />
                        ) : (
                            images.length > 0 && (
                                <S.FallbackImage
                                    src={images[currentImageIndex]?.src}
                                    alt={images[currentImageIndex]?.label}
                                />
                            )
                        )}
                    </S.PreviewContainer>
                    <S.ProjectInfo>
                        <Title>{modalContent.title}</Title>
                        <TechnologiesMenu style={{
                            padding: "8px 8px 8px 0px",
                            borderBottom: "none",
                            marginBottom: "10px"
                        }}>{modalContent.technologies}</TechnologiesMenu>
                        <SectionText>{modalContent.text}</SectionText>
                        <S.ProjectLinkWrapp>
                            <S.ProjectLink href={modalContent.link || "#"}
                                           target={"_blank"}> {modalContent.link ? 'View Project' : 'No Link Available'}</S.ProjectLink>
                        </S.ProjectLinkWrapp>

                        <S.CloseButton onClick={handleCloseModal}>X</S.CloseButton>
                    </S.ProjectInfo>
                </FlexWrapper>
            </S.ModalContent>
        </S.Modal>
    );
};

