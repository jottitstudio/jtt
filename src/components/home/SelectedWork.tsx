import type { Project } from "@/lib/types";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealLines } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { WorkCard } from "@/components/work/WorkCard";

export function SelectedWork({ projects }: { projects: Project[] }) {
  const [a, b, c, d] = projects;
  return (
    <section aria-labelledby="work-title" className="bg-paper py-24 md:py-40">
      <div className="wrap">
        <div className="grid gap-y-8 lg:grid-cols-12 lg:items-end lg:gap-x-8">
          <div className="lg:col-span-7">
            <Eyebrow index="03" tamil="படைப்புகள்">
              Selected work
            </Eyebrow>
            <h2 id="work-title" className="t-h1 mt-8">
              <RevealLines lines={["Ideas,", "made visible."]} />
            </h2>
          </div>
          <Reveal className="lg:col-span-4 lg:col-start-9">
            <p className="text-ink/75">
              These are self-initiated <strong className="font-medium text-ink">concept projects</strong> — studies that
              show how we think across branding, content, campaigns, film and web. They are not client commissions, and
              we don&apos;t claim results for them.
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
            <Reveal className="md:col-span-5 md:col-start-1 lg:col-start-2 lg:col-span-4">
              <WorkCard project={c} index={2} sizes="(min-width: 768px) 35vw, 100vw" />
            </Reveal>
          )}
          {d && (
            <Reveal delay={0.1} className="md:col-span-7 md:mt-32 lg:col-span-6 lg:col-start-7">
              <WorkCard project={d} index={3} aspect="aspect-[4/5]" sizes="(min-width: 768px) 50vw, 100vw" />
            </Reveal>
          )}
        </div>

        <div className="mt-20 flex justify-center md:mt-28">
          <ButtonLink href="/work" variant="outline">
            View all work
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
