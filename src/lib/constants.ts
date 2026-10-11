// Site-wide constants
export const SITE_NAME = "Legacy Homeware";
export const SITE_DESCRIPTION =
  "Quality homeware and home goods — timeless pieces for modern living.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://legacyhomeware.com";

export const SOCIAL = {
  twitter: "", // @handle without the @
  linkedin: "",
  github: "",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  // Add more pages here as you build them
] as const;
