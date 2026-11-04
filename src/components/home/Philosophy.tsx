import { GopuramLines } from "@/components/art/Motifs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal, RevealLines } from "@/components/ui/Reveal";
import { approachPillars } from "@/content/studio";

export function Philosophy() {
  return (
    <section id="approach" className="on-dark relative overflow-hidden bg-ink py-28 text-ivory md:py-44">
      <GopuramLines className="pointer-events-none absolute -right-[10%] bottom-0 h-[90%] w-auto text-ivory/[0.09] md:right-0" />
      <div className="wrap relative">
        <Eyebrow index="03" tamil="அணுகுமுறை" className="text-ivory/70">
          Our approach &amp; philosophy
        </Eyebrow>
        <h2 id="philosophy-title" className="t-h1 mt-10 md:mt-14">
          <RevealLines
            lines={[
              <span key="1" className="text-ivory/40">
                Not just creative.
              </span>,
              <span key="2" className="text-ivory/40">
                Not just marketing.
              </span>,
              <span key="3" className="text-turmeric">
                Both.
              </span>,
              <span key="4" className="text-turmeric md:pl-[1.2em]">
                Better.
              </span>,
            ]}
          />
        </h2>

        <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-12 md:gap-x-8">
          <Reveal className="md:col-span-7 lg:col-span-6">
            <p className="t-lead text-ivory/90">
              Traditional creative studios often produce work that looks remarkable in a portfolio but fails to move
              sales. Traditional marketing agencies often chase clicks with generic ads that nobody remembers.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-4 md:col-span-5 lg:col-span-5 lg:col-start-8">
            <p className="text-ivory/75">
              We refuse that trade-off. At jottitstudio, research, strategy, creativity, execution and optimisation
              operate as one continuous loop — so your brand builds long-term equity while your campaigns deliver
              near-term commercial growth.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 border-t border-ivory/15 pt-14 md:mt-24 md:pt-16">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-ivory md:text-2xl">
              How our five-part growth system works together
            </h3>
            <p className="text-sm text-ivory/60">
              Research → Strategy → Creativity → Execution → Optimisation
            </p>
          </div>

          <ol role="list" className="grid gap-px bg-ivory/15 sm:grid-cols-2 lg:grid-cols-5">
            {approachPillars.map((pillar, i) => (
              <Reveal
                as="li"
                key={pillar.title}
                delay={i * 0.06}
                className="flex flex-col justify-between bg-ink p-6 md:p-7"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-xs font-medium tracking-[0.14em] text-turmeric">
                      {pillar.index}
                    </span>
                    <span aria-hidden="true" className="inline-block size-2 rotate-45 bg-turmeric/70" />
                  </div>
                  <h4 className="mt-5 font-display text-xl font-semibold tracking-[-0.02em] text-ivory">
                    {pillar.title}
                  </h4>
                  <p className="mt-2 font-display text-xs font-medium uppercase tracking-[0.1em] text-turmeric/90">
                    {pillar.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ivory/70">{pillar.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.2} className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-ivory/15 pt-8 sm:flex-row sm:items-center">
            <p className="max-w-xl text-sm text-ivory/75">
              Want a clear roadmap that connects your brand positioning to measurable customer acquisition?
            </p>
            <ButtonLink href="/contact" variant="turmeric">
              Plan Your Strategy With Us
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
