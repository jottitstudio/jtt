import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { Statement } from "@/components/home/Statement";
import { EvolutionJourney } from "@/components/home/EvolutionJourney";
import { IdeasTogether } from "@/components/home/IdeasTogether";
import { Philosophy } from "@/components/home/Philosophy";
import { Process } from "@/components/home/Process";
import { SelectedWork } from "@/components/home/SelectedWork";
import { WhyUs } from "@/components/home/WhyUs";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ServiceList } from "@/components/services/ServiceList";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealLines } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { getProjects, getServices } from "@/lib/cms";
import { site } from "@/content/site";

export default async function PreviewHomePage() {
  const [services, projects] = await Promise.all([getServices(), getProjects()]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    slogan: site.tagline,
    url: site.url,
    description: site.description,
    knowsAbout: services.map((s) => s.title),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* SECTION 01 — INTRO / HERO */}
      <Hero />
      <Marquee />

      {/* SECTION 02 — THE FIRST MARK */}
      <Statement />

      {/* SECTION 03 — THE EVOLUTION (Signature 7-Chapter Scroll Storytelling) */}
      <EvolutionJourney />

      {/* SECTION 04 — IDEAS COME TOGETHER */}
      <IdeasTogether />

      {/* SECTION 05 — THE REVEAL */}
      <Philosophy />

      {/* SECTION 06 — WHAT WE DO */}
      <section id="services" className="wrap py-20 md:py-32">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 lg:flex-row lg:items-end">
          <div>
            <Eyebrow index="06" note="What We Do">
              Five connected capabilities
            </Eyebrow>
            <h2 id="services-title" className="t-h1 mt-6">
              <RevealLines lines={["WE MAKE", "IDEAS HAPPEN."]} />
            </h2>
          </div>
          <Reveal>
            <ButtonLink href="/services" variant="outline">
              All 5 Services →
            </ButtonLink>
          </Reveal>
        </div>

        <ServiceList services={services} />
      </section>

      {/* SECTION 07 — OUR APPROACH */}
      <Process index="07" />

      {/* SECTION 08 — SELECTED WORK */}
      <SelectedWork projects={projects.slice(0, 4)} index="08" />

      {/* SECTION 09 — WHY JOTTIT */}
      <WhyUs index="09" />

      {/* SECTION 10 — FINAL CTA */}
      <ContactCTA index="10" />
    </>
  );
}
