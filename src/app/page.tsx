import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { Statement } from "@/components/home/Statement";
import { SelectedWork } from "@/components/home/SelectedWork";
import { Philosophy } from "@/components/home/Philosophy";
import { Process } from "@/components/home/Process";
import { WhyUs } from "@/components/home/WhyUs";
import { TrustCredibility } from "@/components/home/TrustCredibility";
import { StudioCulture } from "@/components/home/StudioCulture";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ServiceList } from "@/components/services/ServiceList";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealLines } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { getProjects, getServices } from "@/lib/cms";
import { site } from "@/content/site";

export default async function HomePage() {
  const [services, projects] = await Promise.all([getServices(), getProjects()]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    knowsAbout: services.map((s) => s.title),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* 1. Hero */}
      <Hero />
      <Marquee />

      {/* 2. Studio introduction */}
      <Statement />

      {/* 3. Services */}
      <section id="services" className="wrap pb-24 md:pb-40">
        <div className="mb-14 grid gap-y-8 md:mb-20 lg:grid-cols-12 lg:items-end lg:gap-x-8">
          <div className="lg:col-span-7">
            <Eyebrow index="02" tamil="சேவைகள்">
              Services &amp; capabilities
            </Eyebrow>
            <h2 id="services-title" className="t-h1 mt-8">
              <RevealLines lines={["Everything a", "brand needs", "to grow."]} />
            </h2>
          </div>
          <Reveal className="flex flex-col items-start gap-5 lg:col-span-4 lg:col-start-9">
            <p className="text-ink/80">
              Five connected disciplines delivered by one in-house studio. Hire us for a focused single project or
              partner with us end to end — every service is built around clear deliverables and commercial outcomes.
            </p>
            <ButtonLink href="/services" variant="ghost" className="link-line">
              Compare all services
            </ButtonLink>
          </Reveal>
        </div>

        <ServiceList services={services} />

        <Reveal delay={0.15} className="mt-12 flex flex-col items-start justify-between gap-6 border border-ink bg-ivory-deep/70 p-6 sm:flex-row sm:items-center md:p-8">
          <div>
            <p className="font-display text-lg font-semibold tracking-[-0.02em] text-ink">
              Not sure which combination of services your business needs right now?
            </p>
            <p className="mt-1 text-sm text-ink/75">
              Tell us your business stage and goals — we will recommend a practical scope without unnecessary extras.
            </p>
          </div>
          <ButtonLink href="/contact" variant="solid">
            Request a Custom Scope
          </ButtonLink>
        </Reveal>
      </section>

      {/* 4. Our approach */}
      <Philosophy />

      {/* 5. Why choose jottitstudio */}
      <WhyUs index="04" />

      {/* 6. Selected work */}
      <SelectedWork projects={projects.slice(0, 4)} index="05" />

      {/* 7. Our process */}
      <Process index="06" />

      {/* 8. Trust and credibility */}
      <TrustCredibility index="07" />

      {/* Studio culture & South Indian contemporary explorations */}
      <StudioCulture index="08" />

      {/* 9. Final CTA */}
      <ContactCTA index="09" />
    </>
  );
}
