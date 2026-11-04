import { reasons } from "@/content/studio";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealLines } from "@/components/ui/Reveal";
import { KolamLattice } from "@/components/art/KolamLattice";

export function WhyUs() {
  return (
    <section aria-labelledby="why-title" className="border-t border-ink/15 bg-ivory-deep/60 py-24 md:py-40">
      <div className="wrap grid gap-y-14 lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Eyebrow index="06" tamil="ஏன் நாங்கள்">
              Why work with us
            </Eyebrow>
            <h2 id="why-title" className="t-h2 mt-8">
              <RevealLines lines={["One studio.", "Every piece", "connected."]} />
            </h2>
            <KolamLattice cells={3} className="mt-12 hidden w-40 text-ink lg:block" strokeWidth={1} />
          </div>
        </div>
        <ul className="lg:col-span-7 lg:col-start-6">
          {reasons.map((r, i) => (
            <Reveal
              as="li"
              key={r.title}
              delay={i * 0.06}
              className="grid grid-cols-[3rem_1fr] gap-x-4 border-t border-ink py-10 last:border-b md:grid-cols-[5rem_1fr_1.2fr] md:gap-x-8 md:py-12"
            >
              <span className="font-display text-sm font-medium tabular-nums">0{i + 1}</span>
              <h3 className="t-h3">{r.title}</h3>
              <p className="col-start-2 mt-3 text-ink/70 md:col-start-3 md:mt-1">{r.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
