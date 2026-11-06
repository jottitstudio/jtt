import type { Metadata } from "next";
import { Suspense } from "react";
import { PageFallback } from "@/components/layout/PageFallback";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectsByService, getServiceBySlug, getServices } from "@/lib/cms";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealLines, DrawRule } from "@/components/ui/Reveal";
import { ServiceGlyph, Arrow } from "@/components/art/Motifs";
import { KolamLattice } from "@/components/art/KolamLattice";
import { WorkCard } from "@/components/work/WorkCard";
import { ButtonLink } from "@/components/ui/Button";

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: `${service.title} — JOTTIT`, description: service.summary },
  };
}

async function ServiceDetailPage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  const [all, related] = await Promise.all([getServices(), getProjectsByService(service.slug)]);
  const idx = all.findIndex((s) => s.slug === service.slug);
  const next = all[(idx + 1) % all.length];

  return (
    <>
      <section className="relative overflow-hidden border-b border-ink/15 bg-parchment pt-[calc(var(--header-h)+3rem)] pb-20 md:pt-[calc(var(--header-h)+5rem)] md:pb-28">
        <div
          aria-hidden="true"
          className="dot-grid pointer-events-none absolute inset-0 text-ink/[0.06] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]"
        />
        <div className="wrap relative">
          <nav aria-label="Breadcrumb">
            <ol className="t-eyebrow flex flex-wrap items-center gap-2 text-stone">
              <li>
                <Link href="/services" className="link-line inline-flex min-h-11 items-center py-2">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-purple">
                {service.index} — {service.shortTitle}
              </li>
            </ol>
          </nav>

          <div className="mt-10 grid gap-y-10 lg:grid-cols-12 lg:gap-x-8">
            <h1 className="t-h1 lg:col-span-9">
              <RevealLines
                immediate
                lines={service.title.split(" & ").map((part, i, arr) => (i < arr.length - 1 ? `${part} &` : part))}
              />
            </h1>
            <Reveal delay={0.3} className="hidden lg:col-span-3 lg:flex lg:justify-end">
              <ServiceGlyph index={idx} className="size-28 text-purple" />
            </Reveal>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-x-8">
            <Reveal delay={0.35} className="lg:col-span-6 lg:col-start-6">
              <p className="t-lead text-ink/85">{service.intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" variant="purple">
                  Start a Project
                </ButtonLink>
                {related.length > 0 && (
                  <ButtonLink href="#related" variant="outline">
                    See Related Work
                  </ButtonLink>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="why-title" className="on-dark bg-purple py-24 text-paper md:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-4">
            <Eyebrow note="The Impact" className="text-paper/80">
              Why it matters
            </Eyebrow>
            <KolamLattice cells={3} className="mt-10 hidden w-32 text-lime lg:block" strokeWidth={1.25} />
          </div>
          <Reveal className="lg:col-span-7 lg:col-start-6">
            <h2 id="why-title" className="sr-only">
              Why {service.title.toLowerCase()} matters
            </h2>
            <p className="font-display text-[clamp(1.5rem,2.8vw,2.5rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-paper">
              {service.why}
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="deliverables-title" className="wrap py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-4">
            <Eyebrow note="Deliverables">What we deliver</Eyebrow>
            <h2 id="deliverables-title" className="t-h2 mt-8">
              Scope
            </h2>
          </div>
          <ul className="lg:col-span-7 lg:col-start-6">
            {service.deliverables.map((d, i) => (
              <Reveal
                as="li"
                key={d}
                delay={i * 0.04}
                className="flex items-baseline justify-between gap-6 border-b border-ink/20 py-5 first:border-t"
              >
                <span className="font-display text-xl font-bold uppercase tracking-[-0.02em] md:text-2xl">{d}</span>
                <span className="font-display text-xs font-bold tabular-nums text-purple">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="approach-title" className="bg-parchment py-24 md:py-32">
        <div className="wrap">
          <Eyebrow note="Process">How we approach it</Eyebrow>
          <h2 id="approach-title" className="t-h2 mt-8 max-w-[16ch]">
            Our approach
          </h2>
          <div className="relative mt-16">
            <div className="absolute inset-x-0 top-0 hidden md:block">
              <DrawRule />
            </div>
            <ol className="grid gap-12 md:grid-cols-3 md:gap-8">
              {service.approach.map((a, i) => (
                <Reveal as="li" key={a.title} delay={i * 0.1} className="md:pt-10">
                  <span className="font-display text-sm font-bold tabular-nums text-purple">0{i + 1}</span>
                  <h3 className="t-h3 mt-4">{a.title}</h3>
                  <p className="mt-4 text-ink/75">{a.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section id="related" aria-labelledby="related-title" className="wrap py-24 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow note="Selected Work">Related concept work</Eyebrow>
              <h2 id="related-title" className="t-h2 mt-8">
                In practice
              </h2>
            </div>
            <ButtonLink href="/work" variant="ghost" className="link-line">
              All work
            </ButtonLink>
          </div>
          <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {related.slice(0, 3).map((p) => (
              <Reveal key={p.slug}>
                <WorkCard project={p} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section aria-labelledby="faq-title" className="border-t border-ink/15 py-24 md:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-4">
            <Eyebrow note="Answers">Questions</Eyebrow>
            <h2 id="faq-title" className="t-h2 mt-8">
              FAQ
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            {service.faqs.map((f) => (
              <details key={f.q} className="group border-b border-ink/20 first:border-t">
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-xl font-semibold tracking-[-0.02em] md:text-2xl [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden="true" className="relative size-4 shrink-0">
                    <span className="absolute left-0 top-1/2 h-px w-full bg-ink" />
                    <span className="absolute left-1/2 top-0 h-full w-px bg-ink transition-transform duration-300 group-open:scale-y-0" />
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 text-ink/75">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-label="Start a project"
        className="wrap flex flex-col items-start justify-between gap-8 border-t border-ink/15 py-20 md:flex-row md:items-center"
      >
        <div>
          <Eyebrow note="Let's Jot It">Get started</Eyebrow>
          <p className="t-h3 mt-3 max-w-xl">Looking for a studio partner for {service.title.toLowerCase()}?</p>
        </div>
        <ButtonLink href="/contact" variant="purple">
          Start a Project
        </ButtonLink>
      </section>

      <Link
        href={`/services/${next.slug}`}
        className="group block border-t-2 border-ink bg-parchment transition-colors duration-500 hover:bg-lime"
      >
        <div className="wrap flex items-center justify-between gap-4 py-14 sm:gap-6 md:py-20">
          <div className="min-w-0">
            <p className="t-eyebrow text-purple group-hover:text-ink">Next service</p>
            <p className="t-h2 mt-3 sm:mt-4">{next.title}</p>
          </div>
          <span className="inline-flex size-12 shrink-0 items-center justify-center border-2 border-ink bg-paper transition-colors group-hover:bg-purple group-hover:text-paper sm:size-14 md:size-20">
            <Arrow className="size-5 sm:size-6" />
          </span>
        </div>
      </Link>
    </>
  );
}

export default function Page(props: PageProps<"/services/[slug]">) {
  return (
    <Suspense fallback={<PageFallback />}>
      <ServiceDetailPage {...props} />
    </Suspense>
  );
}
