import Link from "next/link";
import type { Service } from "@/lib/types";
import { Arrow, ServiceGlyph } from "@/components/art/Motifs";
import { Reveal } from "@/components/ui/Reveal";

/** Editorial index of JOTTIT's 5 core services — customer benefits, capabilities and deliverables. */
export function ServiceList({ services, headingLevel = "h3" }: { services: Service[]; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <ul role="list" className="border-t-2 border-ink">
      {services.map((s, i) => (
        <Reveal as="li" key={s.slug} delay={i * 0.05} className="border-b border-ink">
          <Link
            href={`/services/${s.slug}`}
            className="group relative isolate grid grid-cols-[auto_1fr_auto] items-start gap-x-5 gap-y-4 py-9 transition-colors duration-500 before:absolute before:inset-x-[calc(var(--gutter)*-1)] before:inset-y-0 before:-z-10 before:origin-bottom before:scale-y-0 before:bg-lime before:transition-transform before:duration-500 before:ease-[var(--ease-studio)] hover:before:scale-y-100 focus-visible:before:scale-y-100 md:grid-cols-12 md:gap-x-8 md:py-12"
          >
            <div className="flex flex-col items-start gap-2 pt-1 md:col-span-1">
              <span className="font-display text-sm font-bold tabular-nums text-purple group-hover:text-ink">
                {s.index}
              </span>
              <ServiceGlyph index={i} className="hidden size-8 text-ink/60 group-hover:text-ink md:block" />
            </div>

            <div className="md:col-span-5">
              <H className="font-display text-[clamp(1.85rem,4.2vw,3.85rem)] font-bold uppercase leading-[0.94] tracking-[-0.04em] text-ink">
                {s.title}
              </H>
              <p className="mt-3 max-w-md font-display text-[1rem] font-semibold leading-snug text-purple group-hover:text-ink">
                {s.benefit}
              </p>
            </div>

            <span className="row-span-2 inline-flex size-11 items-center justify-center self-start border-2 border-ink bg-paper text-ink transition-colors duration-500 group-hover:bg-purple group-hover:text-paper md:order-last md:col-span-1 md:row-span-1 md:size-14 md:justify-self-end">
              <Arrow className="size-5 transition-transform duration-500 group-hover:-rotate-45" />
            </span>

            <div className="col-start-2 space-y-4 md:col-span-5 md:col-start-auto md:pt-1">
              <p className="text-[0.96rem] text-ink/80 transition-colors group-hover:text-ink">{s.summary}</p>
              <div>
                <p className="font-display text-[0.68rem] font-bold uppercase tracking-[0.16em] text-stone transition-colors group-hover:text-ink">
                  Deliverables
                </p>
                <ul role="list" className="mt-2.5 flex flex-wrap gap-1.5">
                  {s.deliverables.map((item) => (
                    <li
                      key={item}
                      className="border border-ink/25 bg-paper px-2.5 py-1 font-display text-xs font-medium text-ink transition-colors group-hover:border-ink group-hover:bg-paper"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.14em] text-purple group-hover:text-ink">
                <span className="underline decoration-current underline-offset-4">
                  Explore {s.shortTitle} details →
                </span>
              </p>
            </div>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
