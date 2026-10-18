import {useCallback, useEffect, useRef, useState} from "react";

export const useImageSlider = (childrenLength: number, interval: number = 3000) => {
    const [x, setX] = useState(0);
    const timerRef = useRef<number | undefined>(undefined);

    const rotate = useCallback(() => {
        if (childrenLength <= 0) {
            return;
        }

        setX((prevX) => prevX - (360 / childrenLength));
    }, [childrenLength]);

    const restartTimer = useCallback(() => {
        if (timerRef.current !== undefined) {
            window.clearInterval(timerRef.current);
        }

        timerRef.current = window.setInterval(rotate, interval);
    }, [interval, rotate]);

    const handleNextClick = () => {
        rotate();
        restartTimer();
    };

    useEffect(() => {
        restartTimer();

        return () => {
            if (timerRef.current !== undefined) {
                window.clearInterval(timerRef.current);
            }
        };
    }, [restartTimer]);

    return { x, handleNextClick };
};
