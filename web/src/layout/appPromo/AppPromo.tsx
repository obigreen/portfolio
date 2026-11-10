import {useEffect, useState} from "react";
import appLogo from "../../assets/img/logo-for-my-app.svg";
import {S} from "./AppPromo_Styles";

const APP_URL = "https://tavelore.com/";
const APP_DESCRIPTION = "Tavelore — моё веб-приложение для изучения иностранных языков. Создавайте наборы пар слов, фраз и предложений; тот же формат подойдёт для терминов и других тем.";
const TYPEWRITER_INTERVAL_MS = 18;

export const AppPromo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [visibleCharacters, setVisibleCharacters] = useState(0);

    const openCard = () => {
        if (isOpen) {
            return;
        }

        const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
        setVisibleCharacters(prefersReducedMotion ? APP_DESCRIPTION.length : 0);
        setIsOpen(true);
    };

    useEffect(() => {
        if (!isOpen || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        let characterIndex = 0;
        const intervalId = window.setInterval(() => {
            characterIndex += 1;
            setVisibleCharacters(characterIndex);

            if (characterIndex >= APP_DESCRIPTION.length) {
                window.clearInterval(intervalId);
            }
        }, TYPEWRITER_INTERVAL_MS);

        return () => window.clearInterval(intervalId);
    }, [isOpen]);

    return (
        <S.PromoCard
            $expanded={isOpen}
            aria-labelledby="tavelore-promo-title"
            onMouseEnter={openCard}
            onFocus={openCard}
        >
            <S.TitleBar $expanded={isOpen}>
                <S.Title id="tavelore-promo-title">Tavelore</S.Title>
                <S.CollapseButton
                    type="button"
                    aria-label="Закрыть окно Tavelore"
                    onClick={(event) => {
                        setVisibleCharacters(0);
                        setIsOpen(false);
                        event.currentTarget.blur();
                    }}
                >
                    X
                </S.CollapseButton>
            </S.TitleBar>
            <S.LogoButton
                $expanded={isOpen}
                type="button"
                aria-label={isOpen ? "Логотип Tavelore" : "Открыть описание Tavelore"}
                aria-expanded={isOpen}
                aria-controls="tavelore-promo-description"
                onClick={openCard}
            >
                <S.LogoImage src={appLogo} alt="" $expanded={isOpen}/>
            </S.LogoButton>
            <S.PromoContent id="tavelore-promo-description" $expanded={isOpen} aria-hidden={!isOpen}>
                <S.Description>
                    <span aria-hidden="true">{APP_DESCRIPTION.slice(0, visibleCharacters)}</span>
                    <S.ScreenReaderText>{APP_DESCRIPTION}</S.ScreenReaderText>
                </S.Description>
                <S.OpenLink href={APP_URL} target="_blank" rel="noopener noreferrer" tabIndex={isOpen ? 0 : -1}>
                    Открыть приложение
                </S.OpenLink>
            </S.PromoContent>
        </S.PromoCard>
    );
};
