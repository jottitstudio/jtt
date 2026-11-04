import Link from "next/link";
import type { Service } from "@/lib/types";
import { Arrow } from "@/components/art/Motifs";
import { Reveal } from "@/components/ui/Reveal";

/** Editorial index of services — rows communicating customer benefits, capabilities and deliverables. */
export function ServiceList({ services, headingLevel = "h3" }: { services: Service[]; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <ul role="list" className="border-t border-ink">
      {services.map((s, i) => (
        <Reveal as="li" key={s.slug} delay={i * 0.05} className="border-b border-ink">
          <Link
            href={`/services/${s.slug}`}
            className="group relative isolate grid grid-cols-[auto_1fr_auto] items-start gap-x-5 gap-y-4 py-8 transition-colors duration-500 before:absolute before:inset-x-[calc(var(--gutter)*-1)] before:inset-y-0 before:-z-10 before:origin-bottom before:scale-y-0 before:bg-turmeric before:transition-transform before:duration-500 before:ease-[var(--ease-studio)] hover:before:scale-y-100 focus-visible:before:scale-y-100 md:grid-cols-12 md:gap-x-8 md:py-11"
          >
            <span className="pt-2 font-display text-sm font-medium tabular-nums md:col-span-1 md:pt-3">{s.index}</span>

            <div className="md:col-span-5">
              <H className="font-display text-[clamp(1.85rem,4.2vw,4rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em]">
                {s.title}
              </H>
              <p className="mt-3 max-w-md font-display text-[0.98rem] font-medium leading-snug text-ink">
                {s.benefit}
              </p>
            </div>

            <span className="row-span-2 inline-flex size-11 items-center justify-center self-start border border-ink transition-colors duration-500 group-hover:bg-ink group-hover:text-turmeric md:order-last md:col-span-1 md:row-span-1 md:size-14 md:justify-self-end">
              <Arrow className="size-5 transition-transform duration-500 group-hover:-rotate-45" />
            </span>

            <div className="col-start-2 space-y-4 md:col-span-5 md:col-start-auto md:pt-1">
              <p className="text-[0.95rem] text-ink/75 transition-colors group-hover:text-ink">{s.summary}</p>
              <div>
                <p className="font-display text-[0.68rem] font-medium uppercase tracking-[0.14em] text-stone transition-colors group-hover:text-ink/80">
                  Capabilities &amp; deliverables
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {s.deliverables.slice(0, 5).map((item) => (
                    <span
                      key={item}
                      className="border border-ink/20 bg-ivory/60 px-2.5 py-1 text-xs text-ink/85 transition-colors group-hover:border-ink/40 group-hover:bg-ivory/90 group-hover:text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <p className="inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.12em] text-ink">
                <span className="underline decoration-ink/40 underline-offset-4 group-hover:decoration-ink">
                  Explore {s.shortTitle} details &amp; deliverables
                </span>
              </p>
            </div>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
