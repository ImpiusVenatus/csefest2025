'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import ParticlesBackground from '@/components/ParticlesBackground';
import AnimatedText from '@/components/AnimatedText';

gsap.registerPlugin(ScrollTrigger);

export default function WelcomePage() {
  const welcomeRef = useRef<HTMLDivElement>(null);
  const buttonWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (welcomeRef.current) {
      gsap.fromTo(
        welcomeRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power2.out',
        }
      );
    }

    if (buttonWrapperRef.current) {
      gsap.fromTo(
        buttonWrapperRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          delay: 1.2,
          duration: 0.8,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  return (
    <>
      <ParticlesBackground /> {/* Optionally adjust for lighter colors */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-100 text-neutral-900 px-4">
        <div ref={welcomeRef} className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <AnimatedText text="Welcome to CSE Fest 2025" />
          </h1>

          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Hosted by CUET CSE Department — Let’s dive into innovation, code, and celebration!
          </p>
        </div>

        <motion.div
          ref={buttonWrapperRef}
          className="mt-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/home"
            className="px-8 py-4 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 text-lg font-medium shadow-lg"
          >
            Let&apos;s Get Started
          </Link>
        </motion.div>
      </div>
    </>
  );
}
