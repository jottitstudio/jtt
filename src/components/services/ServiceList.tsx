import Link from "next/link";
import type { Service } from "@/lib/types";
import { Arrow, ServiceGlyph } from "@/components/art/Motifs";
import { Reveal } from "@/components/ui/Reveal";

/** Clean, scannable index of JOTTIT's 5 core services. */
export function ServiceList({ services, headingLevel = "h3" }: { services: Service[]; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <ul role="list" className="border-t-2 border-ink">
      {services.map((s, i) => (
        <Reveal as="li" key={s.slug} delay={i * 0.05} className="border-b border-ink">
          <Link
            href={`/services/${s.slug}`}
            className="group relative isolate grid grid-cols-[auto_1fr_auto] items-center gap-x-5 gap-y-3 py-7 transition-colors duration-500 before:absolute before:inset-x-[calc(var(--gutter)*-1)] before:inset-y-0 before:-z-10 before:origin-bottom before:scale-y-0 before:bg-lime before:transition-transform before:duration-500 before:ease-[var(--ease-studio)] hover:before:scale-y-100 focus-visible:before:scale-y-100 md:grid-cols-12 md:gap-x-8 md:py-10"
          >
            <div className="flex items-center gap-3 md:col-span-1">
              <span className="font-display text-sm font-bold tabular-nums text-purple group-hover:text-ink">
                {s.index}
              </span>
              <ServiceGlyph index={i} className="hidden size-7 text-ink/60 group-hover:text-ink lg:block" />
            </div>

            <div className="md:col-span-5">
              <H className="font-display text-[clamp(1.75rem,3.8vw,3.4rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em] text-ink">
                {s.title}
              </H>
            </div>

            <span className="row-span-2 inline-flex size-11 items-center justify-center self-center border-2 border-ink bg-paper text-ink transition-colors duration-500 group-hover:bg-purple group-hover:text-paper md:order-last md:col-span-1 md:row-span-1 md:size-13 md:justify-self-end">
              <Arrow className="size-5 transition-transform duration-500 group-hover:-rotate-45" />
            </span>

            <div className="col-start-2 space-y-3 md:col-span-5 md:col-start-auto">
              <p className="text-[0.95rem] font-medium text-ink/80 transition-colors group-hover:text-ink">
                {s.summary}
              </p>
              <ul role="list" className="flex flex-wrap gap-1.5">
                {s.deliverables.map((item) => (
                  <li
                    key={item}
                    className="border border-ink/20 bg-paper px-2.5 py-0.5 font-display text-xs font-medium text-ink transition-colors group-hover:border-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
