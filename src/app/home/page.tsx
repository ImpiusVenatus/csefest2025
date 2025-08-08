"use client";

import FooterSection from "@/components/Footer";
import AlbumSection from "@/components/home/AlbumSection";
import HeroSection from "@/components/home/HeroSection";
import NewsletterCTA from "@/components/home/Newsletter";
import Navbar from "@/components/Navbar";
import useLenis from "../hooks/useLenis";
import ScheduleSection from "@/components/home/ScheduleSection";

export default function Home() {
    useLenis();

    return (
        <>
            <Navbar />
            <HeroSection />
            <AlbumSection />
            <ScheduleSection />
            <NewsletterCTA />
            <FooterSection />
        </>

    );
}
