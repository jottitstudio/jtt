import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { RevealLines, Reveal } from "@/components/ui/Reveal";
import { Eyebrow, Placeholder } from "@/components/ui/Eyebrow";
import { KolamLattice } from "@/components/art/KolamLattice";
import { site } from "@/content/site";

export function ContactCTA({ index, headingLevel = "h2" }: { index?: string; headingLevel?: "h1" | "h2" }) {
  const H = headingLevel;
  return (
    <section id="enquiry" aria-labelledby="enquiry-title" className="relative overflow-hidden bg-turmeric text-ink">
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
              Tell us where your brand is today and where you want it to go. We&apos;ll come back with honest thoughts on
              how we can help.
            </p>
            <dl className="mt-12 grid gap-6 border-t border-ink/30 pt-8 sm:grid-cols-2 lg:grid-cols-1">
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
            <EnquiryForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
