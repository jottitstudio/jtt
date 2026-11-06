import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { RevealLines, Reveal } from "@/components/ui/Reveal";
import { Eyebrow, Placeholder } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { KolamLattice } from "@/components/art/KolamLattice";
import { Logo } from "@/components/layout/Logo";
import { site } from "@/content/site";

const enquirySteps = [
  {
    step: "01",
    title: "Jot it down",
    detail: "Share your raw idea, brand challenge, timeline and goals in the brief opposite.",
  },
  {
    step: "02",
    title: "Join the dots",
    detail: "We meet for a focused discovery conversation to align on strategy, scope and creative direction.",
  },
  {
    step: "03",
    title: "Make it matter",
    detail: "You receive a clear roadmap with deliverables, milestones and transparent investment.",
  },
] as const;

export function ContactCTA({ index = "10", headingLevel = "h2" }: { index?: string; headingLevel?: "h1" | "h2" }) {
  const H = headingLevel;
  return (
    <section id="enquiry" className="on-dark relative overflow-hidden bg-purple text-paper">
      <KolamLattice
        cells={6}
        className="pointer-events-none absolute -right-40 -top-40 w-[34rem] text-paper/10 md:w-[46rem] md:text-paper/15"
        strokeWidth={1}
        duration={3}
      />
      <div className="wrap relative grid gap-y-14 py-24 md:py-36 lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-5">
          <Eyebrow index={index} note="Start Something" className="text-paper/80">
            Ready when your idea is
          </Eyebrow>
          <H id="enquiry-title" className="t-h1 mt-8 text-paper">
            <RevealLines lines={["GOT AN IDEA?", "JOTTIT."]} />
          </H>

          <Reveal delay={0.15} className="mt-6">
            <div className="inline-flex items-center gap-3 rounded-sm border border-paper/20 bg-purple-deep/90 px-4 py-2.5">
              <Logo className="h-6 text-paper" />
              <span className="t-hand text-xl text-lime">Every big idea starts with a little jot.</span>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="t-lead mt-6 max-w-md text-paper/95">
              Let&apos;s turn that little thought into something worth remembering.
            </p>
            <p className="mt-4 max-w-md text-paper/80">
              Whether you are launching a new venture, refreshing an established brand or scaling campaigns across
              social, video and web, tell us what you are thinking — and let&apos;s build it together.
            </p>

            <div className="mt-8">
              <ButtonLink href="#enquiry-form" variant="lime">
                LET&apos;S START SOMETHING.
              </ButtonLink>
            </div>

            <div className="mt-10 border-t border-paper/20 pt-8">
              <p className="t-eyebrow text-lime">How we begin</p>
              <ol role="list" className="mt-4 space-y-4">
                {enquirySteps.map((s) => (
                  <li key={s.step} className="grid grid-cols-[2rem_1fr] gap-x-2 text-sm">
                    <span className="font-display font-bold tabular-nums text-lime">{s.step}</span>
                    <span>
                      <strong className="font-display font-bold text-paper">{s.title}:</strong>{" "}
                      <span className="text-paper/80">{s.detail}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <dl className="mt-10 grid gap-6 border-t border-paper/20 pt-8 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <dt className="t-eyebrow text-paper/70">Email</dt>
                <dd className="mt-1 font-display text-base text-paper">
                  <Placeholder>{site.contact.email}</Placeholder>
                </dd>
              </div>
              <div>
                <dt className="t-eyebrow text-paper/70">WhatsApp / Phone</dt>
                <dd className="mt-1 font-display text-base text-paper">
                  <Placeholder>{site.contact.whatsapp}</Placeholder>
                </dd>
              </div>
              <div>
                <dt className="t-eyebrow text-paper/70">Studio</dt>
                <dd className="mt-1 font-display text-base text-paper">
                  <Placeholder>{site.contact.location}</Placeholder>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div
            id="enquiry-form"
            className="border-2 border-ink bg-paper p-6 text-ink shadow-[12px_12px_0_0_#D9E56B] sm:p-10 md:p-12"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-display text-xl font-bold uppercase tracking-[-0.02em] text-ink md:text-2xl">
                Let&apos;s Start Something
              </h3>
              <span className="t-hand text-xl text-purple">Jot your brief below ↓</span>
            </div>
            <p className="mt-1 mb-6 text-sm text-ink/70">
              Share a few details about your idea, timeline and goals — we respond within two working days.
            </p>
            <EnquiryForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
