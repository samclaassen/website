# Legacy Homeware

*Home items that become heirlooms.* A curated guide to new home items made the way they used to be,
checked against the five-test Heirloom Standard. Next.js (App Router) on Vercel.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # must pass with zero errors
npm run lint
npm run indexnow   # tell Bing/Yandex the sitemap changed (runs automatically after deploys)
```

## Where things live

- `src/data/pieces.ts`: the Wave 1 pieces (from the "Wave 1 Shortlist"), with Standard checks, price, retailer and affiliate status. Edit facts here.
- `src/data/guides/`: the Care & Keeping guides, one file per material. Each is a `CareGuide` (see `types.ts`): the question, a short answer, sections, a step-by-step method, what not to do, questions, and sources we have checked. Text may contain `[label](/path)` links.
- `src/lib/piece-types.ts`: types and labels. `src/lib/pieces.ts`: piece helpers. `src/lib/guides.ts`: guide helpers (which guide applies to which piece, reading time, plain text).
- `src/lib/images.ts` + `src/components/media/`: credited-photo records and the typographic linen panel used until photo rights are cleared. To add a photo, set `photo` on a piece with `src`, `credit`, `sourceUrl`, `rightsBasis` and `dateCleared`.
- `src/lib/seo.ts`: metadata and JSON-LD (Organization, WebSite, Product with Standard pros/cons, Article, HowTo, FAQ, Breadcrumb, ItemList).
- Routes: `/`, `/pieces`, `/pieces/[slug]`, `/standard`, `/care`, `/care/[slug]`, `/about`, `/makers`, `/gifts`, `/journal`, plus `/llms.txt`, `/llms-full.txt`, `/sitemap.xml`, `/robots.txt`.
- `src/proxy.ts`: PromptWatch AI-crawler logging (needs `PROMPTWATCH_LOGS_API_KEY`).
- `src/lib/newsletter.ts` + `src/app/api/subscribe/route.ts`: the signup form ("The keeping list"). It renders only when a provider is configured, so there is never a form that goes nowhere.

## Getting found

- **Google**: verify the site in Search Console (HTML-tag method), put the token in `GOOGLE_SITE_VERIFICATION` in Vercel, redeploy, then submit `https://www.legacyhomeware.com/sitemap.xml`.
- **Bing** (also feeds Copilot and ChatGPT search): Bing Webmaster Tools can import the verified Google property in one click; otherwise use `BING_SITE_VERIFICATION`. `scripts/indexnow.mjs` pings IndexNow with every sitemap URL after each production deployment (`.github/workflows/indexnow.yml`); the key file is `public/a7c3e9f1b2d4486c9e0f5a1b3c7d9e21.txt`.
- **AI engines**: `robots.txt` allows all crawlers by name, `/llms.txt` is the short index and `/llms-full.txt` is the whole site as plain text. PromptWatch counts visits that arrive from AI tools (script in `layout.tsx`).

## Environment variables

See `.env.example`. Everything is optional; the site builds and runs with none of them set.
