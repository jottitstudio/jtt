"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { JOTTIT_LOGO_PATHS, Logo } from "@/components/layout/Logo";
import { Arrow, JotMark, ScribbleUnderline } from "@/components/art/Motifs";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal, RevealLines } from "@/components/ui/Reveal";
import { services } from "@/content/services";
import { site } from "@/content/site";

export function ComingSoon() {
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleQuickJot = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section
      id="coming-soon"
      className="on-purple relative min-h-[calc(100svh-3rem)] overflow-hidden bg-purple pt-[calc(var(--header-h)+2.5rem)] pb-20 text-paper md:pt-[calc(var(--header-h)+4rem)] md:pb-28"
    >
      {/* Subtle sketchbook grid background */}
      <div
        aria-hidden="true"
        className="sketch-grid pointer-events-none absolute inset-0 text-paper opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]"
      />

      {/* Ambient lime glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-16 size-[28rem] rounded-full bg-lime/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-12 size-[22rem] rounded-full bg-terracotta/15 blur-3xl"
      />

      <div className="wrap relative">
        <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-12 lg:gap-x-12">
          {/* Left Column: Coming Soon Announcement & Quick Project Jot */}
          <div className="lg:col-span-7">
            <Reveal y={10}>
              <div className="inline-flex flex-wrap items-center gap-2.5 border-2 border-paper bg-purple-deep px-4 py-1.5 shadow-[4px_4px_0_0_#D9E56B]">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-lime" />
                </span>
                <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-lime">
                  We Are Coming Soon
                </span>
                <span className="text-xs text-paper/60">·</span>
                <span className="t-hand text-lg text-paper">Studio website in the making</span>
              </div>
            </Reveal>

            <h1 className="t-display mt-7 text-paper md:mt-9">
              <RevealLines
                immediate
                delay={0.06}
                lines={[
                  "SOMETHING BIG",
                  "IS BEING",
                  <span key="jotted" className="relative inline-block text-lime">
                    <span className="relative z-10">JOTTED.</span>
                    <ScribbleUnderline
                      color="#D9E56B"
                      className="pointer-events-none absolute -bottom-2 left-0 h-4 w-full"
                    />
                  </span>,
                ]}
              />
            </h1>

            <Reveal delay={0.25} className="mt-6 max-w-xl">
              <p className="t-lead text-paper/90">
                We&apos;re putting the finishing touches on the new <strong className="font-semibold text-lime">JOTTIT</strong>{" "}
                digital experience. Our studio is open and taking on new projects across branding, content, performance
                marketing, film and web.
              </p>
            </Reveal>

            {/* Quick Interactive "Jot Your Idea / Get Notified" Box */}
            <Reveal delay={0.35} className="mt-8 max-w-xl">
              {submitted ? (
                <div
                  role="status"
                  className="border-2 border-paper bg-purple-deep p-6 shadow-[8px_8px_0_0_#D9E56B]"
                >
                  <div className="flex items-center gap-2.5 text-lime">
                    <JotMark className="size-5" />
                    <span className="font-display text-sm font-bold uppercase tracking-[0.14em]">
                      Jot Received
                    </span>
                  </div>
                  <p className="mt-2 font-display text-lg font-bold text-paper">
                    Thanks! We&apos;ve got your note and will reach out shortly.
                  </p>
                  <p className="mt-1 text-sm text-paper/75">
                    Want to share a full project brief right away?{" "}
                    <Link href="/contact" className="font-semibold text-lime underline underline-offset-4">
                      Open the project enquiry form →
                    </Link>
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleQuickJot}
                  className="border-2 border-paper/40 bg-purple-deep/90 p-5 shadow-[8px_8px_0_0_#17151B] sm:p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <label
                      htmlFor="coming-soon-email"
                      className="font-display text-xs font-bold uppercase tracking-[0.16em] text-lime"
                    >
                      Have a project in mind while we build?
                    </label>
                    <span className="t-hand text-lg text-paper/85">Drop a quick jot ↓</span>
                  </div>

                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <div>
                      <label htmlFor="coming-soon-email" className="sr-only">
                        Work email
                      </label>
                      <input
                        id="coming-soon-email"
                        type="email"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address *"
                        className="min-h-12 w-full border border-paper/30 bg-purple px-3.5 py-2.5 text-base text-paper placeholder:text-paper/50 focus:border-lime focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="coming-soon-note" className="sr-only">
                        What are you building?
                      </label>
                      <input
                        id="coming-soon-note"
                        type="text"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Brand / idea in one line (optional)"
                        className="min-h-12 w-full border border-paper/30 bg-purple px-3.5 py-2.5 text-base text-paper placeholder:text-paper/50 focus:border-lime focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="mt-3.5 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="submit"
                      className="inline-flex min-h-12 cursor-pointer items-center gap-3 border-2 border-ink bg-lime px-6 py-2.5 font-display text-xs font-bold uppercase tracking-[0.14em] text-ink transition-transform hover:-translate-y-0.5"
                    >
                      <span>Jot It To Us</span>
                      <Arrow className="size-4" />
                    </button>

                    <Link
                      href="/contact"
                      className="inline-flex min-h-11 items-center font-display text-xs font-bold uppercase tracking-[0.14em] text-paper/85 underline decoration-lime underline-offset-4 hover:text-lime"
                    >
                      Or fill full project brief →
                    </Link>
                  </div>
                </form>
              )}
            </Reveal>

            {/* Primary Action & Sneak Peek Links */}
            <Reveal delay={0.45} className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href="/contact" variant="lime">
                Start a Project Now
              </ButtonLink>
              <ButtonLink href="/preview" variant="outline-light">
                Sneak Peek Full Site
              </ButtonLink>
            </Reveal>
          </div>

          {/* Right Column: Prominent JOTTIT Hand-Drawn Identity Card + Studio Status */}
          <div className="lg:col-span-5">
            <Reveal delay={0.18} y={20}>
              <div className="relative mx-auto max-w-lg border-2 border-paper bg-purple-deep p-6 shadow-[12px_12px_0_0_#D9E56B] sm:p-8">
                {/* Sketchbook Header */}
                <div className="flex items-center justify-between border-b border-paper/20 pb-3 text-xs uppercase tracking-[0.16em] text-paper/75">
                  <span className="font-display font-bold">JOTTIT Studio · 2026</span>
                  <span className="t-hand text-lg normal-case tracking-normal text-lime">
                    Every big idea starts with a little jot
                  </span>
                </div>

                {/* Supplied Hand-Drawn JOTTIT Logo Canvas */}
                <div className="relative my-6 bg-purple px-5 py-12 sm:px-8 sm:py-16">
                  <svg
                    viewBox="0 0 860 480"
                    className="h-auto w-full overflow-visible"
                    role="img"
                    aria-label="The hand-drawn JOTTIT logo surrounded by sketchbook marks and stars"
                  >
                    {/* Animated hand-drawn marks */}
                    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <motion.path
                        d="M28 36 L24 72 M44 34 L40 72 M60 36 L56 72 M76 35 L72 72 M16 58 L86 46"
                        stroke="#D96B42"
                        strokeWidth="4"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.95 }}
                        transition={{ duration: 1.1, delay: 0.15 }}
                      />
                      <motion.path
                        d="M785 56 C785 44 800 42 804 52 C810 66 792 80 778 76 C758 70 752 46 764 30 C778 10 810 10 826 32 C842 54 832 90 802 100"
                        stroke="#D9E56B"
                        strokeWidth="3.5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.9 }}
                        transition={{ duration: 1.4, delay: 0.3 }}
                      />
                      <motion.path
                        d="M680 34 L686 52 L705 54 L690 65 L695 84 L680 72 L665 84 L670 65 L655 54 L674 52 Z"
                        stroke="#FFFFFF"
                        strokeWidth="2.5"
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.75 }}
                        transition={{ duration: 0.8, delay: 0.45 }}
                      />
                      <motion.path
                        d="M42 422 C96 446 154 432 192 396 M174 394 L194 394 L190 414"
                        stroke="#D9E56B"
                        strokeWidth="3.5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.9 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                      />
                    </g>

                    {/* Supplied JOTTIT Hand-Drawn Logo */}
                    <g transform="translate(52, 68)" fill="#FFFFFF" fillRule="evenodd">
                      {JOTTIT_LOGO_PATHS.map((glyph, idx) => (
                        <motion.path
                          key={glyph.id}
                          d={glyph.d}
                          initial={{ opacity: 0, y: 14, scale: 0.94 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{
                            duration: 0.55,
                            delay: 0.1 + idx * 0.06,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      ))}
                    </g>
                  </svg>

                  {/* Collage Tape Badges */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-3 left-6 -rotate-2 bg-lime px-3 py-0.5 font-display text-[0.65rem] font-bold uppercase tracking-[0.16em] text-ink"
                  >
                    New Website In Progress
                  </span>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-3 right-6 rotate-2 bg-parchment px-3 py-0.5 font-display text-[0.65rem] font-bold uppercase tracking-[0.16em] text-ink"
                  >
                    Taking New Briefs
                  </span>
                </div>

                {/* Tagline & Trilogy Footer */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-paper/20 pt-4">
                  <div className="flex items-center gap-2.5">
                    <Logo tone="white" svgClassName="h-5 w-auto" />
                    <span className="font-display text-xs font-bold uppercase tracking-[0.14em] text-lime">
                      THINK IT. JOT IT. MAKE IT MATTER.
                    </span>
                  </div>
                  <span className="t-hand text-xl text-paper">Jot it · Join it · Got it</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom Strip: What We Do Pills + Direct Contact */}
        <Reveal delay={0.5} className="mt-16 border-t border-paper/20 pt-8 md:mt-20">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-lime">
                What we do while our new home is being built
              </p>
              <ul role="list" className="mt-3 flex flex-wrap gap-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="inline-flex min-h-11 items-center gap-2 border border-paper/25 bg-purple-deep/70 px-3.5 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.1em] text-paper transition-colors hover:border-lime hover:bg-lime hover:text-ink"
                    >
                      <span className="text-lime group-hover:text-ink">{s.index}</span>
                      <span>{s.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-paper/80">
              <div>
                <span className="block font-display text-[0.68rem] font-bold uppercase tracking-[0.16em] text-paper/60">
                  Direct Enquiry
                </span>
                <Link href="/contact" className="font-display font-bold text-lime underline underline-offset-4">
                  Start a Project Brief →
                </Link>
              </div>
              <div>
                <span className="block font-display text-[0.68rem] font-bold uppercase tracking-[0.16em] text-paper/60">
                  Studio Status
                </span>
                <span className="font-display font-medium text-paper">{site.tagline}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
