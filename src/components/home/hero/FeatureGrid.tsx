'use client';

export default function FeatureGrid() {
    const features = [
        { number: '01', tag: 'INNOVATION', text: 'SHOWCASE' },
        { number: '02', tag: 'TECHNICAL', text: 'COMPETITIONS' },
        { number: '03', tag: 'GUEST', text: 'SESSIONS' },
        { number: '04', tag: 'CULTURAL', text: 'VIBES' },
    ];

    return (
        <div className="flex flex-col items-center w-full z-10">
            {/* Divider Line */}
            <div className="w-full border-t border-[#b5d2db]" />

            {/* Feature Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 w-full max-w-5xl border-l border-[#b5d2db]">
                {features.map(({ number, tag, text }) => (
                    <div
                        key={number}
                        className="space-y-1 px-4 py-6 border-r border-[#b5d2db] text-center"
                    >
                        <div className="text-3xl font-black text-[#0f2b33] font-anton">{number}</div>
                        <div className="text-xs text-blue-600 tracking-wide font-bold">{tag}</div>
                        <div className="text-base font-bold text-[#0f2b33]">{text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
