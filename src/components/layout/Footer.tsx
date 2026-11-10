"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { legalNav, mainNav, site } from "@/content/site";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { Logo } from "./Logo";
import { TempleBorder, Arrow } from "@/components/art/Motifs";
import { Placeholder } from "@/components/ui/Eyebrow";

export function Footer() {
  const pathname = usePathname();
  if (pathname === "/") {
    return null;
  }

  return (
    <footer className="on-dark relative bg-ink text-paper">
      <TempleBorder className="block text-lime" />
      <div className="wrap pt-20 pb-12 md:pt-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" aria-label={`${site.name} — home`} className="inline-block">
              <Logo tone="white" svgClassName="h-12 w-auto sm:h-14 md:h-16" />
            </Link>
            <p className="mt-5 font-display text-sm font-bold uppercase tracking-[0.18em] text-lime">
              Think It. Jot It. Make It Matter.
            </p>
            <p className="mt-4 max-w-sm text-paper/75">
              Every big idea starts with a little jot. We bring ideas to life through branding, design, content,
              performance marketing, video and digital experiences.
            </p>
            <dl className="mt-8 space-y-4 border-t border-paper/15 pt-6 text-sm">
              <div>
                <dt className="t-eyebrow text-paper/50">Email</dt>
                <dd className="mt-1 font-display text-base">
                  <Placeholder>{site.contact.email}</Placeholder>
                </dd>
              </div>
              <div>
                <dt className="t-eyebrow text-paper/50">Phone &amp; WhatsApp</dt>
                <dd className="mt-1 font-display text-base">
                  <Placeholder>{site.contact.phone}</Placeholder>
                </dd>
              </div>
              <div>
                <dt className="t-eyebrow text-paper/50">Studio</dt>
                <dd className="mt-1 font-display text-base">
                  <Placeholder>{site.contact.location}</Placeholder>
                </dd>
              </div>
            </dl>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8">
            <div>
              <h2 className="t-eyebrow mb-4 text-paper/50">Navigation</h2>
              <ul className="space-y-1">
                {mainNav.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="link-line inline-flex min-h-11 min-w-11 items-center py-1.5 text-paper/85 hover:text-lime">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="t-eyebrow mb-4 text-paper/50">Services</h2>
              <ul className="space-y-1">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="link-line inline-flex min-h-11 min-w-11 items-center py-1.5 text-paper/85 hover:text-lime">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="t-eyebrow mb-4 text-paper/50">Portfolio</h2>
              <ul className="space-y-1">
                {projects.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/work/${p.slug}`} className="link-line inline-flex min-h-11 min-w-11 items-center py-1.5 text-paper/85 hover:text-lime">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="t-eyebrow mb-4 text-paper/50">Social</h2>
              <ul className="space-y-2">
                {site.socials.map((s) =>
                  s.href ? (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        className="link-line inline-flex min-h-11 items-center gap-2 py-1.5 text-paper/85 hover:text-lime"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {s.label}
                        <Arrow direction="up-right" className="size-3.5" />
                      </a>
                    </li>
                  ) : (
                    <li key={s.label} className="py-1.5 text-paper/65">
                      <span className="block">{s.label}</span>
                      <span className="text-xs italic text-paper/45">(link to be added)</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-paper/15 pt-8 text-sm text-paper/60 md:mt-24 md:flex-row md:items-center md:justify-between">
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
          <p className="t-hand text-xl text-lime">
            Jot it · Join it · Got it
          </p>
        </div>
      </div>
    </footer>
  );
}
