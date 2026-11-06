import { reasons } from "@/content/studio";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal, RevealLines } from "@/components/ui/Reveal";
import { KolamLattice } from "@/components/art/KolamLattice";

export function WhyUs({ index = "09" }: { index?: string }) {
  return (
    <section id="why-jottit" className="border-t border-ink/15 bg-parchment py-24 md:py-40">
      <div className="wrap grid gap-y-14 lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Eyebrow index={index} note="Why JOTTIT">
              The JOTTIT advantage
            </Eyebrow>
            <h2 id="why-title" className="t-h1 mt-8">
              <RevealLines lines={["NOT JUST IDEAS.", "IDEAS THAT MOVE."]} />
            </h2>
            <Reveal delay={0.1} className="mt-6 space-y-6">
              <p className="text-ink/80">
                Great ideas lose their power when split across disconnected freelancers, design shops and media vendors.
                JOTTIT keeps strategy, identity, content, film, web and growth together — so your brand speaks with one
                unmistakable voice.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <ButtonLink href="/contact" variant="purple">
                  Start a Project
                </ButtonLink>
                <ButtonLink href="/about" variant="outline">
                  Our Story
                </ButtonLink>
              </div>
            </Reveal>
            <KolamLattice cells={3} className="mt-12 hidden w-40 text-purple lg:block" strokeWidth={1.25} />
          </div>
        </div>

        <ul role="list" className="lg:col-span-7 lg:col-start-6">
          {reasons.map((r, i) => (
            <Reveal
              as="li"
              key={r.title}
              delay={i * 0.06}
              className="grid grid-cols-[3rem_1fr] gap-x-4 border-t-2 border-ink py-9 last:border-b-2 md:grid-cols-[4rem_1fr_1.2fr] md:gap-x-8 md:py-11"
            >
              <span className="font-display text-sm font-bold tabular-nums text-purple">0{i + 1}</span>
              <div>
                <h3 className="t-h3">{r.title}</h3>
                <p className="mt-2 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.12em] text-purple">
                  <span aria-hidden="true" className="inline-block size-1.5 rotate-45 bg-purple" />
                  {r.outcome}
                </p>
              </div>
              <p className="col-start-2 mt-3 text-ink/80 md:col-start-3 md:mt-1">{r.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
