"use client";

import { useState } from "react";
import { KolamLattice } from "@/components/art/KolamLattice";

const inks = [
  { name: "Ink", value: "#111111", bg: "bg-ivory" },
  { name: "Maroon", value: "#8E2635", bg: "bg-ivory" },
  { name: "Leaf", value: "#356B45", bg: "bg-ivory" },
  { name: "Ivory on ink", value: "#F5EBDD", bg: "bg-ink" },
] as const;

/** A small live experiment: redraw the kolam lattice at different densities. */
export function KolamPlayground() {
  const [cells, setCells] = useState(4);
  const [ink, setInk] = useState(0);
  const current = inks[ink];

  return (
    <div className={`flex flex-col border border-ink/15 transition-colors duration-500 ${current.bg}`}>
      <div className="relative flex aspect-square items-center justify-center p-8 sm:aspect-[16/10] lg:aspect-square">
        <KolamLattice
          key={`${cells}-${ink}`}
          cells={cells}
          stroke={current.value}
          dot={ink === 3 ? "#F5C400" : current.value}
          strokeWidth={1.25}
          duration={1.8}
          className="aspect-square h-full max-h-[22rem] w-auto max-w-full"
          label={`Kolam lattice drawn on a ${cells} by ${cells} dot grid`}
        />
      </div>
      <div className="grid gap-4 border-t border-ink/15 bg-ivory p-5 text-ink sm:grid-cols-2">
        <fieldset>
          <legend className="t-eyebrow mb-2 text-stone">Grid</legend>
          <div className="flex gap-1">
            {[3, 4, 5, 6, 7].map((n) => (
              <button
                key={n}
                type="button"
                aria-pressed={cells === n}
                onClick={() => setCells(n)}
                className="min-h-11 min-w-11 border border-ink/20 font-display text-sm tabular-nums transition-colors hover:border-ink aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-turmeric"
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
                className="inline-flex min-h-11 min-w-11 items-center justify-center border border-ink/20 transition-colors hover:border-ink aria-pressed:border-ink aria-pressed:ring-1 aria-pressed:ring-ink"
              >
                <span
                  aria-hidden="true"
                  className="block size-5 rotate-45 border border-ink/30"
                  style={{ background: i === 3 ? "#111111" : c.value }}
                />
              </button>
            ))}
          </div>
        </fieldset>
      </div>
    </div>
  );
}
