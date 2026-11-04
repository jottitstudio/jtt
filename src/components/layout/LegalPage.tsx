import type { ReactNode } from "react";
import { Eyebrow, Placeholder } from "@/components/ui/Eyebrow";

/** Shared layout for legal pages. Content is a placeholder pending legal review. */
export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="wrap pt-[calc(var(--header-h)+3rem)] pb-28 md:pt-[calc(var(--header-h)+5rem)]">
      <Eyebrow>Legal</Eyebrow>
      <h1 className="t-h1 mt-8">{title}</h1>
      <div className="mt-6">
        <Placeholder>[Last updated — date to be added]</Placeholder>
      </div>
      <div className="mt-14 grid lg:grid-cols-12">
        <div className="space-y-6 text-ink/80 lg:col-span-7 lg:col-start-4 [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-[-0.02em] [&_h2]:text-ink">
          <p className="border-l-2 border-turmeric bg-paper p-5 text-sm">
            This page is a placeholder outline. jottitstudio should replace it with a policy reviewed by a qualified
            legal professional before the site goes live.
          </p>
          {children}
        </div>
      </div>
    </section>
  );
}
