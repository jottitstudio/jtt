import { jotJoinGot } from "@/content/studio";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealLines } from "@/components/ui/Reveal";

/**
 * SECTION 04 — IDEAS COME TOGETHER
 * Clean, visual 3-card layout: Jot it · Join it · Got it.
 */
export function IdeasTogether() {
  return (
    <section
      id="ideas-together"
      className="relative overflow-hidden border-t-2 border-ink bg-paper py-20 text-ink md:py-32"
    >
      <div aria-hidden="true" className="sketch-grid pointer-events-none absolute inset-0 text-ink opacity-35" />

      <div className="wrap relative">
        <div className="grid gap-y-6 lg:grid-cols-12 lg:items-end lg:gap-x-10">
          <div className="lg:col-span-8">
            <Eyebrow index="04" note="Collaboration">
              Ideas Come Together
            </Eyebrow>
            <h2 id="ideas-together-title" className="t-h1 mt-6">
              <RevealLines
                lines={[
                  "Every great idea",
                  "has a beginning.",
                  <span key="bigger" className="text-purple">
                    The right people
                  </span>,
                  "make it bigger.",
                ]}
              />
            </h2>
          </div>

          <Reveal className="lg:col-span-4">
            <p className="t-lead text-ink/85">
              Strategy, design, content, film and code — working around one table.
            </p>
          </Reveal>
        </div>

        {/* Clean 3-Card Trilogy: Jot it · Join it · Got it */}
        <ol role="list" className="mt-14 grid gap-6 md:mt-20 lg:grid-cols-3">
          {jotJoinGot.map((card, i) => {
            const cardStyles = [
              "bg-parchment border-ink shadow-[8px_8px_0_0_#17151B]",
              "bg-purple text-paper border-ink shadow-[8px_8px_0_0_#D96B42]",
              "bg-lime text-ink border-ink shadow-[8px_8px_0_0_#5F2DB2]",
            ];
            return (
              <Reveal
                as="li"
                key={card.cue}
                delay={i * 0.08}
                className={`relative flex flex-col justify-between border-2 p-7 md:p-9 ${cardStyles[i % 3]}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 border-b border-current/20 pb-3">
                    <span className="font-display text-xs font-bold uppercase tracking-[0.16em]">
                      {card.step}
                    </span>
                    <span className="t-hand text-3xl">{card.cue}.</span>
                  </div>
                  <h3 className="t-h3 mt-5">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed opacity-85">{card.body}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
