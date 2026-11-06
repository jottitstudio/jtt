"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { evolutionChapters } from "@/content/studio";
import { JOTTIT_LOGO_PATHS } from "@/components/layout/Logo";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealLines } from "@/components/ui/Reveal";

/**
 * SECTION 03 & SECTION 07 SIGNATURE INTERACTION — THE EVOLUTION ANIMATION
 * Headline: FROM MARKS TO MEANING.
 *
 * A scroll-driven 7-chapter interactive storytelling experience:
 * Ch 01: The First Mark (cave charcoal & handprint)
 * Ch 02: Marks Become Symbols (petroglyphs & geometric pictograms)
 * Ch 03: Symbols Become Language (ancient scripts & manuscript rows)
 * Ch 04: Ideas on Paper (sketchbook notes, arrows & inventions)
 * Ch 05: Ideas Come Together (cut-out collage & collaborative wall)
 * Ch 06: The Creative Age (modern graphic design & digital interfaces)
 * Ch 07: JOTTIT (all elements assemble into the actual hand-drawn JOTTIT logo on signature purple)
 */
export function EvolutionJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(
      evolutionChapters.length - 1,
      Math.max(0, Math.floor(latest * evolutionChapters.length))
    );
    if (idx !== activeIdx) {
      setActiveIdx(idx);
    }
  });

  const activeChapter = evolutionChapters[activeIdx] ?? evolutionChapters[0];

  const jumpToChapter = (index: number) => {
    setActiveIdx(index);
    const el = document.getElementById(`evo-step-${index}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="evolution" className="relative bg-parchment text-ink">
      {/* Intro header for Section 03 */}
      <div className="wrap pt-20 pb-10 md:pt-32 md:pb-14">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Eyebrow index="03" note="7-Chapter Interactive Story">
              The Evolution of Ideas
            </Eyebrow>
            <h2 id="evolution-title" className="t-h1 mt-6">
              <RevealLines lines={["From marks", "to meaning."]} />
            </h2>
          </div>
          <Reveal className="max-w-sm space-y-2">
            <p className="text-ink/80">
              Scroll or tap any chapter to watch a single mark evolve into{" "}
              <strong className="font-display font-bold text-purple">JOTTIT</strong>.
            </p>
            <a
              href="#ideas-together"
              className="inline-flex min-h-11 items-center font-display text-xs font-bold uppercase tracking-[0.15em] text-purple underline underline-offset-4 hover:text-ink"
            >
              Skip story ↓
            </a>
          </Reveal>
        </div>
      </div>

      {/* Main Scroll-Driven Scrollytelling Container */}
      <div ref={containerRef} className="relative">
        <div className="wrap grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Sticky Interactive Visual Stage (Desktop left/right pinned, Mobile sticky top card) */}
          <div className="lg:col-span-7 lg:order-2">
            <div className="sticky top-[calc(var(--header-h)+0.75rem)] z-20 py-2 lg:top-[calc(var(--header-h)+1.5rem)] lg:py-6">
              <div
                className="relative overflow-hidden border-2 border-ink transition-colors duration-700 shadow-[8px_8px_0_0_#17151B] sm:shadow-[12px_12px_0_0_#17151B]"
                style={{
                  backgroundColor: activeChapter.palette.bg,
                  color: activeChapter.palette.fg,
                }}
              >
                {/* Stage Top Bar: Chapter indicator + Quick Chapter Switcher */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-current/20 px-4 py-3 sm:px-6">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="inline-block size-2.5 rotate-45"
                      style={{ backgroundColor: activeChapter.palette.accent }}
                    />
                    <span className="font-display text-xs font-bold uppercase tracking-[0.16em]">
                      Chapter {activeChapter.number} / 07 — {activeChapter.title}
                    </span>
                  </div>

                  <div
                    role="tablist"
                    aria-label="Evolution chapters"
                    className="flex flex-wrap items-center gap-1"
                  >
                    {evolutionChapters.map((ch, idx) => (
                      <button
                        key={ch.id}
                        type="button"
                        role="tab"
                        aria-selected={activeIdx === idx}
                        aria-label={`Chapter ${ch.number}: ${ch.title}`}
                        onClick={() => jumpToChapter(idx)}
                        className={`inline-flex min-h-11 min-w-11 items-center justify-center font-display text-xs font-bold transition-colors ${
                          activeIdx === idx
                            ? "bg-lime text-ink"
                            : "border border-current/25 opacity-75 hover:opacity-100"
                        }`}
                      >
                        {ch.number}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Morphing SVG Artwork Canvas */}
                <div className="relative aspect-[16/11] w-full overflow-hidden p-4 sm:p-8">
                  <EvolutionCanvas activeIdx={activeIdx} />
                </div>

                {/* Stage Footer Caption */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-t border-current/20 px-4 py-3 text-xs sm:px-6">
                  <span className="opacity-80">{activeChapter.visualNote}</span>
                  <span className="t-hand text-base" style={{ color: activeChapter.palette.accent }}>
                    {activeIdx === 6 ? "Think It. Jot It. Make It Matter." : `Stage ${activeChapter.number} of 07`}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling Narrative Chapters Column */}
          <div className="lg:col-span-5 lg:order-1">
            <ol role="list" className="space-y-8 pb-16 lg:space-y-20 lg:py-12">
              {evolutionChapters.map((ch, idx) => {
                const isCurrent = activeIdx === idx;
                return (
                  <li
                    key={ch.id}
                    id={`evo-step-${idx}`}
                    onMouseEnter={() => setActiveIdx(idx)}
                    onFocus={() => setActiveIdx(idx)}
                    className={`border-2 p-5 transition-all duration-500 sm:p-7 ${
                      isCurrent
                        ? "border-ink bg-paper shadow-[8px_8px_0_0_#5F2DB2]"
                        : "border-ink/20 bg-paper/70 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-2 bg-purple px-2.5 py-0.5 font-display text-xs font-bold uppercase tracking-[0.14em] text-paper">
                        Ch. {ch.number}
                      </span>
                      <span className="font-display text-xs uppercase tracking-[0.12em] text-stone">
                        {ch.eraTag.split("·")[0]}
                      </span>
                    </div>

                    <h3 className="t-h3 mt-4 text-ink">{ch.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/80">{ch.headline}</p>

                    <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-2.5 text-xs text-stone">
                      <span className="t-hand text-base text-purple">{ch.visualNote.split("·")[0]}</span>
                      <button
                        type="button"
                        onClick={() => setActiveIdx(idx)}
                        className="inline-flex min-h-11 items-center px-2 font-display font-bold uppercase tracking-[0.12em] text-purple underline underline-offset-4"
                      >
                        {isCurrent ? "Viewing" : "View"}
                      </button>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>

      {/* Minimal historical interpretation note */}
      <div className="wrap pb-12">
        <p className="border-t border-ink/15 pt-4 text-xs text-stone">
          Artistic interpretation of human expression — not a literal linear history of writing systems.
        </p>
      </div>
    </section>
  );
}

/**
 * The 7-Stage SVG Canvas that morphs visual elements across the chapters:
 * 0: The First Mark
 * 1: Marks Become Symbols
 * 2: Symbols Become Language
 * 3: Ideas on Paper
 * 4: Ideas Come Together
 * 5: The Creative Age
 * 6: JOTTIT Logo Assembly
 */
function EvolutionCanvas({ activeIdx }: { activeIdx: number }) {
  return (
    <svg
      viewBox="0 0 800 520"
      className="h-full w-full"
      role="img"
      aria-label={`Visual stage for Chapter 0${activeIdx + 1}`}
    >
      {/* Background grid lines appear from Chapter 04 onwards */}
      {activeIdx >= 3 && activeIdx <= 5 && (
        <g stroke="currentColor" strokeOpacity="0.12" strokeWidth="1">
          {Array.from({ length: 15 }, (_, i) => (
            <line key={`v-${i}`} x1={i * 56} y1={0} x2={i * 56} y2={520} />
          ))}
          {Array.from({ length: 10 }, (_, i) => (
            <line key={`h-${i}`} x1={0} y1={i * 56} x2={800} y2={i * 56} />
          ))}
        </g>
      )}

      {/* CHAPTER 01: THE FIRST MARK — Charcoal strokes, ochre handprint & cave stag */}
      {activeIdx === 0 && (
        <motion.g
          key="stage-0"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <circle cx="220" cy="255" r="115" fill="#D96B42" fillOpacity="0.28" />
          {/* Handprint */}
          <path
            d="M192 330 C178 296 172 264 156 238 C148 226 160 218 170 228 L190 258 L188 186 C188 172 202 172 204 186 L208 248 L220 170 C222 156 236 158 236 172 L232 248 L252 182 C256 168 270 172 266 186 L250 256 L278 208 C284 196 296 206 290 218 L256 290 C248 314 238 334 218 336 Z"
            fill="#17151B"
            stroke="#F4EBDD"
            strokeWidth="3.5"
          />
          {/* Primitive stag & charcoal marks */}
          <path
            d="M390 280 C435 248 515 245 575 264 C608 274 630 245 645 210 M645 210 C665 186 688 178 708 186 M602 188 C596 158 612 132 636 118 M390 280 C412 314 456 324 542 314 L595 390 M542 314 L502 392 M416 306 L360 388"
            fill="none"
            stroke="#F4EBDD"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Tally marks */}
          <path
            d="M110 88 L104 138 M134 86 L128 138 M158 88 L152 138 M182 86 L176 138 M94 118 L196 104"
            stroke="#D96B42"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <text x="410" y="455" fill="#D96B42" fontSize="28" fontFamily="var(--font-hand)">
            01. A single mark on stone begins the human story.
          </text>
        </motion.g>
      )}

      {/* CHAPTER 02: MARKS BECOME SYMBOLS — Petroglyphs, sun wheels & geometric pictograms */}
      {activeIdx === 1 && (
        <motion.g
          key="stage-1"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Sun wheel pictogram */}
          <circle cx="195" cy="185" r="68" stroke="#D96B42" strokeWidth="4.5" />
          <circle cx="195" cy="185" r="22" stroke="#F4EBDD" strokeWidth="4" />
          <path
            d="M195 92 V117 M195 253 V278 M102 185 H127 M263 185 H288 M129 119 L147 137 M243 233 L261 251 M261 119 L243 137 M147 233 L129 251"
            stroke="#D96B42"
            strokeWidth="4.5"
          />
          {/* Carved spiral symbol */}
          <path
            d="M420 185 C420 165 445 160 452 178 C462 202 435 226 410 220 C376 212 365 172 382 142 C404 104 456 102 484 136 C514 174 500 238 452 260"
            stroke="#F4EBDD"
            strokeWidth="4.5"
          />
          {/* Geometric human/eye/water pictograms */}
          <path
            d="M580 185 C615 145 675 145 710 185 C675 225 615 225 580 185 Z"
            stroke="#F4EBDD"
            strokeWidth="4.5"
          />
          <circle cx="645" cy="185" r="16" fill="#D96B42" />
          {/* Wave & mountain petroglyph bands */}
          <path
            d="M110 355 L165 300 L220 355 L275 300 L330 355 L385 300 L440 355 L495 300 L550 355 L605 300 L660 355"
            stroke="#D96B42"
            strokeWidth="4.5"
          />
          <path
            d="M110 400 Q145 375 180 400 T250 400 T320 400 T390 400 T460 400 T530 400 T600 400 T670 400"
            stroke="#F4EBDD"
            strokeWidth="3.5"
          />
          <text x="110" y="468" fill="#D9E56B" fontSize="26" fontFamily="var(--font-hand)">
            02. Repeated shapes become shared symbols &amp; pictograms.
          </text>
        </motion.g>
      )}

      {/* CHAPTER 03: SYMBOLS BECOME LANGUAGE — Ancient manuscripts, scripts & reed-ink rows */}
      {activeIdx === 2 && (
        <motion.g
          key="stage-2"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Manuscript tablet border */}
          <rect x="64" y="44" width="672" height="420" fill="#E6D9C3" stroke="#17151B" strokeWidth="3" />
          <line x1="230" y1="44" x2="230" y2="464" stroke="#17151B" strokeWidth="2" strokeDasharray="6 6" />

          {/* Left column: Illuminated glyph & seal */}
          <rect x="96" y="82" width="102" height="102" fill="#D96B42" stroke="#17151B" strokeWidth="2.5" />
          <path
            d="M122 158 L147 102 L172 158 M130 142 H164"
            fill="none"
            stroke="#F4EBDD"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="147" cy="260" r="36" fill="none" stroke="#17151B" strokeWidth="2.5" />
          <path d="M132 260 H162 M147 245 V275" stroke="#D96B42" strokeWidth="3.5" strokeLinecap="round" />

          {/* Right column: Structured rows of script & proto-letterforms */}
          {[105, 175, 245, 315].map((y, rowIdx) => (
            <g key={y} transform={`translate(265, ${y})`} stroke="#17151B" strokeWidth="3.2" strokeLinecap="round" fill="none">
              <line x1="0" y1="32" x2="430" y2="32" strokeOpacity="0.2" strokeWidth="1.5" />
              <path d="M8 24 L22 4 L36 24 M12 18 H32" />
              <path d="M58 4 V24 H78" />
              <circle cx="110" cy="14" r="10" />
              <path d="M142 4 H168 M155 4 V24" />
              <path d="M192 24 C198 4 218 4 224 24" />
              <path d="M250 4 L268 24 M268 4 L250 24" stroke="#D96B42" />
              <path d="M294 6 H322 V22 H294 Z" />
              <path d="M348 24 V4 L368 24 V4" />
              <path d={`M392 ${rowIdx % 2 === 0 ? 6 : 18} H422`} />
            </g>
          ))}

          <text x="265" y="425" fill="#17151B" fontSize="28" fontFamily="var(--font-hand)">
            03. Symbols align into scripts, manuscripts &amp; recorded language.
          </text>
        </motion.g>
      )}

      {/* CHAPTER 04: IDEAS ON PAPER — Sketchbook notes, pencil drawings & doodles */}
      {activeIdx === 3 && (
        <motion.g
          key="stage-3"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Open sketchbook pages */}
          <rect x="52" y="36" width="696" height="440" fill="#FFFFFF" stroke="#17151B" strokeWidth="3" />
          <line x1="400" y1="36" x2="400" y2="476" stroke="#17151B" strokeWidth="2" />

          {/* Left page: lightbulb / invention diagram & margin notes */}
          <circle cx="225" cy="195" r="64" fill="#D9E56B" fillOpacity="0.45" stroke="#17151B" strokeWidth="3" strokeDasharray="6 4" />
          <path
            d="M200 245 H250 M206 260 H244 M225 130 V95 M160 145 L135 125 M290 145 L315 125"
            stroke="#5F2DB2"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <text x="95" y="92" fill="#5F2DB2" fontSize="26" fontFamily="var(--font-hand)">
            Idea #01 — jot it down fast!
          </text>
          <text x="95" y="335" fill="#17151B" fontSize="24" fontFamily="var(--font-hand)">
            What if a small sketch could
          </text>
          <text x="95" y="365" fill="#17151B" fontSize="24" fontFamily="var(--font-hand)">
            spark an entire brand system?
          </text>
          <path d="M95 382 C165 372 245 385 315 376" stroke="#D96B42" strokeWidth="3" fill="none" />

          {/* Right page: wireframe thumbnails & connecting arrows */}
          <rect x="445" y="78" width="130" height="90" fill="#F4EBDD" stroke="#17151B" strokeWidth="2.5" />
          <path d="M460 102 H545 M460 122 H525 M460 142 H555" stroke="#17151B" strokeWidth="3" strokeLinecap="round" />
          <path d="M585 125 C625 125 645 155 645 195" fill="none" stroke="#5F2DB2" strokeWidth="3" strokeLinecap="round" />
          <rect x="520" y="210" width="185" height="120" fill="#5F2DB2" fillOpacity="0.12" stroke="#5F2DB2" strokeWidth="2.5" />
          <text x="542" y="265" fill="#5F2DB2" fontSize="28" fontFamily="var(--font-hand)">
            Think it → Jot it
          </text>
          <text x="445" y="425" fill="#17151B" fontSize="26" fontFamily="var(--font-hand)">
            04. Sketchbooks, margin notes &amp; creative experiments.
          </text>
        </motion.g>
      )}

      {/* CHAPTER 05: IDEAS COME TOGETHER — Cut-out collage, sticky notes & collaboration */}
      {activeIdx === 4 && (
        <motion.g
          key="stage-4"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Overlapping cut-out collage cards */}
          <g transform="rotate(-4 230 210)">
            <rect x="85" y="80" width="260" height="220" fill="#F4EBDD" stroke="#17151B" strokeWidth="3" />
            <rect x="105" y="102" width="90" height="26" fill="#D96B42" />
            <text x="114" y="120" fill="#FFFFFF" fontSize="13" fontFamily="var(--font-display)" fontWeight="700">
              STRATEGY
            </text>
            <text x="105" y="172" fill="#17151B" fontSize="28" fontFamily="var(--font-hand)">
              Who are we talking to?
            </text>
            <path d="M105 210 H295 M105 236 H255" stroke="#17151B" strokeWidth="3" strokeLinecap="round" />
          </g>

          <g transform="rotate(3 520 190)">
            <rect x="370" y="70" width="310" height="210" fill="#5F2DB2" stroke="#17151B" strokeWidth="3" />
            <rect x="394" y="94" width="110" height="26" fill="#D9E56B" />
            <text x="404" y="112" fill="#17151B" fontSize="13" fontFamily="var(--font-display)" fontWeight="700">
              VISUAL CRAFT
            </text>
            <text x="394" y="170" fill="#FFFFFF" fontSize="34" fontFamily="var(--font-display)" fontWeight="700">
              JOIN IT.
            </text>
            <text x="394" y="212" fill="#D9E56B" fontSize="24" fontFamily="var(--font-hand)">
              Design + Content + Story
            </text>
          </g>

          <g transform="rotate(-1.5 410 370)">
            <rect x="210" y="285" width="390" height="150" fill="#D9E56B" stroke="#17151B" strokeWidth="3" />
            <text x="238" y="342" fill="#17151B" fontSize="28" fontFamily="var(--font-display)" fontWeight="700">
              COLLABORATION MAKES IT BIGGER
            </text>
            <text x="238" y="388" fill="#17151B" fontSize="25" fontFamily="var(--font-hand)">
              05. Strategists, designers, writers &amp; makers around one table.
            </text>
          </g>
        </motion.g>
      )}

      {/* CHAPTER 06: THE CREATIVE AGE — Modern graphic design, brand systems & digital interfaces */}
      {activeIdx === 5 && (
        <motion.g
          key="stage-5"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Brutalist modern brand & digital grid */}
          <rect x="56" y="42" width="688" height="432" fill="#17151B" stroke="#FFFFFF" strokeWidth="2.5" />
          <line x1="56" y1="104" x2="744" y2="104" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="88" cy="73" r="8" fill="#D96B42" />
          <circle cx="114" cy="73" r="8" fill="#D9E56B" />
          <circle cx="140" cy="73" r="8" fill="#5F2DB2" />
          <text x="175" y="79" fill="#FFFFFF" fontSize="14" fontFamily="var(--font-display)" letterSpacing="3">
            MODERN BRAND &amp; DIGITAL SYSTEM
          </text>

          {/* Left block: Identity & Campaign Poster */}
          <rect x="84" y="132" width="290" height="312" fill="#5F2DB2" stroke="#FFFFFF" strokeWidth="2" />
          <text x="108" y="196" fill="#D9E56B" fontSize="42" fontFamily="var(--font-display)" fontWeight="700">
            BRAND.
          </text>
          <text x="108" y="244" fill="#FFFFFF" fontSize="42" fontFamily="var(--font-display)" fontWeight="700">
            STORY.
          </text>
          <text x="108" y="292" fill="#F4EBDD" fontSize="42" fontFamily="var(--font-display)" fontWeight="700">
            GROWTH.
          </text>
          <rect x="108" y="340" width="170" height="42" fill="#D9E56B" />
          <text x="124" y="366" fill="#17151B" fontSize="14" fontFamily="var(--font-display)" fontWeight="700">
            LAUNCH CAMPAIGN →
          </text>

          {/* Right blocks: Digital UI + Performance Metrics */}
          <rect x="402" y="132" width="314" height="145" fill="#262130" stroke="#FFFFFF" strokeWidth="2" />
          <text x="426" y="172" fill="#D9E56B" fontSize="13" fontFamily="var(--font-display)" letterSpacing="2">
            DIGITAL EXPERIENCE &amp; WEB
          </text>
          <path d="M426 205 H660 M426 232 H590" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />

          <rect x="402" y="299" width="314" height="145" fill="#F4EBDD" stroke="#FFFFFF" strokeWidth="2" />
          <text x="426" y="342" fill="#17151B" fontSize="20" fontFamily="var(--font-display)" fontWeight="700">
            06. THE CREATIVE AGE
          </text>
          <text x="426" y="382" fill="#5F2DB2" fontSize="24" fontFamily="var(--font-hand)">
            Ideas transformed into living brands.
          </text>
        </motion.g>
      )}

      {/* CHAPTER 07: JOTTIT — The entire journey assembles into the actual hand-drawn JOTTIT logo */}
      {activeIdx === 6 && (
        <motion.g
          key="stage-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Radiating celebration marks */}
          <g stroke="#D9E56B" strokeWidth="3.5" strokeLinecap="round">
            <path d="M90 78 L125 102 M710 78 L675 102 M90 420 L125 395 M710 420 L675 395" />
            <path d="M400 32 V62" />
          </g>

          {/* Assembled actual hand-drawn JOTTIT logo */}
          <g transform="translate(88, 92) scale(0.82)" fill="#FFFFFF" fillRule="evenodd">
            {JOTTIT_LOGO_PATHS.map((glyph, i) => {
              const offsets = [
                { x: -120, y: -60, r: -18 },
                { x: -80, y: -110, r: 24 },
                { x: -60, y: 110, r: -15 },
                { x: 0, y: -120, r: 12 },
                { x: 40, y: 120, r: -14 },
                { x: 90, y: -100, r: 20 },
                { x: 110, y: 90, r: -12 },
                { x: 140, y: -70, r: 16 },
              ];
              const off = offsets[i % offsets.length];
              return (
                <motion.path
                  key={glyph.id}
                  d={glyph.d}
                  initial={{ x: off.x, y: off.y, rotate: off.r, opacity: 0 }}
                  animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              );
            })}
          </g>

          <rect x="195" y="418" width="410" height="46" fill="#D9E56B" />
          <text
            x="400"
            y="447"
            textAnchor="middle"
            fill="#17151B"
            fontSize="18"
            fontFamily="var(--font-display)"
            fontWeight="700"
            letterSpacing="3"
          >
            THINK IT. JOT IT. MAKE IT MATTER.
          </text>
        </motion.g>
      )}
    </svg>
  );
}
