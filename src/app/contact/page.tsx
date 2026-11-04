import type { Metadata } from "next";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Eyebrow, Placeholder } from "@/components/ui/Eyebrow";
import { Reveal, RevealLines } from "@/components/ui/Reveal";
import { KolamLattice } from "@/components/art/KolamLattice";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with jottitstudio. Tell us about your brand, your goals and where you'd like to go next.",
  alternates: { canonical: "/contact" },
};

const steps = [
  { t: "We review it", b: "We look at your goals, timeline and what you need help with." },
  { t: "We reply", b: "With questions, honest first thoughts, or a time to talk." },
  { t: "We meet", b: "A conversation to understand your goals and fit." },
  { t: "We propose", b: "A clear scope, approach and timeline for your project." },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[calc(var(--header-h)+3rem)] md:pt-[calc(var(--header-h)+5rem)]">
        <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 text-ink/[0.06] [mask-image:linear-gradient(to_bottom,black,transparent_60%)]" />
        <KolamLattice
          cells={5}
          className="pointer-events-none absolute -right-28 top-10 hidden w-[28rem] text-ink/25 md:block"
          strokeWidth={1}
        />
        <div className="wrap relative">
          <Reveal y={12}>
            <Eyebrow tamil="வணக்கம்">Contact</Eyebrow>
          </Reveal>
          <h1 className="t-display mt-8">
            <RevealLines
              immediate
              lines={[
                "Let\u2019s make",
                <span key="m" className="relative inline-block">
                  <span className="relative z-10">it matter.</span>
                  <span aria-hidden="true" className="absolute bottom-[0.08em] left-[-0.04em] right-[-0.06em] h-[0.3em] bg-turmeric" />
                </span>,
              ]}
            />
          </h1>
        </div>
      </section>

      <section id="enquiry" aria-labelledby="form-title" className="wrap py-20 md:py-28">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-x-10">
          <aside className="lg:col-span-4" aria-label="Contact details">
            <Reveal>
              <p className="t-lead">
                New brand, a refresh, a launch or ongoing marketing — tell us what you&apos;re working on and we&apos;ll
                take it from there.
              </p>
              <dl className="mt-12 space-y-7 border-t border-ink pt-8">
                {[
                  ["Email", site.contact.email],
                  ["Phone", site.contact.phone],
                  ["Studio", site.contact.location],
                  ["Hours", site.contact.hours],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="t-eyebrow text-stone">{k}</dt>
                    <dd className="mt-1.5 font-display text-lg">
                      <Placeholder>{v}</Placeholder>
                    </dd>
                  </div>
                ))}
                <div>
                  <dt className="t-eyebrow text-stone">Social</dt>
                  <dd className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1">
                    {site.socials.map((s) =>
                      s.href ? (
                        <a key={s.label} href={s.href} className="link-line" target="_blank" rel="noopener noreferrer">
                          {s.label}
                        </a>
                      ) : (
                        <span key={s.label} className="text-ink/60">
                          {s.label} <span className="text-xs italic">(link to be added)</span>
                        </span>
                      ),
                    )}
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.1} className="mt-14">
              <h2 className="t-eyebrow">What happens next</h2>
              <ol className="mt-5 space-y-4">
                {steps.map((s, i) => (
                  <li key={s.t} className="grid grid-cols-[2rem_1fr] gap-x-3">
                    <span className="pt-0.5 font-display text-sm tabular-nums text-stone">0{i + 1}</span>
                    <span>
                      <span className="font-display font-semibold">{s.t}</span>
                      <span className="block text-sm text-ink/70">{s.b}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </aside>

          <div className="lg:col-span-8">
            <Reveal className="border-t-4 border-turmeric bg-paper p-6 sm:p-10 md:p-14">
              <h2 id="form-title" className="t-h3">
                Project enquiry
              </h2>
              <p className="mt-2 mb-10 text-ink/70">Takes about three minutes.</p>
              <EnquiryForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
