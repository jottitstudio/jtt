import { NextResponse } from "next/server";
import { parseEnquiry, validateEnquiry } from "@/lib/enquiry";

/**
 * POST /api/enquiry
 *
 * Validates the enquiry server-side. Delivery is intentionally left as an
 * integration point: set ENQUIRY_WEBHOOK_URL (e.g. a Slack/Zapier/Make
 * webhook, or your own email service endpoint) to forward submissions.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const data = parseEnquiry(body);

  // Honeypot: silently accept bot submissions without processing them.
  if (data.website) return NextResponse.json({ ok: true });

  const errors = validateEnquiry(data);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const payload = {
    name: data.name.trim(),
    email: data.email.trim(),
    company: data.company.trim(),
    services: data.services,
    timeline: data.timeline,
    message: data.message.trim(),
    receivedAt: new Date().toISOString(),
  };

  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (err) {
      console.error("[enquiry] delivery failed", err);
      return NextResponse.json(
        { ok: false, error: "We couldn't send your enquiry just now. Please try again shortly." },
        { status: 502 },
      );
    }
  } else if (process.env.NODE_ENV !== "production") {
    console.info("[enquiry] received (no ENQUIRY_WEBHOOK_URL configured):", payload);
  } else {
    console.error("[enquiry] ENQUIRY_WEBHOOK_URL is not configured — submission not delivered.");
    return NextResponse.json(
      { ok: false, error: "Our enquiry form isn't connected yet. Please contact the studio directly." },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}
