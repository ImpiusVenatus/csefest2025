'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface Props {
    text: string;
    className?: string;
}

export default function AnimatedText({ text, className = '' }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const chars = containerRef.current?.querySelectorAll('.char');
        if (chars) {
            const tl = gsap.timeline();

            tl.fromTo(
                chars,
                {
                    opacity: 0,
                    y: 30,
                    scale: 0.8,
                    rotateZ: -10,
                    transformOrigin: 'center',
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateZ: 0,
                    ease: 'back.out(1.7)', // springy curve
                    duration: 0.8,
                    stagger: {
                        each: 0.05,
                        from: 'start',
                    },
                }
            );
        }
    }, []);

    return (
        <div ref={containerRef} className={`inline-block ${className}`}>
            {text.split('').map((char, i) => (
                <span
                    key={i}
                    className="char inline-block whitespace-pre"
                    style={{ display: 'inline-block' }}
                >
                    {char}
                </span>
            ))}
        </div>
    );
}
