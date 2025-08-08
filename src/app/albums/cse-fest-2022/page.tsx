'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';
import Lenis from '@studio-freight/lenis';
import layoutData from '@/data/galleryLayout.json';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

export default function CSEFest2022Page() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);
    }, []);

    const closeFullscreen = () => setFullscreenImage(null);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeFullscreen();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    const title = "CSE FEST 2022";

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.3,
            },
        },
    };

    const letterVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                stiffness: 500,
                damping: 30,
            },
        },
    };


    return (
        <div ref={containerRef} className="relative bg-[#161616] overflow-hidden">
            <button
                onClick={() => router.push('/home')}
                className="fixed top-6 left-6 z-[1001] text-white bg-black/50 hover:bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold shadow-md transition-all"
            >
                <span className='flex items-center gap-2'><ChevronLeft /> Back</span>
            </button>
            <div className="relative w-full h-[400vh] overflow-visible px-2 py-2">

                {/* Animated Title */}
                <div className="h-screen flex items-center justify-center">
                    <motion.h1
                        className="text-white text-6xl md:text-[10rem] font-black mix-blend-difference z-100 text-center leading-tight flex flex-wrap justify-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {title.split('').map((char, i) => (
                            <motion.span
                                key={i}
                                variants={letterVariants}
                                className="inline-block"
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </motion.span>
                        ))}
                    </motion.h1>
                </div>

                {/* Floating Artistic Images */}
                {layoutData.map(({ image, className }, i) => {
                    const top = `${Math.random() * 380 + 10}vh`;
                    const left = `${Math.random() * 85 + 2.5}vw`;

                    const dx = useMotionValue(0);
                    const dy = useMotionValue(0);
                    const movementMultiplier = 0.15 + Math.random() * 0.2;

                    const springX = useSpring(dx, {
                        stiffness: 60 + Math.random() * 80,
                        damping: 18 + Math.random() * 10,
                        mass: 1 + Math.random() * 0.5,
                    });
                    const springY = useSpring(dy, {
                        stiffness: 60 + Math.random() * 80,
                        damping: 18 + Math.random() * 10,
                        mass: 1 + Math.random() * 0.5,
                    });

                    useEffect(() => {
                        const handleMouseMove = (e: MouseEvent) => {
                            const centerX = window.innerWidth / 2;
                            const centerY = window.innerHeight / 2;
                            const offsetX = e.clientX - centerX;
                            const offsetY = e.clientY - centerY;
                            dx.set(offsetX * movementMultiplier);
                            dy.set(offsetY * movementMultiplier);
                        };
                        window.addEventListener('mousemove', handleMouseMove);
                        return () => window.removeEventListener('mousemove', handleMouseMove);
                    }, []);

                    return (
                        <motion.div
                            key={i}
                            style={{ x: springX, y: springY, top, left }}
                            className={`absolute ${className} scale-[1.8] pointer-events-auto`}
                            onClick={() => setFullscreenImage(image)}
                        >
                            <Image
                                src={`/albums/cse_fest_2022/${image}`}
                                alt={`img-${i}`}
                                fill
                                className="object-cover rounded-md transition-transform"
                            />
                        </motion.div>
                    );
                })}

                {/* Fullscreen Modal */}
                <AnimatePresence>
                    {fullscreenImage && (
                        <motion.div
                            className="fixed inset-0 z-[1000] bg-black bg-opacity-90 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeFullscreen}
                        >
                            <motion.div
                                className="relative w-full h-full max-w-screen max-h-screen"
                                initial={{ scale: 0.5, y: 100, opacity: 0 }}
                                animate={{ scale: 1, y: 0, opacity: 1 }}
                                exit={{ scale: 0.7, y: 50, opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Image
                                    src={`/albums/cse_fest_2022/${fullscreenImage}`}
                                    alt="fullscreen"
                                    fill
                                    className="object-contain rounded-lg"
                                />
                                <button
                                    onClick={closeFullscreen}
                                    className="absolute top-4 right-4 text-white text-xl z-50 bg-black/50 rounded-full px-4 py-1 hover:bg-white/10"
                                >
                                    ✕
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
