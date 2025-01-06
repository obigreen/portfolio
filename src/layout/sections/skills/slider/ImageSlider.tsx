import React, { useEffect, useRef, useState, ReactNode } from 'react';
import {ButtonWin98} from "../../../../components/ButtonWin98";
import {S} from "./Slider_Styles"



type ImageSliderProps = {
    children: ReactNode[];
}

export const ImageSlider = ({ children }:ImageSliderProps) => {
    const [x, setX] = useState(0);
    const timerRef = useRef<number | undefined>(undefined);

    const updateGallery = () => {
        setX((prevX) => prevX - (360 / children.length));
        timerRef.current = window.setTimeout(updateGallery, 3000);
    };

    useEffect(() => {
        updateGallery();
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [children.length]);

    const handleNextClick = () => {
        setX((prevX) => prevX - (360 / children.length));
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        updateGallery();
    };

    return (
        <S.Wrapp>
            <S.ImageContainer style={{ transform: `perspective(1000px) rotateY(${x}deg)` }}>
                <S.Cylinder>
                    <div className="side front"></div>
                    <div className="side back"></div>
                    <div className="side left"></div>
                    <div className="side right"></div>
                </S.Cylinder>
                {React.Children.map(children, (child, index) => (
                    <S.ImageSpan key={index} index={index} length={children.length}>
                        <S.StyledContent>{child}</S.StyledContent>
                    </S.ImageSpan>
                ))}
            </S.ImageContainer>
            <S.ButtonContainer>
                <ButtonWin98 onClick={handleNextClick}>Крутануть</ButtonWin98>
            </S.ButtonContainer>
        </S.Wrapp>
    );
};







