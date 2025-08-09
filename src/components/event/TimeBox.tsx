export default function TimeBox({ label, value }: { label: string; value: number }) {
    return (
        <div className="rounded-xl border border-zinc-200 bg-zinc-100 p-3 text-center dark:border-white/10 dark:bg-black/30">
            <div className="text-2xl font-bold tabular-nums">{String(value).padStart(2, "0")}</div>
            <div className="text-xs text-zinc-700 dark:text-white/70">{label}</div>
        </div>
    );
}
