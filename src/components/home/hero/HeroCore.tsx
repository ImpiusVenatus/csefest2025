'use client';

import { motion } from 'framer-motion';

export default function HeroCore() {
    return (
        <div className="relative min-h-[600px] w-full h-full flex flex-col justify-center items-center">
            {/* 🔷 Animated Blue Line */}
            <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="origin-top absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-80 bg-[#2196f3] z-0"
            />

            {/* ⬛ Framing Bars */}
            <div className="absolute top-1/10 left-1/2 -translate-x-1/2 w-full max-w-screen-xl flex justify-center gap-6 z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
                    className="w-50 h-120 bg-[#0f2b33] rounded-md"
                />
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
                    className="w-50 h-120 bg-[#0f2b33] rounded-md"
                />
            </div>

            {/* 🪞 Background Word "CSE" - letter-by-letter */}
            <div className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
                {/* C - slide from left */}
                <motion.span
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 1.5 }}
                    className="text-[24rem] tracking-widest font-black text-[#b0cbd4] uppercase leading-none select-none pointer-events-none bg-[#deedf2] rounded-3xl"
                >
                    C
                </motion.span>

                {/* S - fade only */}
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 2.5 }}
                    className="text-[24rem] tracking-widest font-black text-[#b0cbd4] uppercase leading-none select-none pointer-events-none bg-[#deedf2] rounded-3xl"
                >
                    S
                </motion.span>

                {/* E - slide from right */}
                <motion.span
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 3.5 }}
                    className="text-[24rem] tracking-widest font-black text-[#b0cbd4] uppercase leading-none select-none pointer-events-none bg-[#deedf2] rounded-3xl"
                >
                    E
                </motion.span>
            </div>

            {/* 🧠 Main Title - FEST 2025 with zoom-in */}
            <motion.h2
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 4.5 }}
                className="relative text-[12rem] font-black text-[#0f2b33] tracking-wider z-10 uppercase font-anton"
            >
                FEST 2025
            </motion.h2>

            {/* ⏰ Time & ⬇️ Arrow */}
            <div className="absolute bottom-[8%] w-full max-w-screen-xl px-8 flex justify-between items-end z-10">
                <div className="flex flex-col items-center">
                    <div className="w-[180px] h-px bg-[#b5d2db] mb-2" />
                    <p className="text-sm font-semibold text-gray-700">Mid December 2025</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-16 h-px bg-[#b5d2db] mb-2" />
                    <div className="w-5 h-5 border-b-2 border-r-2 border-gray-700 rotate-45 animate-bounce" />
                </div>
            </div>
        </div>
    );
}
