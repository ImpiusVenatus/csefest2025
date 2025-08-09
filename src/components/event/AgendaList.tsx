"use client";
import { useRef } from "react";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

export default function AgendaList({ items }: {
    items: Array<{ icon: any; time: string; title: string; desc: string }>;
}) {
    const root = useRef<HTMLDivElement>(null);
    return (
        <Card ref={root as any} className="relative overflow-hidden">
            <SectionTitle title="Agenda" subtitle="How the day unfolds" />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {items.map((a, i) => (
                    <div key={i} className="reveal-item will-change-transform relative flex items-start gap-3 rounded-xl border border-zinc-200 bg-white p-4 dark:border-white/10 dark:bg-white/5">
                        <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-white/10">
                            <a.icon className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-sm text-zinc-600 dark:text-white/60">{a.time}</p>
                            <p className="font-semibold">{a.title}</p>
                            <p className="text-sm text-zinc-700 dark:text-white/70">{a.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
