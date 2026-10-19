# Legacy Homeware

*Home items that become heirlooms.* A curated guide to new home items made the way they used to be,
checked against the five-test Heirloom Standard. Next.js (App Router) on Vercel.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # must pass with zero errors
npm run lint
```

## Where things live

- `src/data/pieces.ts`: the Wave 1 pieces (from the "Wave 1 Shortlist"), with Standard checks, price, retailer and affiliate status. Edit facts here.
- `src/lib/piece-types.ts`: types and labels. `src/lib/pieces.ts`: helpers.
- `src/lib/images.ts` + `src/components/media/`: credited-photo records and the typographic linen panel used until photo rights are cleared. To add a photo, set `photo` on a piece with `src`, `credit`, `sourceUrl`, `rightsBasis` and `dateCleared`.
- Routes: `/`, `/pieces`, `/pieces/[slug]`, `/standard`, `/about`, `/makers`, `/gifts`, `/care`, `/journal`, plus `/llms.txt`, `/sitemap.xml`, `/robots.txt`.
- `src/proxy.ts`: PromptWatch AI-crawler logging (needs `PROMPTWATCH_LOGS_API_KEY`).
