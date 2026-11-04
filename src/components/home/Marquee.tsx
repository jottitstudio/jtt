import { services } from "@/content/services";

/** Slow, decorative service ticker. Hidden from assistive tech (services are listed below). */
export function Marquee() {
  const items = [...services.map((s) => s.title), "Strategy", "Art direction"];
  const row = (
    <ul className="flex shrink-0 items-center">
      {items.map((t) => (
        <li key={t} className="flex items-center">
          <span className="px-8 font-display text-[clamp(1.5rem,3vw,2.5rem)] font-semibold uppercase tracking-[-0.03em] md:px-12">
            {t}
          </span>
          <svg viewBox="0 0 20 20" className="size-4 shrink-0" aria-hidden="true">
            <path d="M10 0 L20 10 L10 20 L0 10 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="10" cy="10" r="2" fill="currentColor" />
          </svg>
        </li>
      ))}
    </ul>
  );
  return (
    <div aria-hidden="true" className="marquee overflow-hidden border-y border-ink bg-turmeric py-5 text-ink md:py-7">
      <div className="marquee-track">
        {row}
        {row}
      </div>
    </div>
  );
}
