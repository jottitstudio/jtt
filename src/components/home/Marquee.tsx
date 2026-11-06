import { services } from "@/content/services";

/** Slow, decorative brand & service ticker. Hidden from assistive tech (services are listed below). */
export function Marquee() {
  const items = [
    "THINK IT",
    "JOT IT",
    "MAKE IT MATTER",
    ...services.map((s) => s.title),
  ];
  const row = (
    <ul className="flex shrink-0 items-center">
      {items.map((t) => (
        <li key={t} className="flex items-center">
          <span className="px-8 font-display text-[clamp(1.35rem,2.6vw,2.2rem)] font-bold uppercase tracking-[-0.03em] md:px-10">
            {t}
          </span>
          <svg viewBox="0 0 20 20" className="size-4 shrink-0 text-purple" aria-hidden="true">
            <path d="M10 1 L12.5 7.5 L19 10 L12.5 12.5 L10 19 L7.5 12.5 L1 10 L7.5 7.5 Z" fill="currentColor" />
          </svg>
        </li>
      ))}
    </ul>
  );
  return (
    <div aria-hidden="true" className="marquee overflow-hidden border-y-2 border-ink bg-lime py-4 text-ink md:py-6">
      <div className="marquee-track">
        {row}
        {row}
      </div>
    </div>
  );
}
