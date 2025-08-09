export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
    return (
        <div>
            <p className="text-sm text-zinc-600 dark:text-white/60">{subtitle}</p>
            <h2 className="mt-1 text-2xl font-bold">{title}</h2>
        </div>
    );
}
