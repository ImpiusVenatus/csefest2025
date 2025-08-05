'use client';

import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Facebook,
    Twitter,
    Instagram,
    Linkedin
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function TopBar() {
    return (
        <>
            {/* Left & Right Icon Bars */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="absolute inset-0 z-20 pointer-events-none"
            >
                {/* Left Vertical Icons */}
                <div className="absolute top-1/2 left-6 -translate-y-1/2 flex flex-col gap-6 pointer-events-auto">
                    <Phone className="w-4 h-4 text-[#0f2b33]" />
                    <Mail className="w-4 h-4 text-[#0f2b33]" />
                    <MapPin className="w-4 h-4 text-[#0f2b33]" />
                    <Clock className="w-4 h-4 text-[#0f2b33]" />
                </div>

                {/* Right Vertical Icons */}
                <div className="absolute top-1/2 right-6 -translate-y-1/2 flex flex-col gap-6 pointer-events-auto">
                    <Facebook className="w-4 h-4 text-[#0f2b33]" />
                    <Twitter className="w-4 h-4 text-[#0f2b33]" />
                    <Instagram className="w-4 h-4 text-[#0f2b33]" />
                    <Linkedin className="w-4 h-4 text-[#0f2b33]" />
                </div>
            </motion.div>
        </>
    );
}
