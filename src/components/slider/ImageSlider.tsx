import React, { useEffect, useRef, useState, ReactNode } from 'react';
import styled from 'styled-components';
import {theme} from "../../styles/Theme";



interface ImageSliderProps {
    children: ReactNode[];
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ children }) => {
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
        <Wrapp>
            <ImageContainer style={{ transform: `perspective(1000px) rotateY(${x}deg)` }}>
                <Cylinder>
                    <div className="side front"></div>
                    <div className="side back"></div>
                    <div className="side left"></div>
                    <div className="side right"></div>
                </Cylinder>
                {React.Children.map(children, (child, index) => (
                    <ImageSpan key={index} index={index} length={children.length}>
                        <StyledContent>{child}</StyledContent>
                    </ImageSpan>
                ))}
            </ImageContainer>
            <ButtonContainer>
                <Button onClick={handleNextClick}>Next</Button>
            </ButtonContainer>
        </Wrapp>
    );
};




const Wrapp = styled.div`
    position: relative;
    height: 70px;
`;

const ImageContainer = styled.div`
    width: 10px;
    height: 10px;
    transform-style: preserve-3d;
    transform: perspective(1000px) rotateY(0deg);
    transition: transform 0.7s;
    position: relative;
    margin: 0 auto;
`;


const Cylinder = styled.div`
    position: absolute;
    top: calc(-50% - -38px);
    left: 50%;
    width: 100px;
    height: 70px;
    transform-style: preserve-3d;
    transform: translate(-50%, -50%);

    .side {
        position: absolute;
        background-size: cover;
        background-color: ${theme.color.stolb};
    }

    .front {
        width: 100px;
        height: 70px;
        transform: translateZ(50px);
    }

    .back {
        width: 100px;
        height: 70px;
        transform: translateZ(-50px) rotateY(180deg);
    }

    .left {
        width: 100px;
        height: 70px;
        transform: rotateY(-90deg) translateX(-50px);
        transform-origin: left center;
    }

    .right {
        width: 100px;
        height: 70px;
        transform: rotateY(90deg) translateX(50px);
        transform-origin: right center;
    }
`;



const ImageSpan = styled.span<{ index: number, length: number }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: ${({ index, length }) => `rotateY(calc(${index} * 360deg / ${length})) translateZ(150px)`};
`;

const StyledContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ButtonContainer = styled.div`
    position: absolute;
    top: calc(50% - 21px);
    right: 10px;
`;

const Button = styled.button`
    background-color: slateblue;
    color: white;
    border: none;
    padding: 10px 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
    &:hover {
        filter: brightness(1.5);
    }
`;





