import type { Metadata } from "next";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, SOCIAL } from "./constants";

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
  ogImage = "/og-default.png",
  noIndex = false,
  keywords = [],
}: PageSeoOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = path === "" || path === "/" ? title : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    keywords,
    ...(noIndex && { robots: { index: false, follow: false } }),
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
    // Add logo, sameAs (social links), contactPoint, etc. as needed
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
