import { GopuramLines } from "@/components/art/Motifs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealLines } from "@/components/ui/Reveal";

export function Philosophy() {
  return (
    <section aria-labelledby="philosophy-title" className="on-dark relative overflow-hidden bg-ink py-28 text-ivory md:py-44">
      <GopuramLines className="pointer-events-none absolute -right-[10%] bottom-0 h-[90%] w-auto text-ivory/[0.09] md:right-0" />
      <div className="wrap relative">
        <Eyebrow index="04" tamil="நம்பிக்கை" className="text-ivory/70">
          Philosophy
        </Eyebrow>
        <h2 id="philosophy-title" className="t-h1 mt-10 md:mt-14">
          <RevealLines
            lines={[
              <span key="1" className="text-ivory/40">Not just creative.</span>,
              <span key="2" className="text-ivory/40">Not just marketing.</span>,
              <span key="3" className="text-turmeric">Both.</span>,
              <span key="4" className="text-turmeric md:pl-[1.2em]">Better.</span>,
            ]}
          />
        </h2>
        <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-12 md:gap-x-8">
          <Reveal className="md:col-span-7 md:col-start-6 lg:col-span-5 lg:col-start-5">
            <p className="t-lead text-ivory/90">
              Creative agencies often make work that looks remarkable but can&apos;t prove its value. Marketing agencies
              often hit their numbers with work nobody remembers.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7 md:col-start-6 lg:col-span-3 lg:col-start-10 lg:row-start-1">
            <p className="text-ivory/65">
              We refuse that trade-off. Strategy keeps the creative honest; craft makes the marketing worth paying attention
              to. Together, they build brands that are both loved and effective.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
