import type { Metadata } from "next";
import { SITE_NAME, SITE_DESCRIPTION, SITE_DISAMBIGUATION, SITE_URL, SOCIAL, SITE_TAGLINE } from "./constants";

interface PageSeoOptions {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
  keywords?: string[];
}

const abs = (src: string) => (src.startsWith("http") ? src : `${SITE_URL}${src}`);

/**
 * Generate consistent metadata for any page.
 * Usage in page.tsx:
 *   export const metadata = generatePageMetadata({ title: "About", description: "..." });
 */
export function generatePageMetadata({
  title,
  description,
  path = "",
  ogImage,
  noIndex = false,
  keywords = [],
}: PageSeoOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = path === "" || path === "/" ? title : `${title} | ${SITE_NAME}`;

  return {
    title: { absolute: fullTitle },
    description,
    keywords,
    ...(noIndex && { robots: { index: false, follow: true } }),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      ...(ogImage ? { images: [{ url: ogImage, width: 1200, height: 630, alt: title }] } : {}),
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
      ...(SOCIAL.twitter ? { creator: `@${SOCIAL.twitter}` } : {}),
    },
  };
}

/** One stable identity for the site's Organization, referenced from every other block. */
export const ORG_ID = `${SITE_URL}/#organization`;

const ORG = { "@type": "Organization", "@id": ORG_ID, name: SITE_NAME, url: SITE_URL } as const;

/**
 * Generate Organization JSON-LD structured data. disambiguatingDescription separates Legacy
 * Homeware from similarly named companies and from the site's earlier positioning.
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    disambiguatingDescription: SITE_DISAMBIGUATION,
    slogan: SITE_TAGLINE,
    publishingPrinciples: `${SITE_URL}/standard`,
    knowsAbout: [
      "Heirloom-quality home goods",
      "Cast iron and carbon steel cookware",
      "Enameled cast iron",
      "Tin-lined copper cookware",
      "Solid brass and bronze hardware",
      "Forged iron hardware and fire tools",
      "Wood stoves",
      "Hardwood cutting boards",
    ],
  };
}

/**
 * Generate WebPage JSON-LD structured data.
 */
export function webPageJsonLd({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${SITE_URL}${path}`,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
  };
}

/**
 * Generate FAQ JSON-LD structured data.
 */
export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate BreadcrumbList JSON-LD structured data.
 */
export function breadcrumbJsonLd(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

/**
 * WebSite JSON-LD with a SearchAction pointing at the pieces filter.
 */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/pieces?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * ItemList JSON-LD for listing pages.
 */
export function itemListJsonLd(name: string, items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: `${SITE_URL}${item.path}`,
    })),
  };
}

/**
 * Article JSON-LD for a guide. The author and publisher are the site itself.
 */
export function articleJsonLd({
  title,
  description,
  path,
  image,
  datePublished,
  dateModified,
  wordCount,
  about,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  datePublished: string;
  dateModified: string;
  wordCount?: number;
  about?: string;
}) {
  const url = `${SITE_URL}${path}`;
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished,
    dateModified,
    author: ORG,
    publisher: ORG,
    isAccessibleForFree: true,
    inLanguage: "en-US",
  };
  if (image) data.image = abs(image);
  if (wordCount) data.wordCount = wordCount;
  if (about) data.about = { "@type": "Thing", name: about };
  return data;
}

/**
 * HowTo JSON-LD for a guide's step-by-step method. Steps link to their anchors on the page.
 */
export function howToJsonLd({
  name,
  description,
  path,
  totalTime,
  supplies,
  tools,
  steps,
}: {
  name: string;
  description: string;
  path: string;
  totalTime?: string;
  supplies?: string[];
  tools?: string[];
  steps: { name: string; text: string }[];
}) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      url: `${SITE_URL}${path}#step-${i + 1}`,
    })),
  };
  if (totalTime) data.totalTime = totalTime;
  if (supplies?.length) data.supply = supplies.map((s) => ({ "@type": "HowToSupply", name: s }));
  if (tools?.length) data.tool = tools.map((t) => ({ "@type": "HowToTool", name: t }));
  return data;
}

const noteList = (items: string[]) => ({
  "@type": "ItemList",
  itemListElement: items.map((n, i) => ({ "@type": "ListItem", position: i + 1, name: n })),
});

/**
 * Product JSON-LD for a piece page. We are not the seller: the offer points at the
 * retailer's page. No ratings are emitted (we don't collect them). When `review` is
 * given, the Heirloom Standard checks are emitted as an editorial review with pros
 * (tests passed) and cons (partial tests and "worth knowing" notes), which is what
 * the piece page shows.
 */
export function productJsonLd(p: {
  slug: string;
  name: string;
  maker: string;
  material: string;
  category: string;
  description: string;
  productUrl: string;
  retailer: string;
  price: { currency: string; low: number; high?: number; open: boolean } | null;
  priceChecked: string;
  image?: string;
  review?: { positives: string[]; negatives: string[] };
}) {
  const url = `${SITE_URL}/pieces/${p.slug}`;
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    url,
    brand: { "@type": "Brand", name: p.maker },
    material: p.material,
    category: p.category,
  };
  if (p.image) data.image = abs(p.image);
  if (p.price) {
    const seller = { "@type": "Organization", name: p.retailer };
    data.offers =
      p.price.open || p.price.high
        ? {
            "@type": "AggregateOffer",
            priceCurrency: p.price.currency,
            lowPrice: p.price.low,
            ...(p.price.high ? { highPrice: p.price.high } : {}),
            offerCount: 1,
            url: p.productUrl,
            seller,
          }
        : {
            "@type": "Offer",
            priceCurrency: p.price.currency,
            price: p.price.low,
            url: p.productUrl,
            seller,
          };
  }
  if (p.review && p.review.positives.length + p.review.negatives.length >= 2) {
    data.review = {
      "@type": "Review",
      name: `${p.name} against the Heirloom Standard`,
      author: ORG,
      datePublished: p.priceChecked,
      positiveNotes: noteList(p.review.positives),
      ...(p.review.negatives.length ? { negativeNotes: noteList(p.review.negatives) } : {}),
    };
  }
  return data;
}
