import type { ReactNode } from "react";

/** Numbered editorial section label with optional handwritten note */
export function Eyebrow({
  index,
  children,
  className = "",
  note,
  tamil,
}: {
  index?: string;
  children: ReactNode;
  className?: string;
  /** Optional handwritten annotation shown alongside the eyebrow */
  note?: string;
  /** Legacy prop mapped to handwritten note if supplied */
  tamil?: string;
}) {
  const scrawl = note ?? tamil;
  return (
    <p className={`t-eyebrow flex flex-wrap items-center gap-3 ${className}`}>
      {index && (
        <span className="inline-flex items-center justify-center border border-current px-2 py-0.5 tabular-nums">
          {index}
        </span>
      )}
      <span aria-hidden="true" className="inline-block h-[1.5px] w-7 bg-current" />
      <span>{children}</span>
      {scrawl && (
        <span className="t-hand text-lg normal-case tracking-normal opacity-80">
          — {scrawl}
        </span>
      )}
    </p>
  );
}

/** Visibly marked placeholder for information JOTTIT has not supplied yet. */
export function Placeholder({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-block border border-dashed border-current/50 px-1.5 py-0.5 text-[0.85em] italic opacity-85 ${className}`}
      title="Placeholder — to be replaced with real studio information"
    >
      {children}
    </span>
  );
}
