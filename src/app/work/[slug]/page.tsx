import type { Metadata } from "next";
import { Suspense } from "react";
import { PageFallback } from "@/components/layout/PageFallback";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAdjacentProject, getProjectBySlug, getProjects, serviceTitle } from "@/lib/cms";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealLines } from "@/components/ui/Reveal";
import { ConceptTag } from "@/components/work/WorkCard";
import { Arrow, TempleBorder } from "@/components/art/Motifs";
import { ButtonLink } from "@/components/ui/Button";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};
  const label = project.status === "concept" ? "Concept project" : "Case study";
  return {
    title: `${project.title} — ${label}`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${label} by jottitstudio`,
      description: project.summary,
      images: [{ url: project.cover.src, width: project.cover.width, height: project.cover.height, alt: project.cover.alt }],
    },
  };
}

async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();
  const next = await getAdjacentProject(project.slug);
  const isConcept = project.status === "concept";

  return (
    <article>
      <header className="relative pt-[calc(var(--header-h)+3rem)] md:pt-[calc(var(--header-h)+5rem)]">
        <div className="wrap">
          <nav aria-label="Breadcrumb">
            <ol className="t-eyebrow flex flex-wrap items-center gap-2 text-stone">
              <li>
                <Link href="/work" className="link-line inline-flex min-h-11 items-center py-2">
                  Our work
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">
                {project.title}
              </li>
            </ol>
          </nav>

          {isConcept && (
            <Reveal y={8} className="mt-8">
              <ConceptTag className="text-ink" />
            </Reveal>
          )}

          <h1 className="t-display mt-6">
            <RevealLines immediate lines={[project.title]} />
          </h1>

          <div className="mt-10 grid gap-10 border-t border-ink pt-8 md:mt-14 lg:grid-cols-12 lg:gap-x-8">
            <Reveal delay={0.25} className="lg:col-span-6">
              <p className="t-lead">{project.tagline}</p>
              <p className="mt-4 text-ink/70">{project.summary}</p>
            </Reveal>
            <Reveal delay={0.35} className="lg:col-span-5 lg:col-start-8">
              <dl className="grid grid-cols-2 gap-x-6 gap-y-6 text-sm">
                <div>
                  <dt className="t-eyebrow text-stone">Type</dt>
                  <dd className="mt-1">{isConcept ? "Self-initiated concept" : "Client project"}</dd>
                </div>
                <div>
                  <dt className="t-eyebrow text-stone">Year</dt>
                  <dd className="mt-1 tabular-nums">{project.year}</dd>
                </div>
                <div>
                  <dt className="t-eyebrow text-stone">Sector</dt>
                  <dd className="mt-1">{project.sector}</dd>
                </div>
                <div>
                  <dt className="t-eyebrow text-stone">Disciplines</dt>
                  <dd className="mt-1">
                    <ul className="space-y-0.5">
                      {project.services.map((s) => (
                        <li key={s}>
                          <Link href={`/services/${s}`} className="link-line inline-flex min-h-11 items-center py-1">
                            {serviceTitle(s)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div className="col-span-2">
                  <dt className="t-eyebrow text-stone">Palette</dt>
                  <dd className="mt-2 flex gap-1.5">
                    {project.palette.map((c) => (
                      <span key={c} className="block size-8 border border-ink/15" style={{ background: c }} title={c}>
                        <span className="sr-only">{c}</span>
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </header>

      <div className="wrap mt-16 grid gap-6 md:mt-24 lg:grid-cols-12 lg:items-end lg:gap-8">
        <Reveal y={40} as="figure" className="lg:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden bg-ivory-deep">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              preload
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        {project.gallery[0] && (
          <Reveal y={40} delay={0.1} as="figure" className="lg:col-span-7">
            <div className="relative aspect-[3/2] overflow-hidden bg-ivory-deep">
              <Image
                src={project.gallery[0].src}
                alt={project.gallery[0].alt}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
            {isConcept && (
              <figcaption className="mt-3 text-xs text-stone">
                Concept visualisations — not a real product or client commission.
              </figcaption>
            )}
          </Reveal>
        )}
      </div>

      <section aria-labelledby="brief-title" className="wrap py-24 md:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-4">
            <Eyebrow>{isConcept ? "The concept brief" : "The brief"}</Eyebrow>
          </div>
          <Reveal className="lg:col-span-7 lg:col-start-6">
            <h2 id="brief-title" className="sr-only">
              Brief
            </h2>
            <p className="font-display text-[clamp(1.4rem,2.4vw,2.2rem)] font-medium leading-[1.25] tracking-[-0.02em]">
              {project.brief}
            </p>
          </Reveal>
        </div>
      </section>

      <TempleBorder className="block text-ink/30" />

      <section aria-label="Process and thinking" className="wrap py-24 md:py-32">
        <div className="space-y-20 md:space-y-28">
          {project.sections.map((s, i) => (
            <div key={s.heading} className="grid gap-6 lg:grid-cols-12 lg:gap-x-8">
              <Reveal className="lg:col-span-4">
                <span className="font-display text-sm tabular-nums text-stone">0{i + 1}</span>
                <h2 className="t-h3 mt-3">{s.heading}</h2>
              </Reveal>
              <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-6">
                <p className="t-lead text-ink/80">{s.body}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="explores-title" className="on-dark bg-ink py-24 text-ivory md:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-4">
            <Eyebrow className="text-ivory/60">{isConcept ? "What this concept explores" : "Outcomes"}</Eyebrow>
            <h2 id="explores-title" className="t-h2 mt-8">
              {isConcept ? "Explores" : "Outcomes"}
            </h2>
          </div>
          <ul className="lg:col-span-7 lg:col-start-6">
            {project.outcomes.map((o, i) => (
              <Reveal
                as="li"
                key={o}
                delay={i * 0.06}
                className="grid grid-cols-[3rem_1fr] border-b border-ivory/15 py-6 first:border-t"
              >
                <span className="font-display text-sm tabular-nums text-turmeric">0{i + 1}</span>
                <span className="font-display text-xl tracking-[-0.01em] md:text-2xl">{o}</span>
              </Reveal>
            ))}
          </ul>
          <div className="lg:col-span-7 lg:col-start-6">
            <h3 className="t-eyebrow text-ivory/50">Credits</h3>
            <ul className="mt-3 space-y-1 text-sm text-ivory/70">
              {project.credits.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-label="Start a similar project" className="wrap flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-center">
        <p className="t-h3 max-w-xl">Have a brand that deserves this level of thinking?</p>
        <ButtonLink href="/contact">Start a Project</ButtonLink>
      </section>

      <Link href={`/work/${next.slug}`} className="group relative block overflow-hidden bg-ink text-ivory">
        <div className="absolute inset-0 opacity-40 transition-opacity duration-700 group-hover:opacity-60">
          <Image src={next.cover.src} alt="" fill sizes="100vw" className="object-cover transition-transform duration-[1.6s] ease-[var(--ease-studio)] group-hover:scale-105" />
        </div>
        <div className="wrap relative flex items-end justify-between gap-6 py-24 md:py-36">
          <div>
            <p className="t-eyebrow text-ivory/70">Next project</p>
            <p className="t-h1 mt-4">{next.title}</p>
          </div>
          <span className="inline-flex size-14 shrink-0 items-center justify-center bg-turmeric text-ink md:size-20">
            <Arrow className="size-6 transition-transform duration-500 group-hover:-rotate-45" />
          </span>
        </div>
      </Link>
    </article>
  );
}

export default function Page(props: PageProps<"/work/[slug]">) {
  return (
    <Suspense fallback={<PageFallback />}>
      <CaseStudyPage {...props} />
    </Suspense>
  );
}
