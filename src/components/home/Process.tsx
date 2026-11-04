import { processSteps } from "@/content/studio";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { DrawRule, Reveal, RevealLines } from "@/components/ui/Reveal";

export function Process({ index }: { index?: string }) {
  return (
    <section aria-labelledby="process-title" className="wrap py-24 md:py-40">
      <div className="grid gap-y-8 lg:grid-cols-12 lg:items-end lg:gap-x-8">
        <div className="lg:col-span-7">
          <Eyebrow index={index} tamil="செயல்முறை">
            Our process
          </Eyebrow>
          <h2 id="process-title" className="t-h1 mt-8">
            <RevealLines lines={["Five steps.", "One direction."]} />
          </h2>
        </div>
        <Reveal className="lg:col-span-4 lg:col-start-9">
          <p className="text-ink/75">
            A clear, collaborative process so you always know where your project stands — and why each decision was made.
          </p>
        </Reveal>
      </div>

      <div className="relative mt-16 md:mt-24">
        {/* connecting line on desktop */}
        <div aria-hidden="true" className="absolute inset-x-0 top-0 hidden text-ink lg:block">
          <DrawRule />
        </div>
        <ol className="grid gap-0 lg:grid-cols-5 lg:gap-x-6">
        {processSteps.map((step, i) => (
          <Reveal
            as="li"
            key={step.key}
            delay={i * 0.12}
            className="relative grid grid-cols-[3.5rem_1fr] gap-x-4 border-l border-ink/20 pb-12 pl-6 last:pb-0 lg:block lg:border-l-0 lg:pb-0 lg:pl-0 lg:pt-10"
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
            <div>
              <h3 className="t-h3 lg:mt-8">{step.title}</h3>
              <p className="mt-3 text-ink/70 lg:mt-4 lg:text-[0.95rem]">{step.body}</p>
            </div>
          </Reveal>
        ))}
        </ol>
      </div>
    </section>
  );
}
