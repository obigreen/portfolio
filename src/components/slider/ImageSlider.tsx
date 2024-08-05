import React, { useEffect, useRef, useState, ReactNode } from 'react';
import styled from 'styled-components';



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
                    <div className="front"></div>
                    <div className="back"></div>
                    <div className="left"></div>
                    <div className="right"></div>
                    <div className="top"></div>
                    <div className="bottom"></div>
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
    top: 50%;
    left: 50%;
    width: 64px;

    background-color: transparent;
    transform-style: preserve-3d;
    transform: translate(-50%, -50%);

    .front, .back, .left, .right {
        position: absolute;
        background-size: cover;
    }

    .front, .back {
        width: 30px;
        height: 73px;
    }

    .front {
        background-color: #FF5733;
        transform: translateZ(15px) translateX(15px);
    }

    .back {
        background-color: #33FF57;
        transform: translateZ(-15px) scale(-1, 1) translateX(-15px);
    }

    .left, .right {
        width: 30px;
        height: 73px;
    }

    .left {
        background-color: #3357FF;
        transform: translateX(0px) rotateY(90deg);
    }

    .right {
        background-color: #FF33A6;
        transform: translateX(30px) rotateY(90deg);
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
    top: 0;
    right: 10px;
`;

const Button = styled.button`
    background-color: slateblue;
    color: white;
    border: none;
    padding: 10px 30px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
    &:hover {
        filter: brightness(1.5);
    }
`;





