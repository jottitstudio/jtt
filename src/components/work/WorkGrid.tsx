"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { Project, Service } from "@/lib/types";
import { WorkCard } from "./WorkCard";

export function WorkGrid({
  projects,
  services,
}: {
  projects: Project[];
  services: Pick<Service, "slug" | "shortTitle">[];
}) {
  const [filter, setFilter] = useState<string>("all");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.services.includes(filter as Service["slug"]));
  const filters = [{ slug: "all", shortTitle: "All work" }, ...services];

  return (
    <div>
      <div className="sticky top-[var(--header-h)] z-20 -mx-[var(--gutter)] border-y border-ink/15 bg-ivory/90 px-[var(--gutter)] backdrop-blur-md">
        <div className="flex items-center gap-6 overflow-x-auto py-3 [scrollbar-width:none]" role="group" aria-label="Filter projects by service">
          <span className="t-eyebrow hidden shrink-0 text-stone md:inline">Filter</span>
          <ul className="flex shrink-0 gap-2">
            {filters.map((f) => {
              const count =
                f.slug === "all" ? projects.length : projects.filter((p) => p.services.includes(f.slug as Service["slug"])).length;
              return (
                <li key={f.slug}>
                  <button
                    type="button"
                    aria-pressed={filter === f.slug}
                    onClick={() => setFilter(f.slug)}
                    className="inline-flex min-h-11 items-center gap-2 whitespace-nowrap border border-ink/20 px-4 font-display text-sm transition-colors hover:border-ink aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-ivory"
                  >
                    {f.shortTitle}
                    <span className="text-xs tabular-nums opacity-60">{count}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {filtered.length} {filtered.length === 1 ? "project" : "projects"}
      </p>

      <motion.ul layout className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 md:mt-20 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-24">
        <AnimatePresence mode="popLayout" initial={false}>
          {filtered.map((p, i) => (
            <motion.li
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={i % 3 === 1 ? "lg:mt-24" : ""}
            >
              <WorkCard
                project={p}
                index={projects.indexOf(p)}
                preload={i < 2}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-ink/70">No projects in this category yet — check back soon.</p>
      )}
    </div>
  );
}
