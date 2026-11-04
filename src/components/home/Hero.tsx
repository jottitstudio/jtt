import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { RevealLines, Reveal } from "@/components/ui/Reveal";
import { KolamLattice } from "@/components/art/KolamLattice";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pt-[calc(var(--header-h)+2.5rem)] md:pt-[calc(var(--header-h)+4rem)]">
      {/* faint dot grid — the pulli of a kolam, before the line is drawn */}
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 text-ink/[0.07] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <div className="wrap relative grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-8 lg:pt-6">
          <Reveal y={12}>
            <p className="t-eyebrow flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="inline-block size-2 rotate-45 bg-turmeric" aria-hidden="true" />
              Creative &amp; marketing studio
              <span aria-hidden="true" className="inline-block h-px w-8 bg-current" />
              <span lang="ta" className="tamil text-[0.8rem] text-stone">
                வடிவம் · உத்தி · வளர்ச்சி
              </span>
            </p>
          </Reveal>

          <h1 id="hero-title" className="t-display mt-8 md:mt-10">
            <RevealLines
              immediate
              delay={0.1}
              lines={[
                "We make",
                <span key="b" className="lg:pl-[0.9em]">brands</span>,
                <span key="m" className="relative inline-block">
                  <span className="relative z-10">matter.</span>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-[0.08em] left-[-0.04em] right-[-0.06em] z-0 h-[0.32em] bg-turmeric"
                  />
                </span>,
              ]}
            />
          </h1>

          <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-[minmax(0,26rem)_auto] md:items-end md:gap-12">
            <Reveal delay={0.45}>
              <p className="t-lead text-ink/80">
                From building unforgettable identities to creating campaigns that drive growth, we bring strategy,
                creativity and marketing together under one roof.
              </p>
            </Reveal>
            <Reveal delay={0.55} className="flex flex-col gap-3 sm:flex-row md:flex-col xl:flex-row">
              <ButtonLink href="/work" variant="solid">
                Explore Our Work
              </ButtonLink>
              <ButtonLink href="/contact#enquiry" variant="outline">
                Start a Project
              </ButtonLink>
            </Reveal>
          </div>
        </div>

        <div className="relative lg:col-span-4">
          <Reveal delay={0.25} y={40} as="figure" className="relative">
            <div className="relative ml-auto aspect-[3/4] w-full max-w-[34rem] overflow-hidden bg-ivory-deep sm:w-4/5 lg:w-full">
              <Image
                src="/images/art/hero-artwork.jpg"
                alt="Abstract artwork: a turmeric sun behind stepped black temple-tier forms, overlaid with a white kolam line drawn across a dot grid, beside a green banana leaf."
                fill
                preload
                sizes="(min-width: 1024px) 32vw, (min-width: 640px) 80vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 flex justify-between gap-4 text-xs text-stone sm:ml-auto sm:w-4/5 lg:w-full">
              <span className="t-eyebrow">Fig. 01</span>
              <span>Kolam, gopuram &amp; leaf — a studio study</span>
            </figcaption>
          </Reveal>
          <KolamLattice
            cells={4}
            className="pointer-events-none absolute -left-16 -top-12 hidden w-36 text-ink lg:block xl:-left-24 xl:w-44"
            strokeWidth={1}
            duration={2.8}
          />
        </div>
      </div>

      <div className="wrap relative mt-16 flex items-center justify-between border-t border-ink/15 py-5 md:mt-24">
        <p className="t-eyebrow text-stone">Branding · Social · Performance · Film · Web</p>
        <a href="#approach" className="t-eyebrow group hidden items-center gap-3 sm:flex">
          Scroll
          <span aria-hidden="true" className="relative block h-8 w-px overflow-hidden bg-ink/20">
            <span className="absolute inset-x-0 top-0 h-1/2 bg-ink motion-safe:animate-[scrollcue_2.4s_var(--ease-studio)_infinite]" />
          </span>
        </a>
      </div>
    </section>
  );
}
