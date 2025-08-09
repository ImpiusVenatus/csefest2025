"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Hero from "@/components/event/Hero";
import Card from "@/components/event/Card";
import SectionTitle from "@/components/event/SectionTitle";
import InfoChip from "@/components/event/InfoChip";
import AgendaList from "@/components/event/AgendaList";
import TasksList from "@/components/event/TasksList";
import RulesList from "@/components/event/RulesList";
import HostCard from "@/components/event/HostCard";
import CTARegister from "@/components/event/CTARegister";
import StickyRegisterBar from "@/components/event/StickyRegisterBar";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { diffFromNow } from "@/lib/datetime";
import { escapeICS, toICS } from "@/lib/ics";
import { getEventBySlug, AGENDA, RULES, HIGHLIGHTS, TASKS } from "@/data/events";
import HighlightsList from "@/components/event/HighlightsList";
import useLenis from "@/app/hooks/useLenis";

export default function EventDetailsPage() {
    const params = useParams();
    const slug = (params?.slug as string) || "debug-battle";
    const event = getEventBySlug(slug) ?? getEventBySlug("debug-battle")!;
    useLenis();

    // countdown
    const targetDate = useMemo(() => new Date(event.isoDate), [event.isoDate]);
    const [remaining, setRemaining] = useState(() => diffFromNow(targetDate));
    useEffect(() => {
        const id = setInterval(() => setRemaining(diffFromNow(targetDate)), 1000);
        return () => clearInterval(id);
    }, [targetDate]);

    function copyLink() {
        const url = typeof window !== "undefined" ? window.location.href : "";
        navigator.clipboard?.writeText(url);
    }

    function downloadICS() {
        const start = new Date(event.isoDate);
        const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);
        const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//CSE Fest 2025//Event//EN
BEGIN:VEVENT
UID:${slug}@csefest2025
DTSTAMP:${toICS(new Date())}
DTSTART:${toICS(start)}
DTEND:${toICS(end)}
SUMMARY:${escapeICS(event.title)}
LOCATION:${escapeICS(event.location)}
DESCRIPTION:${escapeICS(event.description)}
END:VEVENT
END:VCALENDAR`;
        const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${slug}.ics`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    }

    return (
        <div className="w-full min-h-screen bg-white text-zinc-900 dark:bg-[#0b0f14] dark:text-white">
            {/* background */}
            <div
                aria-hidden
                className="pointer-events-none fixed inset-0 -z-10 [background:radial-gradient(60%_40%_at_50%_-10%,rgba(43,130,255,0.18),transparent),radial-gradient(40%_30%_at_90%_10%,rgba(255,23,68,0.12),transparent)] dark:[background:radial-gradient(60%_40%_at_50%_-10%,rgba(43,130,255,0.25),transparent),radial-gradient(40%_30%_at_90%_10%,rgba(255,23,68,0.18),transparent)]"
            />
            <div
                aria-hidden
                className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.04)_1px,transparent_1px)]"
            />

            {/* hero */}
            <Hero
                image={event.image}
                title={event.title}
                track={event.track}
                description={event.description}
            />

            {/* stats row */}
            <div className="mx-auto mt-10 w-full max-w-6xl px-4">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    <div className="chip">
                        <InfoChip icon={Calendar} label="Date" value={event.date} />
                    </div>
                    <div className="chip">
                        <InfoChip icon={Clock} label="Time" value={event.time} />
                    </div>
                    <div className="chip">
                        <InfoChip icon={MapPin} label="Location" value={event.location} />
                    </div>
                    <div className="chip">
                        <InfoChip icon={Users} label="Spots" value="Limited" />
                    </div>
                </div>
            </div>

            {/* body */}
            <main className="mx-auto max-w-6xl px-4 pb-28 pt-12">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="space-y-8 lg:col-span-2">
                        <AgendaList items={AGENDA} />
                        <TasksList items={TASKS} />

                        {/* Highlights */}
                        <HighlightsList items={HIGHLIGHTS} />

                        {/* Rules and Host */}

                        <RulesList items={RULES} />
                        <HostCard host={event.host} />
                    </div>

                    <div className="space-y-8">
                        <CTARegister
                            remaining={remaining}
                            onAddToCalendar={downloadICS}
                            onCopyLink={copyLink}
                        />
                        <Card>
                            <SectionTitle title="Quick Facts" subtitle="At a glance" />
                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <Fact label="Track" value={event.track} />
                                <Fact label="Date" value={event.date} />
                                <Fact label="Time" value={event.time} />
                                <Fact label="Venue" value={event.location} />
                            </div>
                        </Card>
                    </div>
                </div>
            </main>

            <StickyRegisterBar
                summary={`${event.title} · ${event.date} · ${event.time} · ${event.location}`}
            />
        </div>
    );
}

/* small local atoms */
function Fact({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-lg border border-zinc-200 bg-white p-3 text-sm dark:border-white/10 dark:bg-white/5">
            <p className="text-zinc-600 dark:text-white/60">{label}</p>
            <p className="font-semibold">{value}</p>
        </div>
    );
}
