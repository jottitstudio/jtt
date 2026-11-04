"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/** Gentle smooth scrolling. Disabled entirely for reduced-motion users. */
export function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const lenis = new Lenis({ duration: 1.1, anchors: { offset: -88 }, autoRaf: true });
    lenisRef.current = lenis;
    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!window.location.hash) {
      lenisRef.current?.scrollTo(0, { immediate: true });
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
