import { useId } from "react";

/**
 * Hand-drawn marks, primitive pictograms, sketchbook strokes and editorial dividers
 * inspired by the evolution of human expression — from first cave mark to JOTTIT.
 */

interface MotifProps {
  className?: string;
  color?: string;
}

/** Hand-drawn spark / jot mark */
export function JotMark({ className, color = "currentColor" }: MotifProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path
        d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z"
        fill={color}
      />
    </svg>
  );
}

/** Repeating hand-carved tally & zigzag divider band */
export function TempleBorder({ className, color = "currentColor" }: MotifProps) {
  const id = `mark-band-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  return (
    <svg className={className} aria-hidden="true" width="100%" height="18" preserveAspectRatio="none">
      <defs>
        <pattern id={id} width="48" height="18" patternUnits="userSpaceOnUse">
          <path
            d="M2 14 L10 4 L18 14 L26 4 L34 14 M41 3 L41 15 M45 4 L44 14"
            fill="none"
            stroke={color}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </pattern>
      </defs>
      <rect width="100%" height="18" fill={`url(#${id})`} />
    </svg>
  );
}

/** Concentric hand-drawn sketchbook rings & radiating idea marks */
export function GopuramLines({ className, color = "currentColor" }: MotifProps) {
  return (
    <svg viewBox="0 0 600 600" className={className} aria-hidden="true" fill="none">
      <g stroke={color} strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M300 70 C435 66 534 168 530 302 C526 432 422 534 295 530 C166 526 68 424 72 296 C76 168 172 74 300 70 Z"
          strokeWidth="1.5"
          strokeDasharray="8 6"
        />
        <path
          d="M302 130 C398 128 472 204 470 300 C468 396 392 472 298 468 C202 464 128 392 132 296 C136 202 208 132 302 130 Z"
          strokeWidth="1.5"
        />
        <path
          d="M300 192 C362 190 410 238 408 300 C406 362 358 410 298 408 C238 406 190 358 192 298 C194 238 240 194 300 192 Z"
          strokeWidth="1.75"
        />
        <path d="M300 20 L300 580 M20 300 L580 300 M95 95 L505 505 M505 95 L95 505" strokeWidth="1" opacity="0.45" />
      </g>
    </svg>
  );
}

const indexToMotif = ["kolam", "grid", "steps", "frame", "leaf"] as const;

/** Hand-drawn service pictograms for the 5 core JOTTIT disciplines */
export function ServiceGlyph({
  motif,
  index,
  className,
  color = "currentColor",
}: MotifProps & { motif?: "kolam" | "steps" | "leaf" | "frame" | "grid"; index?: number }) {
  const resolvedMotif = motif ?? indexToMotif[(index ?? 0) % indexToMotif.length];
  const common = {
    fill: "none",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    vectorEffect: "non-scaling-stroke" as const,
  };
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      {/* 01 Branding & Identity — hand-drawn spark/star + identity stamp */}
      {resolvedMotif === "kolam" && (
        <g>
          <path d="M24 5 L28 18 L42 19 L31 27 L35 41 L24 33 L13 41 L17 27 L6 19 L20 18 Z" {...common} />
          <circle cx="24" cy="24" r="3" fill={color} />
        </g>
      )}
      {/* 02 Social Media & Content — overlapping speech/story bubbles */}
      {resolvedMotif === "grid" && (
        <g>
          <path d="M8 11 H32 V27 H18 L10 34 V27 H8 Z" {...common} />
          <path d="M20 21 H40 V35 H34 V41 L27 35 H20 Z" {...common} />
        </g>
      )}
      {/* 03 Performance Marketing — hand-drawn trajectory steps + target arrow */}
      {resolvedMotif === "steps" && (
        <g>
          <path d="M7 39 L17 28 L25 33 L40 11" {...common} />
          <path d="M29 10 H41 V22" {...common} />
          <circle cx="17" cy="28" r="2.2" fill={color} />
          <circle cx="25" cy="33" r="2.2" fill={color} />
        </g>
      )}
      {/* 04 Video & Photography — hand-drawn viewfinder frame + lens */}
      {resolvedMotif === "frame" && (
        <g>
          <path d="M7 17 V8 H16 M32 8 H41 V17 M41 31 V40 H32 M16 40 H7 V31" {...common} />
          <circle cx="24" cy="24" r="8.5" {...common} />
          <circle cx="24" cy="24" r="2.5" fill={color} />
        </g>
      )}
      {/* 05 Website Development — browser window + code/layout blocks */}
      {resolvedMotif === "leaf" && (
        <g>
          <rect x="6" y="9" width="36" height="30" rx="2" {...common} />
          <path d="M6 17 H42 M19 25 L14 29 L19 33 M29 25 L34 29 L29 33 M25 23 L23 35" {...common} />
        </g>
      )}
    </svg>
  );
}

/** Hand-drawn scribble underline */
export function ScribbleUnderline({ className = "", color = "currentColor" }: MotifProps) {
  return (
    <svg viewBox="0 0 320 22" fill="none" aria-hidden="true" className={className} preserveAspectRatio="none">
      <path
        d="M4 15 C72 5, 158 19, 236 9 C268 6, 294 11, 316 8 M18 19 C96 12, 198 18, 304 14"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Simple arrow used across CTAs */
export function Arrow({ className, direction = "right" }: { className?: string; direction?: "right" | "up-right" | "down" }) {
  const rotate = direction === "up-right" ? -45 : direction === "down" ? 90 : 0;
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path d="M3 12 H20 M13 5 L20 12 L13 19" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
