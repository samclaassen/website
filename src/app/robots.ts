import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

/**
 * Everyone is welcome, including AI search and answer engines: the site exists to be
 * cited. The explicit list below is a statement of intent for crawlers that look for
 * their own name; the wildcard rule already allows them.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
  "Bingbot",
  "DuckAssistBot",
  "meta-externalagent",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: AI_CRAWLERS,
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
