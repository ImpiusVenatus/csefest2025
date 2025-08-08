'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

type DayKey = 'Day 1' | 'Day 2' | 'Day 3';
type TrackKey = 'Competitive Coding' | 'Workshops' | 'Gaming' | 'Tech Talks';

const days: DayKey[] = ['Day 1', 'Day 2', 'Day 3'];
const tracks: TrackKey[] = ['Competitive Coding', 'Workshops', 'Gaming', 'Tech Talks'];

const schedule: Record<DayKey, {
    slots: {
        time: string;
        events: Record<TrackKey, string[]>;
    }[];
}> = {
    'Day 1': {
        slots: [
            {
                time: '09:00',
                events: {
                    'Competitive Coding': ['Programming Contest'],
                    'Workshops': ['Intro to Flutter'],
                    'Gaming': ['Valorant Heats — Round 1'],
                    'Tech Talks': ['Opening Keynote'],
                },
            },
            {
                time: '11:00',
                events: {
                    'Competitive Coding': ['Debug Battle'],
                    'Workshops': ['Git & GitHub'],
                    'Gaming': ['FIFA Showdown'],
                    'Tech Talks': ['Tech Career Roadmap Panel'],
                },
            },
        ],
    },
    'Day 2': {
        slots: [
            {
                time: '10:00',
                events: {
                    'Competitive Coding': ['Hackathon Kickoff'],
                    'Workshops': ['Prompt Engineering 101'],
                    'Gaming': ['Valorant Quarterfinals'],
                    'Tech Talks': ['AI for Social Good'],
                },
            },
            {
                time: '14:00',
                events: {
                    'Competitive Coding': ['AI Challenge'],
                    'Workshops': ['Intro to Cybersecurity'],
                    'Gaming': ['Mobile Legends Faceoff'],
                    'Tech Talks': ['Entrepreneurship in Tech'],
                },
            },
        ],
    },
    'Day 3': {
        slots: [
            {
                time: '11:00',
                events: {
                    'Competitive Coding': ['Hackathon Finale'],
                    'Workshops': ['DevOps Bootcamp'],
                    'Gaming': ['Valorant Grand Finals'],
                    'Tech Talks': ['Women in Tech Panel'],
                },
            },
            {
                time: '16:00',
                events: {
                    'Competitive Coding': ['Prize Giving Ceremony'],
                    'Workshops': [],
                    'Gaming': ['Esports Awards'],
                    'Tech Talks': ['CSE Alumni Fireside Chat'],
                },
            },
        ],
    },
};

