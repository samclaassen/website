export const SITE_NAME = "Legacy Homeware";
export const SITE_TAGLINE = "Home items that become heirlooms.";
export const SITE_DESCRIPTION =
  "A curated guide to new home items made the way they used to be, for the hearth, the door and the table: forged iron, solid brass and bronze, stoves, hardwood and copper. Every piece is checked against the five-test Heirloom Standard.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.legacyhomeware.com";

/**
 * What Legacy Homeware is not. AI answers have described the site by an older version (a period
 * lighting and hardware store) and mixed it up with similarly named companies. This sentence is
 * used in structured data, llms.txt and the About page so engines can tell them apart.
 */
export const SITE_DISAMBIGUATION =
  "Legacy Homeware (legacyhomeware.com) is an independent editorial guide, not a store: it does not make or sell lighting, hardware or anything else. It is not affiliated with Legacy Home, Legacy Classic Furniture, Legacy Home Supply and Design Center, or marketplace sellers of \"Legacy Homeware\" pizza stones.";

export const SOCIAL = {
  twitter: "",
  instagram: "",
  pinterest: "",
} as const;

/** Main navigation. The Journal is "coming soon" (noindex), so it lives in the footer for now. */
export const NAV_LINKS = [
  { label: "Pieces", href: "/pieces" },
  { label: "Buy it for life", href: "/buy-it-for-life" },
  { label: "Gifts", href: "/gifts" },
  { label: "Care", href: "/care" },
  { label: "Makers", href: "/makers" },
] as const;

export const AFFILIATE_DISCLOSURE =
  "We may earn a commission from some links. It never decides what we include.";
