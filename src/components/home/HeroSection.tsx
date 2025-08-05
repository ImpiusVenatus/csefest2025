import FeatureGrid from "./hero/FeatureGrid";
import FloatingShapes from "./hero/floatingShape/FloatingShapes";
import HeroCore from "./hero/HeroCore";
import TopBar from "./hero/TopBar";

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-screen bg-[#deedf2] overflow-hidden flex flex-col">
            {/* 🔼 3D Shapes - positioned absolutely */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <FloatingShapes />
            </div>

            {/* 🔼 Top bar */}
            <TopBar />

            {/* 🧠 Core content - takes available space */}
            <div className="flex-1 flex items-center justify-center relative z-10">
                <HeroCore />
            </div>

            {/* 🔽 Feature grid sticks to bottom */}
            <FeatureGrid />
        </section>
    );
}

