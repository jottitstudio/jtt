import Image from "next/image";
import { experiments } from "@/content/studio";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealLines } from "@/components/ui/Reveal";
import { KolamPlayground } from "./KolamPlayground";

function Experiment({
  e,
  n,
  aspect,
  sizes,
}: {
  e: (typeof experiments)[number];
  n: number;
  aspect: string;
  sizes: string;
}) {
  return (
    <figure className="group">
      <div className={`relative overflow-hidden border-2 border-ink bg-parchment ${aspect}`}>
        <Image
          src={e.src}
          alt={e.alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[1.6s] ease-[var(--ease-studio)] group-hover:scale-[1.03]"
        />
      </div>
      <figcaption className="mt-4 grid grid-cols-[auto_1fr] gap-x-4">
        <span className="t-eyebrow pt-1 text-purple">Jot {String(n).padStart(2, "0")}</span>
        <span>
          <span className="block font-display text-lg font-bold uppercase tracking-[-0.02em]">{e.title}</span>
          <span className="mt-1 block text-sm text-ink/70">{e.note}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function StudioCulture({ index = "08" }: { index?: string }) {
  const [first, second, third, fourth, fifth] = experiments;
  return (
    <section className="wrap py-24 md:py-40">
      <div className="grid gap-y-8 lg:grid-cols-12 lg:items-end lg:gap-x-8">
        <div className="lg:col-span-7">
          <Eyebrow index={index} note="Studio Sketchbook">
            Creative explorations
          </Eyebrow>
          <h2 id="studio-title" className="t-h1 mt-8">
            <RevealLines lines={["CURIOUS.", "EXPERIMENTAL.", "HUMAN."]} />
          </h2>
        </div>
        <Reveal className="lg:col-span-4 lg:col-start-9">
          <p className="text-ink/75">
            Between client projects, our sketchbook stays open — exploring marks, symbols, typography, motion systems
            and tactile visual languages that feed into our studio work.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 md:mt-24 lg:grid-cols-12 lg:gap-x-8">
        <Reveal className="sm:col-span-2 lg:col-span-5">
          <Experiment e={first} n={1} aspect="aspect-square" sizes="(min-width: 1024px) 40vw, 100vw" />
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-3 lg:mt-40">
          <Experiment e={second} n={2} aspect="aspect-square" sizes="(min-width: 1024px) 25vw, 50vw" />
        </Reveal>
        <Reveal delay={0.15} className="lg:col-span-4">
          <Experiment e={third} n={3} aspect="aspect-[3/4]" sizes="(min-width: 1024px) 33vw, 50vw" />
        </Reveal>
        <Reveal className="lg:col-span-3 lg:col-start-2">
          <Experiment e={fourth} n={4} aspect="aspect-square" sizes="(min-width: 1024px) 25vw, 50vw" />
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-3 lg:mt-24">
          <Experiment e={fifth} n={5} aspect="aspect-square" sizes="(min-width: 1024px) 25vw, 50vw" />
        </Reveal>
        <Reveal delay={0.15} className="sm:col-span-2 lg:col-span-4">
          <figure>
            <KolamPlayground />
            <figcaption className="mt-4 grid grid-cols-[auto_1fr] gap-x-4">
              <span className="t-eyebrow pt-1 text-purple">Jot 06</span>
              <span>
                <span className="block font-display text-lg font-bold uppercase tracking-[-0.02em]">
                  Interactive Sketch Grid
                </span>
                <span className="mt-1 block text-sm text-ink/70">
                  Change the grid density and palette to redraw the studio lattice.
                </span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
