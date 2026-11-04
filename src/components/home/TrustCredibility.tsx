import { trustStandards } from "@/content/studio";
import { Eyebrow, Placeholder } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal, RevealLines } from "@/components/ui/Reveal";
import { TempleBorder } from "@/components/art/Motifs";

const futureProofSlots = [
  {
    tag: "Client testimonial slot · 01",
    category: "Branding & Website Launch",
    note: "[PLACEHOLDER — Reserved for a verified client quote on brand positioning, identity rollout and website launch experience.]",
    attribution: "[Client name, designation & company — to be added upon client sign-off]",
  },
  {
    tag: "Client testimonial slot · 02",
    category: "Social Content & Performance Marketing",
    note: "[PLACEHOLDER — Reserved for a verified client quote on monthly content quality, campaign management and lead quality.]",
    attribution: "[Client name, designation & company — to be added upon client sign-off]",
  },
  {
    tag: "Verified outcome slot · 03",
    category: "Audited Campaign & Growth Metrics",
    note: "[PLACEHOLDER — Reserved for verified, client-approved project outcomes (e.g., enquiry growth, conversion lift or launch results).]",
    attribution: "[Case study reference & measurement period — to be added]",
  },
] as const;

export function TrustCredibility({ index = "07" }: { index?: string }) {
  return (
    <section id="credibility" className="border-t border-ink/15 bg-ivory-deep/45 py-24 md:py-40">
      <div className="wrap">
        <div className="grid gap-y-8 lg:grid-cols-12 lg:items-end lg:gap-x-8">
          <div className="lg:col-span-7">
            <Eyebrow index={index} tamil="நம்பகத்தன்மை">
              Trust &amp; credibility
            </Eyebrow>
            <h2 id="credibility-title" className="t-h1 mt-8">
              <RevealLines lines={["Built on proof,", "not promises."]} />
            </h2>
          </div>
          <Reveal className="space-y-3 lg:col-span-4 lg:col-start-9">
            <p className="text-ink/80">
              Trust is earned through clear working standards, transparent ownership and verifiable results — never
              through inflated claims or invented awards.
            </p>
          </Reveal>
        </div>

        {/* Part 1: Concrete studio commitments clients receive today */}
        <div className="mt-16 md:mt-24">
          <h3 className="t-eyebrow text-ink">Our working commitments on every engagement</h3>
          <ul role="list" className="mt-6 grid gap-px border border-ink bg-ink sm:grid-cols-2 lg:grid-cols-4">
            {trustStandards.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 0.06}
                className="flex flex-col justify-between bg-ivory p-6 md:p-8"
              >
                <div>
                  <span className="font-display text-xs font-medium tracking-[0.14em] text-stone">{item.index}</span>
                  <h4 className="mt-4 font-display text-xl font-semibold tracking-[-0.02em] text-ink">{item.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-ink/75">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <TempleBorder className="my-16 block text-ink/20 md:my-20" />

        {/* Part 2: Structured framework reserved for verified client testimonials & real project outcomes */}
        <div>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink">
                Client testimonials &amp; verified project outcomes
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-ink/70">
                We never fabricate client reviews, anonymous quotes or unverified growth percentages. The spaces below
                are reserved exclusively for named client testimonials and audited project outcomes as engagements are
                approved for publication.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 self-start border border-dashed border-ink/50 bg-ivory px-3 py-1.5 font-display text-xs uppercase tracking-[0.12em] text-ink md:self-auto">
              <span aria-hidden="true" className="inline-block size-2 rotate-45 bg-turmeric ring-1 ring-ink" />
              Zero fabricated proof policy
            </span>
          </div>

          <ul role="list" className="mt-10 grid gap-6 lg:grid-cols-3">
            {futureProofSlots.map((slot, i) => (
              <Reveal
                as="li"
                key={slot.tag}
                delay={i * 0.08}
                className="flex flex-col justify-between border border-dashed border-ink/35 bg-paper p-6 md:p-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-[0.7rem] font-medium uppercase tracking-[0.14em] text-stone">
                      {slot.tag}
                    </span>
                    <span className="font-display text-xs font-medium text-maroon">{slot.category}</span>
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-ink/80">
                    <Placeholder>{slot.note}</Placeholder>
                  </p>
                </div>
                <p className="mt-6 border-t border-ink/15 pt-4 text-xs text-stone">
                  <Placeholder>{slot.attribution}</Placeholder>
                </p>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.2} className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-ink/15 pt-8 sm:flex-row sm:items-center">
            <p className="text-sm text-ink/80">
              Want to walk through our thinking, sample deliverables and how we would approach your brand?
            </p>
            <ButtonLink href="/contact" variant="solid">
              Request a Walkthrough Call
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
