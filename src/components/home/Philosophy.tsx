import { JOTTIT_LOGO_PATHS, Logo } from "@/components/layout/Logo";
import { JotMark, ScribbleUnderline } from "@/components/art/Motifs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal, RevealLines } from "@/components/ui/Reveal";
import { approachPillars } from "@/content/studio";

export function Philosophy() {
  return (
    <section
      id="the-reveal"
      className="on-dark relative overflow-hidden border-y border-ink bg-purple py-28 text-paper md:py-40"
    >
      {/* Subtle architectural & hand-drawn grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px, 96px 96px, 96px 96px",
        }}
      />

      {/* Ambient lime glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-12 size-[26rem] rounded-full bg-lime/15 blur-3xl"
      />

      <div className="wrap relative">
        <Eyebrow index="05" note="The Reveal" className="text-paper/80">
          From ancient marks to the modern studio
        </Eyebrow>

        <div className="mt-10 grid items-center gap-12 lg:mt-14 lg:grid-cols-12 lg:gap-x-10">
          <div className="min-w-0 lg:col-span-6">
            <h2 id="reveal-title" className="t-h1 text-paper">
              <RevealLines
                lines={[
                  <span key="1" className="text-paper/75">
                    AND THEN
                  </span>,
                  <span key="2" className="text-lime">
                    CAME JOTTIT.
                  </span>,
                ]}
              />
            </h2>

            <Reveal delay={0.12} className="mt-8 space-y-5">
              <p className="t-lead text-paper/95">
                Today, we bring ideas together and turn them into brands, content, experiences and meaningful business
                growth.
              </p>
              <p className="text-paper/80">
                Every symbol in history started as a quick human mark — a thought captured before it could disappear.
                JOTTIT carries that same creative instinct into the modern world, uniting strategy, storytelling, design
                and performance under one roof.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-8">
              <div className="inline-flex flex-wrap items-center gap-3 border border-paper/25 bg-purple-deep/80 px-5 py-3.5">
                <JotMark className="size-4 text-lime" />
                <span className="font-display text-sm font-bold uppercase tracking-[0.16em] text-lime">
                  THINK IT. JOT IT. MAKE IT MATTER.
                </span>
              </div>
            </Reveal>
          </div>

          {/* Supplied JOTTIT Hand-Drawn Logo Showcase Card */}
          <Reveal delay={0.15} className="min-w-0 lg:col-span-6">
            <div className="relative overflow-hidden border-2 border-paper/30 bg-purple-deep p-8 shadow-[12px_12px_0_0_#D9E56B] sm:p-12 md:p-14">
              <div className="flex items-center justify-between gap-4 border-b border-paper/15 pb-4">
                <span className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-paper/70">
                  Identity Mark · Hand-Drawn Original
                </span>
                <span className="t-hand text-xl text-lime">Every big idea starts with a little jot</span>
              </div>

              {/* Historical marks transitioning into the supplied JOTTIT wordmark */}
              <div className="my-6 flex items-center justify-between gap-2 text-paper/35" aria-hidden="true">
                <span className="font-display text-xs uppercase tracking-[0.14em]">01 Charcoal</span>
                <span className="h-px flex-1 bg-paper/20" />
                <span className="font-display text-xs uppercase tracking-[0.14em]">04 Sketch</span>
                <span className="h-px flex-1 bg-paper/20" />
                <span className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-lime">
                  07 JOTTIT
                </span>
              </div>

              <div className="relative flex flex-col items-center justify-center rounded-sm bg-purple px-6 py-10 sm:py-14">
                <svg
                  viewBox="0 0 800 410"
                  role="img"
                  aria-label="JOTTIT hand-drawn logo"
                  className="h-auto w-full max-w-[26rem] text-paper drop-shadow-[0_10px_28px_rgba(0,0,0,0.28)]"
                >
                  {JOTTIT_LOGO_PATHS.map((glyph) => (
                    <path key={glyph.id} d={glyph.d} fill="currentColor" fillRule="evenodd" />
                  ))}
                </svg>
                <ScribbleUnderline className="mt-4 h-3 w-48 text-lime" />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-2 text-xs text-paper/75">
                <div className="flex items-center gap-3">
                  <Logo className="h-5 text-paper" />
                  <span>Hand-drawn character preserved across every touchpoint</span>
                </div>
                <span className="font-display uppercase tracking-[0.14em] text-lime">#5F2DB2 · #FFFFFF</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Connected 5-part system */}
        <div className="mt-20 border-t border-paper/20 pt-14 md:mt-28 md:pt-16">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="t-hand text-2xl text-lime">Connected from first jot to commercial scale</p>
              <h3 className="mt-1 font-display text-xl font-bold uppercase tracking-[-0.02em] text-paper md:text-2xl">
                How our studio turns raw thoughts into market momentum
              </h3>
            </div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-paper/70">
              Research → Strategy → Creativity → Execution → Optimisation
            </p>
          </div>

          <ol role="list" className="grid gap-px bg-paper/20 sm:grid-cols-2 lg:grid-cols-5">
            {approachPillars.map((pillar, i) => (
              <Reveal
                as="li"
                key={pillar.title}
                delay={i * 0.06}
                className="flex flex-col justify-between bg-purple-deep p-6 md:p-7"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-xs font-bold tracking-[0.14em] text-lime">{pillar.index}</span>
                    <span aria-hidden="true" className="inline-block size-2 rotate-45 bg-lime" />
                  </div>
                  <h4 className="mt-5 font-display text-xl font-bold uppercase tracking-[-0.02em] text-paper">
                    {pillar.title}
                  </h4>
                  <p className="mt-2 font-display text-xs font-semibold uppercase tracking-[0.1em] text-lime">
                    {pillar.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-paper/80">{pillar.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal
            delay={0.2}
            className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-paper/20 pt-8 sm:flex-row sm:items-center"
          >
            <p className="max-w-xl text-sm text-paper/85">
              Ready to turn an early thought, rebrand or growth goal into something people remember?
            </p>
            <ButtonLink href="/contact" variant="lime">
              Start a Project With JOTTIT
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