export default function ScheduleSection() {
    const [zMap, setZMap] = useState<DayKey[]>(['Day 1', 'Day 2', 'Day 3']);
    const [slotIndex, setSlotIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerHeight, setContainerHeight] = useState<number>(0);

    const frontDay = zMap[zMap.length - 1];
    const currentSlots = schedule[frontDay].slots;
    const currentSlot = currentSlots[slotIndex % currentSlots.length];

    const bringToFront = (day: DayKey) => {
        setZMap((prev) => {
            if (prev[prev.length - 1] === day) return prev;
            const index = prev.indexOf(day);
            const rotated = [...prev.slice(index + 1), ...prev.slice(0, index + 1)];
            return rotated;
        });
        setSlotIndex(0);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setSlotIndex((prev) => (prev + 1) % currentSlots.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [frontDay]);

    useEffect(() => {
        if (containerRef.current) {
            const children = containerRef.current.children;
            let maxHeight = 0;
            for (let i = 0; i < children.length; i++) {
                const h = (children[i] as HTMLElement).offsetHeight;
                if (h > maxHeight) maxHeight = h;
            }
            setContainerHeight(maxHeight);
        }
    }, [zMap]);

    return (
        <section className="relative w-full bg-[#cfd8cc] py-20 px-4 flex justify-center">
            <div className="relative max-w-7xl w-full">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <div className="text-sm uppercase font-semibold tracking-widest">CSE Fest 2025</div>
                    <div className="flex gap-6 text-xl font-bold tracking-tight">
                        {days.map((day) => (
                            <button
                                key={day}
                                onClick={() => bringToFront(day)}
                                className={clsx(
                                    'transition duration-300',
                                    zMap[2] === day
                                        ? 'text-black'
                                        : 'text-gray-400 hover:text-black'
                                )}
                            >
                                {day}
                            </button>
                        ))}
                    </div>
                    <button className="text-xs font-semibold uppercase tracking-wide bg-black text-white px-4 py-2 rounded-full hover:bg-gray-900 transition">
                        Register Now!
                    </button>
                </div>

                {/* Cards */}
                <div
                    className="relative w-full"
                    style={{ height: containerHeight ? `${containerHeight}px` : 'auto' }}
                    ref={containerRef}
                >
                    {days.map((day) => {
                        const index = zMap.indexOf(day);
                        const zIndex = 30 + index;
                        const translateY = (days.length - 1 - index) * 10;
                        const scale = 1 - 0.01 * (days.length - 1 - index);
                        const isTop = zMap[zMap.length - 1] === day;
                        const isDark = day !== 'Day 1';

                        const bgColor =
                            day === 'Day 1' ? '#ffffff' :
                                day === 'Day 2' ? '#588157' :
                                    '#344e41';

                        return (
                            <motion.div
                                key={day}
                                layout
                                onClick={() => bringToFront(day)}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                                style={{
                                    zIndex,
                                    backgroundColor: bgColor,
                                    transform: `translateY(-${translateY}px) scale(${scale})`,
                                }}
                                className={clsx(
                                    "absolute left-0 right-0 mx-auto rounded-xl shadow-xl overflow-hidden transition-all duration-500",
                                    isDark ? "text-white" : "text-black"
                                )}
                            >
                                <div className="p-8 sm:p-10">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-b border-black/30">
                                        {/* Time Box */}
                                        <div className="relative border-r border-black/30 pr-6 pb-6">
                                            <AnimatePresence mode="wait">
                                                <motion.div
                                                    key={isTop ? currentSlot.time : schedule[day].slots[0].time}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -20 }}
                                                    transition={{ duration: 0.5 }}
                                                    className="text-[64px] sm:text-[96px] font-bold font-mono leading-none"
                                                >
                                                    {isTop ? currentSlot.time : schedule[day].slots[0].time}
                                                </motion.div>
                                            </AnimatePresence>
                                        </div>

                                        {/* Events */}
                                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 items-start pb-4">
                                            {tracks.map((track) => (
                                                <div key={track}>
                                                    <h3 className="text-md font-semibold mb-2">{track}</h3>
                                                    <ul className={clsx("space-y-1 text-sm", isDark ? "text-gray-100" : "text-gray-800")}>
                                                        {(isTop ? currentSlot.events[track] : schedule[day].slots[0].events[track])?.map((title, i) => (
                                                            <li key={i}>{title}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* 🔽 Full Event List */}
                                    <div className="mt-16">
                                        <h3 className="text-lg font-semibold mb-4">Full Event Schedule</h3>

                                        {/* ✅ Generate all events dynamically from slots */}
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                                            {tracks.map((track) => {
                                                const eventsForTrack: string[] = [];
                                                schedule[day].slots.forEach(slot => {
                                                    eventsForTrack.push(...slot.events[track]);
                                                });

                                                return (
                                                    <div key={track}>
                                                        <h4 className="text-sm font-semibold mb-2">{track}</h4>
                                                        <ul className={clsx("text-sm space-y-1", isDark ? "text-gray-100" : "text-gray-800")}>
                                                            {eventsForTrack.map((e, i) => (
                                                                <li key={i}>{e}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>


                                    <div className={clsx(
                                        "mt-20 flex justify-between text-xs font-mono",
                                        isDark ? "text-gray-200" : "text-gray-500"
                                    )}>
                                        <div>JAN 23–25, CUET — CSE FESTIVAL — CELEBRATING TECH & INNOVATION</div>
                                        <div>CHITTAGONG — BANGLADESH</div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
