"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mainNav, site } from "@/content/site";
import { buttonClasses } from "@/components/ui/Button";
import { Arrow } from "@/components/art/Motifs";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`whitespace-nowrap font-display font-bold tracking-[-0.04em] ${className}`}>
      jottitstudio
      <span aria-hidden="true" className="ml-[0.08em] inline-block size-[0.32em] translate-y-[-0.02em] bg-turmeric" />
    </span>
  );
}

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
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu whenever the route changes (state adjusted during render)
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

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-turmeric focus:px-4 focus:py-2 focus:font-display"
      >
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled
            ? "border-b border-ink/10 bg-ivory/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="wrap flex h-[var(--header-h)] items-center justify-between gap-6">
          <Link href="/" aria-label={`${site.name} — home`} className="text-[1.45rem] leading-none">
            <Wordmark />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    className="link-line font-display text-[0.95rem] tracking-tight"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Link href="/contact" className={buttonClasses("solid", "min-h-11 gap-4! px-5!")}>
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
                <span className="h-[1.5px] w-full bg-ink" />
                <span className="h-[1.5px] w-2/3 self-end bg-ink" />
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
          <div className="wrap flex h-[var(--header-h)] shrink-0 items-center justify-between">
            <Link href="/" className="text-[1.45rem] leading-none" onClick={() => setOpen(false)}>
              <Wordmark />
            </Link>
            <button
              type="button"
              className="relative -mr-2 inline-flex size-12 items-center justify-center"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <span aria-hidden="true" className="relative block size-6">
                <span className="absolute left-0 top-1/2 h-[1.5px] w-full rotate-45 bg-ivory" />
                <span className="absolute left-0 top-1/2 h-[1.5px] w-full -rotate-45 bg-ivory" />
              </span>
            </button>
          </div>

          <nav aria-label="Mobile" className="wrap flex flex-1 flex-col justify-center overflow-y-auto py-8">
            <ul className="space-y-1">
              {mainNav.map((item, i) => (
                <li key={item.href} className="border-b border-ivory/10">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    className="group flex items-baseline justify-between py-3 font-display text-[clamp(2.4rem,11vw,4rem)] font-bold uppercase leading-none tracking-[-0.04em] aria-[current=page]:text-turmeric"
                  >
                    <span>{item.label}</span>
                    <span className="font-display text-xs font-medium tracking-[0.16em] text-ivory/50">
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
              className={buttonClasses("turmeric", "w-full")}
            >
              <span>Start a Project</span>
              <Arrow className="size-4" />
            </Link>
            <p lang="ta" className="tamil mt-6 text-sm text-ivory/50">
              வணக்கம் <span lang="en" className="font-sans">— hello, and welcome.</span>
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
}
