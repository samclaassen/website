// Site-wide constants — update these once your domain is ready
export const SITE_NAME = "Website";
export const SITE_DESCRIPTION =
  "Your site description — update this with your actual value proposition.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

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
