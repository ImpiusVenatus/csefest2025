"use client";
import Image from "next/image";
import { useRef } from "react";

export default function Hero({
    image, title, track, description,
}: { image: string; title: string; track: string; description: string; }) {
    const root = useRef<HTMLDivElement>(null);

    return (
        <section ref={root} className="relative">
            <div className="relative h-[42vh] sm:h-[56vh] overflow-hidden">
                <div className="absolute inset-0 hero-layer">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        priority
                        className="hero-img object-cover opacity-60 dark:opacity-50 will-change-transform"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-10%,rgba(255,255,255,0.6),transparent_40%),radial-gradient(circle_at_70%_-10%,rgba(58,130,246,0.25),transparent_40%)] dark:bg-[radial-gradient(circle_at_30%_-10%,rgba(255,255,255,0.4),transparent_40%),radial-gradient(circle_at_70%_-10%,rgba(58,130,246,0.35),transparent_40%)]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-[#0b0f14]" />
                </div>

                <div className="relative z-10 flex h-full items-end">
                    <div className="mx-auto w-full max-w-6xl px-4 pb-10">
                        <div className="hero-pill inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-sm backdrop-blur dark:border-white/15 dark:bg-white/5">
                            <span className="inline-block h-2 w-2 rounded-full bg-cyan-500" />
                            {track}
                        </div>

                        <h1 className="hero-title mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
                            {title}
                        </h1>

                        <p className="hero-desc mt-4 max-w-3xl text-zinc-700 dark:text-white/80">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
