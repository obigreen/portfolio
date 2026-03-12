import React, {memo, useState} from 'react';
import { SectionText } from "../../../../components/SectionText";
import { Button } from "../../../../components/Button";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import {S, TechnologiesMenu, Title} from "../Projects_Styles";

type StyledWorkPropsType = {
    title: string;
    text: string;
    src?: string;
    previewType?: "image" | "live";
    technologies: string;
    buttonText: string;
    link?: string
    onOpenModal: () => void;
}

export const Project = memo(({title, text, src, previewType = "image", link, technologies, buttonText, onOpenModal }: StyledWorkPropsType) => {
    const [hasLivePreviewError, setHasLivePreviewError] = useState(false);

    const handleButtonClick = () => {
        onOpenModal();
    };

    const showLivePreview = previewType === "live" && !!link && !hasLivePreviewError;

    return (
        <S.Work id={'projects'}>
            <FlexWrapper height={'200px'} overflow={'hidden'} >
                {showLivePreview ? (
                    <S.PreviewViewport>
                        <S.PreviewFrame
                            src={link}
                            title={`${title} live preview`}
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            onError={() => setHasLivePreviewError(true)}
                        />
                    </S.PreviewViewport>
                ) : (
                    <img
                        src={src}
                        alt={`${title} preview`}
                        style={{ width: '100%', objectFit: 'cover', height: '100%', objectPosition: 'top' }}
                    />
                )}
            </FlexWrapper>
            <TechnologiesMenu>{technologies}</TechnologiesMenu>
            <S.InfoProjectWrapper>
                <Title>{title}</Title>
                <SectionText margin={'cardTextMargin'}>{text}</SectionText>
                <Button onClick={handleButtonClick}>{buttonText}</Button>
            </S.InfoProjectWrapper>
        </S.Work>
    );
});
