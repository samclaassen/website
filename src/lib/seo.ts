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
  ogImage = "/og-default.jpg",
  noIndex = false,
  keywords = [],
}: PageSeoOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = path === "" || path === "/" ? title : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
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
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
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
 * WebSite JSON-LD with a SearchAction pointing at the details search page.
 */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * ItemList JSON-LD for hub pages (style, element, combo pages).
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
 * JSON-LD for a single architectural detail entry: an Article about the
 * example, with the image's license and credit recorded as an ImageObject.
 */
export function entryJsonLd(entry: {
  slug: string;
  title: string;
  summary: string;
  styleName: string;
  elementName: string;
  imageUrl: string;
  credit: string;
  license: string;
  licenseUrl?: string;
  sourceUrl: string;
  dateDisplay?: string;
}) {
  const url = `${SITE_URL}/details/${entry.slug}`;
  const image: Record<string, unknown> = {
    "@type": "ImageObject",
    contentUrl: entry.imageUrl.startsWith("http") ? entry.imageUrl : `${SITE_URL}${entry.imageUrl}`,
    creditText: entry.credit,
    acquireLicensePage: entry.sourceUrl,
  };
  if (entry.licenseUrl) image.license = entry.licenseUrl;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entry.title,
    description: entry.summary,
    url,
    mainEntityOfPage: url,
    image,
    about: [entry.styleName, entry.elementName],
    isBasedOn: entry.sourceUrl,
    dateModified: "2026-10-15",
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };
}
