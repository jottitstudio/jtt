/**
 * Shared enquiry validation — used by the client form for UX and by the
 * API route for security. Never trust the client alone.
 */
import type { ServiceSlug } from "./types";

export const enquiryServiceOptions: { value: ServiceSlug | "not-sure"; label: string }[] = [
  { value: "branding-identity", label: "Branding & Identity" },
  { value: "social-media-content", label: "Social Media & Content" },
  { value: "performance-marketing", label: "Performance Marketing" },
  { value: "video-photography", label: "Video & Photography" },
  { value: "website-development", label: "Website Development" },
  { value: "not-sure", label: "Not sure yet" },
];

export const timelineOptions = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-3-months", label: "In 1–3 months" },
  { value: "3-plus-months", label: "3+ months" },
  { value: "exploring", label: "Just exploring" },
] as const;

export interface EnquiryData {
  name: string;
  email: string;
  company: string;
  services: string[];
  timeline: string;
  message: string;
  consent: boolean;
  /** Honeypot — must stay empty */
  website: string;
}

export type EnquiryField = "name" | "email" | "company" | "services" | "timeline" | "message" | "consent";
export type EnquiryErrors = Partial<Record<EnquiryField, string>>;

export const MESSAGE_MIN = 30;
export const MESSAGE_MAX = 2000;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateField(field: EnquiryField, data: EnquiryData): string | undefined {
  switch (field) {
    case "name": {
      const v = data.name.trim();
      if (!v) return "Please tell us your name.";
      if (v.length < 2) return "Your name needs at least 2 characters.";
      if (v.length > 100) return "Please keep your name under 100 characters.";
      return;
    }
    case "email": {
      const v = data.email.trim();
      if (!v) return "Please enter your email address so we can reply.";
      if (!EMAIL_RE.test(v) || v.length > 254) return "That email doesn't look quite right — e.g. name@company.com.";
      return;
    }
    case "company":
      if (data.company.length > 120) return "Please keep this under 120 characters.";
      return;
    case "services": {
      if (data.services.length === 0) return "Choose at least one service — or “Not sure yet”.";
      const valid = enquiryServiceOptions.map((o) => o.value as string);
      if (data.services.some((s) => !valid.includes(s))) return "Please choose from the listed services.";
      return;
    }
    case "timeline": {
      if (data.timeline && !timelineOptions.some((t) => t.value === data.timeline)) return "Please choose a listed timeline.";
      return;
    }
    case "message": {
      const v = data.message.trim();
      if (!v) return "Tell us a little about your project.";
      if (v.length < MESSAGE_MIN) return `A few more details help — at least ${MESSAGE_MIN} characters (${v.length} so far).`;
      if (v.length > MESSAGE_MAX) return `Please keep your message under ${MESSAGE_MAX} characters.`;
      return;
    }
    case "consent":
      if (!data.consent) return "Please confirm we may use your details to respond.";
      return;
  }
}

export const enquiryFieldOrder: EnquiryField[] = ["name", "email", "company", "services", "timeline", "message", "consent"];

export function validateEnquiry(data: EnquiryData): EnquiryErrors {
  const errors: EnquiryErrors = {};
  for (const f of enquiryFieldOrder) {
    const e = validateField(f, data);
    if (e) errors[f] = e;
  }
  return errors;
}

export function parseEnquiry(input: unknown): EnquiryData {
  const o = (input && typeof input === "object" ? input : {}) as Record<string, unknown>;
  const str = (v: unknown) => (typeof v === "string" ? v : "");
  return {
    name: str(o.name),
    email: str(o.email),
    company: str(o.company),
    services: Array.isArray(o.services) ? o.services.filter((s): s is string => typeof s === "string").slice(0, 10) : [],
    timeline: str(o.timeline),
    message: str(o.message),
    consent: o.consent === true,
    website: str(o.website),
  };
}
