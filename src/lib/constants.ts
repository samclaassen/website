export const SITE_NAME = "Legacy Homeware";
export const SITE_TAGLINE = "Home items that become heirlooms.";
export const SITE_DESCRIPTION =
  "A curated guide to new home items made the way they used to be: solid cast iron, solid brass and bronze, forged iron, tinned copper and hardwood. Every piece is checked against the five-test Heirloom Standard.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.legacyhomeware.com";

export const SOCIAL = {
  twitter: "",
  instagram: "",
  pinterest: "",
} as const;

export const NAV_LINKS = [
  { label: "Pieces", href: "/pieces" },
  { label: "Makers", href: "/makers" },
  { label: "Care", href: "/care" },
  { label: "Gifts", href: "/gifts" },
  { label: "Journal", href: "/journal" },
] as const;

export const AFFILIATE_DISCLOSURE =
  "We may earn a commission from some links. It never decides what we include.";
