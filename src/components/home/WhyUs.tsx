import { reasons } from "@/content/studio";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealLines } from "@/components/ui/Reveal";

export function WhyUs({ index = "09" }: { index?: string }) {
  return (
    <section id="why-jottit" className="border-t border-ink/15 bg-parchment py-20 md:py-32">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Eyebrow index={index} note="Why JOTTIT">
              The studio advantage
            </Eyebrow>
            <h2 id="why-title" className="t-h1 mt-6">
              <RevealLines lines={["NOT JUST IDEAS.", "IDEAS THAT MOVE."]} />
            </h2>
          </div>
          <Reveal className="max-w-sm">
            <p className="t-lead text-ink/80">One creative partner. Zero disconnected handovers.</p>
          </Reveal>
        </div>

        <ul role="list" className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal
              as="li"
              key={r.title}
              delay={i * 0.05}
              className="flex flex-col justify-between border-2 border-ink bg-paper p-6 shadow-[5px_5px_0_0_#17151B]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-bold tabular-nums text-purple">0{i + 1}</span>
                  <span className="font-display text-[0.68rem] font-bold uppercase tracking-[0.12em] text-purple">
                    {r.outcome}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-[-0.02em] text-ink">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm text-ink/75">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
