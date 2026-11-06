/**
 * Global site configuration for JOTTIT.
 * Anything wrapped in square brackets is a PLACEHOLDER awaiting real
 * studio contact information.
 */

export const site = {
  name: "JOTTIT",
  tagline: "THINK IT. JOT IT. MAKE IT MATTER.",
  coreMessage: "Every big idea starts with a little jot.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://jtt-xi.vercel.app",
  description:
    "JOTTIT is a creative and marketing studio that brings ideas to life through branding, design, content, performance marketing, video and digital experiences. Think It. Jot It. Make It Matter.",
  contact: {
    email: "[studio email — to be added]",
    phone: "[studio phone — to be added]",
    whatsapp: null as string | null,
    location: "[studio location — to be added]",
    hours: "[working hours — to be added]",
  },
  socials: [
    { label: "Instagram", href: null as string | null },
    { label: "LinkedIn", href: null as string | null },
    { label: "Behance", href: null as string | null },
    { label: "YouTube", href: null as string | null },
  ],
} as const;

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Contact", href: "/contact" },
] as const;

export const legalNav = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
] as const;
