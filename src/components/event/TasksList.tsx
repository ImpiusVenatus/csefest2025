import Card from "./Card";
import SectionTitle from "./SectionTitle";

export default function TasksList({ items }: { items: Array<{ icon: any; title: string; detail: string }> }) {
    return (
        <Card>
            <SectionTitle title="Challenge Tasks" subtitle="Exactly what you’ll work on" />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {items.map((t, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-white p-4 dark:border-white/10 dark:bg-white/5">
                        <div className="mt-1 rounded-md bg-zinc-100 p-2 dark:bg-white/10">
                            <t.icon className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-semibold">{t.title}</p>
                            <p className="text-sm text-zinc-700 dark:text-white/70">{t.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
