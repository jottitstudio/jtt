"use client";

import Lenis from "lenis";
import { useEffect } from "react";

/** Gentle smooth scrolling. Disabled entirely for reduced-motion users. */
export function SmoothScroll() {
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const lenis = new Lenis({ duration: 1.1, anchors: { offset: -88 }, autoRaf: true });
    return () => lenis.destroy();
  }, []);
  return null;
}
