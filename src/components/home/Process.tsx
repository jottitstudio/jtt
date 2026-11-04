import { processSteps } from "@/content/studio";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { DrawRule, Reveal, RevealLines } from "@/components/ui/Reveal";

export function Process({ index = "06" }: { index?: string }) {
  return (
    <section id="process" className="wrap py-24 md:py-40">
      <div className="grid gap-y-8 lg:grid-cols-12 lg:items-end lg:gap-x-8">
        <div className="lg:col-span-7">
          <Eyebrow index={index} tamil="செயல்முறை">
            Our process
          </Eyebrow>
          <h2 id="process-title" className="t-h1 mt-8">
            <RevealLines lines={["Five steps.", "One direction."]} />
          </h2>
        </div>
        <Reveal className="space-y-3 lg:col-span-4 lg:col-start-9">
          <p className="text-ink/80">
            A structured, client-friendly workflow designed to keep your project moving on schedule — so you always
            know what we are working on, what decisions are needed and what you will receive at every stage.
          </p>
        </Reveal>
      </div>

      <div className="relative mt-16 md:mt-24">
        {/* connecting line on desktop */}
        <div aria-hidden="true" className="absolute inset-x-0 top-0 hidden text-ink lg:block">
          <DrawRule />
        </div>
        <ol role="list" className="grid gap-0 lg:grid-cols-5 lg:gap-x-6">
          {processSteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.key}
              delay={i * 0.1}
              className="relative grid grid-cols-[3.5rem_1fr] gap-x-4 border-l border-ink/20 pb-12 pl-6 last:pb-0 lg:flex lg:flex-col lg:justify-between lg:border-l-0 lg:pb-0 lg:pl-0 lg:pt-10"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-1 size-[9px] rotate-45 bg-ink lg:-top-[4px] lg:left-0"
              />
              <div className="flex flex-col items-start gap-1 lg:flex-row lg:items-baseline lg:gap-3">
                <span className="font-display text-sm font-medium tabular-nums">0{i + 1}</span>
                <span lang="ta" className="tamil text-2xl leading-none text-terracotta lg:text-3xl" aria-hidden="true">
                  {step.tamilNumeral}
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="t-h3 lg:mt-8">{step.title}</h3>
                  <p className="mt-3 text-ink/75 lg:mt-4 lg:text-[0.95rem]">{step.body}</p>
                </div>
                <p className="mt-5 border-t border-ink/15 pt-3 font-display text-xs font-medium uppercase tracking-[0.1em] text-stone">
                  Output: <span className="text-ink">{step.deliverable}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal delay={0.2} className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-ink/15 pt-8 sm:flex-row sm:items-center md:mt-20">
        <p className="text-sm text-ink/75">
          Every project starts with Step 01 — an honest conversation about your business, timeline and goals.
        </p>
        <ButtonLink href="/contact" variant="ghost" className="link-line">
          Start with a discovery call
        </ButtonLink>
      </Reveal>
    </section>
  );
}
