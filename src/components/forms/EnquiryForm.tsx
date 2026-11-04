"use client";

import Link from "next/link";
import { useId, useRef, useState, type FormEvent } from "react";
import {
  MESSAGE_MAX,
  enquiryFieldOrder,
  enquiryServiceOptions,
  timelineOptions,
  validateEnquiry,
  validateField,
  type EnquiryData,
  type EnquiryErrors,
  type EnquiryField,
} from "@/lib/enquiry";
import { Arrow } from "@/components/art/Motifs";

const initial: EnquiryData = {
  name: "",
  email: "",
  company: "",
  services: [],
  timeline: "",
  message: "",
  consent: false,
  website: "",
};

const fieldLabels: Record<EnquiryField, string> = {
  name: "Name",
  email: "Email",
  company: "Company",
  services: "Services",
  timeline: "Timeline",
  message: "Project details",
  consent: "Consent",
};

type Status = "idle" | "submitting" | "success" | "error";

export function EnquiryForm({ tone = "ivory" }: { tone?: "ivory" | "turmeric" }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const id = (f: string) => `${uid}-${f}`;
  const [data, setData] = useState<EnquiryData>(initial);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [touched, setTouched] = useState<Partial<Record<EnquiryField, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");
  const [showSummary, setShowSummary] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const update = <K extends keyof EnquiryData>(key: K, value: EnquiryData[K]) => {
    const next = { ...data, [key]: value };
    setData(next);
    // While typing: only clear/refresh errors that are already showing
    if (key !== "website" && errors[key as EnquiryField]) {
      setErrors((e) => ({ ...e, [key]: validateField(key as EnquiryField, next) }));
    }
  };

  const blur = (field: EnquiryField) => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors((e) => ({ ...e, [field]: validateField(field, data) }));
  };

  const toggleService = (value: string) => {
    const has = data.services.includes(value);
    const services = has ? data.services.filter((s) => s !== value) : [...data.services, value];
    const next = { ...data, services };
    setData(next);
    setTouched((t) => ({ ...t, services: true }));
    setErrors((e) => ({ ...e, services: validateField("services", next) }));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setServerError("");
    const errs = validateEnquiry(data);
    setErrors(errs);
    setTouched(Object.fromEntries(enquiryFieldOrder.map((f) => [f, true])));
    if (Object.keys(errs).length > 0) {
      setShowSummary(true);
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setShowSummary(false);
    setStatus("submitting");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; errors?: EnquiryErrors };
      if (!res.ok || !json.ok) {
        if (json.errors) {
          setErrors(json.errors);
          setShowSummary(true);
          requestAnimationFrame(() => summaryRef.current?.focus());
        }
        throw new Error(json.error ?? "Something went wrong. Please try again.");
      }
      setStatus("success");
      requestAnimationFrame(() => successRef.current?.focus());
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  const errorList = enquiryFieldOrder.filter((f) => errors[f]);
  const invalid = (f: EnquiryField) => Boolean(touched[f] && errors[f]);
  const describedBy = (f: EnquiryField, hint?: boolean) =>
    [hint ? id(`${f}-hint`) : null, invalid(f) ? id(`${f}-error`) : null].filter(Boolean).join(" ") || undefined;

  const toneClass = tone === "turmeric" ? "tone-turmeric" : "";

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className={`border border-ink/20 p-8 md:p-12 ${toneClass}`}
      >
        <p className="t-eyebrow">Enquiry received</p>
        <h3 className="t-h3 mt-4">Thank you, {data.name.trim().split(" ")[0]}.</h3>
        <p className="mt-4 max-w-md">
          Your project details are with us. We&apos;ll review them and reply to{" "}
          <strong className="font-medium">{data.email.trim()}</strong>.
        </p>
        <button
          type="button"
          className="link-line mt-8 font-display font-medium"
          onClick={() => {
            setData(initial);
            setTouched({});
            setErrors({});
            setStatus("idle");
          }}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const errorText = (f: EnquiryField) =>
    invalid(f) ? (
      <p id={id(`${f}-error`)} className="mt-2 flex items-start gap-2 text-sm font-medium text-maroon">
        <span aria-hidden="true" className="mt-[0.35em] inline-block size-2 shrink-0 rotate-45 bg-maroon" />
        {errors[f]}
      </p>
    ) : null;

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      action="/api/enquiry"
      method="post"
      aria-describedby={id("required-note")}
      className={`${toneClass}`}
    >
      {showSummary && errorList.length > 0 && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="mb-10 border-l-2 border-maroon bg-maroon/5 p-5 outline-none"
        >
          <p className="font-display font-semibold">
            Please check {errorList.length === 1 ? "one field" : `${errorList.length} fields`} before sending:
          </p>
          <ul className="mt-3 space-y-1 text-sm">
            {errorList.map((f) => (
              <li key={f}>
                <a
                  className="underline underline-offset-4"
                  href={`#${f === "services" ? id("services-0") : id(f)}`}
                  onClick={(ev) => {
                    ev.preventDefault();
                    document.getElementById(f === "services" ? id("services-0") : id(f))?.focus();
                  }}
                >
                  {fieldLabels[f]}: {errors[f]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <p id={id("required-note")} className="mb-8 text-sm opacity-70">
        Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
        <div>
          <label htmlFor={id("name")} className="t-eyebrow block">
            Your name <span aria-hidden="true">*</span>
          </label>
          <input
            id={id("name")}
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            className="field-input"
            value={data.name}
            aria-invalid={invalid("name") || undefined}
            aria-describedby={describedBy("name")}
            onChange={(e) => update("name", e.target.value)}
            onBlur={() => blur("name")}
            enterKeyHint="next"
          />
          {errorText("name")}
        </div>

        <div>
          <label htmlFor={id("email")} className="t-eyebrow block">
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id={id("email")}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            required
            maxLength={254}
            className="field-input"
            value={data.email}
            aria-invalid={invalid("email") || undefined}
            aria-describedby={describedBy("email")}
            onChange={(e) => update("email", e.target.value)}
            onBlur={() => blur("email")}
            enterKeyHint="next"
          />
          {errorText("email")}
        </div>

        <div className="md:col-span-2">
          <label htmlFor={id("company")} className="t-eyebrow block">
            Company or brand <span className="normal-case tracking-normal opacity-60">(optional)</span>
          </label>
          <input
            id={id("company")}
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={120}
            className="field-input"
            value={data.company}
            aria-invalid={invalid("company") || undefined}
            aria-describedby={describedBy("company")}
            onChange={(e) => update("company", e.target.value)}
            onBlur={() => blur("company")}
            enterKeyHint="next"
          />
          {errorText("company")}
        </div>

        <fieldset
          className="md:col-span-2"
          aria-describedby={describedBy("services", true)}
          aria-invalid={invalid("services") || undefined}
        >
          <legend className="t-eyebrow mb-1">
            What can we help with? <span aria-hidden="true">*</span>
          </legend>
          <p id={id("services-hint")} className="mb-4 text-sm opacity-70">
            Select all that apply.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {enquiryServiceOptions.map((opt, i) => (
              <label key={opt.value} className="relative cursor-pointer">
                <input
                  id={id(`services-${i}`)}
                  type="checkbox"
                  name="services"
                  value={opt.value}
                  checked={data.services.includes(opt.value)}
                  onChange={() => toggleService(opt.value)}
                  className="chip-input peer sr-only"
                />
                <span className="chip inline-flex min-h-11 items-center gap-2.5 border border-current/30 px-4 py-2 text-[0.95rem] transition-colors duration-300 hover:border-current">
                  <span aria-hidden="true" className="chip-mark inline-block size-2.5 rotate-45 border border-current transition-colors" />
                  {opt.label}
                </span>
              </label>
            ))}
          </div>
          {errorText("services")}
        </fieldset>

        <fieldset className="md:col-span-2">
          <legend className="t-eyebrow mb-4">
            Ideal timeline <span className="normal-case tracking-normal opacity-60">(optional)</span>
          </legend>
          <div className="flex flex-wrap gap-2.5">
            {timelineOptions.map((opt) => (
              <label key={opt.value} className="relative cursor-pointer">
                <input
                  type="radio"
                  name="timeline"
                  value={opt.value}
                  checked={data.timeline === opt.value}
                  onChange={() => update("timeline", opt.value)}
                  className="chip-input sr-only"
                />
                <span className="chip inline-flex min-h-11 items-center gap-2.5 border border-current/30 px-4 py-2 text-[0.95rem] transition-colors duration-300 hover:border-current">
                  <span aria-hidden="true" className="chip-mark inline-block size-2.5 rounded-full border border-current transition-colors" />
                  {opt.label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="md:col-span-2">
          <div className="flex items-baseline justify-between gap-4">
            <label htmlFor={id("message")} className="t-eyebrow block">
              Tell us about the project <span aria-hidden="true">*</span>
            </label>
            <span className="text-xs tabular-nums opacity-60" aria-hidden="true">
              {data.message.length}/{MESSAGE_MAX}
            </span>
          </div>
          <p id={id("message-hint")} className="mt-1 text-sm opacity-70">
            What you&apos;re building, where you are now, and what success would look like. A rough budget helps too.
          </p>
          <textarea
            id={id("message")}
            name="message"
            required
            rows={5}
            maxLength={MESSAGE_MAX}
            className="field-input"
            value={data.message}
            aria-invalid={invalid("message") || undefined}
            aria-describedby={describedBy("message", true)}
            onChange={(e) => update("message", e.target.value)}
            onBlur={() => blur("message")}
          />
          {errorText("message")}
        </div>

        {/* Honeypot — hidden from people and assistive tech */}
        <div aria-hidden="true" className="sr-only">
          <label htmlFor={id("website")}>Leave this field empty</label>
          <input
            id={id("website")}
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={data.website}
            onChange={(e) => update("website", e.target.value)}
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor={id("consent")} className="flex min-h-12 cursor-pointer items-start gap-3.5 py-2.5">
            <input
              id={id("consent")}
              name="consent"
              type="checkbox"
              required
              checked={data.consent}
              aria-invalid={invalid("consent") || undefined}
              aria-describedby={describedBy("consent")}
              onChange={(e) => {
                const next = { ...data, consent: e.target.checked };
                setData(next);
                setTouched((t) => ({ ...t, consent: true }));
                setErrors((er) => ({ ...er, consent: validateField("consent", next) }));
              }}
              className="mt-0.5 size-6 shrink-0 accent-ink"
            />
            <span className="text-sm leading-relaxed">
              I agree to jottitstudio using these details to respond to my enquiry, as described in the{" "}
              <Link href="/privacy" className="underline underline-offset-4">
                Privacy Policy
              </Link>
              . <span aria-hidden="true">*</span>
            </span>
          </label>
          {errorText("consent")}
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className={`group relative inline-flex min-h-14 w-full items-center justify-between gap-8 overflow-hidden px-7 font-display text-lg font-medium transition-colors duration-500 sm:w-auto ${
            tone === "turmeric"
              ? "bg-ink text-ivory hover:bg-ivory hover:text-ink"
              : "bg-ink text-ivory hover:bg-turmeric hover:text-ink"
          } disabled:cursor-wait disabled:opacity-70`}
        >
          <span>{status === "submitting" ? "Sending…" : "Send enquiry"}</span>
          <Arrow className="size-5 transition-transform duration-500 group-hover:translate-x-1" />
        </button>
        <p className="text-sm opacity-70">We usually reply within <span className="italic">[response time — to be confirmed]</span>.</p>
      </div>

      <div aria-live="polite" className="mt-4 min-h-6">
        {status === "error" && serverError && (
          <p className="flex items-start gap-2 font-medium text-maroon">
            <span aria-hidden="true" className="mt-[0.4em] inline-block size-2 shrink-0 rotate-45 bg-maroon" />
            {serverError}
          </p>
        )}
      </div>
    </form>
  );
}
