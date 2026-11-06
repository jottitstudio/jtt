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

export default async function HomePage() {
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
      <section id="services" className="wrap py-24 md:py-40">
        <div className="mb-14 grid gap-y-8 md:mb-20 lg:grid-cols-12 lg:items-end lg:gap-x-8">
          <div className="lg:col-span-7">
            <Eyebrow index="06" note="What We Do">
              Full-service creative &amp; marketing studio
            </Eyebrow>
            <h2 id="services-title" className="t-h1 mt-8">
              <RevealLines lines={["WE MAKE", "IDEAS HAPPEN."]} />
            </h2>
          </div>
          <Reveal className="flex flex-col items-start gap-5 lg:col-span-4 lg:col-start-9">
            <p className="text-ink/80">
              Five connected capabilities under one creative studio — turning early thoughts into distinctive brands,
              campaigns, content, films and high-performing websites.
            </p>
            <ButtonLink href="/services" variant="ghost" className="link-line">
              Explore all 5 services →
            </ButtonLink>
          </Reveal>
        </div>

        <ServiceList services={services} />

        <Reveal
          delay={0.15}
          className="mt-12 flex flex-col items-start justify-between gap-6 border-2 border-ink bg-parchment p-6 shadow-[8px_8px_0_0_#5F2DB2] sm:flex-row sm:items-center md:p-8"
        >
          <div>
            <p className="font-display text-lg font-bold uppercase tracking-[-0.02em] text-ink">
              Have a raw thought and not sure which services you need first?
            </p>
            <p className="mt-1 text-sm text-ink/75">
              Tell us where your brand is today — we will shape a practical, connected scope around your goals.
            </p>
          </div>
          <ButtonLink href="/contact" variant="purple">
            Jot Your Brief With Us
          </ButtonLink>
        </Reveal>
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
