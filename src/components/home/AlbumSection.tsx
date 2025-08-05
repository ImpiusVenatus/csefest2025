'use client';

import Image from 'next/image';
import Link from 'next/link';
import { easeOut, motion } from 'framer-motion';

const albums = [
    {
        title: 'CSE FEST 2023',
        year: '2023',
        slug: 'cse-fest-2023',
        imageUrl: '/albums/2023_cover.jpg',
    },
    {
        title: 'CSE FEST 2019',
        year: '2019',
        slug: 'cse-fest-2019',
        imageUrl: '/albums/2019_cover.jpg',
    },
];

// Variants for animations
const lineVariant = {
    hidden: (direction: 'left' | 'right') => ({
        x: direction === 'left' ? -40 : 40,
        opacity: 0,
    }),
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: easeOut },
    },
};

const titleVariant = {
    hidden: { scale: 0.65, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.6, ease: easeOut },
    },
};

const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.15, ease: easeOut },
    }),
};

export default function AlbumSection() {
    return (
        <section className="w-full py-16 bg-[#deedf2]">
            <div className="max-w-6xl mx-auto px-6">
                {/* 🔷 Heading with mirrored lines */}
                <div className="flex justify-center items-center gap-6 mb-12 relative">
                    {/* Static gray extensions */}
                    <div className="hidden md:block absolute right-full top-1/2 w-32 h-px bg-gray-300" />
                    <div className="hidden md:block absolute left-full top-1/2 w-32 h-px bg-gray-300" />

                    {/* Left Line (animated) */}
                    <motion.div
                        custom="left"
                        initial="hidden"
                        animate="visible"
                        variants={lineVariant}
                        className="relative w-24 h-10 flex items-center justify-end z-10"
                    >
                        <div className="absolute right-0 top-0 bottom-0 w-px bg-[#2196f3]" />
                        <div className="absolute right-0 top-1/2 w-full h-px bg-[#2196f3]" />
                    </motion.div>

                    {/* Title (animated) */}
                    <motion.h2
                        variants={titleVariant}
                        initial="hidden"
                        animate="visible"
                        className="text-4xl font-black text-[#0f2b33] tracking-wide font-anton uppercase z-10 bg-[#deedf2] px-4"
                    >
                        Album Archive
                    </motion.h2>

                    {/* Right Line (animated) */}
                    <motion.div
                        custom="right"
                        initial="hidden"
                        animate="visible"
                        variants={lineVariant}
                        className="relative w-24 h-10 flex items-center justify-start z-10"
                    >
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-[#2196f3]" />
                        <div className="absolute left-0 top-1/2 w-full h-px bg-[#2196f3]" />
                    </motion.div>
                </div>

                {/* 🔶 Grid of Albums */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {albums.map(({ title, year, slug, imageUrl }, index) => (
                        <motion.div
                            key={slug}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={cardVariant}
                        >
                            <Link href={`/albums/${slug}`}>
                                <div className="group cursor-pointer rounded-md overflow-hidden transition-all">
                                    {/* Image with zoom on hover */}
                                    <div className="relative w-full h-60 overflow-hidden">
                                        <Image
                                            src={imageUrl}
                                            alt={title}
                                            layout="fill"
                                            objectFit="cover"
                                            className="transition-transform duration-500 group-hover:scale-110"
                                        />
                                        {/* Year Overlay */}
                                        <div className="absolute bottom-4 left-4 px-3 py-1 text-sm font-semibold text-[#0f2b33] bg-white/80 rounded">
                                            {year}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <div className="py-4 text-center">
                                        <h3 className="text-xl font-extrabold text-[#0f2b33] tracking-wider uppercase transition-colors duration-300 group-hover:text-[#2196f3]">
                                            {title}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
