import { processSteps } from "@/content/studio";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { DrawRule, Reveal, RevealLines } from "@/components/ui/Reveal";
import { JotMark } from "@/components/art/Motifs";

export function Process({ index = "07" }: { index?: string }) {
  return (
    <section id="process" className="border-t border-ink/15 bg-parchment py-24 md:py-40">
      <div className="wrap">
        <div className="grid gap-y-8 lg:grid-cols-12 lg:items-end lg:gap-x-8">
          <div className="lg:col-span-7">
            <Eyebrow index={index} note="Our Approach">
              How we turn a jot into impact
            </Eyebrow>
            <h2 id="process-title" className="t-h1 mt-8">
              <RevealLines lines={["THINK DIFFERENT.", "CREATE WITH PURPOSE."]} />
            </h2>
          </div>
          <Reveal className="space-y-3 lg:col-span-4 lg:col-start-9">
            <p className="text-ink/80">
              Every great project moves through five deliberate stages — from uncovering what makes your brand different
              to scaling it across every channel.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16 md:mt-24">
          {/* connecting line on desktop */}
          <div aria-hidden="true" className="absolute inset-x-0 top-0 hidden text-ink lg:block">
            <DrawRule />
          </div>
          <ol role="list" className="grid gap-6 lg:grid-cols-5 lg:gap-x-6">
            {processSteps.map((step, i) => (
              <Reveal
                as="li"
                key={step.key}
                delay={i * 0.08}
                className="relative flex flex-col justify-between border-2 border-ink bg-paper p-6 shadow-[6px_6px_0_0_#17151B] lg:mt-8"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-10 left-0 hidden size-3 rotate-45 bg-purple lg:inline-block"
                />
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-ink/15 pb-3">
                    <span className="font-display text-sm font-bold tracking-[0.14em] text-purple">
                      0{i + 1}
                    </span>
                    <span className="t-hand text-lg text-terracotta">Step 0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-[-0.03em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/80">{step.body}</p>
                </div>
                <p className="mt-6 border-t border-ink/15 pt-3 font-display text-[0.7rem] font-bold uppercase tracking-[0.12em] text-stone">
                  Output: <span className="text-ink">{step.deliverable}</span>
                </p>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal
          delay={0.2}
          className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-ink/20 pt-8 sm:flex-row sm:items-center md:mt-20"
        >
          <p className="inline-flex items-center gap-2 text-sm text-ink/80">
            <JotMark className="size-4 shrink-0 text-purple" />
            <span>Every project begins with 01 DISCOVER — an open conversation about your idea and goals.</span>
          </p>
          <ButtonLink href="/contact" variant="purple">
            Start With Step 01
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
