import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import {theme} from "../../styles/Theme";

const getDocumentHeight = () => {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
    );
};

const move1 = (documentHeight: number) => keyframes`
    0% { transform: translate(-50%, ${documentHeight + 50}px); }
    15% { transform: translate(40vw, ${documentHeight - 600}px); }
    30% { transform: translate(10vw, ${documentHeight - 2000}px); }
    45% { transform: translate(30vw, ${documentHeight - 1500}px); }
    60% { transform: translate(50vw, ${documentHeight - 2200}px); }
    75% { transform: translate(20vw, ${documentHeight - 1200}px); }
    90% { transform: translate(60vw, ${documentHeight - 400}px); }
    100% { transform: translate(-50%, ${documentHeight + 50}px); }
`;

const move2 = (documentHeight: number) => keyframes`
    0% { transform: translate(120vw, ${documentHeight + 50}px); }
    15% { transform: translate(15vw, ${documentHeight - 1600}px); }
    30% { transform: translate(25vw, ${documentHeight - 1800}px); }
    45% { transform: translate(35vw, ${documentHeight - 2500}px); }
    60% { transform: translate(45vw, ${documentHeight - 800}px); }
    75% { transform: translate(55vw, ${documentHeight - 1800}px); }
    90% { transform: translate(65vw, ${documentHeight - 500}px); }
    100% { transform: translate(120vw, ${documentHeight + 50}px); }
`;

const move3 = (documentHeight: number) => keyframes`
    0% { transform: translate(50vw, -400px); }
    15% { transform: translate(55vw, ${documentHeight - 1000}px); }
    30% { transform: translate(65vw, ${documentHeight - 3000}px); }
    45% { transform: translate(75vw, ${documentHeight - 800}px); }
    60% { transform: translate(85vw, ${documentHeight - 1500}px); }
    75% { transform: translate(95vw, ${documentHeight - 200}px); }
    90% { transform: translate(60vw, ${documentHeight - 100}px); }
    100% { transform: translate(50vw, -200px); }
`;

const move4 = (documentHeight: number) => keyframes`
    0% { transform: translate(-300px, -200px); }
    15% { transform: translate(20vw, ${documentHeight - 2000}px); }
    30% { transform: translate(25vw, ${documentHeight - 1200}px); }
    45% { transform: translate(35vw, ${documentHeight - 600}px); }
    60% { transform: translate(45vw, ${documentHeight - 1600}px); }
    75% { transform: translate(55vw, ${documentHeight - 2000}px); }
    90% { transform: translate(65vw, ${documentHeight - 1800}px); }
    100% { transform: translate(-300px, -200px); }
`;

const move5 = (documentHeight: number) => keyframes`
    0% { transform: translate(50vw, ${documentHeight - 100}px); }
    15% { transform: translate(10vw, ${documentHeight - 2200}px); }
    30% { transform: translate(20vw, ${documentHeight - 500}px); }
    45% { transform: translate(30vw, ${documentHeight - 1500}px); }
    60% { transform: translate(40vw, ${documentHeight - 700}px); }
    75% { transform: translate(50vw, ${documentHeight - 1800}px); }
    90% { transform: translate(60vw, ${documentHeight - 1000}px); }
    100% { transform: translate(50vw, ${documentHeight - 100}px); }
`;

const move6 = (documentHeight: number) => keyframes`
    0% { transform: translate(-100vw, ${documentHeight}px); }
    15% { transform: translate(10vw, ${documentHeight - 1600}px); }
    30% { transform: translate(30vw, ${documentHeight - 600}px); }
    45% { transform: translate(50vw, ${documentHeight - 3000}px); }
    60% { transform: translate(70vw, ${documentHeight - 1500}px); }
    75% { transform: translate(90vw, ${documentHeight - 500}px); }
    90% { transform: translate(110vw, ${documentHeight - 1000}px); }
    100% { transform: translate(-100vw, ${documentHeight}px); }
`;

const move7 = (documentHeight: number) => keyframes`
    0% { transform: translate(50vw, ${documentHeight - 600}px); }
    15% { transform: translate(10vw, ${documentHeight - 2600}px); }
    30% { transform: translate(20vw, ${documentHeight - 600}px); }
    45% { transform: translate(30vw, ${documentHeight - 1200}px); }
    60% { transform: translate(40vw, ${documentHeight - 2200}px); }
    75% { transform: translate(50vw, ${documentHeight - 1000}px); }
    90% { transform: translate(60vw, ${documentHeight - 400}px); }
    100% { transform: translate(50vw, ${documentHeight - 600}px); }
`;

