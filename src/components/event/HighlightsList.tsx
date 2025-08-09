"use client";
import { useRef } from "react";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

export default function HighlightsList({ items }: { items: Array<{ icon: any; title: string; desc: string }> }) {


    return (
        <Card>
            <SectionTitle title="Why Join?" subtitle="Highlights" />
            <div className="mt-6 grid gap-3">
                {items.map((h, i) => (
                    <div key={i} className="reveal-item will-change-transform flex items-start gap-3 rounded-lg border border-zinc-200 bg-white p-3 dark:border-white/10 dark:bg-white/5">
                        <div className="mt-1 rounded-md bg-zinc-100 p-1.5 dark:bg-white/10"><h.icon className="h-4 w-4" /></div>
                        <div>
                            <p className="font-medium">{h.title}</p>
                            <p className="text-sm text-zinc-700 dark:text-white/70">{h.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
