import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";
import { serviceTitle } from "@/lib/cms";
import { Arrow } from "@/components/art/Motifs";

export function ConceptTag({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 border border-dashed border-current px-2 py-0.5 font-display text-[0.68rem] font-medium uppercase tracking-[0.14em] ${className}`}
    >
      <span aria-hidden="true" className="inline-block size-1.5 rotate-45 bg-current" />
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
        <div className={`relative overflow-hidden bg-ivory-deep ${aspect}`}>
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            sizes={sizes}
            preload={preload}
            className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-studio)] group-hover:scale-[1.04]"
          />
          {project.status === "concept" && (
            <ConceptTag className="absolute left-4 top-4 bg-ivory/90 text-ink backdrop-blur-sm" />
          )}
          <span
            aria-hidden="true"
            className="absolute bottom-4 right-4 inline-flex size-12 translate-y-3 items-center justify-center bg-turmeric text-ink opacity-0 transition-all duration-500 ease-[var(--ease-studio)] group-hover:translate-y-0 group-hover:opacity-100"
          >
            <Arrow direction="up-right" className="size-5" />
          </span>
        </div>
        <div className="mt-5 grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1">
          <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] md:text-[1.75rem]">
            {index !== undefined && (
              <span className="mr-3 align-top font-display text-xs font-medium tracking-[0.14em] text-stone">
                {String(index + 1).padStart(2, "0")}
              </span>
            )}
            <span className="link-line">{project.title}</span>
          </h3>
          <p className="text-sm tabular-nums text-stone">{project.year}</p>
          <p className="col-span-2 text-[0.95rem] text-ink/75">{project.tagline}</p>
          <p className="col-span-2 mt-2 t-eyebrow text-stone">
            {project.services.map(serviceTitle).join(" · ")}
          </p>
        </div>
      </Link>
    </article>
  );
}
