"use client";

import { motion } from "motion/react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealLines } from "@/components/ui/Reveal";

/**
 * SECTION 02 — THE FIRST MARK
 * Headline: IT STARTED WITH A MARK.
 * Copy: Long before brands, screens and campaigns, there was a simple human instinct: to express an idea.
 */
export function Statement() {
  return (
    <section
      id="first-mark"
      className="on-dark relative overflow-hidden bg-ink py-24 text-parchment md:py-36"
    >
      {/* Warm ochre/terracotta ambient glow evoking firelight on stone */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 75% 35%, rgba(217, 107, 66, 0.35), transparent 55%), radial-gradient(circle at 20% 80%, rgba(244, 235, 221, 0.12), transparent 50%)",
        }}
      />

      <div className="wrap relative">
        <div className="grid gap-y-12 lg:grid-cols-12 lg:items-center lg:gap-x-10">
          <div className="lg:col-span-6">
            <Eyebrow index="CHAPTER 01" note="Prehistoric cave wall" className="text-terracotta">
              The First Mark
            </Eyebrow>

            <h2 id="first-mark-title" className="t-h1 mt-8 text-parchment">
              <RevealLines lines={["It started", "with a mark."]} />
            </h2>

            <Reveal delay={0.15} className="mt-8 space-y-5">
              <p className="t-lead text-parchment">
                Long before brands, screens and campaigns, there was a simple human instinct: to express an idea.
              </p>
              <p className="text-parchment/75">
                Before anyone invented an alphabet or a printing press, someone picked up a piece of charred wood and
                pressed ochre pigment onto rough stone. A handprint. Five tally strokes. The curve of a running stag.
              </p>
              <p className="text-parchment/75">
                That first mark did what every great piece of communication still does today — it captured a fleeting
                thought inside one mind and made it visible to another.
              </p>
            </Reveal>

            <Reveal delay={0.25} className="mt-10 border-l-2 border-terracotta bg-parchment/5 p-5">
              <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-terracotta">
                Creative perspective
              </p>
              <p className="mt-1.5 text-sm text-parchment/75">
                What follows is our studio&apos;s creative interpretation of how human expression takes form — from raw
                marks to modern brand design — not a literal linear timeline of world writing systems.
              </p>
            </Reveal>
          </div>

          {/* Right column: Prehistoric stone tablet & charcoal/ochre illustration */}
          <Reveal delay={0.2} className="lg:col-span-6">
            <figure className="relative border-2 border-parchment/25 bg-[#211C22] p-6 shadow-[10px_10px_0_0_#D96B42] sm:p-8">
              <div className="flex items-center justify-between border-b border-parchment/15 pb-3 text-xs uppercase tracking-[0.14em] text-parchment/60">
                <span>Artifact Study · 01</span>
                <span className="text-terracotta">Charcoal, Ochre &amp; Stone</span>
              </div>

              <svg
                viewBox="0 0 640 440"
                className="mt-4 w-full h-auto"
                role="img"
                aria-label="Prehistoric cave wall illustration showing an ochre handprint stencil, charcoal running deer, and primitive tally marks"
              >
                {/* Stone fracture & contour lines */}
                <path
                  d="M18 68 L140 42 L290 74 L480 38 L618 82 M12 370 L180 398 L360 364 L540 402 L626 376"
                  stroke="#F4EBDD"
                  strokeOpacity="0.14"
                  strokeWidth="1.5"
                  fill="none"
                />

                {/* Ochre pigment halo behind handprint */}
                <circle cx="170" cy="195" r="88" fill="#D96B42" fillOpacity="0.24" />
                <circle cx="170" cy="195" r="64" fill="#D96B42" fillOpacity="0.32" />

                {/* Handprint stencil on stone */}
                <motion.path
                  d="M142 260 C130 232 126 205 112 182 C106 172 116 164 124 174 L142 200 L140 138 C140 126 152 126 154 138 L158 192 L168 124 C170 112 182 114 182 126 L178 192 L196 134 C200 122 212 126 208 138 L194 198 L218 158 C224 148 234 156 228 166 L198 228 C192 248 184 264 166 266 Z"
                  fill="#17151B"
                  stroke="#F4EBDD"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0.3 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6 }}
                />

                {/* Charcoal running stag / antelope cave drawing */}
                <g stroke="#F4EBDD" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
                  <motion.path
                    d="M320 230 C355 205 425 202 475 218 C502 226 520 202 532 174 C516 168 504 164 496 156 M532 174 C548 154 568 148 584 154 M496 156 C492 132 504 110 524 98 M496 156 C478 136 462 126 444 124"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, delay: 0.2 }}
                  />
                  <motion.path
                    d="M320 230 C338 258 375 266 446 258 C462 288 482 318 504 338 M446 258 C436 290 422 318 408 338 M342 252 C320 284 296 314 274 334 M356 256 C352 290 348 318 344 342"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, delay: 0.35 }}
                  />
                </g>

                {/* Ochre hunting / motion arcs & primitive tally marks */}
                <g stroke="#D96B42" strokeWidth="3.5" strokeLinecap="round">
                  <path d="M88 330 L94 362 M108 328 L112 362 M128 330 L130 362 M148 328 L150 362 M78 350 L162 340" />
                  <path d="M356 128 L374 146 M374 128 L356 146" />
                  <path d="M402 106 L416 120 M416 106 L402 120" />
                </g>

                {/* Handwritten studio note */}
                <text x="330" y="392" fill="#D9E56B" fontSize="22" fontFamily="var(--font-hand)">
                  &ldquo;The instinct to leave a mark — where every story begins.&rdquo;
                </text>
              </svg>

              <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-parchment/65">
                <span>01 · Handprint, charcoal line &amp; tally</span>
                <span>Scroll to watch the mark evolve ↓</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
