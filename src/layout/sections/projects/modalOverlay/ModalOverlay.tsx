import React from 'react';
import {FlexWrapper} from '../../../../components/FlexWrapper';
import {SectionText} from '../../../../components/SectionText';
import {ButtonWin98} from '../../../../components/ButtonWin98';
import {S} from "./ModalOverlay_Styles";
import {TechnologiesMenu, Title} from "../Projects_Styles";

type ModalOverlayProps = {
    isModalOpen: boolean;
    handleCloseModal: () => void;
    currentIndex: number;
    mSlide: () => void;
    images: { src: string; label: string }[];
    modalContent: {
        title: string;
        technologies: string;
        text: string;
    } | null;
};

export const ModalOverlayComponent = (
    {
        isModalOpen,
        handleCloseModal,
        currentIndex,
        mSlide,
        images,
        modalContent,
    }: ModalOverlayProps) => {
    if (!isModalOpen || !modalContent) return null;

    return (
        <S.ModalOverlay onClick={handleCloseModal}>
            <S.ModalContent onClick={(e) => e.stopPropagation()}>
                <FlexWrapper justify={'center'} gap={'30px'}>
                    <div style={{position: 'relative', maxWidth: '600px', width: '100%'}}>
                        <div style={{position: 'absolute'}}>
                            <ButtonWin98 onClick={mSlide}>
                                {currentIndex === 0 ? 'Mobile' : 'Desktop'}
                            </ButtonWin98>
                        </div>

                        {images.length > 0 && (
                            <img
                                src={images[currentIndex]?.src}
                                alt={images[currentIndex]?.label}
                                style={{width: '100%', maxWidth: '600px'}}
                            />
                        )}
                    </div>
                    <S.ProjectInfo>
                        <Title>{modalContent.title}</Title>
                        <TechnologiesMenu style={{padding: "8px 8px 8px 0px", borderBottom: "none", marginBottom: "10px"}}>{modalContent.technologies}</TechnologiesMenu>
                        <SectionText>{modalContent.text}</SectionText>
                        <S.CloseButton onClick={handleCloseModal}>X</S.CloseButton>
                        <S.ProjectLink href={""}></S.ProjectLink>
                    </S.ProjectInfo>
                </FlexWrapper>
            </S.ModalContent>
        </S.ModalOverlay>
    );
};

