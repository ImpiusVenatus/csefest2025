"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HoverScrambleText, {
  HoverScrambleTextRef,
} from "@/components/HoverScrambleText";
import { useRef } from "react";

export default function FeatureGrid() {
  const features = [
    { number: "01", tag: "INNOVATION", text: "SHOWCASE", href: "/showcase" },
    {
      number: "02",
      tag: "TECHNICAL",
      text: "COMPETITIONS",
      href: "/competitions",
    },
    { number: "03", tag: "GUEST", text: "SESSIONS", href: "/sessions" },
    { number: "04", tag: "CULTURAL", text: "VIBES", href: "/cultural" },
  ];

  const scrambleRefs = useRef<(HoverScrambleTextRef | null)[]>([]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col items-center w-full z-10"
    >
      {/* Divider Line */}
      <div className="w-full border-t border-[#b5d2db]" />

      {/* Feature Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 w-full max-w-5xl border-l border-[#b5d2db]"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {features.map(({ number, tag, text, href }, index) => (
          <motion.div
            key={number}
            className="border-r border-[#b5d2db] overflow-hidden"
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link
              href={href}
              className="block px-4 py-6 text-center transition-all duration-300 ease-in-out hover:bg-[#b5d2db] hover:scale-105 group"
              onMouseEnter={() => {
                scrambleRefs.current[index]?.triggerMouseEnter();
              }}
              onMouseLeave={() => {
                scrambleRefs.current[index]?.triggerMouseLeave();
              }}
            >
              <div className="text-3xl font-black text-[#0f2b33] font-anton group-hover:text-[#0f2b33]/80 transition-colors duration-300">
                {number}
              </div>
              <div className="text-xs text-blue-600 tracking-wide font-bold group-hover:text-blue-700 transition-colors duration-300">
                {tag}
              </div>
              <HoverScrambleText
                ref={(el) => {
                  scrambleRefs.current[index] = el;
                }}
                as="div"
                text={text}
                className="text-base font-bold text-[#0f2b33] group-hover:text-[#0f2b33]/80 transition-colors duration-300"
                speedMs={30}
                step={1 / 3}
                resetOnLeave={true}
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
