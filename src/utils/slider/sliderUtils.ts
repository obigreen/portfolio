import { useEffect, useRef, useState } from "react";

export const useImageSlider = (childrenLength: number, interval: number = 3000) => {
    const [x, setX] = useState(0);
    const timerRef = useRef<number | undefined>(undefined);

    const updateGallery = () => {
        setX((prevX) => prevX - (360 / childrenLength));
        timerRef.current = window.setTimeout(updateGallery, interval);
    };

    const handleNextClick = () => {
        setX((prevX) => prevX - (360 / childrenLength));
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        updateGallery();
    };

    useEffect(() => {
        updateGallery();
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [childrenLength]);

    return { x, handleNextClick };
};

