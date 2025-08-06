'use client';

import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
} from 'lucide-react';

export default function FooterSection() {
    return (
        <footer className="bg-[#0a1f33] text-white py-12 px-4">
            {/* 🔹 Contact Info Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm border-b border-white/10 pb-8">
                <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#2196f3]" />
                    <span>+1 800 234 5764</span>
                </div>
                <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#2196f3]" />
                    <span>moxom@email.com</span>
                </div>
                <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#2196f3]" />
                    <span>5<sup>th</sup> Street, London, U.K.</span>
                </div>
                <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#2196f3]" />
                    <span>Mon – Sun, 08:00 – 22:00</span>
                </div>
            </div>

            {/* 🔸 Bottom Footer Area */}
            <div className="max-w-6xl mx-auto mt-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs">
                {/* Links */}
                <div className="flex gap-6">
                    <a href="#" className="hover:underline">Licensing</a>
                    <a href="#" className="hover:underline">Styles</a>
                    <a href="#" className="hover:underline">Changelog</a>
                </div>

                {/* Social Icons */}
                <div className="flex gap-6 text-white text-base">
                    <a href="#"><Facebook className="w-4 h-4 hover:text-[#2196f3]" /></a>
                    <a href="#"><Twitter className="w-4 h-4 hover:text-[#2196f3]" /></a>
                    <a href="#"><Instagram className="w-4 h-4 hover:text-[#2196f3]" /></a>
                    <a href="#"><Linkedin className="w-4 h-4 hover:text-[#2196f3]" /></a>
                </div>

                {/* Credit */}
                <div className="text-gray-400">
                    Powered by <span className="font-semibold text-white">Webflow.com</span>
                </div>
            </div>
        </footer>
    );
}
