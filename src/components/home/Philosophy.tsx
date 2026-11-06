import { JOTTIT_LOGO_PATHS } from "@/components/layout/Logo";
import { JotMark, ScribbleUnderline } from "@/components/art/Motifs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealLines } from "@/components/ui/Reveal";

/**
 * SECTION 05 — THE REVEAL
 * High-impact, minimal brand reveal: "AND THEN CAME JOTTIT."
 */
export function Philosophy() {
  return (
    <section
      id="the-reveal"
      className="on-dark relative overflow-hidden border-y border-ink bg-purple py-20 text-paper md:py-32"
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

      <div className="wrap relative">
        <Eyebrow index="05" note="The Reveal" className="text-paper/80">
          From first mark to modern studio
        </Eyebrow>

        <div className="mt-8 grid items-center gap-10 lg:mt-12 lg:grid-cols-12 lg:gap-x-10">
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

            <Reveal delay={0.12} className="mt-6 max-w-lg">
              <p className="t-lead text-paper/95">
                Today, we bring ideas together and turn them into brands, content, experiences and meaningful business
                growth.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-7">
              <div className="inline-flex flex-wrap items-center gap-3 border border-paper/25 bg-purple-deep/80 px-5 py-3">
                <JotMark className="size-4 text-lime" />
                <span className="font-display text-sm font-bold uppercase tracking-[0.16em] text-lime">
                  THINK IT. JOT IT. MAKE IT MATTER.
                </span>
              </div>
            </Reveal>
          </div>

          {/* Supplied JOTTIT Hand-Drawn Logo Showcase Card */}
          <Reveal delay={0.15} className="min-w-0 lg:col-span-6">
            <div className="relative overflow-hidden border-2 border-paper/30 bg-purple-deep p-6 shadow-[10px_10px_0_0_#D9E56B] sm:p-10">
              <div className="flex items-center justify-between gap-4 border-b border-paper/15 pb-3">
                <span className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-paper/70">
                  Hand-Drawn Identity
                </span>
                <span className="t-hand text-xl text-lime">Every big idea starts with a little jot</span>
              </div>

              <div className="relative mt-5 flex flex-col items-center justify-center rounded-sm bg-purple px-6 py-10 sm:py-12">
                <svg
                  viewBox="0 0 800 410"
                  role="img"
                  aria-label="JOTTIT hand-drawn logo"
                  className="h-auto w-full max-w-[24rem] text-paper drop-shadow-[0_10px_28px_rgba(0,0,0,0.28)]"
                >
                  {JOTTIT_LOGO_PATHS.map((glyph) => (
                    <path key={glyph.id} d={glyph.d} fill="currentColor" fillRule="evenodd" />
                  ))}
                </svg>
                <ScribbleUnderline className="mt-4 h-3 w-44 text-lime" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
