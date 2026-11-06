import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { WorkGrid } from "@/components/work/WorkGrid";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { getProjects, getServices } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Selected concept projects by JOTTIT across branding, social media content, performance marketing, film, photography and web.",
  alternates: { canonical: "/work" },
};

export default async function WorkPage() {
  const [projects, services] = await Promise.all([getProjects(), getServices()]);
  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        note="From first sketch to real world"
        lines={["IDEAS", "MADE REAL."]}
        intro={
          <>
            <p>
              A curated collection of studio studies exploring how early jots become complete brand identities,
              campaigns and digital products. Each piece below is a{" "}
              <strong className="font-semibold text-ink">clearly labelled concept project</strong>.
            </p>
            <p className="mt-4 text-base text-ink/70">
              Verified client case studies will be added as engagements are approved for publication. We never present
              concept explorations as client work or fabricate metrics.
            </p>
          </>
        }
      />
      <section aria-label="Projects" className="wrap py-20 md:py-32">
        <WorkGrid projects={projects} services={services.map(({ slug, shortTitle }) => ({ slug, shortTitle }))} />
      </section>
      <section
        aria-labelledby="work-next-title"
        className="on-dark border-t border-ink bg-purple py-20 text-paper md:py-28"
      >
        <div className="wrap flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <Eyebrow note="Your Idea Next" className="text-paper/80">
              Got an idea? JOTTIT.
            </Eyebrow>
            <h2 id="work-next-title" className="t-h2 mt-6 max-w-[16ch] text-paper">
              Let&apos;s turn your thought into something worth remembering.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="lime">
              Let&apos;s Start Something
            </ButtonLink>
            <ButtonLink href="/services" variant="outline-light">
              Explore Services
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
