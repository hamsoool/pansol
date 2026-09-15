"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BrandMark } from "./Logo";

const ease = [0.25, 1, 0.5, 1] as const;

export default function Hero() {
  const [viewMode, setViewMode] = useState<"day" | "night">("day");

  // Automatic alternating image crossfade every 7.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setViewMode((prev) => (prev === "day" ? "night" : "day"));
    }, 7500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden bg-char flex flex-col justify-between"
    >
      {/* Background Images with Automatic Smooth Crossfade */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatePresence mode="sync">
          {viewMode === "day" ? (
            <motion.div
              key="day-hero"
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.6, ease }}
              className="absolute inset-0"
            >
              <Image
                src="/images/752583912_18058692566770428_3910446325817185170_n.jpg"
                alt="Hot-spring infinity pool and pergola waterfall in daylight"
                fill
                priority
                className="object-cover object-[50%_35%] scale-100"
              />
            </motion.div>
          ) : (
            <motion.div
              key="night-hero"
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.6, ease }}
              className="absolute inset-0"
            >
              <Image
                src="/images/480700500_610740108380665_461491699173164153_n.jpg"
                alt="Glasshill Pansol multi-level illuminated glass villa and pools at night"
                fill
                priority
                className="object-cover object-center scale-100"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Balanced Vignette for Centered Architectural Typography */}
        <div className="absolute inset-0 bg-gradient-to-t from-char via-char/50 to-char/35" />
        <div className="absolute inset-0 bg-char/20" />
      </div>

      {/* Top Spacer for Navbar */}
      <div className="pt-20 sm:pt-24 lg:pt-28" />

      {/* Hero Content (Mobile-first centered, spacious & majestic on desktop) */}
      <div className="relative z-10 w-full max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 my-auto py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 flex flex-col items-center text-center">
        {/* Main Title Proclaiming the Resort Name */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
          className="font-display text-linen text-[3.2rem] sm:text-[4.6rem] md:text-[6rem] lg:text-[7.6rem] xl:text-[8.8rem] 2xl:text-[9.8rem] leading-[1.02] tracking-tight font-normal max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-none"
        >
          Glasshill Pansol
          <br />
          <span className="italic font-light text-stone block text-[0.52em] sm:text-[0.56em] md:text-[0.58em] lg:text-[0.6em] mt-2 sm:mt-3 md:mt-4 leading-tight">
            A private hillside hot-spring villa.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          className="mt-5 sm:mt-6 md:mt-7 lg:mt-8 xl:mt-10 font-sans text-linen/90 text-[1rem] sm:text-[1.1rem] md:text-[1.18rem] lg:text-[1.28rem] xl:text-[1.36rem] max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl leading-relaxed md:leading-[1.8] font-light mx-auto"
        >
          An exclusive private resort reserved for one group at a time in Pansol, Laguna.
          Featuring a dedicated hot-spring pool, seven ensuite rooms, and unhurried panoramic views of Mt. Makiling.
        </motion.p>

        {/* Spec Strip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 sm:mt-7 md:mt-8 lg:mt-10 xl:mt-12 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-12 xl:gap-x-16 gap-y-2.5 text-linen/85 text-[0.82rem] sm:text-[0.88rem] md:text-[0.95rem] lg:text-[1.04rem] xl:text-[1.1rem] font-sans font-light"
        >
          <span className="whitespace-nowrap">Private Hot-Spring Pool</span>
          <span className="text-linen/40">·</span>
          <span className="whitespace-nowrap">100% Exclusive Private Buyout</span>
          <span className="text-linen/40">·</span>
          <span className="whitespace-nowrap">Up to 25 Guests Comfortably</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.4 }}
          className="mt-8 sm:mt-9 md:mt-10 lg:mt-12 xl:mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full sm:w-auto"
        >
          <a
            href="#inquire"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-linen px-8 py-3.5 md:px-9 md:py-4 lg:px-10 lg:py-4.5 font-sans text-[0.92rem] md:text-[0.98rem] lg:text-[1.02rem] font-medium text-char tracking-wide hover:bg-stone active:scale-[0.98] transition-all shadow-md"
          >
            Check Availability &amp; Rates
          </a>
          <a
            href="#gallery"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-linen/35 bg-char/30 backdrop-blur-xs px-7 py-3.5 md:px-8 md:py-4 lg:px-9 lg:py-4.5 font-sans text-[0.92rem] md:text-[0.98rem] lg:text-[1.02rem] text-linen tracking-wide hover:bg-linen/15 active:scale-[0.98] transition-all"
          >
            Explore the Villa
          </a>
        </motion.div>
      </div>

      {/* Floating Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="relative z-10 w-full max-w-content mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 pb-5 sm:pb-6 md:pb-7 lg:pb-8 flex items-center justify-between text-linen/60 text-[0.72rem] sm:text-[0.75rem] md:text-[0.82rem] lg:text-[0.88rem] font-sans"
      >
        <span className="tracking-widest2 uppercase">Laguna Hills Subd., Brgy. Pansol, Calamba</span>
        <a
          href="#villa"
          className="inline-flex items-center gap-2 hover:text-linen transition-colors"
        >
          <span className="tracking-widest uppercase">Scroll down</span>
          <span className="w-6 h-px bg-linen/40" />
        </a>
      </motion.div>
    </section>
  );
}
