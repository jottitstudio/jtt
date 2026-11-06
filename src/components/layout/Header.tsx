"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mainNav, site } from "@/content/site";
import { buttonClasses } from "@/components/ui/Button";
import { Arrow } from "@/components/art/Motifs";
import { Logo, Wordmark } from "./Logo";

export { Wordmark };

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu whenever the route changes
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      document.documentElement.style.overflow = "hidden";
    } else if (!open && dialog.open) {
      dialog.close();
    }
    if (!open) document.documentElement.style.overflow = "";
  }, [open]);

  // On the homepage top (purple hero), use crisp white text & logo until scrolled
  const onPurpleTop = pathname === "/" && !scrolled;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-lime focus:px-4 focus:py-2 focus:font-display focus:font-bold focus:text-ink"
      >
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,color,backdrop-filter] duration-500 ${
          scrolled
            ? "border-b border-ink/15 bg-paper/92 text-ink backdrop-blur-md"
            : onPurpleTop
              ? "on-purple border-b border-paper/15 bg-purple/80 text-paper backdrop-blur-sm"
              : "border-b border-ink/10 bg-paper/80 text-ink backdrop-blur-sm"
        }`}
      >
        <div className="wrap flex h-[var(--header-h)] items-center justify-between gap-6">
          <Link href="/" aria-label={`${site.name} — home`} className="inline-flex min-h-11 items-center py-2">
            <Logo tone={onPurpleTop ? "white" : "purple"} svgClassName="h-8 w-auto sm:h-9" />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    className="link-line inline-flex min-h-11 items-center font-display text-[0.9rem] font-semibold uppercase tracking-[0.06em]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Link
                href="/contact"
                className={buttonClasses(onPurpleTop ? "lime" : "purple", "min-h-11 gap-4! px-5! py-2.5!")}
              >
                <span>Start a Project</span>
                <Arrow className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            </div>
            <button
              ref={triggerRef}
              type="button"
              className="relative -mr-2 inline-flex size-12 items-center justify-center lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
            >
              <span aria-hidden="true" className="flex w-7 flex-col gap-[7px]">
                <span className="h-[2px] w-full bg-current" />
                <span className="h-[2px] w-2/3 self-end bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <dialog
        id="mobile-menu"
        ref={dialogRef}
        className="menu-dialog on-dark lg:hidden"
        data-lenis-prevent=""
        aria-label="Site menu"
        onClose={() => {
          setOpen(false);
          triggerRef.current?.focus();
        }}
        onCancel={() => setOpen(false)}
      >
        <div className="flex h-full flex-col">
          <div className="wrap flex h-[var(--header-h)] shrink-0 items-center justify-between border-b border-paper/15">
            <Link
              href="/"
              aria-label={`${site.name} — home`}
              className="inline-flex min-h-11 items-center py-2"
              onClick={() => setOpen(false)}
            >
              <Logo tone="white" svgClassName="h-8 w-auto sm:h-9" />
            </Link>
            <button
              type="button"
              className="relative -mr-2 inline-flex size-12 items-center justify-center text-paper"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <span aria-hidden="true" className="relative block size-6">
                <span className="absolute left-0 top-1/2 h-[2px] w-full rotate-45 bg-paper" />
                <span className="absolute left-0 top-1/2 h-[2px] w-full -rotate-45 bg-paper" />
              </span>
            </button>
          </div>

          <nav aria-label="Mobile" className="wrap flex flex-1 flex-col justify-center overflow-y-auto py-8">
            <ul className="space-y-1">
              {mainNav.map((item, i) => (
                <li key={item.href} className="border-b border-paper/15">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    className="group flex items-baseline justify-between py-3 font-display text-[clamp(2.25rem,10.5vw,3.8rem)] font-bold uppercase leading-none tracking-[-0.04em] text-paper aria-[current=page]:text-lime"
                  >
                    <span>{item.label}</span>
                    <span className="font-display text-xs font-medium tracking-[0.16em] text-paper/60">
                      0{i + 1}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="wrap shrink-0 pb-8">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={buttonClasses("lime", "w-full")}
            >
              <span>Start a Project</span>
              <Arrow className="size-4" />
            </Link>
            <p className="mt-5 font-display text-xs font-bold uppercase tracking-[0.18em] text-paper/70">
              Think It. Jot It. Make It Matter.
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
}
