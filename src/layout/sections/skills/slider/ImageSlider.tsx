import React, { ReactNode } from 'react';
import {ButtonWin98} from "../../../../components/ButtonWin98";
import {S} from "./Slider_Styles"
import {useImageSlider} from "../../../../utils/slider/sliderUtils";



type ImageSliderProps = {
    children: ReactNode[];
}

export const ImageSlider = ({ children }:ImageSliderProps) => {

    const { x, handleNextClick } = useImageSlider(children.length);

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







