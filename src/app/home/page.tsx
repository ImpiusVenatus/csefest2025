import FooterSection from "@/components/Footer";
import AlbumSection from "@/components/home/AlbumSection";
import HeroSection from "@/components/home/HeroSection";
import NewsletterCTA from "@/components/home/Newsletter";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AlbumSection />
            <NewsletterCTA />
            <FooterSection />
        </>

    );
}
