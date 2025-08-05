'use client';
import { ShoppingBag } from 'lucide-react';
import AnimatedCenterTitle from '@/components/AnimatedCenterTitle';

export default function Navbar() {
    return (
        <nav className="absolute w-full py-4 px-6 flex items-center justify-between bg-transparent z-100">
            {/* Left Circle: Custom Hamburger */}
            <button className="group w-12 h-12 rounded-full bg-[#2196f3] flex items-center justify-center shadow-md">
                <div className="space-y-[5px]">
                    <div className="w-5 h-[2px] bg-white transition-all duration-300"></div>
                    <div className="w-3 h-[2px] bg-white transition-all duration-300 group-hover:w-5"></div>
                    <div className="h-[2px] bg-white transition-all duration-300 w-2 group-hover:w-5"></div>
                </div>
            </button>

            {/* Center Title: Animated */}
            <AnimatedCenterTitle />

            {/* Right Circle: Cart + badge */}
            <div className="relative">
                <button className="w-12 h-12 rounded-full bg-[#0f2b33] flex items-center justify-center shadow-md">
                    <ShoppingBag className="text-white w-5 h-5" />
                </button>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    0
                </span>
            </div>
        </nav>
    );
}
