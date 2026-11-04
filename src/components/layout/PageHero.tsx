import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealLines } from "@/components/ui/Reveal";
import { KolamLattice } from "@/components/art/KolamLattice";

/** Shared editorial header for inner pages. */
export function PageHero({
  eyebrow,
  tamil,
  lines,
  intro,
  children,
  kolam = true,
}: {
  eyebrow: string;
  tamil?: string;
  lines: ReactNode[];
  intro?: ReactNode;
  children?: ReactNode;
  kolam?: boolean;
}) {
  return (
    <section className="relative overflow-hidden pt-[calc(var(--header-h)+3rem)] pb-16 md:pt-[calc(var(--header-h)+5rem)] md:pb-24">
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 text-ink/[0.06] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
      {kolam && (
        <KolamLattice
          cells={5}
          className="pointer-events-none absolute -right-24 top-16 hidden w-[26rem] text-ink/30 md:block lg:right-0"
          strokeWidth={1}
        />
      )}
      <div className="wrap relative">
        <Reveal y={12}>
          <Eyebrow tamil={tamil}>{eyebrow}</Eyebrow>
        </Reveal>
        <h1 className="t-h1 mt-8 max-w-[14ch] md:mt-10">
          <RevealLines immediate delay={0.05} lines={lines} />
        </h1>
        {(intro || children) && (
          <div className="mt-10 grid gap-8 md:mt-14 lg:grid-cols-12 lg:gap-x-8">
            {intro && (
              <Reveal delay={0.35} className="lg:col-span-6 lg:col-start-6">
                <div className="t-lead text-ink/80">{intro}</div>
              </Reveal>
            )}
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
