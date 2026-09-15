"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
}

const LUXURY_EASE = [0.22, 1, 0.36, 1] as const;

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 28,
  duration = 0.85,
}: ScrollRevealProps) {
  const initialY = direction === "up" ? distance : direction === "down" ? -distance : 0;
  const initialX = direction === "left" ? distance : direction === "right" ? -distance : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX, y: initialY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{
        duration,
        delay,
        ease: LUXURY_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Top reading progress line that smoothly tracks page scroll position
 */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-clay via-rule to-stone z-[60] origin-left pointer-events-none"
    />
  );
}