const move8 = (documentHeight: number) => keyframes`
    0% { transform: translate(50vw, ${documentHeight + 50}px); }
    15% { transform: translate(60vw, ${documentHeight - 2200}px); }
    30% { transform: translate(70vw, ${documentHeight - 1200}px); }
    45% { transform: translate(80vw, ${documentHeight - 3000}px); }
    60% { transform: translate(90vw, ${documentHeight - 1800}px); }
    75% { transform: translate(100vw, ${documentHeight - 1000}px); }
    90% { transform: translate(110vw, ${documentHeight - 50}px); }
    100% { transform: translate(50vw, ${documentHeight + 50}px); }
`;

const move9 = (documentHeight: number) => keyframes`
    0% { transform: translate(-60vw, ${documentHeight - 2000}px); }
    15% { transform: translate(20vw, ${documentHeight - 1000}px); }
    30% { transform: translate(40vw, ${documentHeight - 600}px); }
    45% { transform: translate(60vw, ${documentHeight - 1500}px); }
    60% { transform: translate(80vw, ${documentHeight - 3000}px); }
    75% { transform: translate(100vw, ${documentHeight - 500}px); }
    90% { transform: translate(120vw, ${documentHeight - 1000}px); }
    100% { transform: translate(-60vw, ${documentHeight - 2000}px); }
`;

const move10 = (documentHeight: number) => keyframes`
    0% { transform: translate(100vw, ${documentHeight}px); }
    15% { transform: translate(30vw, ${documentHeight - 1000}px); }
    30% { transform: translate(50vw, ${documentHeight - 1500}px); }
    45% { transform: translate(70vw, ${documentHeight - 1800}px); }
    60% { transform: translate(90vw, ${documentHeight - 2200}px); }
    75% { transform: translate(110vw, ${documentHeight - 1500}px); }
    90% { transform: translate(130vw, ${documentHeight - 800}px); }
    100% { transform: translate(100vw, ${documentHeight}px); }
`;


const BlurWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -2;
    overflow: hidden;
`;

const Circle = styled.div<{ animation: any; size: string; color: string; duration: string }>`
    position: absolute;
    top: -200px; /* Начальная позиция за пределами видимости */
    left: -200px; /* Начальная позиция за пределами видимости */
    width: ${({size}) => size};
    height: ${({size}) => size};
    background-color: ${theme.color.backround};
    border-radius: 50%;
    box-shadow: inset 1px 3px 6px 0 rgb(0 0 0 / 11%);
    animation: ${({animation}) => animation} ${({duration}) => duration} infinite alternate ease-in-out;
`;

export const ComplexBackground: React.FC = () => {
    const [documentHeight, setDocumentHeight] = useState(0);
    const [showCircles, setShowCircles] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDocumentHeight(getDocumentHeight());
            setShowCircles(true); // Показать круги только после пересчета высоты страницы
        }, 500); // Задержка для обеспечения точного расчета высоты

        return () => clearTimeout(timeout);
    }, []);

    return (
        <BlurWrapper>
            {showCircles && (
                <>
                    <Circle
                        size="200px"
                        color="rgba(255, 79, 194, 0.3)"
                        animation={move1(documentHeight)}
                        duration="100s"
                    />
                    <Circle
                        size="400px"
                        color="rgba(0, 150, 255, 0.04)"
                        animation={move2(documentHeight)}
                        duration="75s"
                    />
                    <Circle
                        size="500px"
                        color="radial-gradient(circle, rgba(0, 255, 150, 0.3), rgba(30, 31, 35, 0))"
                        animation={move3(documentHeight)}
                        duration="70s"
                    />
                    <Circle
                        size="300px"
                        color="radial-gradient(circle, rgba(255, 255, 0, 0.3), rgba(255, 255, 0, 0))"
                        animation={move4(documentHeight)}
                        duration="85s"
                    />
                    <Circle
                        size="250px"
                        color="rgba(0, 255, 150, 0.3)"
                        animation={move5(documentHeight)}
                        duration="130s"
                    />
                    <Circle
                        size="350px"
                        color="radial-gradient(circle, rgba(255, 150, 150, 0.3), rgba(255, 150, 150, 0))"
                        animation={move6(documentHeight)}
                        duration="90s"
                    />
                    <Circle
                        size="450px"
                        color="radial-gradient(circle, rgba(150, 150, 255, 0.3), rgba(150, 150, 255, 0))"
                        animation={move7(documentHeight)}
                        duration="75s"
                    />
                    <Circle
                        size="150px"
                        color="radial-gradient(circle, rgba(255, 100, 100, 0.3), rgba(255, 100, 100, 0))"
                        animation={move8(documentHeight)}
                        duration="65s"
                    />
                    <Circle
                        size="300px"
                        color="rgba(255, 200, 0, 0.3)"
                        animation={move9(documentHeight)}
                        duration="100s"
                    />
                    <Circle
                        size="200px"
                        color="rgba(0, 200, 255, 0.3)"
                        animation={move10(documentHeight)}
                        duration="200s"
                    />
                </>
            )}
        </BlurWrapper>
    );
};










