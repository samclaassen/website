#!/usr/bin/env node
/**
 * Submit every URL in the sitemap to IndexNow, which feeds Bing, Yandex, Naver, Seznam
 * and others (and, through Bing, Copilot and ChatGPT search). Google does not use IndexNow.
 *
 *   node scripts/indexnow.mjs                 # all sitemap URLs
 *   node scripts/indexnow.mjs https://... ... # specific URLs in addition to the sitemap
 *
 * The key must match the file at public/<key>.txt. Override with INDEXNOW_KEY / SITE_URL.
 * Runs automatically after each production deployment via .github/workflows/indexnow.yml.
 */

const SITE = (process.env.SITE_URL || "https://www.legacyhomeware.com").replace(/\/$/, "");
const KEY = process.env.INDEXNOW_KEY || "a7c3e9f1b2d4486c9e0f5a1b3c7d9e21";
const host = new URL(SITE).host;

const sitemapRes = await fetch(`${SITE}/sitemap.xml`);
if (!sitemapRes.ok) {
  console.error(`Could not fetch ${SITE}/sitemap.xml: ${sitemapRes.status}`);
  process.exit(1);
}
const sitemap = await sitemapRes.text();
const fromSitemap = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
const urlList = [...new Set([...fromSitemap, ...process.argv.slice(2)])].filter((u) => u.startsWith(SITE));
if (urlList.length === 0) {
  console.error("No URLs found in the sitemap.");
  process.exit(1);
}

const keyRes = await fetch(`${SITE}/${KEY}.txt`);
if (!keyRes.ok || (await keyRes.text()).trim() !== KEY) {
  console.error(`Key file ${SITE}/${KEY}.txt is missing or does not contain the key.`);
  process.exit(1);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
});

console.log(`IndexNow: HTTP ${res.status} ${res.statusText} for ${urlList.length} URLs on ${host}`);
if (res.status !== 200 && res.status !== 202) {
  console.error(await res.text());
  process.exit(1);
}
