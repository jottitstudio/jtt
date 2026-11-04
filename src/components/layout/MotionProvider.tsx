"use client";

import { MotionConfig } from "motion/react";
import { useSyncExternalStore, type ReactNode } from "react";

/** Motion honours the OS "reduce motion" setting for transform animations site-wide. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

const query = "(prefers-reduced-motion: reduce)";

function subscribe(cb: () => void) {
  const mq = window.matchMedia(query);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

/** Hydration-safe reduced-motion flag (false on the server and during hydration). */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}
