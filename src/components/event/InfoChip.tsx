export default function InfoChip({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
    return (
        <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white/90 p-4 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:border-white/10 dark:bg-white/10">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 dark:bg-white/10">
                <Icon className="h-5 w-5" />
            </div>
            <div>
                <p className="text-xs uppercase tracking-wide text-zinc-600 dark:text-white/60">{label}</p>
                <p className="text-sm font-semibold">{value}</p>
            </div>
        </div>
    );
}
