import React from "react";

/**
 * A lightweight, single-stroke rendering of the Glasshill roofline —
 * redrawn as scalable SVG so it stays crisp at any size, from a
 * favicon to a full-width footer mark. Companion to the typographic
 * wordmark, never used smaller than 28px tall.
 */
export function BrandMark({ className = "", strokeWidth = 1.2 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 48 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 30V18L18 10L30 18V30"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 10V4L34 4V18L42 22V30"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="2" y1="30" x2="46" y2="30" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="18" y1="18" x2="30" y2="18" stroke="currentColor" strokeWidth={strokeWidth * 0.8} />
    </svg>
  );
}

export function Wordmark({
  className = "",
  tone = "ink",
}: {
  className?: string;
  subLabel?: boolean;
  tone?: "ink" | "linen";
}) {
  const color = tone === "ink" ? "text-ink" : "text-linen";
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <span className={`font-display ${color} text-[1.35rem] tracking-[0.16em] uppercase font-medium leading-none`}>
        Glasshill
      </span>
    </div>
  );
}

export default function Logo({
  className = "",
  markClassName = "w-8 h-auto",
  tone = "ink",
}: {
  className?: string;
  markClassName?: string;
  tone?: "ink" | "linen";
}) {
  const color = tone === "ink" ? "text-ink" : "text-linen";
  return (
    <div className={`flex flex-col items-center gap-2 ${color} ${className}`}>
      <BrandMark className={markClassName} />
      <Wordmark tone={tone} />
    </div>
  );
}
