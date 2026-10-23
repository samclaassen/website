/**
 * Newsletter signups ("The keeping list").
 *
 * The form only renders when a provider is configured, so the site never shows a signup
 * that goes nowhere. Configure exactly one of these in Vercel → Environment Variables
 * (and redeploy; static pages read the variables at build time):
 *
 * - BUTTONDOWN_API_KEY                       Buttondown (api.buttondown.com)
 * - RESEND_API_KEY + RESEND_AUDIENCE_ID      Resend Audiences
 * - NEWSLETTER_WEBHOOK_URL (+ _SECRET)       Any endpoint that accepts a JSON POST
 *                                            {email, source, site, subscribedAt}
 *
 * Server-only: never import this from a client component.
 */

export type NewsletterProvider =
  | { kind: "buttondown"; apiKey: string }
  | { kind: "resend"; apiKey: string; audienceId: string }
  | { kind: "webhook"; url: string; secret?: string };

export function newsletterProvider(): NewsletterProvider | null {
  const buttondown = process.env.BUTTONDOWN_API_KEY;
  if (buttondown) return { kind: "buttondown", apiKey: buttondown };
  const resend = process.env.RESEND_API_KEY;
  const audience = process.env.RESEND_AUDIENCE_ID;
  if (resend && audience) return { kind: "resend", apiKey: resend, audienceId: audience };
  const webhook = process.env.NEWSLETTER_WEBHOOK_URL;
  if (webhook) return { kind: "webhook", url: webhook, secret: process.env.NEWSLETTER_WEBHOOK_SECRET };
  return null;
}

export const newsletterConfigured = () => newsletterProvider() !== null;

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export type SubscribeResult = { ok: true } | { ok: false; status: number; message: string };

const FAILED: SubscribeResult = {
  ok: false,
  status: 502,
  message: "We couldn't save your address just now. Please try again in a minute.",
};

export async function addSubscriber(email: string, source: string): Promise<SubscribeResult> {
  const provider = newsletterProvider();
  if (!provider) return { ok: false, status: 503, message: "Signups aren't open yet." };

  const signal = AbortSignal.timeout(8000);
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://www.legacyhomeware.com";

  try {
    if (provider.kind === "buttondown") {
      const res = await fetch("https://api.buttondown.com/v1/subscribers", {
        method: "POST",
        headers: { Authorization: `Token ${provider.apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({ email_address: email, tags: [source], metadata: { source } }),
        signal,
      });
      if (res.ok) return { ok: true };
      const text = await res.text();
      // An address that is already on the list is a success from the reader's point of view.
      if ((res.status === 400 || res.status === 409) && /already/i.test(text)) return { ok: true };
      return FAILED;
    }

    if (provider.kind === "resend") {
      const res = await fetch(`https://api.resend.com/audiences/${provider.audienceId}/contacts`, {
        method: "POST",
        headers: { Authorization: `Bearer ${provider.apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({ email, unsubscribed: false }),
        signal,
      });
      if (res.ok) return { ok: true };
      const text = await res.text();
      if ((res.status === 400 || res.status === 409) && /already|exists/i.test(text)) return { ok: true };
      return FAILED;
    }

    const res = await fetch(provider.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(provider.secret ? { "X-Newsletter-Secret": provider.secret } : {}),
      },
      body: JSON.stringify({ email, source, site, subscribedAt: new Date().toISOString() }),
      signal,
    });
    return res.ok ? { ok: true } : FAILED;
  } catch {
    return FAILED;
  }
}
