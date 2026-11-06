import { processSteps } from "@/content/studio";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { DrawRule, Reveal, RevealLines } from "@/components/ui/Reveal";

export function Process({ index = "07" }: { index?: string }) {
  return (
    <section id="process" className="border-t border-ink/15 bg-parchment py-20 md:py-32">
      <div className="wrap">
        <div className="grid gap-y-6 lg:grid-cols-12 lg:items-end lg:gap-x-8">
          <div className="lg:col-span-8">
            <Eyebrow index={index} note="Our Approach">
              How we work
            </Eyebrow>
            <h2 id="process-title" className="t-h1 mt-6">
              <RevealLines lines={["THINK DIFFERENT.", "CREATE WITH PURPOSE."]} />
            </h2>
          </div>
          <Reveal className="lg:col-span-4">
            <p className="t-lead text-ink/80">Five deliberate steps from first jot to market impact.</p>
          </Reveal>
        </div>

        <div className="relative mt-12 md:mt-16">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 hidden text-ink lg:block">
            <DrawRule />
          </div>
          <ol role="list" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, i) => (
              <Reveal
                as="li"
                key={step.key}
                delay={i * 0.06}
                className="relative flex flex-col justify-between border-2 border-ink bg-paper p-5 shadow-[5px_5px_0_0_#17151B] lg:mt-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-ink/10 pb-2.5">
                    <span className="font-display text-xs font-bold tracking-[0.14em] text-purple">0{i + 1}</span>
                    <span className="t-hand text-base text-terracotta">{step.deliverable.split(" ")[0]}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-[-0.03em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/80">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
