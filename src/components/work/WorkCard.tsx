import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";
import { serviceTitle } from "@/lib/cms";
import { Arrow } from "@/components/art/Motifs";

export function ConceptTag({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 border border-dashed border-current px-2.5 py-1 font-display text-[0.68rem] font-bold uppercase tracking-[0.14em] ${className}`}
    >
      <span aria-hidden="true" className="inline-block size-1.5 rotate-45 bg-purple" />
      Concept project
    </span>
  );
}

export function WorkCard({
  project,
  aspect = "aspect-[4/5]",
  sizes = "(min-width: 1024px) 45vw, 100vw",
  preload = false,
  index,
}: {
  project: Project;
  aspect?: string;
  sizes?: string;
  preload?: boolean;
  index?: number;
}) {
  return (
    <article className="group">
      <Link href={`/work/${project.slug}`} className="block focus-visible:outline-offset-8">
        <div className={`relative overflow-hidden border-2 border-ink bg-parchment ${aspect}`}>
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            sizes={sizes}
            preload={preload}
            className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-studio)] group-hover:scale-[1.04]"
          />
          {project.status === "concept" && (
            <ConceptTag className="absolute left-4 top-4 bg-paper/95 text-ink backdrop-blur-sm" />
          )}
          <span
            aria-hidden="true"
            className="absolute bottom-3 right-3 inline-flex size-11 items-center justify-center border-2 border-ink bg-lime text-ink transition-all duration-500 ease-[var(--ease-studio)] group-hover:bg-purple group-hover:text-paper sm:bottom-4 sm:right-4 sm:size-12 lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
          >
            <Arrow direction="up-right" className="size-5" />
          </span>
        </div>

        <div className="mt-4">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-display text-2xl font-bold uppercase tracking-[-0.03em] md:text-[1.65rem]">
              {index !== undefined && (
                <span className="mr-2.5 align-top font-display text-xs font-bold tracking-[0.14em] text-purple">
                  {String(index + 1).padStart(2, "0")}
                </span>
              )}
              <span className="link-line">{project.title}</span>
            </h3>
            <p className="shrink-0 text-xs tabular-nums text-stone">
              {project.sector} · {project.year}
            </p>
          </div>

          <p className="mt-1.5 text-sm text-ink/80">{project.tagline}</p>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-ink/15 pt-2.5">
            <p className="t-eyebrow text-stone">{project.services.map(serviceTitle).join(" · ")}</p>
            <span className="font-display text-xs font-bold uppercase tracking-[0.12em] text-purple group-hover:underline">
              Explore →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
