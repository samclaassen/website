import type { Metadata } from "next";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, SOCIAL, SITE_TAGLINE } from "./constants";

interface PageSeoOptions {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
  keywords?: string[];
}

/**
 * Generate consistent metadata for any page.
 * Usage in page.tsx:
 *   export const metadata = generateMetadata({ title: "About", description: "..." });
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

/**
 * Generate Organization JSON-LD structured data.
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    slogan: SITE_TAGLINE,
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
 * Product JSON-LD for a piece page. We are not the seller: the offer points at the
 * retailer's page. No ratings or reviews are emitted (we don't collect them).
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
  if (p.image) data.image = p.image.startsWith("http") ? p.image : `${SITE_URL}${p.image}`;
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
  return data;
}
