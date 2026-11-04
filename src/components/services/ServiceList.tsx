import Link from "next/link";
import type { Service } from "@/lib/types";
import { Arrow } from "@/components/art/Motifs";
import { Reveal } from "@/components/ui/Reveal";

/** Editorial index of services — rows, not cards. */
export function ServiceList({ services, headingLevel = "h3" }: { services: Service[]; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <ul className="border-t border-ink">
      {services.map((s, i) => (
        <Reveal as="li" key={s.slug} delay={i * 0.05} className="border-b border-ink">
          <Link
            href={`/services/${s.slug}`}
            className={`group relative isolate grid grid-cols-[auto_1fr_auto] items-start gap-x-5 gap-y-3 py-8 transition-colors duration-500 before:absolute before:inset-x-[calc(var(--gutter)*-1)] before:inset-y-0 before:-z-10 before:origin-bottom before:scale-y-0 before:transition-transform before:duration-500 before:ease-[var(--ease-studio)] hover:before:scale-y-100 focus-visible:before:scale-y-100 md:grid-cols-12 md:gap-x-8 md:py-10 before:bg-turmeric`}
          >
            <span className="pt-2 font-display text-sm font-medium tabular-nums md:col-span-1 md:pt-3">{s.index}</span>
            <H className="font-display text-[clamp(1.85rem,4.4vw,4.25rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em] md:col-span-6">
              {s.title}
            </H>
            <span className="row-span-2 inline-flex size-11 items-center justify-center self-start border border-ink transition-colors duration-500 group-hover:bg-ink group-hover:text-turmeric md:order-last md:col-span-1 md:row-span-1 md:size-14 md:justify-self-end">
              <Arrow className="size-5 transition-transform duration-500 group-hover:-rotate-45" />
            </span>
            <div className="col-start-2 md:col-span-4 md:col-start-auto md:pt-2">
              <p className="text-ink/75 transition-colors group-hover:text-ink">{s.summary}</p>
            </div>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
