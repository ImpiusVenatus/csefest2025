'use client';

export default function NewsletterCTA() {
    return (
        <div className="w-full flex justify-center items-center z-10 relative px-4 bg-[#deedf2]">
            <div className="p-1 sm:p-2 w-full flex items-center">
                <input
                    type="email"
                    placeholder="Newsletter (Enter Email)"
                    className="flex-1 px-6 py-4 rounded-full text-sm sm:text-base focus:outline-none"
                />
                <button className="ml-2 px-6 py-3 bg-[#2196f3] hover:bg-[#1976d2] text-white font-bold text-xs sm:text-sm rounded-full uppercase tracking-wide transition">
                    Subscribe
                </button>
            </div>
        </div>
    );
}
