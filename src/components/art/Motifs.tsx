import { useId } from "react";

/**
 * Static geometric motifs drawn from South Indian visual culture —
 * temple borders, gopuram tiers, textile bands — reduced to line and plane.
 */

interface MotifProps {
  className?: string;
  color?: string;
}

/** Temple-border band: a repeating stepped zig-zag, like a saree korvai border. */
export function TempleBorder({ className, color = "currentColor" }: MotifProps) {
  const id = `tb-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  return (
    <svg className={className} aria-hidden="true" width="100%" height="16" preserveAspectRatio="none">
      <defs>
        <pattern id={id} width="32" height="16" patternUnits="userSpaceOnUse">
          <path
            d="M0 15 L4 15 L4 11 L8 11 L8 7 L12 7 L12 3 L20 3 L20 7 L24 7 L24 11 L28 11 L28 15 L32 15"
            fill="none"
            stroke={color}
            strokeWidth="1.25"
          />
          <circle cx="16" cy="11" r="1.4" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="16" fill={`url(#${id})`} />
    </svg>
  );
}

/** Nested gopuram tiers — concentric stepped outlines. */
export function GopuramLines({ className, color = "currentColor" }: MotifProps) {
  const tiers = 7;
  const paths = Array.from({ length: tiers }, (_, t) => {
    const inset = t * 22;
    const w = 600 - inset * 2;
    const steps = 6;
    const stepW = w / 2 / steps;
    const stepH = (520 - t * 40) / steps;
    let d = `M ${inset} 600`;
    for (let s = 0; s < steps; s++) {
      const x = inset + s * stepW;
      const y = 600 - (s + 1) * stepH;
      d += ` L ${x} ${y} L ${x + stepW} ${y}`;
    }
    for (let s = steps - 1; s >= 0; s--) {
      const x = 600 - inset - s * stepW;
      const y = 600 - (s + 1) * stepH;
      d += ` L ${x - stepW} ${y} L ${x} ${y}`;
    }
    d += ` L ${600 - inset} 600`;
    return d;
  });
  return (
    <svg viewBox="0 0 600 600" className={className} aria-hidden="true" fill="none">
      {paths.map((d, i) => (
        <path key={i} d={d} stroke={color} strokeWidth="1" vectorEffect="non-scaling-stroke" opacity={1 - i * 0.1} />
      ))}
    </svg>
  );
}

/** Small service glyphs */
export function ServiceGlyph({
  motif,
  className,
  color = "currentColor",
}: MotifProps & { motif: "kolam" | "steps" | "leaf" | "frame" | "grid" }) {
  const common = {
    fill: "none",
    stroke: color,
    strokeWidth: 1.5,
    vectorEffect: "non-scaling-stroke" as const,
  };
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      {motif === "kolam" && (
        <g>
          <path d="M24 6 L42 24 L24 42 L6 24 Z" {...common} />
          <path d="M15 15 L33 33 M33 15 L15 33" {...common} />
          <circle cx="24" cy="15" r="1.6" fill={color} />
          <circle cx="24" cy="33" r="1.6" fill={color} />
          <circle cx="15" cy="24" r="1.6" fill={color} />
          <circle cx="33" cy="24" r="1.6" fill={color} />
        </g>
      )}
      {motif === "grid" && (
        <g>
          <rect x="7" y="7" width="34" height="34" {...common} />
          <path d="M18.3 7 V41 M29.7 7 V41 M7 18.3 H41 M7 29.7 H41" {...common} />
          <rect x="18.3" y="18.3" width="11.4" height="11.4" fill={color} />
        </g>
      )}
      {motif === "steps" && (
        <g>
          <path d="M6 42 H14 V32 H22 V22 H30 V12 H38 V6" {...common} />
          <path d="M30 6 H38 V14" {...common} />
          <circle cx="10" cy="38" r="1.6" fill={color} />
        </g>
      )}
      {motif === "frame" && (
        <g>
          <path d="M6 16 V6 H16 M32 6 H42 V16 M42 32 V42 H32 M16 42 H6 V32" {...common} />
          <circle cx="24" cy="24" r="8" {...common} />
          <circle cx="24" cy="24" r="2" fill={color} />
        </g>
      )}
      {motif === "leaf" && (
        <g>
          <path d="M24 44 V8 M24 8 C 38 14 38 34 24 44 C 10 34 10 14 24 8" {...common} />
          <path d="M24 16 L32 12 M24 24 L34 20 M24 32 L32 28 M24 16 L16 12 M24 24 L14 20 M24 32 L16 28" {...common} />
        </g>
      )}
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
      strokeWidth="1.6"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path d="M3 12 H20 M13 5 L20 12 L13 19" strokeLinecap="square" />
    </svg>
  );
}
