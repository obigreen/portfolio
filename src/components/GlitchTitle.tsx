import React, { useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

interface GlitchInlineProps {
    children: string;
}

const textShadowAnim = keyframes`
  0%   { text-shadow: 0.438992px 0 1px rgba(0,30,255,0.5), -0.438992px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
  5%   { text-shadow: 2.792897px 0 1px rgba(0,30,255,0.5), -2.792897px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
  10%  { text-shadow: 0.029563px 0 1px rgba(0,30,255,0.5), -0.029563px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
  15%  { text-shadow: 0.402185px 0 1px rgba(0,30,255,0.5), -0.402185px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
  20%  { text-shadow: 3.479404px 0 1px rgba(0,30,255,0.5), -3.479404px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
  25%  { text-shadow: 1.612563px 0 1px rgba(0,30,255,0.5), -1.612563px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
  30%  { text-shadow: 0.701559px 0 1px rgba(0,30,255,0.5), -0.701559px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
  35%  { text-shadow: 3.896914px 0 1px rgba(0,30,255,0.5), -3.896914px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
  40%  { text-shadow: 3.870906px 0 1px rgba(0,30,255,0.5), -3.870906px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
  45%  { text-shadow: 2.231057px 0 1px rgba(0,30,255,0.5), -2.231057px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
  50%  { text-shadow: 0.080843px 0 1px rgba(0,30,255,0.5), -0.080843px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
  55%  { text-shadow: 2.375846px 0 1px rgba(0,30,255,0.5), -2.375846px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
  60%  { text-shadow: 2.202193px 0 1px rgba(0,30,255,0.5), -2.202193px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
  65%  { text-shadow: 2.863878px 0 1px rgba(0,30,255,0.5), -2.863878px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
  70%  { text-shadow: 0.488740px 0 1px rgba(0,30,255,0.5), -0.488740px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
  75%  { text-shadow: 1.894849px 0 1px rgba(0,30,255,0.5), -1.894849px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
  80%  { text-shadow: 0.083304px 0 1px rgba(0,30,255,0.5), -0.083304px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
  85%  { text-shadow: 0.097698px 0 1px rgba(0,30,255,0.5), -0.097698px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
  90%  { text-shadow: 3.443340px 0 1px rgba(0,30,255,0.5), -3.443340px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
  95%  { text-shadow: 2.184184px 0 1px rgba(0,30,255,0.5), -2.184184px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
  100% { text-shadow: 2.620876px 0 1px rgba(0,30,255,0.5), -2.620876px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
`;

const glitchAnim1 = keyframes`
  0%   { clip-path: inset(96% 0 1% 0); transform: translate(-10px, -5px); }
  10%  { clip-path: inset(49% 0 40% 0); transform: translate(10px, 5px); }
  20%  { clip-path: inset(59% 0 43% 0); transform: translate(-5px, 2px); }
  30%  { clip-path: inset(24% 0 26% 0); transform: translate(3px, -5px); }
  40%  { clip-path: inset(61% 0 13% 0); transform: translate(-3px, 7px); }
  50%  { clip-path: inset(29% 0 25% 0); transform: translate(7px, -2px); }
  60%  { clip-path: inset(54% 0 7% 0); transform: translate(-8px, 5px); }
  70%  { clip-path: inset(86% 0 13% 0); transform: translate(2px, -6px); }
  80%  { clip-path: inset(15% 0 13% 0); transform: translate(-2px, 6px); }
  90%  { clip-path: inset(92% 0 3% 0); transform: translate(9px, -4px); }
  100% { clip-path: inset(100% 0 1% 0); transform: translate(-10px, 4px); }
`;

const glitchAnim2 = keyframes`
  0%   { clip-path: inset(4% 0 36% 0); transform: translate(10px, 5px); }
  10%  { clip-path: inset(92% 0 7% 0); transform: translate(-6px, -3px); }
  20%  { clip-path: inset(59% 0 7% 0); transform: translate(4px, 2px); }
  30%  { clip-path: inset(32% 0 41% 0); transform: translate(-9px, 1px); }
  40%  { clip-path: inset(59% 0 14% 0); transform: translate(8px, -5px); }
  50%  { clip-path: inset(12% 0 82% 0); transform: translate(-3px, 7px); }
  60%  { clip-path: inset(46% 0 23% 0); transform: translate(2px, -2px); }
  70%  { clip-path: inset(24% 0 63% 0); transform: translate(-1px, 7px); }
  80%  { clip-path: inset(61% 0 33% 0); transform: translate(1px, -6px); }
  90%  { clip-path: inset(57% 0 1% 0); transform: translate(5px, 3px); }
  100% { clip-path: inset(0% 0 96% 0); transform: translate(-4px, -8px); }
`;


const GlitchText = styled.h3`
    position: relative;
    display: inline-block;
    font-family: monospace;
    font-size: 32px;
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 5px;
    animation: ${textShadowAnim} 1.6s infinite;

    &::before, &::after {
        content: attr(data-text);
        position: absolute; top: 0; left: 0;
        width: 100%; height: 100%;
    }
    &::before {
        left: 2px;
        text-shadow: -2px 0 #ff00c1;
        animation: ${glitchAnim1} 2s infinite linear alternate-reverse;
    }
    &::after {
        left: -2px;
        text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
        animation: ${glitchAnim2} 1s infinite linear alternate-reverse;
    }
`;

export const GlitchTitle: React.FC<GlitchInlineProps> = ({ children }) => {
    const ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const el = ref.current!;
        const original = children;
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()';
        const intervals: number[] = [];

        intervals.push(window.setInterval(() => {
            if (Math.random() > 0.95) {
                let t = '';
                for (let i = 0; i < original.length; i++) {
                    t += Math.random() > 0.7
                        ? chars.charAt(Math.floor(Math.random() * chars.length))
                        : original[i];
                }
                el.textContent = t;
                setTimeout(() => { el.textContent = original }, Math.random() * 200 + 50);
            }
        }, 100));

        // 2) Редкое «скачкообразное» смещение по Y
        intervals.push(window.setInterval(() => {
            if (Math.random() > 0.97) {
                el.style.transform = `translateY(${Math.random() * 10 - 5}px)`;
                setTimeout(() => { el.style.transform = '' }, Math.random() * 1000 + 300);
            }
        }, 1000));

        // 3) RGB‑сдвиг через псевдо‑элементы (CSS-анимации выше)

        // 4) Тяжёлые искажения: blur + hue-rotate + рандомный поворот
        intervals.push(window.setInterval(() => {
            if (Math.random() > 0.992) {
                const blur = Math.random() * 3;
                const hue  = Math.random() * 360;
                const rot  = Math.random() * 20 - 10;
                el.style.filter = `blur(${blur}px) hue-rotate(${hue}deg)`;
                el.style.transform = `skew(${rot}deg, ${rot}deg) rotate(${rot}deg)`;
                setTimeout(() => {
                    el.style.filter = '';
                    el.style.transform = '';
                }, Math.random() * 300 + 100);
            }
        }, 200));

        // 5) Блоковые артефакты (clip-path)
        intervals.push(window.setInterval(() => {
            if (Math.random() > 0.98) {
                const size = Math.floor(Math.random() * 20) + 5;
                const x = Math.floor(Math.random() * 80);
                const y = Math.floor(Math.random() * 80);
                el.style.clipPath = `polygon(${x}% ${y}%, ${x + size}% ${y}%, ${x + size}% ${y + size}%, ${x}% ${y + size}%)`;
                setTimeout(() => { el.style.clipPath = '' }, Math.random() * 200 + 50);
            }
        }, 150));

        // 6) Пропадание текста (frame drop)
        intervals.push(window.setInterval(() => {
            if (Math.random() > 0.97) {
                el.style.opacity = '0';
                setTimeout(() => { el.style.opacity = '1' }, Math.random() * 150 + 50);
            }
        }, 300));

        return () => intervals.forEach(clearInterval);
    }, [children]);

    return (
        <GlitchText ref={ref} data-text={children}>
            {children}
        </GlitchText>
    );
};
