import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { RevealLines, Reveal } from "@/components/ui/Reveal";
import { Eyebrow, Placeholder } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { KolamLattice } from "@/components/art/KolamLattice";
import { Logo } from "@/components/layout/Logo";
import { site } from "@/content/site";

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
      <div className="wrap relative grid gap-y-12 py-20 md:py-32 lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-5">
          <Eyebrow index={index} note="Start Something" className="text-paper/80">
            Ready when your idea is
          </Eyebrow>
          <H id="enquiry-title" className="t-h1 mt-6 text-paper">
            <RevealLines lines={["GOT AN IDEA?", "JOTTIT."]} />
          </H>

          <Reveal delay={0.15} className="mt-6">
            <p className="t-lead max-w-sm text-paper/95">
              Let&apos;s turn that little thought into something worth remembering.
            </p>

            <div className="mt-7">
              <ButtonLink href="#enquiry-form" variant="lime">
                LET&apos;S START SOMETHING.
              </ButtonLink>
            </div>

            <div className="mt-10 inline-flex items-center gap-3 border border-paper/20 bg-purple-deep/90 px-4 py-2.5">
              <Logo className="h-5 text-paper" />
              <span className="t-hand text-xl text-lime">Think it. Jot it. Make it matter.</span>
            </div>

            <dl className="mt-8 grid gap-4 border-t border-paper/20 pt-6 text-sm">
              <div>
                <dt className="t-eyebrow text-paper/70">Email</dt>
                <dd className="mt-1 font-display text-paper">
                  <Placeholder>{site.contact.email}</Placeholder>
                </dd>
              </div>
              <div>
                <dt className="t-eyebrow text-paper/70">WhatsApp / Studio</dt>
                <dd className="mt-1 font-display text-paper">
                  <Placeholder>{site.contact.whatsapp}</Placeholder>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div
            id="enquiry-form"
            className="border-2 border-ink bg-paper p-6 text-ink shadow-[12px_12px_0_0_#D9E56B] sm:p-10"
          >
            <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-display text-xl font-bold uppercase tracking-[-0.02em] text-ink md:text-2xl">
                Let&apos;s Start Something
              </h3>
              <span className="t-hand text-xl text-purple">Takes under 2 minutes ↓</span>
            </div>
            <EnquiryForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
