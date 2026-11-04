"use client";

import { motion } from "motion/react";
import { usePrefersReducedMotion } from "@/components/layout/MotionProvider";

/**
 * KolamLattice — a generative, kolam-inspired line drawing.
 * A square lattice of lines with a pulli (dot) at the centre of each cell,
 * rotated 45° into a diamond, with looping petals at its four points and
 * scalloped loops along its edges. Lines draw in on scroll.
 */
interface KolamLatticeProps {
  cells?: number;
  className?: string;
  stroke?: string;
  dot?: string;
  strokeWidth?: number;
  animate?: boolean;
  duration?: number;
  label?: string;
}

export function KolamLattice({
  cells = 5,
  className,
  stroke = "currentColor",
  dot,
  strokeWidth = 1.25,
  animate = true,
  duration = 2.4,
  label,
}: KolamLatticeProps) {
  const reduce = usePrefersReducedMotion();
  const m = cells;
  const paths: string[] = [];

  // Grid lines, each extended slightly so they flow into the edge loops
  for (let i = 1; i < m; i++) {
    paths.push(`M ${i} 0 L ${i} ${m}`);
    paths.push(`M 0 ${i} L ${m} ${i}`);
  }
  // Scalloped loops along each edge joining neighbouring lines
  for (let i = 0; i < m; i++) {
    paths.push(`M ${i} 0 A 0.5 0.5 0 0 1 ${i + 1} 0`);
    paths.push(`M ${i} ${m} A 0.5 0.5 0 0 0 ${i + 1} ${m}`);
    paths.push(`M 0 ${i} A 0.5 0.5 0 0 0 0 ${i + 1}`);
    paths.push(`M ${m} ${i} A 0.5 0.5 0 0 1 ${m} ${i + 1}`);
  }
  // Petal loops at the four corners (become top/right/bottom/left points)
  const r = 0.62;
  const o = r / Math.SQRT2;
  const corners: [number, number, number, number][] = [
    [0, 0, -o, -o],
    [m, 0, o, -o],
    [m, m, o, o],
    [0, m, -o, o],
  ];
  corners.forEach(([x, y, dx, dy]) => {
    // A full circle through the corner point, drawn as two half arcs
    const qx = x + dx * 2;
    const qy = y + dy * 2;
    paths.push(`M ${x} ${y} A ${r} ${r} 0 0 1 ${qx} ${qy} A ${r} ${r} 0 0 1 ${x} ${y}`);
  });

  const dots: [number, number][] = [];
  for (let i = 0; i < m; i++) for (let j = 0; j < m; j++) dots.push([i + 0.5, j + 0.5]);
  corners.forEach(([x, y, dx, dy]) => dots.push([x + dx, y + dy]));

  const pad = 1.6;
  const c = m / 2;
  const half = ((m + pad * 2) * Math.SQRT2) / 2;
  const viewBox = `${c - half} ${c - half} ${half * 2} ${half * 2}`;

  return (
    <svg
      viewBox={viewBox}
      className={className}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      fill="none"
    >
      <g transform={`rotate(45 ${c} ${c})`}>
        {paths.map((d, i) =>
          animate && !reduce ? (
            <motion.path
              key={i}
              d={d}
              stroke={stroke}
              strokeWidth={strokeWidth}
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                pathLength: { duration, ease: [0.65, 0, 0.35, 1], delay: (i % 12) * 0.06 },
                opacity: { duration: 0.2, delay: (i % 12) * 0.06 },
              }}
            />
          ) : (
            <path
              key={i}
              d={d}
              stroke={stroke}
              strokeWidth={strokeWidth}
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
            />
          ),
        )}
        {dots.map(([x, y], i) => (
          <circle key={`d${i}`} cx={x} cy={y} r={0.07} fill={dot ?? stroke} />
        ))}
      </g>
    </svg>
  );
}
