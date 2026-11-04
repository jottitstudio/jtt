import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
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

const growthChecklist = [
  "Clarify your market positioning, value proposition and target customer profile",
  "Design a cohesive brand identity that earns instant credibility across every channel",
  "Produce consistent social content, photography and films that stop the scroll",
  "Run conversion-focused Google, Meta and LinkedIn campaigns tied to real revenue goals",
  "Build fast, persuasive websites engineered to turn visitors into qualified enquiries",
] as const;

export function Statement() {
  return (
    <section id="introduction" className="wrap py-24 md:py-40">
      <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-3">
          <Eyebrow index="01" tamil="அறிமுகம்">
            Studio introduction
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
          <p className="mt-4 max-w-[20rem] text-xs leading-relaxed text-stone">
            Where commercial strategy, distinctive creative craft and performance marketing meet — under one studio roof.
          </p>
        </Reveal>

        <Reveal className="space-y-6 lg:col-span-4">
          <p className="t-lead">
            Most ambitious businesses hit the same growth bottleneck: their product or service is genuinely strong, but
            their brand looks fragmented, their content lacks direction, and their marketing is split across disconnected
            vendors.
          </p>
          <p className="text-ink/75">
            jottitstudio exists to solve that problem end to end. Every brand people trust and buy from is the result of
            deliberate choices — about how you position your offer, how you look, what you say and how you reach the
            right buyers.
          </p>
          <p className="text-ink/75">
            Because branding, social media, content, performance marketing, video production, photography and website
            development live inside the same studio, nothing gets lost in handovers. The strategic insight that shapes
            your identity is the exact same insight that drives your website and paid campaigns.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col justify-between gap-8 border-t border-ink pt-8 lg:col-span-4 lg:col-start-9 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <div>
            <h3 className="t-eyebrow text-ink">How we help your business grow</h3>
            <ul role="list" className="mt-6 space-y-4">
              {growthChecklist.map((point) => (
                <li key={point} className="grid grid-cols-[1rem_1fr] items-start gap-2.5 text-[0.95rem] text-ink/80">
                  <span aria-hidden="true" className="mt-2 inline-block size-2 rotate-45 bg-turmeric ring-1 ring-ink" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-ink/15 pt-6">
            <p className="text-sm text-ink/70">
              Looking for a partner to sharpen your brand and accelerate customer growth?
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-6">
              <ButtonLink href="/contact" variant="ghost" className="link-line">
                Book a discovery call
              </ButtonLink>
              <ButtonLink href="#services" variant="ghost" className="link-line text-stone hover:text-ink">
                Explore our 5 services
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
