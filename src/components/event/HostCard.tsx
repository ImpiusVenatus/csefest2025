import Image from "next/image";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

export default function HostCard({ host }: { host: { name: string; title: string; image: string } }) {
    return (
        <Card>
            <SectionTitle title="Host" subtitle="Meet the coordinator" />
            <div className="mt-6 flex items-center gap-5">
                <div className="relative">
                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-cyan-400 to-fuchsia-500 opacity-50 blur" />
                    <div className="relative h-20 w-20 overflow-hidden rounded-full border border-zinc-200 dark:border-white/20">
                        <Image src={host.image} alt={host.name} fill className="object-cover" />
                    </div>
                </div>
                <div>
                    <p className="text-lg font-semibold">{host.name}</p>
                    <p className="text-zinc-700 dark:text-white/70">{host.title}</p>
                </div>
            </div>
        </Card>
    );
}
