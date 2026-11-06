import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Eyebrow, Placeholder } from "@/components/ui/Eyebrow";
import { Reveal, RevealLines } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { KolamLattice } from "@/components/art/KolamLattice";
import { GopuramLines, JotMark, TempleBorder } from "@/components/art/Motifs";
import { Logo } from "@/components/layout/Logo";
import { evolutionChapters, jotJoinGot, team } from "@/content/studio";

export const metadata: Metadata = {
  title: "About",
  description:
    "JOTTIT is a creative and marketing studio that brings ideas to life through branding, design, content, marketing and digital experiences. THINK IT. JOT IT. MAKE IT MATTER.",
  alternates: { canonical: "/about" },
};

const cardTones = [
  "bg-purple text-paper",
  "bg-ink text-paper",
  "bg-parchment text-ink",
  "bg-lime text-ink",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About JOTTIT"
        note="Think it. Jot it. Make it matter."
        lines={["EVERY BIG IDEA", "STARTS WITH A", "LITTLE JOT."]}
        intro={
          <p>
            JOTTIT is a creative and marketing studio that brings ideas to life through branding, design, content,
            marketing and digital experiences. We represent the human instinct to capture an idea, develop it, bring
            people together and turn it into something meaningful.
          </p>
        }
      />

      {/* Story */}
      <section aria-labelledby="story-title" className="wrap py-24 md:py-36">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-8">
          <Reveal as="figure" className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden border-2 border-ink bg-purple shadow-[10px_10px_0_0_#17151B]">
              <Image
                src="/images/art/studio-architecture.jpg"
                alt="Editorial composition of geometric lines, sketchbook grids and structured forms."
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover mix-blend-luminosity opacity-80"
              />
              <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-purple-deep/90 via-purple/40 to-transparent p-8 text-paper">
                <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-lime">
                  From First Mark to Modern Brand
                </span>
                <div>
                  <Logo className="h-10 text-paper" />
                  <p className="mt-3 t-hand text-2xl text-lime">Every big idea starts with a little jot.</p>
                </div>
              </div>
            </div>
            <figcaption className="mt-3 text-xs text-stone">
              From hand-drawn jots on paper to complete brand worlds.
            </figcaption>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
            <Eyebrow index="01" note="Our Story">
              Why JOTTIT exists
            </Eyebrow>
            <h2 id="story-title" className="t-h2 mt-8">
              <RevealLines lines={["From a quick jot", "to a brand that", "moves people."]} />
            </h2>
            <Reveal className="mt-10 space-y-5 text-ink/80">
              <p className="t-lead text-ink">
                Long before screens, logos and campaigns, humans drew marks on stone walls, carved symbols and filled
                sketchbooks to make sense of their ideas.
              </p>
              <p>
                Yet in today&apos;s agency world, great ideas often get lost in translation — split between a branding
                shop, a social media freelancer, a performance agency and a web vendor who never speak to one another.
                JOTTIT was built to keep the spark intact from the very first sketch to the final campaign.
              </p>
              <p>
                <Placeholder>[Founding story — year founded, founders and studio origin to be added by JOTTIT]</Placeholder>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Jot it / Join it / Got it Philosophy */}
      <section
        aria-labelledby="principles-title"
        className="on-dark relative overflow-hidden bg-purple py-24 text-paper md:py-36"
      >
        <GopuramLines className="pointer-events-none absolute -left-40 bottom-0 h-[80%] w-auto text-paper/[0.08]" />
        <div className="wrap relative">
          <Eyebrow index="02" note="Brand Philosophy" className="text-paper/80">
            How ideas grow at JOTTIT
          </Eyebrow>
          <h2 id="principles-title" className="t-h1 mt-8 max-w-[16ch] text-paper">
            <RevealLines
              lines={[
                "THINK IT.",
                "JOT IT.",
                <span key="3" className="text-lime">
                  MAKE IT MATTER.
                </span>,
              ]}
            />
          </h2>
          <Reveal className="mt-8 max-w-2xl">
            <p className="t-lead text-paper/90">
              Our name reflects three natural moments in the life of every meaningful creative project: capturing the
              initial spark, connecting the right people around it, and turning it into commercial reality.
            </p>
          </Reveal>

          <ul className="mt-16 grid gap-6 md:grid-cols-3">
            {jotJoinGot.map((p, i) => (
              <Reveal
                as="li"
                key={p.cue}
                delay={i * 0.08}
                className="border-2 border-paper/25 bg-purple-deep p-8 shadow-[8px_8px_0_0_#D9E56B] md:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="t-hand text-2xl text-lime">
                    {p.step} · {p.title}
                  </span>
                  <JotMark className="size-4 text-lime" />
                </div>
                <h3 className="mt-4 font-display text-3xl font-bold uppercase tracking-[-0.03em] text-paper">
                  {p.cue}.
                </h3>
                <p className="mt-4 text-paper/80">{p.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* The 7-Chapter Narrative Summary */}
      <section aria-labelledby="about-evolution-title" className="wrap py-24 md:py-36">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-5">
            <Eyebrow index="03" note="Creative Concept">
              The Evolution of Ideas
            </Eyebrow>
            <h2 id="about-evolution-title" className="t-h2 mt-8">
              <RevealLines lines={["Seven chapters", "of human", "expression."]} />
            </h2>
            <p className="mt-6 text-ink/75">
              Our creative philosophy is inspired by how humans have communicated across time — a poetic studio
              metaphor linking the first mark on stone to modern brand building.
            </p>
            <KolamLattice cells={4} className="mt-10 w-44 text-purple" strokeWidth={1.25} />
          </div>
          <ol className="space-y-6 lg:col-span-6 lg:col-start-7">
            {evolutionChapters.map((ch, i) => (
              <Reveal
                as="li"
                key={ch.number}
                delay={i * 0.04}
                className="border-t-2 border-ink pt-5"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-display text-xs font-bold uppercase tracking-[0.16em] text-purple">
                    CHAPTER {ch.number} — {ch.eraTag}
                  </span>
                  <span className="t-hand text-lg text-terracotta">{ch.visualNote.split("·")[0]}</span>
                </div>
                <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-[-0.02em] text-ink">
                  {ch.title}
                </h3>
                <p className="mt-2 text-sm text-ink/75">{ch.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <TempleBorder className="block text-ink/25" />

      {/* Team */}
      <section aria-labelledby="team-title" className="bg-parchment py-24 md:py-36">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-x-8">
            <div className="lg:col-span-7">
              <Eyebrow index="04" note="The Studio">
                The people behind JOTTIT
              </Eyebrow>
              <h2 id="team-title" className="t-h1 mt-8">
                <RevealLines lines={["THE RIGHT PEOPLE", "MAKE IT BIGGER."]} />
              </h2>
            </div>
            <Reveal className="lg:col-span-4 lg:col-start-9">
              <p className="text-ink/80">
                Strategists, brand designers, writers, filmmakers, performance marketers and web engineers collaborating
                under one roof.
              </p>
              <p className="mt-3 text-sm text-stone">
                Team profiles below are placeholders awaiting verified names, roles and portraits.
              </p>
            </Reveal>
          </div>

          <ul className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal as="li" key={i} delay={i * 0.06}>
                <div
                  className={`relative flex aspect-[4/5] items-center justify-center overflow-hidden border-2 border-ink ${cardTones[i % 4]}`}
                >
                  <KolamLattice cells={3 + (i % 3)} animate={false} className="w-3/5 opacity-80" strokeWidth={1.2} />
                  <span className="absolute bottom-3 left-3 border border-dashed border-current px-2 py-0.5 font-display text-[0.68rem] uppercase tracking-[0.14em]">
                    Portrait placeholder
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-[-0.02em]">{m.name}</h3>
                <p className="t-eyebrow mt-1 text-purple">{m.role}</p>
                <p className="mt-3 text-sm italic text-ink/65">{m.bio}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="about-next-title"
        className="on-dark border-t border-ink bg-purple py-20 text-paper md:py-28"
      >
        <div className="wrap flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <Eyebrow index="05" note="Start Something" className="text-paper/80">
              Work with JOTTIT
            </Eyebrow>
            <h2 id="about-next-title" className="t-h2 mt-6 max-w-[16ch] text-paper">
              Got an idea? Let&apos;s make it matter.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="lime">
              Let&apos;s Start Something
            </ButtonLink>
            <ButtonLink href="/work" variant="outline-light">
              Explore Our Work
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
