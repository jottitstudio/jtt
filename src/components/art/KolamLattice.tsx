"use client";

import { motion } from "motion/react";

/**
 * Hand-drawn creative marks & primitive-to-modern doodle constellation.
 * Keeps the `KolamLattice` export name so existing layout/page imports work seamlessly.
 */
export function KolamLattice({
  cells = 4,
  className = "",
  stroke = "currentColor",
  dot = "#D9E56B",
  strokeWidth = 1.75,
  duration = 2.2,
  animate = true,
  label,
}: {
  cells?: number;
  className?: string;
  stroke?: string;
  dot?: string;
  strokeWidth?: number;
  duration?: number;
  animate?: boolean;
  label?: string;
}) {
  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={className}
    >
      {label && <title>{label}</title>}
      {/* Sketchbook registration ticks */}
      <g stroke={stroke} strokeWidth="1.2" opacity="0.35" strokeLinecap="round">
        <path d="M20 12 V28 M12 20 H28" />
        <path d="M220 12 V28 M212 20 H228" />
        <path d="M20 212 V228 M12 220 H28" />
        <path d="M220 212 V228 M212 220 H228" />
      </g>

      {/* Hand-drawn spiral / idea loop */}
      <motion.path
        d="M120 120 C120 104 138 100 144 114 C152 132 132 152 112 148 C86 142 76 110 90 86 C108 56 150 54 172 82 C196 114 186 166 148 184 C104 204 52 178 46 126 C40 72 86 32 138 38"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        initial={animate ? { pathLength: 0, opacity: 0.2 } : false}
        whileInView={animate ? { pathLength: 1, opacity: 1 } : undefined}
        viewport={{ once: true }}
        transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Primitive spark & tally marks */}
      <g stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M182 44 L190 60 L208 62 L194 74 L198 90 L182 80 L166 90 L170 74 L156 62 L174 60 Z" />
        <path d="M42 176 L50 204 M54 174 L60 204 M66 176 L70 204 M36 194 L78 184" />
        {cells >= 4 && (
          <path d="M164 166 C178 158 198 164 202 180 C206 196 184 206 170 198 C156 190 154 172 164 166 Z" />
        )}
      </g>

      {/* Center jot dot */}
      <circle cx="120" cy="120" r="5" fill={dot} stroke={stroke} strokeWidth={strokeWidth} />
    </svg>
  );
}
