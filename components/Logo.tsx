import React from "react";

/**
 * Architectural line-art rendering of the Glasshill Pansol multi-tiered villa,
 * matching the authentic official brand logo sketch.
 */
export function BrandMark({
  className = "",
  strokeWidth = 1.2,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 100 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Right Tower Roof & Eaves */}
      <path
        d="M62 8L69 4L78 8L82 10M62 8L59 10M69 4V7M58 11H83"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right Tower Facade & Walls */}
      <path
        d="M60 11V34M75 11V32M82 11V26H90V36"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right Tower Architectural Window Grid */}
      <rect
        x="63"
        y="15"
        width="9"
        height="14"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.9}
      />
      <line
        x1="67.5"
        y1="15"
        x2="67.5"
        y2="29"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.75}
      />
      <line
        x1="63"
        y1="22"
        x2="72"
        y2="22"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.75}
      />

      {/* Central Cantilevered Roof & Decks */}
      <path
        d="M26 21L36 15L56 19M26 21L28 27L58 24M28 27H58M34 22L54 26"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Middle Floor Balcony & Glass Sliders */}
      <path
        d="M30 30H59V36H30Z"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.9}
        strokeLinejoin="round"
      />
      <line
        x1="44"
        y1="30"
        x2="44"
        y2="36"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.7}
      />
      <path
        d="M29 36H60M25 41H60"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* Left Stepped Terraces & Cantilever Structure */}
      <path
        d="M20 37V44H26V41M20 44H12V50"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Organic Hillside Foliage Silhouette at Base */}
      <path
        d="M10 52C14 50 16 46 22 47C26 44 32 46 36 49C40 45 47 46 51 50C56 46 62 47 66 50C71 46 78 47 82 50C87 46 93 48 98 52"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.85}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Gentle Baseline Contour */}
      <path
        d="M8 52H100"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.7}
        strokeLinecap="round"
      />
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
