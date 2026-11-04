"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/*
 * All transform-based animation here is automatically disabled for
 * reduced-motion users by <MotionConfig reducedMotion="user"> in the root
 * layout; they get a gentle opacity fade instead.
 */

/** Fade + rise on first view. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article" | "figure" | "p" | "span";
}) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </Comp>
  );
}

/** Masked line-by-line headline reveal. */
export function RevealLines({
  lines,
  className,
  lineClassName,
  delay = 0,
  immediate = false,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  /** Animate on mount rather than on scroll (for above-the-fold headings) */
  immediate?: boolean;
}) {
  return (
    // The wrapper is observed (not the clipped lines themselves, which
    // IntersectionObserver would see as fully hidden by overflow).
    <motion.span
      className={`block ${className ?? ""}`}
      initial="hidden"
      {...(immediate
        ? { animate: "show" }
        : { whileInView: "show", viewport: { once: true, margin: "0px 0px -10% 0px" } })}
    >
      {lines.map((line, i) => (
        <span key={i} className="-mb-[0.06em] block overflow-hidden pb-[0.06em]">
          <motion.span
            className={`block ${lineClassName ?? ""}`}
            variants={{
              hidden: { y: "105%" },
              show: { y: "0%", transition: { duration: 1, ease, delay: delay + i * 0.09 } },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/** Thin rule that draws across on scroll. */
export function DrawRule({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.span
      aria-hidden="true"
      className={`block h-px origin-left bg-current ${className ?? ""}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.4, ease, delay }}
    />
  );
}
