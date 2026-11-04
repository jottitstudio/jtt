import Link from "next/link";
import { legalNav, mainNav, site } from "@/content/site";
import { services } from "@/content/services";
import { Wordmark } from "./Logo";
import { TempleBorder, Arrow } from "@/components/art/Motifs";
import { Placeholder } from "@/components/ui/Eyebrow";

export function Footer() {
  return (
    <footer className="on-dark relative bg-ink text-ivory">
      <TempleBorder className="block text-turmeric" />
      <div className="wrap pt-20 pb-10 md:pt-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" aria-label={`${site.name} — home`} className="inline-block">
              <Wordmark className="h-10 w-auto sm:h-12 md:h-14" />
            </Link>
            <p className="mt-6 max-w-sm text-ivory/70">
              Branding, content, marketing, film and websites — one creative partner, from first idea to measurable growth.
            </p>
            <div className="mt-8">
              <p className="t-eyebrow text-ivory/50">New projects</p>
              <p className="mt-2 font-display text-lg">
                <Placeholder>{site.contact.email}</Placeholder>
              </p>
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-7">
            <div>
              <h2 className="t-eyebrow mb-4 text-ivory/50">Studio</h2>
              <ul className="space-y-1">
                {mainNav.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="link-line inline-flex min-h-11 items-center py-1.5">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="t-eyebrow mb-4 text-ivory/50">Services</h2>
              <ul className="space-y-1">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="link-line inline-flex min-h-11 items-center py-1.5">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h2 className="t-eyebrow mb-4 text-ivory/50">Follow</h2>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 sm:block sm:space-y-3">
                {site.socials.map((s) =>
                  s.href ? (
                    <li key={s.label}>
                      <a href={s.href} className="link-line inline-flex min-h-11 items-center gap-2 py-1.5" rel="noopener noreferrer" target="_blank">
                        {s.label}
                        <Arrow direction="up-right" className="size-3.5" />
                      </a>
                    </li>
                  ) : (
                    <li key={s.label} className="py-1.5 text-ivory/60">
                      <span className="block sm:inline">{s.label}</span>{" "}
                      <span className="text-xs italic text-ivory/45">(link to be added)</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-ivory/15 pt-8 text-sm text-ivory/60 md:mt-24 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-1">
            {legalNav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="link-line inline-flex min-h-11 items-center py-1.5">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <p lang="ta" className="tamil text-ivory/40">
            வடிவம் · உத்தி · வளர்ச்சி
          </p>
        </div>
      </div>
    </footer>
  );
}
