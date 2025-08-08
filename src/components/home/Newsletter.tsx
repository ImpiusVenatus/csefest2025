'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function NewsletterCTA() {
    const containerRef = useRef(null);
    const formRef = useRef(null);
    const buttonTextRef = useRef(null);

    const [buttonLabelIndex, setButtonLabelIndex] = useState(0);
    const labels = ['Subscribe', 'Join Now'];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(formRef.current, {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 90%',
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setButtonLabelIndex((prev) => (prev + 1) % labels.length);

            gsap.fromTo(buttonTextRef.current,
                { scale: 0.6, opacity: 0, y: 8 },
                {
                    scale: 1.05,
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'back.out(1.8)',
                }
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full flex justify-center items-center px-4 py-12 bg-cover bg-center"
            style={{
                backgroundImage: "url('/newsletter-bg.webp')",
            }}
        >
            <div
                ref={formRef}
                className="backdrop-blur-md bg-black/10 border border-white/20 shadow-lg rounded-[20px] px-4 sm:px-6 py-4 flex items-center w-full max-w-xl"
            >
                <input
                    type="email"
                    placeholder="Newsletter (Enter Email)"
                    className="flex-1 bg-white text-black text-sm sm:text-base rounded-full px-5 py-3 focus:outline-none placeholder:text-center"
                />
                <button
                    className="ml-3 w-[120px] py-3 rounded-full text-white font-bold text-xs sm:text-sm tracking-wide uppercase bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition flex justify-center items-center relative"
                >
                    <span ref={buttonTextRef}>
                        {labels[buttonLabelIndex]}
                    </span>
                </button>

            </div>
        </div>
    );
}
