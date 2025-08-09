import { Bug, Timer, Trophy, ShieldCheck, MapPin } from "lucide-react";

export type EventHost = { name: string; title: string; image: string };
export type EventData = {
    title: string;
    slug: string;
    description: string;
    time: string;
    date: string;
    isoDate: string;
    location: string;
    track: string;
    image: string;
    host: EventHost;
};

export type AgendaItem = { icon: any; time: string; title: string; desc: string };
export type RuleItem = { icon: any; title: string; desc: string };
export type Highlight = { icon: any; title: string; desc: string };
export type TaskItem = { icon: any; title: string; detail: string };

export const events: Record<string, EventData> = {
    "debug-battle": {
        title: "Debug Battle",
        slug: "debug-battle",
        description:
            "Test your debugging skills in this thrilling competition. Participants will be given buggy code to fix under time pressure. Get ready for a battle of brains and bugs!",
        time: "11:00 AM",
        date: "January 24, 2025",
        isoDate: "2025-01-24T11:00:00+06:00",
        location: "CUET Auditorium",
        track: "Competitive Coding",
        image: "/events/debug.png",
        host: {
            name: "Md. Saiful Islam",
            title: "Contest Coordinator",
            image: "/images/people/saiful.png",
        },
    },
};

export const AGENDA: AgendaItem[] = [
    { icon: Timer, time: "10:30 AM", title: "Check-in & Setup", desc: "Pick your station, get briefed, and warm up." },
    { icon: Bug, time: "11:00 AM", title: "Round 1 — Fix Fast", desc: "Quick-fire debugging tasks across languages." },
    { icon: Bug, time: "12:00 PM", title: "Round 2 — Deep Dive", desc: "Harder bugs with tricky edge-cases." },
    { icon: Trophy, time: "01:00 PM", title: "Finals & Leaderboard", desc: "Top scorers battle on a live scoreboard." },
];

export const RULES: RuleItem[] = [
    { icon: ShieldCheck, title: "Fair Play", desc: "No external help, AI tools, or collaboration during rounds." },
    { icon: Timer, title: "Time-bound", desc: "Each round is strictly timed. Late submissions won’t count." },
    { icon: Bug, title: "Repro & Fix", desc: "Reproduce the bug, patch it, and prove tests pass." },
    { icon: Trophy, title: "Scoring", desc: "Speed + correctness + code quality decide your score." },
];

export const HIGHLIGHTS: Highlight[] = [
    { icon: Trophy, title: "Leaderboard Glory", desc: "Real-time rankings to hype up the competition." },
    { icon: Bug, title: "Real Bugs", desc: "Curated, realistic issues from web, mobile, and systems." },
    { icon: MapPin, title: "Team Vibes", desc: "Network with peers, seniors, and industry mentors." },
];

export const TASKS: TaskItem[] = [
    { icon: Bug, title: "Bug Reproduction", detail: "Find exact repro steps and isolate the failing part." },
    { icon: Timer, title: "Time-Boxed Fixes", detail: "Fix small-to-medium bugs under strict time limits." },
    { icon: Trophy, title: "Test-Driven Patches", detail: "Write/adjust tests. All suites must pass." },
    { icon: ShieldCheck, title: "Quality Cleanups", detail: "Refactor touched hotspots; keep it lean and safe." },
    { icon: MapPin, title: "Stack Variety", detail: "Web, mobile, backend snippets. Choose your lane." },
];

export function getEventBySlug(slug: string): EventData | null {
    return events[slug] || null;
}
