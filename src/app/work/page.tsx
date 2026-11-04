import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { WorkGrid } from "@/components/work/WorkGrid";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { getProjects, getServices } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Selected concept projects by jottitstudio across branding, social content, performance marketing, film, photography and web.",
  alternates: { canonical: "/work" },
};

export default async function WorkPage() {
  const [projects, services] = await Promise.all([getProjects(), getServices()]);
  return (
    <>
      <PageHero
        eyebrow="Our work"
        tamil="படைப்புகள்"
        lines={["Work that", "earns attention."]}
        intro={
          <>
            <p>
              A growing collection of self-initiated studies. Each one is a{" "}
              <strong className="font-medium text-ink">clearly labelled concept project</strong> — a fictional brief we
              set ourselves to show how we think and make.
            </p>
            <p className="mt-4 text-base text-ink/65">
              Client case studies will be added here as they are approved for publication. We never present concept work
              as client work, and we don&apos;t claim results for it.
            </p>
          </>
        }
      />
      <section aria-label="Projects" className="wrap pb-28 md:pb-40">
        <WorkGrid projects={projects} services={services.map(({ slug, shortTitle }) => ({ slug, shortTitle }))} />
      </section>
      <section aria-labelledby="work-next-title" className="border-t border-ink/15 bg-turmeric py-20 text-ink md:py-28">
        <div className="wrap flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <Eyebrow tamil="வணக்கம்">Your brand next</Eyebrow>
            <h2 id="work-next-title" className="t-h2 mt-6 max-w-[16ch]">
              Have a project in mind?
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="solid">
              Start a Project
            </ButtonLink>
            <ButtonLink href="/services" variant="outline">
              Explore Services
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
