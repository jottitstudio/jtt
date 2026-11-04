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
    "Branding & identity, social media & content, performance marketing, video & photography and website development — delivered by one connected creative team.",
  alternates: { canonical: "/services" },
};

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <>
      <PageHero
        eyebrow="Services"
        tamil="சேவைகள்"
        lines={["Five crafts.", "One studio."]}
        intro={
          <p>
            Most businesses juggle a branding agency, a social team, an ads freelancer, a videographer and a web developer —
            and spend their time keeping everyone aligned. We bring all five disciplines together so strategy, creativity
            and marketing move as one.
          </p>
        }
      />

      <section aria-label="All services" className="wrap pb-24 md:pb-32">
        <ServiceList services={services} headingLevel="h2" />
      </section>

      <section aria-labelledby="engage-title" className="bg-ink py-24 text-ivory on-dark md:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-x-8">
          <h2 id="engage-title" className="t-h2 lg:col-span-5">
            Ways to work together
          </h2>
          <ul className="grid gap-px bg-ivory/15 sm:grid-cols-3 lg:col-span-7">
            {[
              {
                t: "Single project",
                b: "A defined piece of work — a new identity, a website, a campaign film — with a clear scope and timeline.",
              },
              {
                t: "Launch programme",
                b: "Brand, content, website and launch campaign planned together for new businesses, products or rebrands.",
              },
              {
                t: "Ongoing partnership",
                b: "A monthly retainer covering content, campaigns and continuous improvement across your channels.",
              },
            ].map((x, i) => (
              <Reveal as="li" key={x.t} delay={i * 0.08} className="bg-ink p-6 md:p-8">
                <span className="font-display text-sm text-turmeric">0{i + 1}</span>
                <h3 className="mt-6 font-display text-xl font-semibold">{x.t}</h3>
                <p className="mt-3 text-sm text-ivory/70">{x.b}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="services-next-title" className="border-t border-ink/15 bg-turmeric py-20 text-ink md:py-28">
        <div className="wrap flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <Eyebrow tamil="திட்டம்">Project scope</Eyebrow>
            <h2 id="services-next-title" className="t-h2 mt-6 max-w-[18ch]">
              Not sure which combination you need?
            </h2>
            <p className="mt-4 max-w-xl text-ink/80">
              Tell us where your business is today and what you want to achieve. We&apos;ll recommend the right scope.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="solid">
              Discuss a Project
            </ButtonLink>
            <ButtonLink href="/work" variant="outline">
              See Our Work
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
