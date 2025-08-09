import Card from "./Card";
import SectionTitle from "./SectionTitle";

export default function RulesList({ items }: { items: Array<{ icon: any; title: string; desc: string }> }) {
    return (
        <Card>
            <SectionTitle title="Rules & Format" subtitle="What to expect" />
            <ul className="mt-6 space-y-4">
                {items.map((r, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 rounded-md bg-zinc-100 p-1.5 dark:bg-white/10">
                            <r.icon className="h-4 w-4" />
                        </div>
                        <div>
                            <p className="font-medium">{r.title}</p>
                            <p className="text-sm text-zinc-700 dark:text-white/70">{r.desc}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </Card>
    );
}
