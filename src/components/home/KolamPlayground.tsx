"use client";

import { useState } from "react";
import { KolamLattice } from "@/components/art/KolamLattice";

const inks = [
  { name: "Signature Purple", value: "#5F2DB2", bg: "bg-parchment" },
  { name: "Ink Black", value: "#17151B", bg: "bg-parchment" },
  { name: "Terracotta", value: "#D96B42", bg: "bg-parchment" },
  { name: "Paper on Purple", value: "#FFFFFF", bg: "bg-purple" },
] as const;

/** A live sketchbook experiment: redraw the JOTTIT sketch lattice at different densities. */
export function KolamPlayground() {
  const [cells, setCells] = useState(4);
  const [ink, setInk] = useState(0);
  const current = inks[ink];

  return (
    <div className={`flex flex-col border-2 border-ink transition-colors duration-500 ${current.bg}`}>
      <div className="relative flex aspect-square items-center justify-center p-8 sm:aspect-[16/10] lg:aspect-square">
        <KolamLattice
          key={`${cells}-${ink}`}
          cells={cells}
          stroke={current.value}
          dot={ink === 3 ? "#D9E56B" : current.value}
          strokeWidth={1.35}
          duration={1.8}
          className="aspect-square h-full max-h-[22rem] w-auto max-w-full"
          label={`JOTTIT sketch lattice drawn on a ${cells} by ${cells} dot grid`}
        />
      </div>
      <div className="grid gap-4 border-t-2 border-ink bg-paper p-5 text-ink sm:grid-cols-2">
        <fieldset>
          <legend className="t-eyebrow mb-2 text-stone">Grid</legend>
          <div className="flex gap-1">
            {[3, 4, 5, 6, 7].map((n) => (
              <button
                key={n}
                type="button"
                aria-pressed={cells === n}
                onClick={() => setCells(n)}
                className="min-h-11 min-w-11 border border-ink/25 font-display text-sm font-bold tabular-nums transition-colors hover:border-ink aria-pressed:border-ink aria-pressed:bg-purple aria-pressed:text-paper"
              >
                {n}
                <span className="sr-only"> by {n}</span>
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="t-eyebrow mb-2 text-stone">Colour</legend>
          <div className="flex gap-1">
            {inks.map((c, i) => (
              <button
                key={c.name}
                type="button"
                aria-pressed={ink === i}
                aria-label={c.name}
                onClick={() => setInk(i)}
                className="inline-flex min-h-11 min-w-11 items-center justify-center border border-ink/25 transition-colors hover:border-ink aria-pressed:border-ink aria-pressed:ring-1 aria-pressed:ring-ink"
              >
                <span
                  aria-hidden="true"
                  className="block size-5 rotate-45 border border-ink/30"
                  style={{ background: i === 3 ? "#5F2DB2" : c.value }}
                />
              </button>
            ))}
          </div>
        </fieldset>
      </div>
    </div>
  );
}
