import type { Project } from "@/lib/types";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealLines } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { WorkCard } from "@/components/work/WorkCard";

export function SelectedWork({ projects, index = "08" }: { projects: Project[]; index?: string }) {
  const [a, b, c, d] = projects;
  return (
    <section id="work" className="bg-paper py-24 md:py-40">
      <div className="wrap">
        <div className="grid gap-y-8 lg:grid-cols-12 lg:items-end lg:gap-x-8">
          <div className="lg:col-span-7">
            <Eyebrow index={index} note="Selected Work">
              Portfolio &amp; concept studies
            </Eyebrow>
            <h2 id="work-title" className="t-h1 mt-8">
              <RevealLines lines={["IDEAS", "MADE REAL."]} />
            </h2>
          </div>
          <Reveal className="space-y-3 lg:col-span-4 lg:col-start-9">
            <p className="text-ink/80">
              See how early sketches, strategic positioning and visual storytelling come together across branding,
              content, campaigns, film and digital experiences.
            </p>
            <p className="text-sm text-ink/70">
              Every study below is a clearly labelled <strong className="font-semibold text-ink">concept project</strong>{" "}
              — created to showcase JOTTIT&apos;s creative direction, craft and commercial thinking without fabricating
              client results.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-y-16 md:mt-24 md:grid-cols-12 md:gap-x-8 lg:gap-x-10">
          {a && (
            <Reveal className="md:col-span-7">
              <WorkCard project={a} index={0} sizes="(min-width: 768px) 55vw, 100vw" />
            </Reveal>
          )}
          {b && (
            <Reveal delay={0.1} className="md:col-span-5 md:mt-48">
              <WorkCard project={b} index={1} sizes="(min-width: 768px) 40vw, 100vw" />
            </Reveal>
          )}
          {c && (
            <Reveal className="md:col-span-5 md:col-start-1 lg:col-span-5 lg:col-start-1">
              <WorkCard project={c} index={2} sizes="(min-width: 768px) 40vw, 100vw" />
            </Reveal>
          )}
          {d && (
            <Reveal delay={0.1} className="md:col-span-7 md:mt-32 lg:col-span-6 lg:col-start-7">
              <WorkCard project={d} index={3} aspect="aspect-[4/5]" sizes="(min-width: 768px) 50vw, 100vw" />
            </Reveal>
          )}
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-ink/15 pt-10 sm:flex-row md:mt-28">
          <p className="text-sm text-ink/75">
            Have a brand, launch or digital experience ready to be sketched and built?
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/work" variant="outline">
              Explore All 5 Concept Studies
            </ButtonLink>
            <ButtonLink href="/contact" variant="purple">
              Start Your Project
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
