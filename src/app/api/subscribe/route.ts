import { addSubscriber, EMAIL_RE, newsletterConfigured } from "@/lib/newsletter";

/**
 * POST /api/subscribe
 * Body (JSON or form): { email, source?, company? }
 * "company" is a honeypot: humans never see it, so a filled value is a bot and gets a
 * quiet "ok" without being stored.
 */
export async function POST(request: Request) {
  let email = "";
  let source = "";
  let company = "";

  const type = request.headers.get("content-type") || "";
  if (type.includes("application/json")) {
    const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;
    email = String(body.email ?? "");
    source = String(body.source ?? "");
    company = String(body.company ?? "");
  } else {
    const form = await request.formData().catch(() => null);
    email = String(form?.get("email") ?? "");
    source = String(form?.get("source") ?? "");
    company = String(form?.get("company") ?? "");
  }

  email = email.trim().toLowerCase();
  source = source.trim().slice(0, 120) || "site";

  const headers = { "Cache-Control": "no-store" };

  if (company) return Response.json({ ok: true }, { headers });
  if (email.length > 254 || !EMAIL_RE.test(email)) {
    return Response.json({ ok: false, message: "That doesn't look like an email address." }, { status: 400, headers });
  }
  if (!newsletterConfigured()) {
    return Response.json({ ok: false, message: "Signups aren't open yet." }, { status: 503, headers });
  }

  const result = await addSubscriber(email, source);
  if (result.ok) return Response.json({ ok: true }, { headers });
  return Response.json({ ok: false, message: result.message }, { status: result.status, headers });
}
