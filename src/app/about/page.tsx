import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Eyebrow, Placeholder } from "@/components/ui/Eyebrow";
import { Reveal, RevealLines } from "@/components/ui/Reveal";
import { Process } from "@/components/home/Process";
import { ContactCTA } from "@/components/home/ContactCTA";
import { KolamLattice } from "@/components/art/KolamLattice";
import { GopuramLines, TempleBorder } from "@/components/art/Motifs";
import { team } from "@/content/studio";

export const metadata: Metadata = {
  title: "About",
  description:
    "jottitstudio is a creative and marketing studio bringing strategy, design, content, film and technology together — with a contemporary South Indian sensibility.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    word: "Rooted",
    tamil: "வேர்",
    body: "We draw on the visual intelligence of where we come from — the logic of a kolam, the rhythm of temple architecture, the confidence of a handloom border — and translate it for today.",
  },
  {
    word: "Rigorous",
    tamil: "ஒழுங்கு",
    body: "Like a kolam drawn on a dot grid, good creative work follows a system. We build frameworks that make brands consistent, scalable and easy to use.",
  },
  {
    word: "Restless",
    tamil: "தேடல்",
    body: "We are curious by default. We test ideas, learn from what audiences actually do and keep refining long after launch.",
  },
];

const cardTones = ["bg-turmeric text-ink", "bg-ink text-ivory", "bg-ivory-deep text-ink", "bg-maroon text-ivory"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the studio"
        tamil="எங்களைப் பற்றி"
        lines={["Rooted here.", "Made for", "everywhere."]}
        intro={
          <p>
            jottitstudio is a full-service creative and marketing studio. We help businesses build distinctive brands and
            grow them — bringing strategy, design, content, performance marketing, film, photography and web development
            together under one roof.
          </p>
        }
      />

      {/* Story */}
      <section aria-labelledby="story-title" className="wrap pb-24 md:pb-36">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-8">
          <Reveal as="figure" className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden bg-ivory-deep">
              <Image
                src="/images/art/studio-architecture.jpg"
                alt="Thin-line abstraction of stepped temple tiers and pillar rhythms in ivory, terracotta and turmeric."
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-xs text-stone">Tier &amp; pillar — a studio experiment.</figcaption>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-16">
            <Eyebrow index="01" tamil="கதை">
              Our story
            </Eyebrow>
            <h2 id="story-title" className="t-h2 mt-8">
              <RevealLines lines={["Why one", "studio?"]} />
            </h2>
            <Reveal className="mt-10 space-y-5 text-ink/80">
              <p className="t-lead text-ink">
                We kept seeing the same story: a business invests in a beautiful brand, then hands it to a social team, an
                ads agency and a web developer who have never spoken to each other.
              </p>
              <p>
                Somewhere between those handovers, the idea gets diluted. Colours drift, the voice changes, and campaigns
                start from zero every time. jottitstudio was built to close those gaps — one team holding the idea from
                the first strategy session to the hundredth post.
              </p>
              <p>
                <Placeholder>[Founding story — year founded, founders and origin to be added by jottitstudio]</Placeholder>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section aria-labelledby="principles-title" className="on-dark relative overflow-hidden bg-ink py-24 text-ivory md:py-36">
        <GopuramLines className="pointer-events-none absolute -left-40 bottom-0 h-[80%] w-auto text-ivory/[0.07]" />
        <div className="wrap relative">
          <Eyebrow index="02" tamil="நம்பிக்கை" className="text-ivory/60">
            Philosophy
          </Eyebrow>
          <h2 id="principles-title" className="t-h1 mt-8 max-w-[16ch]">
            <RevealLines
              lines={[
                "Contemporary,",
                <span key="2">
                  with <span className="text-turmeric">roots.</span>
                </span>,
              ]}
            />
          </h2>
          <Reveal className="mt-10 max-w-2xl">
            <p className="t-lead text-ivory/80">
              Our South Indian influence isn&apos;t a costume. It&apos;s a way of seeing — geometric, rhythmic, generous with
              colour and precise with structure. We use it to make work that feels distinctive on a global stage.
            </p>
          </Reveal>
          <ul className="mt-20 grid gap-px bg-ivory/15 md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.word} delay={i * 0.08} className="bg-ink p-8 md:p-10">
                <p lang="ta" className="tamil text-lg text-turmeric">
                  {p.tamil}
                </p>
                <h3 className="t-h3 mt-4">{p.word}</h3>
                <p className="mt-4 text-ivory/70">{p.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach */}
      <section aria-labelledby="about-approach-title" className="wrap py-24 md:py-36">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-5">
            <Eyebrow index="03" tamil="அணுகுமுறை">
              Approach
            </Eyebrow>
            <h2 id="about-approach-title" className="t-h2 mt-8">
              <RevealLines lines={["Strategy,", "creativity,", "marketing."]} />
            </h2>
            <KolamLattice cells={4} className="mt-12 w-44 text-ink" strokeWidth={1} />
          </div>
          <div className="space-y-12 lg:col-span-6 lg:col-start-7">
            {[
              {
                t: "Strategy gives the work a reason",
                b: "Before we design anything, we understand the business, the audience and the competitive landscape. That clarity makes every creative decision easier — and easier to defend.",
              },
              {
                t: "Creativity makes it impossible to ignore",
                b: "Strategy alone doesn't stop anyone scrolling. We invest in ideas, craft and detail so your brand is noticed, felt and remembered.",
              },
              {
                t: "Marketing puts it to work",
                b: "We take the work into the world — through content, campaigns and channels — and measure what happens, so the brand keeps getting stronger.",
              },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 0.06} className="border-t border-ink pt-6">
                <h3 className="t-h3">{x.t}</h3>
                <p className="mt-4 text-ink/75">{x.b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TempleBorder className="block text-ink/25" />

      {/* Team */}
      <section aria-labelledby="team-title" className="bg-paper py-24 md:py-36">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-x-8">
            <div className="lg:col-span-7">
              <Eyebrow index="04" tamil="குழு">
                The team
              </Eyebrow>
              <h2 id="team-title" className="t-h1 mt-8">
                <RevealLines lines={["The people", "behind the work."]} />
              </h2>
            </div>
            <Reveal className="lg:col-span-4 lg:col-start-9">
              <p className="text-ink/75">
                Strategists, designers, writers, filmmakers, marketers and developers — working as one team.
              </p>
              <p className="mt-3 text-sm text-stone">
                Team profiles below are placeholders awaiting real names, roles and portraits.
              </p>
            </Reveal>
          </div>

          <ul className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal as="li" key={i} delay={i * 0.06}>
                <div className={`relative flex aspect-[4/5] items-center justify-center overflow-hidden ${cardTones[i % 4]}`}>
                  <KolamLattice cells={3 + (i % 3)} animate={false} className="w-3/5 opacity-80" strokeWidth={1} />
                  <span className="absolute bottom-3 left-3 border border-dashed border-current px-2 py-0.5 text-[0.7rem] uppercase tracking-[0.14em]">
                    Portrait placeholder
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-[-0.02em]">{m.name}</h3>
                <p className="t-eyebrow mt-1 text-stone">{m.role}</p>
                <p className="mt-3 text-sm italic text-ink/60">{m.bio}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Process index="05" />
      <ContactCTA />
    </>
  );
}
