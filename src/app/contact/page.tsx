import type { Metadata } from "next";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Eyebrow, Placeholder } from "@/components/ui/Eyebrow";
import { Reveal, RevealLines } from "@/components/ui/Reveal";
import { KolamLattice } from "@/components/art/KolamLattice";
import { Logo } from "@/components/layout/Logo";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Got an idea? JOTTIT. Start a project with JOTTIT — tell us about your brand, services needed, approximate budget and goals.",
  alternates: { canonical: "/contact" },
};

const steps = [
  { t: "Jot it down", b: "Share your idea, service requirements, approximate budget and timeline." },
  { t: "Join the conversation", b: "We reply within two working days with initial thoughts and a discovery call slot." },
  { t: "Shape the roadmap", b: "We meet to align on creative direction, priorities and commercial goals." },
  { t: "Make it matter", b: "You receive a clear scope, deliverables list and timeline to kick off." },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink/15 bg-parchment pt-[calc(var(--header-h)+3rem)] pb-16 md:pt-[calc(var(--header-h)+5rem)] md:pb-24">
        <div
          aria-hidden="true"
          className="dot-grid pointer-events-none absolute inset-0 text-ink/[0.06] [mask-image:linear-gradient(to_bottom,black,transparent_60%)]"
        />
        <KolamLattice
          cells={5}
          className="pointer-events-none absolute -right-28 top-10 hidden w-[28rem] text-purple/25 md:block"
          strokeWidth={1.25}
        />
        <div className="wrap relative">
          <Reveal y={12}>
            <Eyebrow note="Start Something">Contact JOTTIT</Eyebrow>
          </Reveal>
          <h1 className="t-display mt-8">
            <RevealLines
              immediate
              lines={[
                "GOT AN IDEA?",
                <span key="m" className="relative inline-block">
                  <span className="relative z-10 text-purple">JOTTIT.</span>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-[0.06em] left-[-0.02em] right-[-0.04em] h-[0.28em] bg-lime"
                  />
                </span>,
              ]}
            />
          </h1>
          <Reveal delay={0.2} className="mt-6 max-w-xl">
            <p className="t-lead text-ink/85">
              Let&apos;s turn that little thought into something worth remembering.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="enquiry" aria-labelledby="form-title" className="wrap py-20 md:py-28">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-x-10">
          <aside className="lg:col-span-4" aria-label="Contact details">
            <Reveal>
              <div className="inline-flex items-center gap-3 border-2 border-ink bg-purple px-4 py-2.5 text-paper shadow-[4px_4px_0_0_#17151B]">
                <Logo className="h-6 text-paper" />
                <span className="t-hand text-xl text-lime">Every big idea starts with a little jot</span>
              </div>

              <p className="t-lead mt-8">
                New brand identity, social storytelling, performance campaign, film shoot or custom website — tell us
                what you&apos;re thinking and we&apos;ll build it together.
              </p>

              <dl className="mt-10 space-y-6 border-t-2 border-ink pt-8">
                {[
                  ["Email", site.contact.email],
                  ["Phone", site.contact.phone],
                  ["WhatsApp", site.contact.whatsapp],
                  ["Studio", site.contact.location],
                  ["Hours", site.contact.hours],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="t-eyebrow text-purple">{k}</dt>
                    <dd className="mt-1.5 font-display text-base">
                      <Placeholder>{v}</Placeholder>
                    </dd>
                  </div>
                ))}
                <div>
                  <dt className="t-eyebrow text-purple">Social</dt>
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
              <h2 className="t-eyebrow text-ink">What happens next</h2>
              <ol className="mt-5 space-y-4">
                {steps.map((s, i) => (
                  <li key={s.t} className="grid grid-cols-[2rem_1fr] gap-x-3">
                    <span className="pt-0.5 font-display text-sm font-bold tabular-nums text-purple">0{i + 1}</span>
                    <span>
                      <span className="font-display font-bold uppercase">{s.t}</span>
                      <span className="block text-sm text-ink/75">{s.b}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </aside>

          <div className="lg:col-span-8">
            <Reveal className="border-2 border-ink bg-paper p-6 shadow-[10px_10px_0_0_#5F2DB2] sm:p-10 md:p-14">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 id="form-title" className="t-h3">
                  Project Enquiry
                </h2>
                <span className="t-hand text-2xl text-purple">Think it. Jot it. Make it matter.</span>
              </div>
              <p className="mt-2 mb-10 text-ink/70">
                Complete the brief below — it takes under three minutes and gives us everything needed for a productive
                first conversation.
              </p>
              <EnquiryForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
