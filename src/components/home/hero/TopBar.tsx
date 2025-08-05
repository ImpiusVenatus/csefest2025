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
            {/* Top bar icons */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="absolute w-full px-6 pt-2 pb-1 text-[#0f2b33] text-sm font-medium z-20"
            >
                <div className="flex justify-between items-center">
                    {/* Left icons with bottom line */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex gap-6">
                            <Phone className="w-4 h-4" />
                            <Mail className="w-4 h-4" />
                            <MapPin className="w-4 h-4" />
                            <Clock className="w-4 h-4" />
                        </div>
                        <div className="w-36 h-px bg-[#b5d2db]" />
                    </div>

                    {/* Right icons with bottom line */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex gap-6">
                            <Facebook className="w-4 h-4" />
                            <Twitter className="w-4 h-4" />
                            <Instagram className="w-4 h-4" />
                            <Linkedin className="w-4 h-4" />
                        </div>
                        <div className="w-36 h-px bg-[#b5d2db]" />
                    </div>
                </div>
            </motion.div>

            {/* Top full-width line */}
            <div className="border-t border-[#b5d2db]" />
        </>
    );
}
