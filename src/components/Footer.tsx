'use client';

import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Facebook,
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
                    <span>+880 1780 123 456</span>
                </div>
                <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#2196f3]" />
                    <span>csefest@cuet.ac.bd</span>
                </div>
                <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#2196f3]" />
                    <span>CUET Campus, Raozan, Chittagong</span>
                </div>
                <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#2196f3]" />
                    <span>Festival Hours: 9:00 AM – 8:00 PM</span>
                </div>
            </div>

            {/* 🔸 Bottom Footer Area */}
            <div className="max-w-6xl mx-auto mt-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs">
                {/* Navigation Links */}
                <div className="flex gap-6">
                    <a href="/about" className="hover:underline">About CSE Fest</a>
                    <a href="/events" className="hover:underline">Events</a>
                    <a href="/team" className="hover:underline">Organizing Team</a>
                </div>

                {/* Social Icons */}
                <div className="flex gap-6 text-white text-base">
                    <a href="https://facebook.com/csefestcuet" target="_blank">
                        <Facebook className="w-4 h-4 hover:text-[#2196f3]" />
                    </a>
                    <a href="https://instagram.com/csefestcuet" target="_blank">
                        <Instagram className="w-4 h-4 hover:text-[#2196f3]" />
                    </a>
                    <a href="https://linkedin.com/company/csefestcuet" target="_blank">
                        <Linkedin className="w-4 h-4 hover:text-[#2196f3]" />
                    </a>
                </div>

                {/* Credit */}
                <div className="text-gray-400 text-center">
                    © {new Date().getFullYear()} <span className="font-semibold text-white">CSE Fest CUET</span>. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
