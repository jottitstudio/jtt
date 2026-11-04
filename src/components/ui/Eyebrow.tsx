import type { ReactNode } from "react";

/** Numbered editorial section label, e.g. "02 — Services" */
export function Eyebrow({
  index,
  children,
  className = "",
  tamil,
}: {
  index?: string;
  children: ReactNode;
  className?: string;
  /** Optional Tamil accent word shown alongside the label */
  tamil?: string;
}) {
  return (
    <p className={`t-eyebrow flex items-center gap-3 ${className}`}>
      {index && <span className="tabular-nums">{index}</span>}
      <span aria-hidden="true" className="inline-block h-px w-8 bg-current" />
      <span>{children}</span>
      {tamil && (
        <span lang="ta" className="tamil text-[0.8rem] opacity-60">
          {tamil}
        </span>
      )}
    </p>
  );
}

/** Visibly marked placeholder for information jottitstudio has not supplied yet. */
export function Placeholder({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-block border border-dashed border-current/50 px-1.5 py-0.5 text-[0.85em] italic opacity-80 ${className}`}
      title="Placeholder — to be replaced with real information"
    >
      {children}
    </span>
  );
}
