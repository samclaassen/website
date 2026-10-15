import { NextResponse } from "next/server";

/**
 * Receives custom-work requests and forwards them to a delivery channel.
 *
 * Configure ONE of these in the deployment environment:
 *   FORM_WEBHOOK_URL          — any endpoint that accepts a JSON POST (Formspree,
 *                               Zapier, Make, Slack workflow, CRM webhook…)
 *   RESEND_API_KEY + LEAD_TO_EMAIL (+ optional LEAD_FROM_EMAIL) — sends an email via Resend
 *
 * If neither is configured the route returns 503 so the form never shows a
 * success message for a request that was not delivered.
 */

const FIELDS = ["name", "email", "phone", "location", "element", "style", "entry", "dimensions", "budget", "timeline", "message"] as const;

function clean(v: unknown, max = 2000) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields.
  if (clean(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const data: Record<string, string> = {};
  for (const f of FIELDS) data[f] = clean(body[f], f === "message" ? 5000 : 300);

  if (!data.name || !data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || !data.location) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const submittedAt = new Date().toISOString();
  const payload = { ...data, submittedAt, source: "legacyhomeware.com/request" };
  const lines = FIELDS.filter((f) => data[f]).map((f) => `${f}: ${data[f]}`);

  try {
    if (process.env.FORM_WEBHOOK_URL) {
      const r = await fetch(process.env.FORM_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!r.ok) throw new Error(`webhook ${r.status}`);
      return NextResponse.json({ ok: true });
    }

    if (process.env.RESEND_API_KEY && process.env.LEAD_TO_EMAIL) {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.LEAD_FROM_EMAIL || "Legacy Homeware <onboarding@resend.dev>",
          to: [process.env.LEAD_TO_EMAIL],
          reply_to: data.email,
          subject: `Custom request: ${data.element || "project"} — ${data.name}`,
          text: `${lines.join("\n")}\nsubmitted: ${submittedAt}`,
        }),
      });
      if (!r.ok) throw new Error(`resend ${r.status}`);
      return NextResponse.json({ ok: true });
    }
  } catch (err) {
    console.error("request delivery failed", err);
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
}
