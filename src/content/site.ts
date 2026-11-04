/**
 * Global site configuration.
 * Anything wrapped in square brackets is a PLACEHOLDER awaiting real
 * information from jottitstudio. Search the codebase for "PLACEHOLDER".
 */

export const site = {
  name: "jottitstudio",
  // PLACEHOLDER: replace with the production domain before launch.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://jtt-xi.vercel.app",
  description:
    "jottitstudio is a full-service creative and marketing studio helping businesses build distinctive brands, attract the right customers and grow — bringing branding, social media, content, performance marketing, film, photography and web development together under one roof.",
  contact: {
    // PLACEHOLDER: real contact details have not been provided.
    email: "[studio email — to be added]",
    phone: "[studio phone — to be added]",
    location: "[studio location — to be added]",
    hours: "[working hours — to be added]",
  },
  socials: [
    // PLACEHOLDER: add real profile URLs. `href: null` renders as a placeholder.
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
