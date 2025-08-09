export default function StickyRegisterBar({ summary }: { summary: string }) {
    return (
        <div className="fixed inset-x-0 bottom-3 z-40 mx-auto w-[min(96%,1100px)]">
            <div className="flex items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-white/90 p-3 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-white/10 dark:bg-white/10">
                <div className="hidden sm:block text-sm text-zinc-800 dark:text-white/80">{summary}</div>
                <a href="/register" className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-2 font-semibold text-white hover:bg-black/90 dark:bg-white dark:text-gray-900 dark:hover:bg-white/90">
                    Register Now
                </a>
            </div>
        </div>
    );
}
