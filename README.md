This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Architectural details archive (October 2026)

- `src/data/entries.json` — 200 entries (style, element, tier, text, image credit/license, source). Images for 161 entries are self-hosted in `public/images/details/`; the rest load from the Art Institute of Chicago and Library of Congress.
- `src/data/taxonomy.json`, `src/data/hubs.ts` — styles, elements and hub-page copy. `src/lib/pricing.ts` — published price ranges.
- Routes: `/search`, `/styles`, `/styles/[style]`, `/styles/[style]/[element]` (built at 3+ entries, indexed at 8+), `/elements`, `/elements/[element]`, `/details/[slug]`, `/custom`, `/request`, `/colorado`, `/colorado/custom-cabinet-cost`.
- The request form posts to `/api/request`, which forwards to `FORM_WEBHOOK_URL` or emails via Resend (see `.env.example`). Until one is configured, the form explains that online requests are not switched on yet and never shows a false success message.
