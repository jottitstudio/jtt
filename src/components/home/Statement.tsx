import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealLines } from "@/components/ui/Reveal";

/** Three overlapping circles — strategy, creativity, marketing — meeting in one studio. */
function OneRoofDiagram() {
  return (
    <svg viewBox="0 0 320 300" className="w-full max-w-[22rem]" role="img" aria-labelledby="roof-title">
      <title id="roof-title">Strategy, creativity and marketing overlap — jottitstudio works where all three meet.</title>
      <g fill="none" stroke="currentColor" strokeWidth="1.25">
        <circle cx="120" cy="110" r="82" />
        <circle cx="200" cy="110" r="82" />
        <circle cx="160" cy="180" r="82" />
      </g>
      <path d="M160 92 L178 128 L160 164 L142 128 Z" fill="#F5C400" stroke="#111" strokeWidth="1.25" />
      <g fontFamily="var(--font-display)" fontSize="11" letterSpacing="1.6" fill="currentColor">
        <text x="72" y="82">STRATEGY</text>
        <text x="196" y="82">CREATIVITY</text>
        <text x="122" y="238">MARKETING</text>
      </g>
    </svg>
  );
}

export function Statement() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="wrap py-24 md:py-40">
      <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-3">
          <Eyebrow index="01" tamil="அணுகுமுறை">
            Our approach
          </Eyebrow>
        </div>
        <div className="lg:col-span-9">
          <h2 id="approach-title" className="t-h1">
            <RevealLines lines={["Good brands", "don\u2019t happen", "by accident."]} />
          </h2>
        </div>
      </div>

      <div className="mt-16 grid gap-y-12 md:mt-24 md:grid-cols-2 md:gap-x-8 lg:grid-cols-12">
        <Reveal delay={0.2} className="order-last text-ink md:col-span-2 lg:order-none lg:col-span-3">
          <OneRoofDiagram />
        </Reveal>
        <Reveal className="lg:col-span-4">
          <p className="t-lead">
            Every brand people genuinely remember is the result of hundreds of deliberate choices — about what to say, how to
            look, where to show up and who to speak to.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="space-y-5 text-ink/75 lg:col-span-4 lg:col-start-9">
          <p>
            jottitstudio exists to make those choices with you, end to end. We begin with strategy — understanding your
            business, your audience and the space you want to own. We translate that into an identity, content and
            campaigns. Then we put it in front of the right people, measure what works and keep refining.
          </p>
          <p>
            Because branding, content, performance marketing, film, photography and web development live in the same
            studio, nothing gets lost between agencies. The idea that shapes your logo is the same idea that drives your
            next campaign.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
