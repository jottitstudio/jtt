import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ServiceList } from "@/components/services/ServiceList";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { getServices } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Branding & identity, social media & content, performance marketing, video & photography and website development — delivered by JOTTIT.",
  alternates: { canonical: "/services" },
};

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        note="Five connected crafts"
        lines={["WE MAKE", "IDEAS HAPPEN."]}
        intro={
          <p>
            From the first sketch of a brand identity to daily content, high-converting campaigns, original film and
            custom web experiences — JOTTIT brings all five creative and marketing disciplines together under one roof.
          </p>
        }
      />

      <section aria-label="All services" className="wrap py-20 md:py-32">
        <ServiceList services={services} headingLevel="h2" />
      </section>

      <section aria-labelledby="engage-title" className="on-dark bg-ink py-24 text-paper md:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-5">
            <p className="t-hand text-2xl text-lime">Flexible ways to collaborate</p>
            <h2 id="engage-title" className="t-h2 mt-2 text-paper">
              Ways to work with JOTTIT
            </h2>
          </div>
          <ul className="grid gap-px bg-paper/15 sm:grid-cols-3 lg:col-span-7">
            {[
              {
                t: "Single project",
                b: "A focused engagement — a brand identity, a campaign film or a custom website — with a clear scope and timeline.",
              },
              {
                t: "Full launch programme",
                b: "Strategy, visual identity, content, launch film and website created together for new ventures or rebrands.",
              },
              {
                t: "Ongoing studio partner",
                b: "A monthly partnership covering social storytelling, performance campaigns, video production and web evolution.",
              },
            ].map((x, i) => (
              <Reveal as="li" key={x.t} delay={i * 0.08} className="bg-ink p-6 md:p-8">
                <span className="font-display text-sm font-bold text-lime">0{i + 1}</span>
                <h3 className="mt-6 font-display text-xl font-bold uppercase text-paper">{x.t}</h3>
                <p className="mt-3 text-sm text-paper/75">{x.b}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="services-next-title"
        className="on-dark border-t border-ink bg-purple py-20 text-paper md:py-28"
      >
        <div className="wrap flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <Eyebrow note="Tailored Scope" className="text-paper/80">
              Start with your idea
            </Eyebrow>
            <h2 id="services-next-title" className="t-h2 mt-6 max-w-[18ch] text-paper">
              Not sure which combination you need?
            </h2>
            <p className="mt-4 max-w-xl text-paper/80">
              Tell us where your brand is today and what you want to achieve next. We will recommend a clear, connected
              plan.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="lime">
              Let&apos;s Start Something
            </ButtonLink>
            <ButtonLink href="/work" variant="outline-light">
              See Our Work
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
