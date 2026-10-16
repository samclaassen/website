"use client";

import { useState } from "react";

interface Option {
  slug: string;
  name: string;
}

interface Props {
  styles: Option[];
  elements: Option[];
  defaults: { entry?: string; entryTitle?: string; style?: string; element?: string };
  contactEmail?: string;
}

type Status = "idle" | "sending" | "sent" | "not_configured" | "error";

const BUDGETS = ["Under $2,000", "$2,000–$5,000", "$5,000–$15,000", "$15,000–$40,000", "$40,000+", "Not sure yet"];
const TIMELINES = ["As soon as possible", "1–3 months", "3–6 months", "6+ months", "Just exploring"];

export function RequestForm({ styles, elements, defaults, contactEmail }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = new FormData(e.currentTarget);
    const body = Object.fromEntries(form.entries());
    try {
      const r = await fetch("/api/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const json = await r.json().catch(() => ({}));
      if (r.ok && json.ok) {
        setStatus("sent");
        return;
      }
      if (json.error === "not_configured") {
        setStatus("not_configured");
        return;
      }
      if (json.error === "missing_fields") {
        setStatus("idle");
        setError("Please add your name, a valid email and your location.");
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-border bg-cream-dark/60 p-10">
        <p className="font-serif text-3xl font-semibold text-stone mb-3">Thank you, your request was received</p>
        <p className="text-muted leading-[1.8]">
          We will reply by email, usually within two business days, with questions or a first idea of design and price.
        </p>
      </div>
    );
  }

  const input = "w-full bg-white border border-border px-4 py-3 text-[15px] text-stone focus:border-stone focus:outline-none";
  const label = "block text-[13px] text-muted mb-2";

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6" noValidate>
      {defaults.entry && (
        <div className="md:col-span-2 border border-border bg-cream-dark/50 p-4 text-[14px] text-stone">
          Starting from: <strong className="font-semibold">{defaults.entryTitle ?? defaults.entry}</strong>
          <input type="hidden" name="entry" value={defaults.entry} />
        </div>
      )}

      <div>
        <label htmlFor="name" className={label}>Name *</label>
        <input id="name" name="name" required autoComplete="name" className={input} />
      </div>
      <div>
        <label htmlFor="email" className={label}>Email *</label>
        <input id="email" name="email" type="email" required autoComplete="email" className={input} />
      </div>
      <div>
        <label htmlFor="phone" className={label}>Phone</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={input} />
      </div>
      <div>
        <label htmlFor="location" className={label}>City and state, or ZIP code *</label>
        <input id="location" name="location" required autoComplete="postal-code" className={input} placeholder="e.g. Denver, CO" />
      </div>
      <div>
        <label htmlFor="element" className={label}>What would you like made?</label>
        <select id="element" name="element" defaultValue={defaults.element ?? ""} className={input}>
          <option value="">Choose an element</option>
          {elements.map((o) => (
            <option key={o.slug} value={o.slug}>{o.name}</option>
          ))}
          <option value="other">Something else</option>
        </select>
      </div>
      <div>
        <label htmlFor="style" className={label}>Style</label>
        <select id="style" name="style" defaultValue={defaults.style ?? ""} className={input}>
          <option value="">Choose a style</option>
          {styles.map((o) => (
            <option key={o.slug} value={o.slug}>{o.name}</option>
          ))}
          <option value="not-sure">Not sure</option>
        </select>
      </div>
      <div className="md:col-span-2">
        <label htmlFor="dimensions" className={label}>Approximate size</label>
        <input id="dimensions" name="dimensions" className={input} placeholder="e.g. 36-inch range, 9-foot wall, 42 x 60 inch fireplace opening" />
      </div>
      <div>
        <label htmlFor="budget" className={label}>Budget</label>
        <select id="budget" name="budget" defaultValue="" className={input}>
          <option value="">Choose a range</option>
          {BUDGETS.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="timeline" className={label}>Timeline</label>
        <select id="timeline" name="timeline" defaultValue="" className={input}>
          <option value="">Choose a timeline</option>
          {TIMELINES.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>
      <div className="md:col-span-2">
        <label htmlFor="message" className={label}>Tell us about the project</label>
        <textarea id="message" name="message" rows={6} className={input} placeholder="The room, the house, what you love about the reference, and anything you already know about materials or finish." />
      </div>
      {/* Honeypot for bots */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="md:col-span-2 flex flex-col gap-4">
        {error && <p className="text-[14px] text-red-700">{error}</p>}
        {status === "not_configured" && (
          <p className="text-[14px] text-stone border border-border p-4 bg-cream-dark/60">
            Online requests are not switched on yet, so this form could not be sent.
            {contactEmail ? (
              <>
                {" "}Please email us at{" "}
                <a href={`mailto:${contactEmail}`} className="underline">{contactEmail}</a> instead.
              </>
            ) : (
              " Please check back soon."
            )}
          </p>
        )}
        {status === "error" && (
          <p className="text-[14px] text-red-700">Something went wrong and your request was not sent. Please try again.</p>
        )}
        <button type="submit" disabled={status === "sending"} className="cta-button text-stone self-start disabled:opacity-50">
          {status === "sending" ? "Sending…" : "Send request"} <span aria-hidden="true">→</span>
        </button>
        <p className="text-[12px] text-muted">We only use your details to reply about your project.</p>
      </div>
    </form>
  );
}
