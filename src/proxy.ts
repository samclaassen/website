// PromptWatch crawler logs.
//
// When an AI crawler (GPTBot, ClaudeBot, PerplexityBot, ...) requests a page, this
// sends one log line to PromptWatch so the visit shows up under Analytics → Crawler
// Logs. Human visitors are never logged here, and every request continues normally.
//
// Setup: add PROMPTWATCH_LOGS_API_KEY (the Legacy Homeware project key from
// PromptWatch → Settings → API Keys) in Vercel → website → Settings → Environment
// Variables. Without the key this file does nothing.
//
// Limitation: Proxy runs before the page renders, so every logged visit is recorded
// with status 200 (PromptWatch won't see 404s or 403s from this source).

import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";

const AI_CRAWLER =
  /GPTBot|OAI-SearchBot|ChatGPT-User|OAI-AdsBot|ClaudeBot|Claude-User|Claude-SearchBot|claude-web|anthropic-ai|Google-Extended|Google-Agent|GoogleOther|Googlebot|PerplexityBot|Perplexity-User|cohere-ai|MistralAI|DeepSeekBot|GrokBot|xAI-Grok|Grok-DeepSearch|bingbot|Applebot|Amazonbot|Meta-ExternalAgent|meta-externalfetcher|Bytespider|CCBot|DuckAssistBot|YouBot|promptwatch/i;

const INGEST_URL = "https://logs.promptwatch.com/event";

function contentTypeFor(pathname: string): string {
  if (pathname.endsWith(".txt")) return "text/plain";
  if (pathname.endsWith(".xml")) return "application/xml";
  if (pathname.endsWith(".json")) return "application/json";
  return "text/html";
}

function clientIp(request: NextRequest): string | null {
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp;
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded ? forwarded.split(",")[0].trim() : null;
}

export function proxy(request: NextRequest, event: NextFetchEvent) {
  const userAgent = request.headers.get("user-agent") || "";
  const apiKey = process.env.PROMPTWATCH_LOGS_API_KEY;

  if (apiKey && AI_CRAWLER.test(userAgent)) {
    const url = request.nextUrl;
    const logEvent = {
      timestamp: new Date().toISOString(),
      status_code: 200,
      request_method: request.method,
      request_path: url.pathname,
      query_string: url.search ? url.search.slice(1) : null,
      content_type: contentTypeFor(url.pathname),
      client_ip: clientIp(request),
      hostname: url.hostname,
      user_agent: userAgent,
      referrer: request.headers.get("referer"),
    };

    event.waitUntil(
      fetch(INGEST_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-API-Key": apiKey },
        body: JSON.stringify([logEvent]),
      }).catch(() => undefined),
    );
  }

  return NextResponse.next();
}

export const config = {
  // Skip API routes, Next.js build assets and images. robots.txt and sitemap.xml
  // stay included because AI crawlers fetching them is useful to see.
  matcher: [
    "/((?!api/|_next/static|_next/image|images/|favicon.ico|.*\\.(?:css|js|map|png|jpe?g|gif|svg|webp|avif|ico|woff2?|ttf)$).*)",
  ],
};
