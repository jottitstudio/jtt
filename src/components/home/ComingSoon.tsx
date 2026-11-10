"use client";

import { motion } from "motion/react";
import { JOTTIT_LOGO_PATHS } from "@/components/layout/Logo";
import { ScribbleUnderline } from "@/components/art/Motifs";

export function ComingSoon() {
  return (
    <section
      id="coming-soon"
      className="on-purple relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-purple px-6 py-12 text-center text-paper"
    >
      {/* Subtle sketchbook grid background */}
      <div
        aria-hidden="true"
        className="sketch-grid pointer-events-none absolute inset-0 text-paper opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]"
      />

      {/* Ambient lime glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/10 blur-3xl"
      />

      <div className="relative mx-auto flex w-full max-w-2xl flex-col items-center">
        {/* Supplied Hand-Drawn JOTTIT Logo */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[16rem] sm:max-w-[21rem]"
        >
          <svg
            viewBox="0 0 800 410"
            className="h-auto w-full overflow-visible text-paper drop-shadow-[0_12px_32px_rgba(0,0,0,0.22)]"
            role="img"
            aria-label="JOTTIT"
          >
            <g fill="currentColor" fillRule="evenodd">
              {JOTTIT_LOGO_PATHS.map((glyph, idx) => (
                <motion.path
                  key={glyph.id}
                  d={glyph.d}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.08 + idx * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              ))}
            </g>
          </svg>
        </motion.div>

        {/* Coming Soon Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8 inline-flex items-center gap-2.5 border-2 border-paper bg-purple-deep px-4 py-1.5 shadow-[4px_4px_0_0_#D9E56B]"
        >
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
            <span className="relative inline-flex size-2.5 rounded-full bg-lime" />
          </span>
          <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-lime">
            We Are Coming Soon
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-7 font-display text-[clamp(2.2rem,5.5vw,4rem)] font-bold uppercase leading-[0.98] tracking-[-0.04em] text-paper"
        >
          Every big idea starts with a{" "}
          <span className="relative inline-block text-lime">
            <span className="relative z-10">little jot.</span>
            <ScribbleUnderline
              color="#D9E56B"
              className="pointer-events-none absolute -bottom-2 left-0 h-3.5 w-full"
            />
          </span>
        </motion.h1>

        {/* Concise Supporting Line */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-5 max-w-md text-base text-paper/85 sm:text-lg"
        >
          Our new website is in the making.
        </motion.p>

        {/* Brand Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-8 font-display text-xs font-bold uppercase tracking-[0.22em] text-lime/90"
        >
          THINK IT. JOT IT. MAKE IT MATTER.
        </motion.p>
      </div>
    </section>
  );
}
