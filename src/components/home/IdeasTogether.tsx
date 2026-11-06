import { jotJoinGot } from "@/content/studio";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealLines } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

/**
 * SECTION 04 — IDEAS COME TOGETHER
 * Headline: EVERY GREAT IDEA HAS A BEGINNING. THE RIGHT PEOPLE MAKE IT BIGGER.
 * Introduces collaboration, creative brainstorming and the natural Jot it · Join it · Got it story.
 */
export function IdeasTogether() {
  return (
    <section
      id="ideas-together"
      className="relative overflow-hidden border-t-2 border-ink bg-paper py-24 text-ink md:py-36"
    >
      <div aria-hidden="true" className="sketch-grid pointer-events-none absolute inset-0 text-ink opacity-40" />

      <div className="wrap relative">
        <div className="grid gap-y-10 lg:grid-cols-12 lg:items-end lg:gap-x-10">
          <div className="lg:col-span-8">
            <Eyebrow index="SECTION 04" note="Collaboration &amp; Creative Alchemy">
              Ideas Come Together
            </Eyebrow>
            <h2 id="ideas-together-title" className="t-h1 mt-8">
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

          <Reveal className="space-y-4 lg:col-span-4">
            <p className="t-lead text-ink">
              A lone sketch on a notepad is only a starting point. Magic happens when strategy, design, storytelling,
              film and technology collide around the same table.
            </p>
            <p className="text-ink/75">
              At JOTTIT, we bring diverse creative minds together with your business vision — connecting dots, testing
              angles and turning rough sparks into work that moves people.
            </p>
          </Reveal>
        </div>

        {/* Cut-out Collage Cards: Jot it · Join it · Got it */}
        <ol role="list" className="mt-16 grid gap-8 md:mt-24 lg:grid-cols-3">
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
                className={`relative flex flex-col justify-between border-2 p-8 md:p-10 ${cardStyles[i % 3]}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 border-b border-current/20 pb-4">
                    <span className="font-display text-xs font-bold uppercase tracking-[0.16em]">
                      Stage {card.step}
                    </span>
                    <span className="t-hand text-3xl">{card.cue}</span>
                  </div>
                  <h3 className="t-h3 mt-6">{card.title}</h3>
                  <p className="mt-4 text-[0.98rem] leading-relaxed opacity-85">{card.body}</p>
                </div>

                <div className="mt-8 flex items-center justify-between pt-4 text-xs font-display font-bold uppercase tracking-[0.14em] opacity-75">
                  <span>{card.cue}</span>
                  <span>→</span>
                </div>
              </Reveal>
            );
          })}
        </ol>

        <Reveal delay={0.2} className="mt-14 flex flex-col items-start justify-between gap-6 border-2 border-ink bg-parchment p-6 sm:flex-row sm:items-center md:p-8">
          <div>
            <p className="font-display text-lg font-bold uppercase tracking-[-0.02em] text-ink">
              Have a rough sketch, a half-formed thought or an ambitious brief?
            </p>
            <p className="mt-1 text-sm text-ink/75">
              Bring us the spark — our team will help you shape, design and launch it.
            </p>
          </div>
          <ButtonLink href="/contact" variant="purple">
            Bring Us Your Idea
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
