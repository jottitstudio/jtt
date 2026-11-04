import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { Statement } from "@/components/home/Statement";
import { SelectedWork } from "@/components/home/SelectedWork";
import { Philosophy } from "@/components/home/Philosophy";
import { Process } from "@/components/home/Process";
import { WhyUs } from "@/components/home/WhyUs";
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
      <Hero />
      <Marquee />
      <Statement />

      <section aria-labelledby="services-title" className="wrap pb-24 md:pb-40">
        <div className="mb-14 grid gap-y-8 md:mb-20 lg:grid-cols-12 lg:items-end lg:gap-x-8">
          <div className="lg:col-span-7">
            <Eyebrow index="02" tamil="சேவைகள்">
              Services
            </Eyebrow>
            <h2 id="services-title" className="t-h1 mt-8">
              <RevealLines lines={["Everything a", "brand needs."]} />
            </h2>
          </div>
          <Reveal className="flex flex-col items-start gap-6 lg:col-span-4 lg:col-start-9">
            <p className="text-ink/75">
              Five disciplines, one team. Engage us for a single service or bring us in end to end — either way, the
              work connects.
            </p>
            <ButtonLink href="/services" variant="ghost" className="link-line">
              All services
            </ButtonLink>
          </Reveal>
        </div>
        <ServiceList services={services} />
      </section>

      <SelectedWork projects={projects.slice(0, 4)} />
      <Philosophy />
      <Process index="05" />
      <WhyUs />
      <StudioCulture />
      <ContactCTA index="08" />
    </>
  );
}
