import type { Project } from "@/lib/types";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealLines } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { WorkCard } from "@/components/work/WorkCard";

export function SelectedWork({ projects, index = "08" }: { projects: Project[]; index?: string }) {
  const [a, b, c, d] = projects;
  return (
    <section id="work" className="bg-paper py-20 md:py-32">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Eyebrow index={index} note="Selected Work">
              Portfolio &amp; concept studies
            </Eyebrow>
            <h2 id="work-title" className="t-h1 mt-6">
              <RevealLines lines={["IDEAS", "MADE REAL."]} />
            </h2>
          </div>
          <Reveal className="flex flex-col items-start gap-4 lg:items-end">
            <p className="max-w-sm text-sm text-ink/75 lg:text-right">
              Self-initiated <strong className="font-semibold text-ink">concept projects</strong> showcasing how early
              jots become complete brand worlds.
            </p>
            <ButtonLink href="/work" variant="outline">
              View All 5 Studies
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-y-14 md:mt-20 md:grid-cols-12 md:gap-x-8 lg:gap-x-10">
          {a && (
            <Reveal className="md:col-span-7">
              <WorkCard project={a} index={0} sizes="(min-width: 768px) 55vw, 100vw" />
            </Reveal>
          )}
          {b && (
            <Reveal delay={0.1} className="md:col-span-5 md:mt-32">
              <WorkCard project={b} index={1} sizes="(min-width: 768px) 40vw, 100vw" />
            </Reveal>
          )}
          {c && (
            <Reveal className="md:col-span-5">
              <WorkCard project={c} index={2} sizes="(min-width: 768px) 40vw, 100vw" />
            </Reveal>
          )}
          {d && (
            <Reveal delay={0.1} className="md:col-span-7 md:mt-20 lg:col-span-6 lg:col-start-7">
              <WorkCard project={d} index={3} aspect="aspect-[4/5]" sizes="(min-width: 768px) 50vw, 100vw" />
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
