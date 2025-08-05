'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AnimatedCenterTitle() {
    const topLineRef = useRef<HTMLDivElement>(null);
    const bottomLineRef = useRef<HTMLDivElement>(null);
    const textContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Animate top line (left → right)
        tl.fromTo(
            topLineRef.current,
            { scaleX: 0, transformOrigin: 'left' },
            { scaleX: 1, duration: 0.6, ease: 'power2.out' }
        );

        // Animate bottom line (right → left)
        tl.fromTo(
            bottomLineRef.current,
            { scaleX: 0, transformOrigin: 'right' },
            { scaleX: 1, duration: 0.6, ease: 'power2.out' },
            '+=0.1' // slight delay after top line
        );

        // Animate each letter
        const letters = textContainerRef.current?.querySelectorAll('.letter');
        if (letters) {
            tl.fromTo(
                letters,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.4,
                    stagger: 0.05,
                    ease: 'power2.out',
                },
                '+=0.1' // delay after bottom line finishes
            );
        }
    }, []);

    const text = 'CSE FEST 2025';

    return (
        <div className="flex flex-col items-center justify-center">
            <div
                ref={topLineRef}
                className="w-20 h-[2px] bg-gray-800 mb-1 origin-left"
            />
            <div
                ref={textContainerRef}
                className="flex gap-[2px] font-bold text-lg md:text-xl tracking-widest text-gray-800 font-mono"
            >
                {text.split('').map((char, i) => (
                    <span key={i} className="letter">
                        {char}
                    </span>
                ))}
            </div>
            <div
                ref={bottomLineRef}
                className="w-20 h-[2px] bg-gray-800 mt-1 origin-right"
            />
        </div>
    );
}
