"use client";

import { motion } from "motion/react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal, RevealLines } from "@/components/ui/Reveal";
import { JOTTIT_LOGO_PATHS } from "@/components/layout/Logo";
import { ScribbleUnderline } from "@/components/art/Motifs";

export function Hero() {
  return (
    <section
      id="hero"
      className="on-purple relative overflow-hidden bg-purple pt-[calc(var(--header-h)+2rem)] pb-14 text-paper md:pt-[calc(var(--header-h)+3.5rem)] md:pb-20"
    >
      {/* Subtle sketchbook grid */}
      <div
        aria-hidden="true"
        className="sketch-grid pointer-events-none absolute inset-0 text-paper opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_90%)]"
      />

      <div className="wrap relative grid grid-cols-1 items-center gap-y-12 lg:grid-cols-12 lg:gap-x-10">
        {/* Left column: Punchy headline, 1-line value prop & CTAs */}
        <div className="lg:col-span-7">
          <Reveal y={12}>
            <div className="inline-flex flex-wrap items-center gap-3 border-2 border-paper/30 bg-purple-deep/80 px-3.5 py-1.5">
              <span aria-hidden="true" className="inline-block size-2.5 rotate-45 bg-lime" />
              <span className="t-eyebrow text-paper">Think It. Jot It. Make It Matter.</span>
            </div>
          </Reveal>

          <h1 id="hero-title" className="t-display mt-7 text-paper md:mt-9">
            <RevealLines
              immediate
              delay={0.08}
              lines={[
                "Every big idea",
                "starts with a",
                <span key="jot" className="relative inline-block text-lime">
                  <span className="relative z-10">little jot.</span>
                  <ScribbleUnderline
                    color="#D9E56B"
                    className="pointer-events-none absolute -bottom-2 left-0 h-4 w-full"
                  />
                </span>,
              ]}
            />
          </h1>

          <Reveal delay={0.35} className="mt-7 max-w-lg md:mt-9">
            <p className="t-lead text-paper/90">
              We turn thoughts into brands, stories into experiences and ideas into growth.
            </p>
          </Reveal>

          <Reveal delay={0.45} className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center md:mt-10">
            <ButtonLink href="/contact" variant="lime">
              Start a Project
            </ButtonLink>
            <ButtonLink href="#first-mark" variant="outline-light">
              Explore Our Story
            </ButtonLink>
          </Reveal>

          {/* Minimal 3-word rhythm */}
          <Reveal delay={0.55} className="mt-10 flex flex-wrap items-center gap-6 border-t border-paper/20 pt-6">
            <span className="t-hand text-2xl text-lime sm:text-3xl">Jot it.</span>
            <span aria-hidden="true" className="text-paper/35">·</span>
            <span className="t-hand text-2xl text-lime sm:text-3xl">Join it.</span>
            <span aria-hidden="true" className="text-paper/35">·</span>
            <span className="t-hand text-2xl text-lime sm:text-3xl">Got it.</span>
          </Reveal>
        </div>

        {/* Right column: Prominent actual JOTTIT hand-drawn logo surrounded by animated marks, symbols & doodles */}
        <div className="relative lg:col-span-5">
          <Reveal delay={0.2} y={24}>
            <div className="relative mx-auto max-w-lg border-2 border-paper bg-purple-deep p-6 shadow-[10px_10px_0_0_#17151B] sm:p-8">
              <div className="flex items-center justify-between border-b border-paper/20 pb-3 text-xs uppercase tracking-[0.16em] text-paper/70">
                <span className="font-display font-semibold">The JOTTIT Mark</span>
                <span className="t-hand text-base normal-case tracking-normal text-lime">hand-drawn original</span>
              </div>

              <div className="relative my-5 bg-purple px-5 py-10 sm:px-8 sm:py-14">
                <svg
                  viewBox="0 0 860 480"
                  className="h-auto w-full overflow-visible"
                  role="img"
                  aria-label="The hand-drawn JOTTIT logo surrounded by primitive marks, stars, arrows and sketchbook doodles"
                >
                  <g fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <motion.path
                      d="M28 36 L24 72 M44 34 L40 72 M60 36 L56 72 M76 35 L72 72 M16 58 L86 46"
                      stroke="#D96B42"
                      strokeWidth="4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.95 }}
                      transition={{ duration: 1.2, delay: 0.2 }}
                    />
                    <motion.path
                      d="M785 56 C785 44 800 42 804 52 C810 66 792 80 778 76 C758 70 752 46 764 30 C778 10 810 10 826 32 C842 54 832 90 802 100"
                      stroke="#D9E56B"
                      strokeWidth="3.5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.9 }}
                      transition={{ duration: 1.5, delay: 0.35 }}
                    />
                    <motion.path
                      d="M680 34 L686 52 L705 54 L690 65 L695 84 L680 72 L665 84 L670 65 L655 54 L674 52 Z"
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.7 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    />
                    <motion.path
                      d="M42 422 C96 446 154 432 192 396 M174 394 L194 394 L190 414"
                      stroke="#D9E56B"
                      strokeWidth="3.5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.9 }}
                      transition={{ duration: 1.3, delay: 0.55 }}
                    />
                    <motion.path
                      d="M520 426 Q545 404 570 426 T620 426 T670 426 T720 426"
                      stroke="#F4EBDD"
                      strokeWidth="3.5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.75 }}
                      transition={{ duration: 1.3, delay: 0.65 }}
                    />
                  </g>

                  <g transform="translate(52, 68)" fill="#FFFFFF" fillRule="evenodd">
                    {JOTTIT_LOGO_PATHS.map((glyph, idx) => (
                      <motion.path
                        key={glyph.id}
                        d={glyph.d}
                        initial={{ opacity: 0, y: 14, scale: 0.94 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          duration: 0.55,
                          delay: 0.12 + idx * 0.06,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    ))}
                  </g>
                </svg>

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-3 left-6 -rotate-3 bg-parchment px-3 py-0.5 font-display text-[0.65rem] font-bold uppercase tracking-[0.16em] text-ink"
                >
                  Ch. 01 → Ch. 07
                </span>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-3 right-6 rotate-2 bg-lime px-3 py-0.5 font-display text-[0.65rem] font-bold uppercase tracking-[0.16em] text-ink"
                >
                  Every mark matters
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll indicator bar */}
      <div className="wrap relative mt-10 flex items-center justify-between gap-4 border-t border-paper/20 pt-5 md:mt-14">
        <a
          href="#first-mark"
          className="group inline-flex min-h-11 items-center gap-3 font-display text-xs font-bold uppercase tracking-[0.18em] text-paper hover:text-lime"
        >
          <span
            aria-hidden="true"
            className="inline-flex size-8 items-center justify-center border border-paper/40 bg-purple-deep text-lime transition-transform duration-300 group-hover:translate-y-0.5"
          >
            ↓
          </span>
          <span>SCROLL TO EXPLORE THE EVOLUTION OF IDEAS.</span>
        </a>
      </div>
    </section>
  );
}
