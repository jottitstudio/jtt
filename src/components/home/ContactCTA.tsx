import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { RevealLines, Reveal } from "@/components/ui/Reveal";
import { Eyebrow, Placeholder } from "@/components/ui/Eyebrow";
import { KolamLattice } from "@/components/art/KolamLattice";
import { site } from "@/content/site";

const enquirySteps = [
  {
    step: "01",
    title: "We review your brief",
    detail: "Our team looks at your brand, current channels and goals before our first conversation.",
  },
  {
    step: "02",
    title: "Focused discovery call",
    detail: "A direct conversation with our team to discuss what you need, timelines and commercial priorities.",
  },
  {
    step: "03",
    title: "Clear scope & proposal",
    detail: "You receive a tailored recommendation outlining deliverables, milestones and investment.",
  },
] as const;

export function ContactCTA({ index = "09", headingLevel = "h2" }: { index?: string; headingLevel?: "h1" | "h2" }) {
  const H = headingLevel;
  return (
    <section id="enquiry" className="relative overflow-hidden bg-turmeric text-ink">
      <KolamLattice
        cells={6}
        className="pointer-events-none absolute -right-40 -top-40 w-[34rem] text-ink/15 md:w-[46rem] md:text-ink/25"
        strokeWidth={1}
        duration={3}
      />
      <div className="wrap relative grid gap-y-14 py-24 md:py-36 lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-5">
          <Eyebrow index={index} tamil="வணக்கம்">
            Start a project
          </Eyebrow>
          <H id="enquiry-title" className="t-h1 mt-8">
            <RevealLines lines={["Let\u2019s make", "it matter."]} />
          </H>
          <Reveal delay={0.2}>
            <p className="t-lead mt-8 max-w-md">
              Ready to build a sharper brand, launch a high-converting website or scale your marketing with one
              accountable creative partner?
            </p>
            <p className="mt-4 max-w-md text-ink/80">
              Tell us where your business is today and what you want to achieve next. Whether you need a single
              service or an end-to-end launch and growth programme, we will come back with clear, practical advice.
            </p>

            <div className="mt-10 border-t border-ink/30 pt-8">
              <p className="t-eyebrow opacity-80">What happens when you enquire</p>
              <ol role="list" className="mt-4 space-y-4">
                {enquirySteps.map((s) => (
                  <li key={s.step} className="grid grid-cols-[2rem_1fr] gap-x-2 text-sm">
                    <span className="font-display font-semibold tabular-nums">{s.step}</span>
                    <span>
                      <strong className="font-display font-semibold">{s.title}:</strong>{" "}
                      <span className="text-ink/80">{s.detail}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <dl className="mt-10 grid gap-6 border-t border-ink/30 pt-8 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <dt className="t-eyebrow opacity-70">Email</dt>
                <dd className="mt-1 font-display text-lg">
                  <Placeholder>{site.contact.email}</Placeholder>
                </dd>
              </div>
              <div>
                <dt className="t-eyebrow opacity-70">Studio</dt>
                <dd className="mt-1 font-display text-lg">
                  <Placeholder>{site.contact.location}</Placeholder>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="bg-ivory p-6 sm:p-10 md:p-12">
            <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink md:text-2xl">
              Tell us about your project
            </h3>
            <p className="mt-1 mb-6 text-sm text-ink/70">
              Share a few details below — it takes under three minutes.
            </p>
            <EnquiryForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
