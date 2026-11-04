/** Minimal, layout-stable placeholder shown while route data resolves. */
export function PageFallback() {
  return (
    <div className="wrap min-h-[90svh] pt-[calc(var(--header-h)+3rem)] md:pt-[calc(var(--header-h)+5rem)]" aria-busy="true">
      <span className="sr-only">Loading…</span>
      <div className="h-3 w-40 bg-ink/10" />
      <div className="mt-10 h-[clamp(3rem,10vw,9rem)] w-3/4 bg-ink/5" />
      <div className="mt-4 h-[clamp(3rem,10vw,9rem)] w-1/2 bg-ink/5" />
    </div>
  );
}
