"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import TimeBox from "./TimeBox";
import { ArrowRight, Copy, Share2 } from "lucide-react";

export default function CTARegister({
    remaining, onAddToCalendar, onCopyLink,
}: {
    remaining: { days: number; hours: number; minutes: number; seconds: number };
    onAddToCalendar: () => void;
    onCopyLink: () => void;
}) {
    const tiltX = useMotionValue(0);
    const tiltY = useMotionValue(0);
    const rotateX = useTransform(tiltY, [-20, 20], [10, -10]);
    const rotateY = useTransform(tiltX, [-20, 20], [-10, 10]);

    function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        tiltX.set(px * 40 - 20);
        tiltY.set(py * 40 - 20);
    }

    return (
        <motion.div onMouseMove={onMouseMove} style={{ rotateX, rotateY }}
            className="relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl backdrop-blur will-change-transform dark:border-white/10 dark:bg-white/5">
            <div aria-hidden className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-cyan-400/10 via-fuchsia-500/10 to-transparent blur-2xl dark:from-cyan-400/20" />
            <div className="relative">
                <p className="text-sm text-zinc-700 dark:text-white/70">Starts in</p>
                <div className="mt-3 grid grid-cols-4 gap-3">
                    <TimeBox label="Days" value={remaining.days} />
                    <TimeBox label="Hours" value={remaining.hours} />
                    <TimeBox label="Min" value={remaining.minutes} />
                    <TimeBox label="Sec" value={remaining.seconds} />
                </div>

                <a href="/register"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 font-semibold text-white transition hover:bg-black/90 dark:bg-white dark:text-gray-900 dark:hover:bg-white/90">
                    Register Now <ArrowRight className="h-4 w-4" />
                </a>

                <div className="mt-4 flex items-center justify-between text-sm text-zinc-800 dark:text-white/80">
                    <button onClick={onAddToCalendar} className="underline-offset-4 hover:underline">
                        Add to calendar
                    </button>
                    <div className="flex items-center gap-3">
                        <button onClick={onCopyLink} className="inline-flex items-center gap-1 underline-offset-4 hover:underline">
                            <Share2 className="h-4 w-4" /> Share
                        </button>
                        <button onClick={onCopyLink} className="inline-flex items-center gap-1 underline-offset-4 hover:underline">
                            <Copy className="h-4 w-4" /> Copy link
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
