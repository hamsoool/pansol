import React from "react";
import { LOGO_PATHS } from "./logoPaths";

/**
 * Architectural line-art rendering of the Glasshill Pansol multi-tiered villa,
 * matching the authentic official brand logo sketch.
 */
export function BrandMark({
  className = "",
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="85 210 770 320"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={LOGO_PATHS.villa}
      />
    </svg>
  );
}

/**
 * Exact vector typography rendering of the official GLASSHILL — PANSOL — wordmark.
 */
export function VectorWordmark({
  className = "",
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "linen";
}) {
  const titleFill = tone === "ink" ? "#3B2E22" : "#F5EFE3";
  const subFill = tone === "ink" ? "#8B7457" : "#E9DEC7";

  return (
    <svg
      viewBox="85 550 790 145"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="GLASSHILL — PANSOL —"
    >
      <g fillRule="evenodd" clipRule="evenodd">
        <path fill={titleFill} d={LOGO_PATHS.title} />
        <path fill={subFill} d={LOGO_PATHS.sub} />
      </g>
    </svg>
  );
}

/**
 * Full authentic official brand logo (Villa mark + typography)
 * following the resort color scheme.
 */
export function FullBrandLogo({
  className = "",
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "linen";
}) {
  const primaryFill = tone === "ink" ? "#3B2E22" : "#F5EFE3";
  const subFill = tone === "ink" ? "#8B7457" : "#E9DEC7";

  return (
    <svg
      viewBox="80 205 800 495"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Glasshill Pansol Official Logo"
    >
      <g fillRule="evenodd" clipRule="evenodd">
        <path fill={primaryFill} d={LOGO_PATHS.villa} />
        <path fill={primaryFill} d={LOGO_PATHS.title} />
        <path fill={subFill} d={LOGO_PATHS.sub} />
      </g>
    </svg>
  );
}

export function Wordmark({
  className = "",
  tone = "ink",
  size = "md",
}: {
  className?: string;
  tone?: "ink" | "linen";
  size?: "sm" | "md" | "lg";
}) {
  const color = tone === "ink" ? "text-ink" : "text-linen";
  const subColor = tone === "ink" ? "text-clay" : "text-linen/75";

  return (
    <div className={`flex flex-col items-center leading-none text-center ${className}`}>
      <span
        className={`font-display uppercase font-normal tracking-[0.28em] ${color} ${
          size === "sm"
            ? "text-[0.95rem] 2xl:text-[1.1rem]"
            : size === "lg"
            ? "text-[1.9rem] sm:text-[2.4rem] 2xl:text-[3rem]"
            : "text-[1.2rem] 2xl:text-[1.4rem]"
        }`}
      >
        GLASSHILL
      </span>
      <span
        className={`font-display uppercase font-light tracking-[0.38em] ${subColor} ${
          size === "sm"
            ? "text-[0.52rem] 2xl:text-[0.62rem] mt-1"
            : size === "lg"
            ? "text-[0.82rem] sm:text-[0.96rem] 2xl:text-[1.12rem] mt-2"
            : "text-[0.62rem] 2xl:text-[0.72rem] mt-1.5"
        }`}
      >
        — PANSOL —
      </span>
    </div>
  );
}

export default function Logo({
  className = "",
  markClassName = "w-12 h-auto",
  tone = "ink",
  size = "md",
}: {
  className?: string;
  markClassName?: string;
  tone?: "ink" | "linen";
  size?: "sm" | "md" | "lg";
}) {
  const color = tone === "ink" ? "text-ink" : "text-linen";
  return (
    <div className={`flex flex-col items-center gap-2.5 ${color} ${className}`}>
      <BrandMark className={markClassName} />
      <Wordmark tone={tone} size={size} />
    </div>
  );
}
